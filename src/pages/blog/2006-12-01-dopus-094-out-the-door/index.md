---
slug: dopus-094-out-the-door
date: 2006-12-01T00:00:00.000Z
title: Dopus 0.9.4 out the door
author: Torsten Uhlmann
tags:
  - business
  - news
  - programming
categories: []
description: null
banner: /assets/blog/2006-12-01-dopus-094-out-the-door/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

I have released Dopus version 0.9.4 today. This is a minor bug fix release which cures the following issues:

-   MacOS X and Unix systems that don't define JAVA\_HOME by default: the generator.sh script will search for 'java' by issuing the command 'which java'. If a Java is found it is used otherwise an error message is printed
-   Path names with spaces are now supported on Windows and Unix systems.

I have received some enhancement requests and will include them as time permits. Specifically these are:

-   Support for multiple Docbook DTD versions
-   Support for variable substitution in Docbook documents. I want to be able to write `${document.version}` in a document and have the build engine replace that key with the value stored in one of the build property files. This way you can use all variables known to Ant in your document or define new ones in localbuild.properties.

Till next time...
