---
slug: java-tip-how-to-find-the-location-of-a-class-being-executed
date: 2009-07-29T00:00:00.000Z
title: 'Java Tip: How to find the location of a class being executed'
author: Torsten Uhlmann
tags:
  - english
  - programming
categories: []
description: null
banner: >-
  /assets/blog/2009-07-29-java-tip-how-to-find-the-location-of-a-class-being-executed/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

Today I wanted to find the location of a class file to make sure the class is really called from a specific jar file (old project with historically grown piles of archaeologically valuable code). Turns out this is pretty easy. For instance within the class you log the result of the following statement:

URI uri = this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()

This will give you the exact place from witch the class was loaded.
