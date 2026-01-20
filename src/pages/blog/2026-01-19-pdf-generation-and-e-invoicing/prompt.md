---
slug: pdf-generation-and-e-invoicing
date: 2026-01-19T00:00:00.000Z
title: PDF Generation and E-Invoicing with FlyingSaucer 10
author: Torsten Uhlmann
tags: []
categories: []
description: null
layout: ../../../layouts/blog-post.astro
---

Role: You are a senior software engineer writing a personal retrospective (devlog) about building an "Invoicer" application.

Tone:

Reflective & Honest: Focus on the "why" and the struggle. Do not sound like a marketing brochure.

No Fluff: Avoid words like "game-changer," "revolutionary," "seamless," or "delve."

Technical but Narrative: Explain the tech through the story of discovering it, not lecturing about it.

Write between 1800 and 2200 words.

The Story Arc (Context):

# PDF/A-1B creation

- Mustang e-invoice library for embedding XML requires PDF/A-1B containers to create combined PDF/XML that would be validated as PDF/A-3U (Mustang can ignore container errors, but the resulting document would not validate, even though it would contain the XML)

PDF/A-3U is the PDF standard for long time archival of documents. As such it has to look identical 

## things needed

- flying saucer 10, openpdf 3
- embed fonts into PDF
- embed ICC color profile
- set PDF standard to 1.4
- do not use XRef streams
- write proper meta data

# Analysis how its implemented

Based on my research of the codebase, here's a comprehensive breakdown of the steps required to make Flying Saucer generate PDF/A-1b compliant documents and feed them into the Mustang library for creating archival PDFs. I'll document the exact process as implemented in the current codebase.

## Code Changes for PDF/A-1b Generation with Flying Saucer

### 1. Configure PDF Writer for PDF/A-1b Conformance

The first step is to configure the `ITextRenderer` from Flying Saucer to produce PDF/A-1b compliant output:

```kotlin
val renderer = ITextRenderer()
// Set PDF/A-1b conformance level
renderer.pdfxConformance = PdfWriter.PDFA1B
// Disable compression (required for PDF/A compliance)
renderer.setCompressionEnabled(false)
```

### 2. Embed All Fonts Used in the Document

PDF/A-1b requires all fonts to be embedded in the PDF. The codebase extracts IBM Plex Sans font variants from resources and registers them with Flying Saucer's font resolver:

```kotlin
private fun embedFonts(renderer: ITextRenderer) {
  val fontsDir = ensureFontsExtracted()
  val fontResolver = renderer.fontResolver

  val fontFiles = fontsDir.listFiles { file ->
    file.isFile && file.extension == "ttf"
  } ?: emptyArray()

  for (fontFile in fontFiles) {
    fontResolver.addFont(fontFile.absolutePath, BaseFont.IDENTITY_H, BaseFont.EMBEDDED)
  }
}
```

The fonts extracted include:
- IBMPlexSans-Regular.ttf
- IBMPlexSans-Bold.ttf
- IBMPlexSans-Italic.ttf
- IBMPlexSans-BoldItalic.ttf
- And additional variants (ExtraLight, Light, Medium, SemiBold, Thin, etc.)

### 3. Set Output Intents with ICC Color Profile

Implement a custom `PDFCreationListener` that sets the required output intents using an sRGB ICC color profile:

```kotlin
class PdfA1bCreationListener : DefaultPDFCreationListener() {
  private fun configurePreWrite(writer: PdfWriter) {
    val colorProfileFile = ensureColorProfileExtracted()
    if (colorProfileFile != null && colorProfileFile.exists()) {
      val iccProfile = java.awt.color.ICC_Profile.getInstance(colorProfileFile.inputStream())
      writer.setOutputIntents(
        "sRGB IEC61966-2.1", // outputConditionIdentifier
        "", // outputCondition (empty for sRGB)
        "http://www.color.org", // registryName
        "sRGB IEC61966-2.1", // info
        iccProfile // colorProfile
      )
    }
  }

  private fun configurePreClose(writer: PdfWriter) {
    writer.createXmpMetadata()
  }

  override fun preWrite(renderer: ITextRenderer, pageCount: Int) {
    renderer.writer?.let { configurePreWrite(it) }
    super.preWrite(renderer, pageCount)
  }

  override fun onClose(renderer: ITextRenderer) {
    renderer.writer?.let { configurePreClose(it) }
    super.onClose(renderer)
  }
}
```

The color profile used is `sRGB2014.icc` extracted from `/color/sRGB2014.icc` in the application resources.

### 4. Attach the Listener to the Renderer

Set the custom listener on the renderer before generating the PDF:

```kotlin
val pdfCreationListener = PdfA1bCreationListener()
renderer.setListener(pdfCreationListener)
```

### 5. Handle Image Transparency

PDF/A-1b doesn't support images with alpha channels. The codebase includes image validation that flattens transparent images to a white background:

```kotlin
// Validate and flatten images for PDF/A-1b compatibility
val processedImage = validateImageForPdfA1b(imageBytes)
```

### 6. Generate the PDF

With all configurations in place, generate the PDF:

```kotlin
renderer.setDocument(doc, null)
renderer.layout()
renderer.createPDF(outputStream)
```

## Creating Archival PDFs with Mustang Library

### 1. Initialize ZUGFeRD Exporter

Use `ZUGFeRDExporterFromA1` from the Mustang library:

```kotlin
val exporter = ZUGFeRDExporterFromA1()

// Configure metadata
exporter.setProducer("Your Application Name")
exporter.setCreator("Your Application Name")

// Allow non-PDF/A input (though we provide PDF/A-1b)
exporter.ignorePDFAErrors()
```

### 2. Load the PDF/A-1b Document

```kotlin
exporter.load(pdfContent)
```

### 3. Set the Target Profile

For German e-invoicing compliance, use the XRechnung profile:

```kotlin
exporter.setProfile(Profiles.getByName("XRechnung"))
```

### 4. Set Transaction Data

Create a Mustang `Invoice` object with all the invoice data and set it:

```kotlin
val mustangInvoice = createMustangInvoice(invoiceData)
exporter.setTransaction(mustangInvoice)
```

### 5. Export the Archival PDF

```kotlin
exporter.export(outputFile.absolutePath)
```

## Exact Specification for the Archival PDF

The resulting archival PDF conforms to **ZUGFeRD/Factur-X** based on **EN 16931** (the European e-invoicing standard). Specifically:

- **Format**: PDF/A-3 (which allows file attachments)
- **Embedded Data**: XML invoice data in CII (Cross Industry Invoice) format
- **Profile**: XRechnung (German implementation of EN 16931)
- **Compliance**: Meets German GoBD (Grundsätze ordnungsmäßiger Buchführung) requirements for electronic archiving

The XRechnung profile ensures compliance with:
- European e-invoicing directive requirements
- PEPPOL BIS 3.0 specifications
- German public sector procurement standards

This hybrid format provides both human-readable PDF content and machine-readable XML data in a single, tamper-evident file suitable for long-term archival and automated processing.
