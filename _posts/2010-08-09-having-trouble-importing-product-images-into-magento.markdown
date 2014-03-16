---
layout: post
status: publish
published: true
title: Having Trouble Importing Product Images into Magento?
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 459
wordpress_url: http://tomrobertshaw.net/?p=459
date: 2010-08-09 08:12:29.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 2239
  author: ! 'Comic: Magento Developer Excuses Part 1 | Magento News'
  author_email: ''
  author_url: http://www.magentonews.co.uk/magento-tips/comic-magento-developer-excuses-part-1/
  date: !binary |-
    MjAxMC0wOS0yNCAxMzoxMTozOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOS0yNCAxMjoxMTozOSArMDEwMA==
  content: ! '[...] Then, you come to import and find you have completed a column
    wrong, or forgotten to put the leading slash in front of the image file names
    and find you need to run the import profile all over [...]'
- id: 3718
  author: Bel
  author_email: hotbel@gmail.com
  author_url: http://Thanksalotttttttttttt
  date: !binary |-
    MjAxMi0wOC0yOCAyMzoyNTo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wOC0yOCAyMjoyNTo0OSArMDEwMA==
  content: ! "Saved me bro =))\r\n\r\nBest regards from Brazil !\r\n\r\nTkz a lotttt"
- id: 4810
  author: Samuel
  author_email: brucelight428@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMy0wMS0yOCAxMjoxODozOSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMS0yOCAxMToxODozOSArMDAwMA==
  content: I found this article really interesting and want to join your feed and
    look forward to seeking more of your great posts.
- id: 4811
  author: Conrad
  author_email: conradcooper32@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMy0wMS0yOCAxMzowMTo0NSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMS0yOCAxMjowMTo0NSArMDAwMA==
  content: To avoid issues I use one of the most popular and powerful software for
    images Import. This is Store Manager for Magento desktop application. It can import
    images if they are remote ones, for that just need to indicate image URL in .csv
    file. Also there is ability to import base, small of thumbnail images (if you
    have different ones) or re-size small images and thumbnails from the main image
    if you have one image. There's free trial available, so all who are interested
    can try it with no delays.
---
So you've done a product import via spreadsheet only to find that none of your products have images.  Bummer.

There are a couple of things that you should check:

<ol>
    <li><strong>/media/import</strong> - ensure that all images that you wanted to import have been placed in this folder of the Magento installation on your server.</li> 
    <li><strong>Leading slash</strong> - every image file name in the spreadsheet that you are going to import requires a leading forward slash, e.g. <tt>/my_thumbnail_image.png</tt></li>
</ol>

Once they have been imported you will then be able to delete them from the media/import folder.
