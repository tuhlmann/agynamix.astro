---
slug: trixbox-is-our-phone-system-now
date: 2006-07-21T00:00:00.000Z
title: Trixbox is our phone system now
author: Torsten Uhlmann
tags:
  - business
  - telefonie
categories: []
description: null
banner: /assets/blog/2006-07-21-trixbox-is-our-phone-system-now/banner.jpg
bannerCredit: Photo by Torsten Uhlmann
layout: ../../../layouts/blog-post.astro
---

For quite a while we run a AMD 64 server with nearly all the services on it that we need- or think we might need :) There is [Subversion](http://subversion.tigris.org/) hosting our code repository, neatly serving via https and WebDav. Then we have played with [Open-Xchange](http://www.open-xchange.org/) as our groupware and exchanged it with [SugarCRM](http://www.sugarcrm.com/). And besides a lot of other stuff it was running a self compiled version of [Asterisk](http://www.asterisk.org/) using VoIP as well as an old Fitz AVM pci card for ISDN support. I have now decided that it is bad to care for everything. In the beginning we evaluated Asterisk and VoIP as a possible market niche for us but decided that this is not our part. Now what do you do if you like the technology, want to benefit from new ways of communication but simply cannot afford to learn the details of a technology let alone maintaining it. Yep, you stand upon the shoulder of others. You can do this by buying another company's product or use available open source. [Trixbox](http://www.trixbox.org) is the successor of Asterisk@Home, a Linux distribution based upon CentOS 4.3 (CentOS is binary compatible with Redhat Enterprise Edition) and bundled with useful modules that make it easy to use. For instance you have FreePBX which is a web based admin application for Asterisk. You can download the latest ISO from their website. My greates problem was getting my ISDN card to play with it. I first tried a HFC (Cologne chipset) based one- these are easiest to install by typing "install-ZAPHFC"- did compile but asterisk did not start anymore. I then tried a Fritz AVM card using capi-utils and chan\_capi for Asterisk. Did compile and install but strangely locked the machine :( After helping Google to make more money I finally found the reason the HFC card messed up Asterisk- there is a module "app\_trunkisavail.so" in the Asterisk modules directory. Remove it (or rename it) and the problem is gone. Go figure :) Anyway, now it's working with a HFC card. The sound seems to be better then with the capi card. We're running the Trixbox on a Celeron Mobile processor to save the planet- or our pockets. We use an ASUS board together with a adapter socket to plug the mobile processor on the standard board. Up to now this works like a charm and it should save us a considerable amount of energy. Btw, yesterday I got my Microsoft Partner pack which included a Vista beta DVD. But since we're running our telephone system on that mobile pc there is none left to test out vista :(
