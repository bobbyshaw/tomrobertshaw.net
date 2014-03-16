---
layout: post
status: publish
published: true
title: How to Turn On Layered Navigation in Magento Categories
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 457
wordpress_url: http://tomrobertshaw.net/?p=457
date: 2010-08-08 11:09:55.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 4803
  author: Ferhat
  author_email: raj.ferhat@gmail.com
  author_url: http://www.ms-kuwait.com/baroue1
  date: !binary |-
    MjAxMy0wMS0xNSAwODo1MzoyMiArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMS0xNSAwNzo1MzoyMiArMDAwMA==
  content: ! "I have set Anchor to 1 for Layered Navigation for the Toys &amp;Boys
    Toys Category but it is not showing in the front end.\r\nPlease help"
- id: 4910
  author: party galore
  author_email: bizpromoau@gmail.com
  author_url: http://www.partygalore.com.au
  date: !binary |-
    MjAxMy0wMy0xOSAxMTozMDowNCArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0xOSAxMDozMDowNCArMDAwMA==
  content: Our website is not showing no layered navigtion. Even though it is set
    to Anchor Yes...Any recommendation?
- id: 4911
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMy0wMy0xOSAxMTozMjozNyArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0xOSAxMDozMjozNyArMDAwMA==
  content: ! "It could be because of indexing/caching or perhaps a custom theme which
    is breaking it.\r\n\r\nYou will also need to ensure there are attributes that
    are marked to be used in layered navigation.  By default I think this includes
    Price but not much else."
---
For some stores, on the category pages you will want your customers to be able to filter products based on different attributes.  Magento calls this <tt>Layered Navigation</tt>.  Well, at least they do in the layout code and in documentation.  

However, when it comes to actually enabling this setting they decided to call it something different in the administration interface to confuse us.  We're not going to let a little obfuscation deny us some of the beauty of Magento though, oh no!

You can pick and choose for each category whether you'd like to enable the layered navigation.  Under the <tt>Display Settings</tt> tab for a category, change the <strong>Is Anchor</strong> setting to <tt>Yes</tt>.   That category will now have filter functionality.
