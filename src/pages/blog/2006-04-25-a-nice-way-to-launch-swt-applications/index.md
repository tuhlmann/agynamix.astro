---
slug: a-nice-way-to-launch-swt-applications
date: 2006-04-25T00:00:00.000Z
title: A nice way to launch SWT applications
author: Torsten Uhlmann
tags:
  - programming
categories: []
description: null
banner: /assets/blog/2006-04-25-a-nice-way-to-launch-swt-applications/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

SWT (the low level GUI toolkit used by Eclipse and a lot of other Java based apps) needs platform dependent libraries (.dll on Windows and .so on Unix). Normally you have to tell Java where it will find those libs. [This](http://www.eclipsezone.com/eclipse/forums/m92002519.html) is another way to launch SWT applications without the need to set -Djava.library.path to Java or to put the libs into a system wide path. main() would look like this:

```
public static void main(String[] args) throws Exception { 
  URL[] urls = ; 
  File workDir = ; 
  ClassLoader cl = new SWTClassLoader(urls, workDir); 
  Class mainClass = cl.loadClass(); 
  Method main = mainClass.getMethod("main", new Class[] { String[].class }); 
  main.invoke(null, new Object[] { args }); 
}
```

<span id="p36">[SWTClassLoader](/assets/blog/2006-04-25-a-nice-way-to-launch-swt-applications/SWTClassLoader.zip)</span> Thanks to Peter Nehrer for this tip.
