---
layout: post
status: publish
published: true
title: Add Magento Categories Without Them Appearing in Frontend Navigation
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 461
wordpress_url: http://tomrobertshaw.net/?p=461
date: 2010-08-07 13:10:44.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 2320
  author: Snowcore
  author_email: snowcore.net@gmail.com
  author_url: http://snowcore.net
  date: !binary |-
    MjAxMC0xMC0wNCAxMjoyMDowNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0xMC0wNCAxMToyMDowNSArMDEwMA==
  content: Yeah, with 1.4.1.0 it's really easy, but what to do with earlier versions?
    :)
- id: 3717
  author: tuba
  author_email: webdev244-magento@yahoo.co.in
  author_url: http://psdtomagento.com
  date: !binary |-
    MjAxMi0wOC0yNiAyMTozNDowMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wOC0yNiAyMDozNDowMSArMDEwMA==
  content: ! "Ok, if we need to check via php code then we could use if (!$category-&gt;getIncludeInMenu())
    \r\n\r\nHope this will help for those who have came to this page like me to make
    it work by php code.\r\n\r\nthanks!"
---
Just a one-liner post really.  With Magento 1.4.1.0, there is now a setting to disable a category from appearing in the frontend navigation bar.   For each category in admin, you will see an option at the bottom of the general information tab: <tt>"Include in Navigation Menu"</tt>.
