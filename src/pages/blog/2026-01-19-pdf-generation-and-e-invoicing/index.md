---
slug: pdf-generation-and-e-invoicing
date: 2026-01-19T00:00:00.000Z
title: PDF Generation and E-Invoicing with FlyingSaucer 10
author: Torsten Uhlmann
tags:
  - E-Invoice
  - Kotlin
  - AI
categories: []
description: null
banner: /assets/blog/2026-01-19-pdf-generation-and-e-invoicing/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

# A Retrospective on PDF Generation and E-Invoicing with FlyingSaucer 10

I develop [AGYNAMIX Invoicer](https://invoicer.agynamix.de), a cross-platform invoicing application for freelancers and small businesses. It is currently in pre release. Download for free and check it out.

## The PDF/A-1B Challenge

When I started building the Invoicer application, I knew I needed to generate PDFs that could contain both human-readable content and machine-readable invoice data. The goal was to create documents that would be valid PDF/A-3U files, which are the standard for long-term archival. However, the path to get there turned out to be more complex than I initially anticipated.

The [Mustang e-invoice library](https://www.mustangproject.org/), which I chose for embedding XML data into PDFs, requires PDF/A-1B containers to create combined PDF/XML documents that would validate as PDF/A-3U. While Mustang can ignore container errors, the resulting document wouldn't validate properly, even though it would contain the XML data. This was a critical requirement for compliance with European e-invoicing standards, particularly the XRechnung profile.

## The Flying Saucer and OpenPDF Combination

I needed a solution that could generate PDF/A-1B compliant documents. After some research, I decided to use a combination of [Flying Saucer](https://github.com/flyingsaucerproject/flyingsaucer) (version 10) and [OpenPDF](https://github.com/LibrePDF/OpenPDF) (version 3). Flying Saucer is excellent for converting XHTML to PDF, and OpenPDF provides the necessary PDF manipulation capabilities.

### Font Embedding

One of the key requirements for PDF/A-1B compliance is embedding all fonts used in the document. I started by extracting [IBM Plex Sans](https://github.com/IBM/plex) font variants from the application resources. The font family includes regular, bold, italic, and bold-italic variants, as well as additional weights like ExtraLight, Light, Medium, SemiBold, and Thin.

The code to embed these fonts into the PDF was straightforward but required careful handling:

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

### Color Profile and Metadata

Another critical aspect of PDF/A-1B compliance is setting the output intents with an ICC color profile. I implemented a custom `PDFCreationListener` to handle this:

```kotlin
class PdfA1bCreationListener : DefaultPDFCreationListener() {
  private fun configurePreWrite(writer: PdfWriter) {
    val colorProfileFile = ensureColorProfileExtracted()
    if (colorProfileFile != null && colorProfileFile.exists()) {
      val iccProfile = java.awt.color.ICC_Profile.getInstance(colorProfileFile.inputStream())
      writer.setOutputIntents(
        "sRGB IEC61966-2.1",
        "",
        "http://www.color.org",
        "sRGB IEC61966-2.1",
        iccProfile
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

The color profile used was [`sRGB2014.icc`](https://registry.color.org/rgb-registry/srgbprofiles), which I extracted from the application resources. This profile ensures consistent color representation across different devices and platforms.

### Image Handling

PDF/A-1B doesn't support images with alpha channels. I had to implement image validation and flattening to ensure compatibility:

```kotlin
// Validate and flatten images for PDF/A-1b compatibility
val processedImage = validateImageForPdfA1b(imageBytes)
```

This was a non-trivial task, as it required processing images to remove transparency and replace it with a white background, ensuring that the resulting PDF would be compliant.

## The Mustang Integration

Once I had a PDF/A-1B compliant document, the next step was to use the Mustang library to create the archival PDF. The process involved several steps:

### Initializing the Exporter

I used `ZUGFeRDExporterFromA1` from the Mustang library:

```kotlin
val exporter = ZUGFeRDExporterFromA1()

// Configure metadata
exporter.setProducer("Your Application Name")
exporter.setCreator("Your Application Name")

// Allow non-PDF/A input (though we provide PDF/A-1b)
exporter.ignorePDFAErrors()
```

### Loading the PDF and Setting the Profile

After loading the PDF/A-1B document, I set the target profile to XRechnung, which is the German implementation of the European e-invoicing standard EN 16931:

```kotlin
exporter.load(pdfContent)
exporter.setProfile(Profiles.getByName("XRechnung"))
```

### Setting Transaction Data

I created a Mustang `Invoice` object with all the invoice data and set it:

```kotlin
val mustangInvoice = createMustangInvoice(invoiceData)
exporter.setTransaction(mustangInvoice)
```

### Exporting the Archival PDF

Finally, I exported the archival PDF:

```kotlin
exporter.export(outputFile.absolutePath)
```

## The Resulting Document

The resulting archival PDF conforms to ZUGFeRD/Factur-X based on EN 16931. It is a PDF/A-3 file that contains both human-readable content and machine-readable XML data in CII (Cross Industry Invoice) format. The XRechnung profile ensures compliance with European e-invoicing directive requirements, PEPPOL BIS 3.0 specifications, and German public sector procurement standards.

This hybrid format provides several advantages:
- **Human-readable**: The PDF content is easily readable by humans.
- **Machine-readable**: The embedded XML data can be processed automatically.
- **Tamper-evident**: The combination of PDF and XML ensures data integrity.
- **Long-term archival**: The PDF/A-3U format is designed for long-term preservation.

## Lessons Learned

### The Complexity of PDF Generation

PDF generation is more complex than it appears. While Flying Saucer and OpenPDF provide powerful tools for creating PDFs, achieving compliance with specific standards requires a deep understanding of the underlying specifications. The process of embedding fonts, setting color profiles, and handling images was more involved than I initially anticipated.

### The Value of Open Source Libraries

Open source libraries like Mustang, Flying Saucer, and OpenPDF are invaluable resources. They provide a solid foundation for building complex applications. However, they also require careful integration and customization to meet specific requirements. The ability to extend and modify these libraries was crucial for achieving the desired results.

### The Need for Testing and Validation

Testing and validation are essential steps in the development process. Ensuring that the generated PDFs meet the required standards and that the embedded XML data is correctly formatted and validated was a critical part of the development cycle. Automated testing and validation tools were indispensable in this regard.

## Conclusion

Building the Invoicer application has been a challenging but rewarding experience. The process of generating PDF/A-1B compliant documents and integrating them with the Mustang library to create archival PDFs was complex and required a deep understanding of the underlying technologies and standards. However, the result is a robust and compliant solution that meets the needs of modern e-invoicing requirements.

---

I develop [AGYNAMIX Invoicer](https://invoicer.agynamix.de), a cross-platform invoicing application for freelancers and small businesses. It is currently in pre release. Download for free and check it out.

I used Mixtral 8x22B Instruct to transform my bullet notes into something readable, you can find the prompt I gave to several LLMs  [here](prompt).
