---
layout: post
status: publish
published: true
title: Top Links in Magento 1.4.1 Have Changed
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 240
wordpress_url: http://tomrobertshaw.net/?p=240
date: 2010-07-09 08:42:23.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 1805
  author: handoyo
  author_email: yonghan79@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wOC0xNyAxNDo1NDoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOC0xNyAxMzo1NDoyMyArMDEwMA==
  content: Hi there,i wonder how to add a styled search box into the top links?Thanks...
- id: 1866
  author: Tom Robertshaw
  author_email: tar20@bath.ac.uk
  author_url: ''
  date: !binary |-
    MjAxMC0wOC0xOSAxNDo1Mjo1MCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOC0xOSAxMzo1Mjo1MCArMDEwMA==
  content: Hi Handoyo.    Assuming you still have the default search box in the header,
    the simplest way would be to move it with some extra css.   Do you have something
    that I can look at?
- id: 5489
  author: Boss
  author_email: hasitanh@gmail.com
  author_url: http://www.boss-solutions.at/
  date: !binary |-
    MjAxMy0wOC0yNiAxMToxOTowNyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wOC0yNiAxMDoxOTowNyArMDEwMA==
  content: ! "Hi\r\n\r\nI want to change the names of top menu links.  How can I edit
    the name of menu. Please help   ... the site is http://flyerboss.at/"
---
<p>In previous versions of Magento the top links, i.e.
<pre lang="text">    * My Account
    * My Wishlist
    * My Cart
    * Checkout
    * Log In
</pre>
were called in:</p>

<pre lang="text">/app/design/frontend/[interface_name]/[theme_name]/template/page/html/top.links.html</pre>

<p>In this file, the <tt>$toplinks</tt> array was looped through and a list of links are echoed.   The proper way to then add extra links to this array is by the <tt>addLink</tt> method in the appropriate layout file.  As some of you will notice this is similar in fashion to the footer links as I described in a previous <a href="2010/06/how-to-change-the-footer-links-in-magento/">post</a>.</p>

<p>The block that was used to define the toplink could be found in:
<pre lang="text">/app/code/core/Mage/Page/Block/Html/Toplinks.php</pre></p>

<p>This has now been deprecated, and the toplinks now follow the more generic links template in:
<pre lang="text">app/code/core/Mage/Page/Block/Template/Links.php</pre></p>

<p>So, if you were ever tempted to just hack an <tt>&lt;li&gt;</tt> element in the top links foreach loop, there's no doing that any more you naughty girls and boys!  Use Magento's built in awesomness, that's why it's there!</p>

<p>As an example, in a recent <tt>/layout/page.xml</tt> file I had the code below to add "help" and "contact us" links.</p>
<pre lang="xml">
                <block type="page/template_links" name="top.links" as="topLinks">
                    <action method="addLink" translate="label title"><label>help</label><url>help</url><title>help</title><prepare/><urlParams/><position>100</position></action>
                    <action method="addLink" translate="label title"><label>contact us</label><url>contacts</url><title>contact us</title><prepare/><urlParams/><position>10</position></action>
                </block>
</pre>
Easy as pie.
