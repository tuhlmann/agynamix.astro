---
slug: developer-in-the-age-of-ai
date: 2025-11-13T00:00:00.000Z
title: Being a Developer in the Age of AI
author: Torsten Uhlmann
tags: []
categories: []
description: null
banner: /assets/blog/2025-11-13-developer-in-the-age-of-ai/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

# Building AGYNAMIX Invoicer with AI: Lessons from the Trenches

For the past several months, I've been deep in the trenches developing [AGYNAMIX Invoicer](https://invoicer.agynamix.de/) - a cross-platform invoicing application built with Kotlin and Jetpack Compose Desktop. As a solo developer, I decided to embrace AI as my development partner. Not to replace thinking, mind you, but to accelerate the grunt work and serve as a sounding board for ideas.

The result? A functional, offline-first invoicing application for freelancers and small companies that runs on Windows, Mac, and Linux. No subscriptions. No cloud. You own it. Period. We're currently in pre-release, and the launch prices you see now won't last forever - fair warning!

But this post isn't about the product (though if you need GoBD-compliant invoicing with time tracking, [go check it out](https://invoicer.agynamix.de/)). This is about what I learned using AI as my coding companion, the good, the bad, and the occasionally "dumb as a bag of rocks" moments.

## The Single Most Important Discovery: Just Ask If It Has Questions

Here's something that took me embarrassingly long to figure out: AI models work better when you treat them like actual team members and ask if they have questions about requirements.

Seriously. This one change transformed my workflow.

Instead of dumping a task description and hoping for the best, I now explicitly ask: "Do you have any questions? Are the requirements clear?" Nine times out of ten, the AI will come back with clarifying questions that expose assumptions I hadn't articulated or edge cases I hadn't considered. It's like having a junior developer who's not afraid to admit they don't understand something - refreshing, honestly.

This simple habit has saved me countless debugging sessions where I'd otherwise be thinking "why on earth did you implement it that way?" when the real answer was "because you weren't specific enough, buddy."

## Baby Steps and Git Commits: Your Safety Net

When I started, I treated AI like a magic code generator. Give it a task, walk away, come back to find working code. That... didn't work out so well.

I learned the hard way (a half-day of AI coding followed by two days of my refactoring and debugging) that you need to work in small, testable increments. Think of it like this: AI is that brilliant kid who knows everything but needs constant guidance to apply that knowledge appropriately.

Now my workflow looks like this:

1. Break down the task
2. Let AI tackle one small piece
3. Test it immediately
4. Git commit if it works
5. Move to the next piece

Those git commits are gold. They're checkpoints you can roll back to when AI decides to go off the rails. And it will go off the rails. Oh, it will.

## The Planning Document Approach

For larger features, I've adopted what I call the "planning session" approach:

First, I have a discussion with the AI about the feature. Not just "implement X" but a real conversation about the approach, alternatives, trade-offs. Sometimes I'll use a different model (like Gemini Pro) just for these brainstorming sessions.

Then I ask it to create a PLANNING.md or TASKS.md document based on our discussion. This document becomes our contract. It lists the phases, the specific tasks, and the acceptance criteria.

The crucial part? I don't let it run wild through the entire plan. I thoroughly test and course-correct after each phase. Trust me, your nerves will thank you. It's far easier to catch a wrong turn after 30 minutes than after three hours.

## Review Everything (Yes, Everything)

I know, I know. The whole point of AI is to save time, right? But here's the thing - reviewing generated code isn't just about catching bugs. It's about:

- Understanding what's actually happening in your codebase
- Spotting anti-patterns before they multiply
- Catching duplicate code early
- Learning new approaches you might not have considered

Think of code review as your continuing education. Plus, if you don't understand the code AI generated, how are you going to maintain it in six months when that "brilliant" solution has become a cryptic mess?

## The copilot-instructions.md File: Your AI's North Star

One of my best decisions was creating a `copilot-instructions.md` file that's read on every AI request. This file contains:

- Project structure and conventions
- Naming standards
- Architectural decisions
- Common patterns we use
- Things to avoid

Consistency is critical here. If you mean the same thing, call it the same thing. Don't let AI introduce five different terms for your "invoice item" concept. Your future self will curse your past self for every inconsistent term that makes it into the codebase.

## Language Matters (The Computer Kind)

Here's an interesting observation: It's actually easier to generate code for a constrained environment like a Jetpack Compose application than for an open-ended web application. Why? Because there are fewer ways to do things wrong.

With web development, AI has ten different frameworks and twenty different patterns it might choose from. With Compose, the conventions are more established, the patterns more constrained. The AI has less rope to hang itself with.

## Testing: AI's Secret Superpower

If there's one thing AI excels at, it's writing tests. Unit tests, integration tests, end-to-end tests - it cranks them out like a well-oiled machine.

I've embraced this wholeheartedly. Not only does it improve my test coverage (which was... let's say "optimistic" before), but those tests serve as living documentation and catch regressions when I'm refactoring.

Plus, asking AI to write tests for existing code is a great way to verify it actually understands what that code does.

## Model Wars: Claude vs. GPT vs. The Rest

I've primarily used Claude Sonnet 4.5 and GPT-4 (now 5 in some contexts) for this project. Each has its strengths:

Claude tends to be more verbose in explanations and better at following complex instructions. GPT can be snappier but sometimes needs more hand-holding.

The interesting bit? Sometimes switching models helps solve a problem. When one model keeps generating broken code for a specific task, trying the same problem with a different model and fresh context often works. It's like getting a second opinion from another doctor.

## Context Management: When to Start Fresh

Speaking of context - this is subtle but important. AI models have limited context windows, and they can get "confused" if you've been working in the same chat for too long.

I've learned to start a new chat session for genuinely new tasks. But if the task builds on previous work and needs that context, keep the session going. It's a judgment call, but generally: new feature = new chat, iterating on existing feature = same chat.

## The Politeness Factor

I tend to be polite with AI. "Could you please..." and "Thank you" and such. Does it matter? Probably not to the AI. But it matters to me. It keeps me in the mindset of working with a colleague rather than barking orders at a tool.

Plus, I like to explain my motives when I request changes. "I'd like to refactor this because it's getting hard to test" rather than just "refactor this." Sometimes that helps the AI understand the underlying goal. Mostly, though, it helps me clarify my own thinking.

## The Occasional Stupidity

Fair warning: AI can be brilliant one moment and dumb as a bag of rocks the next. I've had sessions where it elegantly solved a complex state management problem, immediately followed by it repeatedly making the same syntax error because it "forgot" we're using Kotlin, not Java.

It's frustrating, but it's also kind of endearing? Like working with a brilliant but occasionally distracted colleague.

## Evolution of My Approach

When I started this project, I was cautious. Small tasks, verify every step, keep AI on a tight leash. It was slower but ensured nothing went sideways.

As I got more comfortable, I tried giving AI more autonomy for larger tasks. That led to the aforementioned half-day of coding followed by two days of cleanup.

Now I've found a middle ground: plan thoroughly, work in phases, test religiously. The AI can work semi-autonomously within a phase, but I'm the quality gate between phases. This balances speed with sanity.

## Writing as Thinking

One unexpected benefit of this AI-driven development: I write down my thoughts constantly. Whether it's explaining requirements to the AI or documenting why I chose approach A over approach B, I'm always articulating my reasoning.

This has made me a better developer. Writing forces you to clarify your thinking. It surfaces inconsistencies in your logic. It's like rubber duck debugging, but the duck occasionally talks back with useful suggestions.

## Refactoring: The Never-Ending Story

AI only considers what you put in the prompt. Ask the same question differently, you'll get a different answer. This means you need to constantly review and refactor.

Think of AI like that incredibly knowledgeable child who needs guidance to apply their knowledge appropriately. They know all the facts but need help connecting them to your specific situation.

I regularly ask AI to review code for quality issues or suggest refactorings. "Look at this module - can you spot any code smells or suggest improvements?" It's surprisingly good at this, though you still need to apply judgment to its suggestions.

## The Bottom Line

Using AI for development has accelerated this project tremendously. Could I have built [AGYNAMIX Invoicer](https://invoicer.agynamix.de/) without AI? Absolutely. Would it have taken three times as long? Also absolutely.

But it's not a silver bullet. You still need to know what you're doing. You still need to understand the code. You still need to test, review, and refactor. AI is a powerful amplifier of developer productivity, not a replacement for developer judgment.

The key insights that made this work:

- **Be specific** in your requests
- **Ask if AI has questions** - this is huge
- **Work in baby steps** with frequent testing
- **Use git commits** as checkpoints
- **Review everything** the AI generates
- **Create guidance documents** that establish conventions
- **Test extensively** - let AI help write tests
- **Switch models** when stuck
- **Manage context** appropriately
- **Treat AI as a peer** (junior) developer

If you're developing software and haven't embraced AI yet, I encourage you to try it. Start small. Be patient with the learning curve. And remember: AI is your assistant, not your autopilot.

Now, if you'll excuse me, I have some invoice templates to finish implementing. With AI's help, naturally. Though I'll be reviewing every line, because that's how this works.

------

*Interested in trying out AGYNAMIX Invoicer? We're in pre-release at special pricing that won't last forever. [Check it out here](https://invoicer.agynamix.de/). And if you provide real feedback (feature requests or bug reports), you'll be eligible for a free one-year license once we go live. Because building good software requires good feedback, and I value yours.*

*Have experiences with AI-assisted development of your own? Drop me a line - I'd love to hear about it!*
