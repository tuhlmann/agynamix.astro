---
slug: developer-in-the-age-of-ai
date: 2025-11-13T00:00:00.000Z
title: Being a Developer in the Age of AI
author: Torsten Uhlmann
tags:
  - E-Invoice
  - Kotlin
  - AI
categories: []
description: null
banner: /assets/blog/2025-11-13-developer-in-the-age-of-ai/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

# Building AGYNAMIX Invoicer: My Journey with AI-Assisted Development

When I embarked on creating [AGYNAMIX Invoicer](https://invoicer.agynamix.de), my cross-platform invoicing application for freelancers and small businesses, I didn't expect to transition from being primarily a developer to something resembling a product manager, architect, and tester all rolled into one. Yet that's precisely what happened as I incorporated AI into my development workflow.

For those unfamiliar, AGYNAMIX Invoicer is a Kotlin/Jetpack Compose Desktop application that runs natively on Windows, Mac, and Linux. It's built for freelancers who need time tracking and invoice generation from timesheets, as well as small companies requiring GoBD compliance (the German tax regulations that make accountants wake up in cold sweats). Our philosophy is refreshingly simple: 100% offline-first, no subscription, no cloud—you own the software outright. We're currently in pre-release, with prices that will eventually increase, but early adopters who provide meaningful feedback will receive a free one-year license once we go live.

Now, let's talk about the AI-powered development journey that's been equal parts fascinating and frustrating.

## The AI Model Landscape: Not All Models Are Created Equal

I've worked extensively with Claude 4.5, GPT-5.1 Codex, and Gemini 3 Pro, and each has distinct characteristics that affect how I use them.

Gemini 3 Pro is excellent for planning phases. It seems more adept at considering cross-dependencies and the implications of changes—almost like having a systems thinker on the team. Unfortunately, it also has a frustrating tendency to break down mid-conversation and refuse to answer perfectly reasonable requests. Whether this is due to the VSCode Copilot integration or Gemini being overwhelmed by its sudden popularity, I can't say. All I know is that asking it to generate a simple data model sometimes results in an AI existential crisis.

Claude 4.5 has become my daily driver. It's more consistent and rarely refuses reasonable requests. I occasionally experiment with smaller models to compare their capabilities, which feels a bit like taking the training wheels off a bicycle only to immediately crash into a tree.

GPT-5.1 Codex is powerful but requires more specific prompting. It's like working with a brilliant colleague who takes everything literally—great when you know exactly what to ask for, less helpful when you're still figuring things out.

## Techniques That Actually Work

### Context Management: The Goldilocks Principle

I've learned to create new chat sessions for new tasks to keep the context "just right"—not too bloated, not too sparse. Think of it as memory management for AI. If I let context accumulate too much, the model starts to get confused about what we're actually working on. 

However, I maintain the same session when the context is critical to understanding the current task. It's a balancing act—like deciding whether to bring up that awkward conversation from three years ago or start fresh.

### Communication Style: Politeness Pays Off

This might sound silly, but I've found that being polite to AI models yields better results. I explain my motives and reasoning, which not only helps the AI understand my goals but also forces me to articulate why I want certain changes.

"Hey Claude, could you please help me implement pagination for the invoice list? I'm concerned about performance when users have hundreds of records."

Works better than:

"Add pagination to invoice list."

It's like the difference between asking a colleague nicely for help versus dropping a Post-it note on their desk and walking away.

### Consistent Terminology: If It's the Same Thing, Call It the Same Thing

Maintaining consistent language is crucial. If I call something an "invoice item" in one prompt and a "line item" in another, I'm practically inviting confusion. This isn't just about AI understanding—it's good practice for maintaining readable code.

I once spent two hours debugging an issue where the AI had created both an `InvoiceItem` and a `LineItem` class with subtly different behaviors. The German word "Doppelgänger" comes to mind.

### Checkpointing: Git Commits as Safety Nets

Frequent git commits are essential when working with AI-generated code. I treat them as save points in a particularly challenging video game—if something goes catastrophically wrong, I can always return to the last stable version.

"Let's see if this refactoring works... and... it deleted half my database schema. Good thing I committed five minutes ago!"

### Incremental Testing: Trust But Verify

Testing every small change immediately has saved me countless headaches. AI can confidently generate completely non-functional code with the same conviction it uses to produce brilliant solutions.

I once asked for a "simple date picker implementation" and received what appeared to be perfect code—until I ran it and discovered it was picking dates from the ancient Mayan calendar. Always test before moving on.

## Guiding the Models: Providing Structure

### Documentation as Guidance

I maintain several special files that help structure AI assistance:

- **copilot-instructions.md**: Contains project-specific guidelines that the AI reads on every request
- **PLANNING.md**: Outlines the overall architectural vision
- **TASKS.md**: Breaks down specific implementation steps

These files act as a compass for the AI, keeping it oriented toward the project's goals rather than whatever solution pattern it most recently learned.

### The Evolution of My Approach

My methodology has evolved significantly:

1. **Initial Phase**: I started with tiny tasks, verifying each step. This was slower but kept the AI on track.

2. **Current Approach**: For larger tasks, I conduct a planning session and let the AI create planning documents based on my description. Then comes the single most important question I've learned to ask: "Do you have any questions about this task?" 

This simple question has prevented countless misunderstandings. After addressing questions, I let the AI work through tasks sequentially, testing thoroughly after each step. I've learned the hard way that letting AI "run wild" with a plan can lead to days of debugging and refactoring.

### The "Run Wild" Cautionary Tale

Once, I let an AI implement a large feature all at once. It took half a day to generate the code and two full days to refactor and debug the result. The AI had created several circular dependencies, invented new terminology halfway through, and implemented three different approaches to the same problem in different parts of the codebase. It was like reading code written by a committee of developers who refused to talk to each other.

## The Good, The Bad, and The Weird

### Environment Constraints as Helpful Guardrails

I've noticed that AI performs better when generating code for a constrained environment like Jetpack Compose applications compared to more open-ended platforms where it has too many implementation options. In constrained environments, the AI has fewer ways to go astray—it's like the difference between asking someone to navigate a hallway versus an open field.

### The Peculiar Inconsistency of AI Intelligence

Sometimes AI is impressively smart, and other times it's "as dumb as a bag of rocks" for seemingly simple tasks. I once watched it implement a complex caching mechanism with proper invalidation logic, only to then struggle with centering a button in a row. It's like having an intern who can solve differential equations but can't make coffee.

### Model Switching as a Problem-Solving Technique

When one model gets stuck on a problem, switching to a different model with a clear context can sometimes provide a solution. It's like getting a second opinion from a colleague with a different specialty.

## Becoming a Different Kind of Developer

Working with AI has fundamentally changed my role in the development process:

1. **From Writer to Reviewer**: I spend less time typing code and more time reviewing, testing, and refactoring.

2. **More Architectural Thinking**: I need to provide clearer structures and guidelines to keep the AI on track.

3. **Increased Testing Focus**: With AI generating code faster, testing becomes even more critical.

The mental shift is substantial—I've become more like a product manager overseeing a junior developer who has encyclopedic knowledge but questionable judgment.

## Lessons That Made the Biggest Difference

After months of working this way, here are my most valuable takeaways:

1. **Always Ask If The AI Has Questions**: This simple practice has prevented more problems than any other technique.

2. **Small, Incremental Steps**: Even with a comprehensive plan, implement and test in small chunks.

3. **Constant Testing**: If you're not testing, you're accumulating technical debt.

4. **Code Review Is Essential**: Review every line of generated code—this helps you understand what's being built and spot potential issues.

5. **Regular Refactoring**: Periodically ask the AI to suggest refactorings and quality improvements.

These practices have helped me build AGYNAMIX Invoicer more efficiently than I could have done alone, despite the occasional detours and peculiarities of working with AI.

## Where We Stand Now

[AGYNAMIX Invoicer](https://invoicer.agynamix.de) is progressing nicely toward a full release. The application offers comprehensive time tracking, invoice generation, client management, and GoBD compliance—all in a native desktop application that respects your privacy and doesn't require internet connectivity to function.

The development process has been a fascinating journey that's changed how I build software. Working with AI feels like having a talented but somewhat unpredictable pair programmer—one who occasionally has brilliant insights and occasionally tries to use a hammer to insert a screw.

If you're interested in trying AGYNAMIX Invoicer or providing feedback that could earn you a free one-year license, visit [https://invoicer.agynamix.de](https://invoicer.agynamix.de). And if you're a developer thinking about incorporating AI into your workflow, I hope my experiences help you avoid some of the pitfalls and capitalize on the genuine advantages these tools can offer.

Just remember: the AI is not the developer—you are. It's a powerful tool, but the vision, judgment, and responsibility remain yours. 

I used Claude 3.7 to transform my bullet notes into something readable. I consider myself not a very fancy writer, so I'm grateful for any help. If you are curious, you can find the prompt I gave to several LLMs  [here](prompt).
