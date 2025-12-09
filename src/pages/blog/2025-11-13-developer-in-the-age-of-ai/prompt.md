---
slug: developer-in-the-age-of-ai
date: 2025-11-13T00:00:00.000Z
title: Being a Developer in the Age of AI
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

Write a blog post about my experiencee with using AI for development of my Kotlin / Jetpack Compose Desktop invoicing application called "AGYNAMIX Invoicer".
The application is cross platform, running on Windows, Mac & Linux, it is aimed towards freelancers (includes time tracking and creating invoices from timesheets) and small companies and aims to be GoBD compliant (GoBD are the german tax compliance regulations). Our main selling points are: 100% offline first. No subscription. No cloud. You own the software. Tailored for small companies.
We are currently in pre-relase phase. The prices mentioned on the website will go up eventually. In addition, anyone providing real feedback (feature requests and bug reports) will be elligible for a one free year license once we go live.
Please add a plug to https://invoicer.agynamix.de towards the beginning and end of the text to lead users to the website.
Please add some slight humor to the post.
Please see https://agynamix.de/blog for my past blog posts and try to emulate my style.
Here are the bullet points I noted down that I want you to formulate a post around:
## Key Insights
- be specific
- baby steps
- Ask if AI has any questions and if requirements are clear
- Claude 4.5 vs GPT 5.1 Codex vs Gemini 3 Pro
  - Gemini 3 Pro great for planning, I feel it better checks cross dependencies or implication of a change. But unfortunately it often breaks down and refuses to answer a request. Maybe its the VSCode Copilot integration, or maybe Gemini is overwhelmed by the sudden success.
  - Clause Opus 4.5 is daily driver now, with occasionally trying out smaller models and see how they compare.
- change chat session for new tasks (keep context small)
- keep session if you need the context
- I like to be polite
- like to explain my motives. Sometimes that helps AI, mostly it helps me to better understand why I want a change.
- consistent language
	- if you mean the same thing, call it the same, no two different things
- use git commit for checkpoints in your code
- test ever small step
- review the generated code
	- helps you understand
	- spot anti patterns or duplication
- guide model
	- copilot-instructions.md: read on every request
	- PLANNING.md / TASKS.md approach
- use chat sessions (Gemini Pro for instance) to discuss topics, or discuss different approaches, ask the model for better solutions, etc.
- Ask it for refactorings and checking code quality from time to time
- use AI to write many tests, unit, integration, e2e
- It's easier to generate code for a constraint environment such as a Jetpack Compose application, then it is for an open ended web application where the AI has too many ways to do things.
- sometimes using a different model and a clear context helps solve an issue the other model could not
- sometimes AI is very smart and sometimes for seemingly simple tasks "as dumb as a bag of rocks"
- Changed in approach
	- started with small tasks and kept verifying them every step.
		- was slower but ensured Ai stayed on track
	- now, for larger tasks I do a planning session, let it create a planning and tasks document based on my description, ask if it has questions (single most important learning!), then let it work the tasks step by step and mark them done as it progresses. After some trial and error I found that I should not let it run wild on the plan, but thoroughly test and course correct after each phase. I've done a large task that it programmed on for half a day, and needed two days to refactor and debug. It's much easier on the nerves if I do it in smaller chunks.
- Writing down your thoughts helps to clarify your thinking and help surface inconsistencies in your chain of thought
- I like to approach the AI as a peer (junior) developer. That means I talk to the AI in a friendly manner.
- constant review / refactor. AI only (mostly) considers things you ask for in the prompt. If you ask differently, it will provide a different answer. AI is like a little child that knows everything. It needs to be guided to use that knowledge.

As a summary, I think these are my most important take aways:

* Ask if the AI has questions
* small incremental steps, even if you have a prepared task and plan document
* test and keep on testing
* review the changes
* regularly ask for refactor opportunities
* In essence, you change from being a developer to being a product manager, architect and tester
