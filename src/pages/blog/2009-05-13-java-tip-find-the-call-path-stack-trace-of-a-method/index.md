---
slug: java-tip-find-the-call-path-stack-trace-of-a-method
date: 2009-05-13T00:00:00.000Z
title: 'Java Tip: Find the call path (stack trace) of a method'
author: Torsten Uhlmann
tags:
  - english
  - programming
categories: []
description: null
banner: >-
  /assets/blog/2009-05-13-java-tip-find-the-call-path-stack-trace-of-a-method/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

Here is a little tip that can save you some time and trouble every now and then. Sometimes when hunting down bugs it is necessary to find out the path a method is called from in order to determine the root of a problem. Here's how you do this quiet easily. In there method that you observe add the following:

System.out.println("I'm here:"); Exception e = new Exception(); e.printStackTrace();

If you have a logger in place which you should you could write it this way:

```
log.isDebugEnabled() { log.debug("Call of Method X", new Exception()); }
```

The logger will only process the expensive part of creating the exception and retrieving the stack trace if it will be written somewhere. Remember, exceptions are just Java classes with some built in behavior. You can create and use them and also subclass and extend them. Sometimes it is useful to create custom exceptions that carry additional meaningful information that your code needs in order to resolve the problematic situation that caused the exception. But who keeps you from creating an exception and not throwing it- just use some of its powers...

–

My name is Torsten Uhlmann, I’m founder of [AGYNAMIX](http://www.agynamix.de/), a tiny (sooo tiiiny its just me) software company specializing in Java software consulting for larger corporations.

I also develop [Simidude](http://www.simidude.com/), an easy to use cross platform network clipboard and Drag & Drop tool which you might happen to find useful.
