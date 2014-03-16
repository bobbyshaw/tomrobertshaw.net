---
layout: post
status: publish
published: true
title: Show Magento Module Download Stats on Geckoboard
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 1211
wordpress_url: http://tomrobertshaw.net/?p=1211
date: 2011-01-26 13:00:26.000000000 +00:00
categories:
- Technology
tags: []
comments:
- id: 3499
  author: Norbert
  author_email: norberttorrest645@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMy0xMSAwOTowMTowNyArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMy0xMSAwODowMTowNyArMDAwMA==
  content: ! "Dealing with Geckoboard in terms of business purposes is a wise idea
    knowing that you will totally get the most of your business' information through
    its monitoring. \r\n\r\nI am using this great free tool http://WebControlRoom.com
    which helps small businesses stay on track by providing a 1 page report with data
    from a number of their favourite sources (Mail Chimp, Analytics, Xero etc)."
---
I've been playing with <a href="http://www.geckoboard.com/">Geckoboard</a> in my spare time (of which I seem to have very little of at the moment).  <a href="2011/01/codebase-integration-with-geckoboard">Previously I looked at</a> displaying commit statistics from the code management tool we use, <a href="http://www.codebasehq.com/t/w1xzietlf7bit8qd/">Codebase</a>.  So next up, I thought that being able to show the number of downloads that <a href="http://www.meanbee.com">Meanbee's</a> Magento Community modules had had would be neat.

<a href="http://tomrobertshaw.net/wp-content/uploads/2011/01/royalmail_downloads.png"><img src="http://tomrobertshaw.net/wp-content/uploads/2011/01/royalmail_downloads.png" alt="Royal Mail Module Downloads" title="Royal Mail Module Downloads" width="232" height="231" class="alignleft size-full wp-image-1213" /></a>

So I threw a little script together which you can get on <b><a href="https://github.com/bobbyshaw/magento-module-downloads-geckoboard">github</a></b> to do just that.  Simply specify the ID of the module (e.g. 480 for Meanbee's <a href="http://www.magentocommerce.com/magento-connect/Meanbee/extension/480/royalmail-shipping-options">Royal Mail module</a>), and paste the url in to your geckoboard widget and voilá.  First off it will just show the number of downloads, then after a week of collecting statistics, the widget will also display the percentage increase over the last week.

<a href="http://geckoboard.zendesk.com/entries/296250-how-to-magento-ecommerce-widgets-v1-0">Geckoboard released</a> some code back in November to display information about Magento Stores using the API.   While it is in the early stages of development, it's worth a look.

If you haven't played with Geckoboard yet, I'd thoroughly recommend signing up and awaiting a beta invite.  See some dashboards in action on the <a href="http://www.facebook.com/album.php?aid=40199&id=153177308049200">Geckoboard Facebook page</a>.
