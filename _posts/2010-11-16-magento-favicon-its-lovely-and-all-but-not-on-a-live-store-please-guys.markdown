---
layout: post
status: publish
published: true
title: ! 'Magento Favicon: It''s lovely and all, but not on a live store please guys!'
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 868
wordpress_url: http://tomrobertshaw.net/?p=868
date: 2010-11-16 13:08:20.000000000 +00:00
categories:
- Magento Development
tags: []
comments:
- id: 2572
  author: ! 'Tweets that mention Magento Favicon: It’s lovely and all, but not on
    a live store please guys! | Tom Robertshaw -- Topsy.com'
  author_email: ''
  author_url: http://topsy.com/tomrobertshaw.net/2010/11/magento-favicon-its-lovely-and-all-but-not-on-a-live-store-please-guys/?utm_source=pingback&amp;utm_campaign=L2
  date: !binary |-
    MjAxMC0xMS0xNiAxODo0ODo0NCArMDAwMA==
  date_gmt: !binary |-
    MjAxMC0xMS0xNiAxNzo0ODo0NCArMDAwMA==
  content: ! '[...] This post was mentioned on Twitter by Magento Developers, Tom
    Robertshaw. Tom Robertshaw said: Magento Favicon: It’s lovely and all, but not
    on a live store please guys! http://bit.ly/blGjMF [...]'
---
With <a href="2010/11/magento-tops-ecommerce-market-share-november-2010/">November's list</a> of sites running Magento, I thought it would be fun (don't judge me) to look at how many of them were still using the default favicon.

This was a pretty easy process: for each store, I retrieved the favicon and calculated the MD5 hash of it.  I then compared it with the MD5 hash of the Magento favicon <img style="display:inline; margin:0;" src="/img/2010/11/favicon.ico" alt="Magento Favicon" title="Magento Favicon" />.

Out of the 3414 sites found built on Magento, I found that <strong>362 of them were still using the default favicon</strong>.   

Now, I know that it's likely that some of these sites are demo stores for popular <a href="http://www.magentocommerce.com/magento-connect">Magento Connect</a> products.  However, we are still looking at over 10% of the stores that I found.  This is a good deal of Magento developers that are a bit lax when <a href="2010/09/37-point-magento-pre-launch-checklist/">taking their stores live</a>...

Here's a sample of the sites found to still be using the Magento favicon.

<ul><li><a href="http://www.magestore.com">www.magestore.com</a> - rank 52,581 - Magento module and theme developer.</li>
   <li><a href="http://www.edgeteamsports.com">www.edgeteamsports.com</a> - rank 456543 - Sportswear provider</li>
    <li><a href="http://gotronics.com">gotronics.com</a> - rank 758111 - Mobile repair services.</li>
     <li><a href="http://anglingdirect.co.uk">anglingdirect.co.uk</a> - rank 252845 - Fishing tackle and kit</li>
     <li><a href="http://watsons.com/">watsons.com</a> - rank 339559 - Family leisure</li>
</ul>

Oopsy, I also spied a couple of Magento Enterprise stores:

<ul>
    <li><a href="http://www.helti100.no">www.helti100.no</a> - rank 9=37700 - Birthday toys, gifts and decorations</li>
    <li><a href="http://www.365wine.com">www.365wine.com</a> - rank 649238 - Wine seller</li>
</ul>

Just thought I'd share that snippet with you.

Next week, I'll be looking at the default locales used on Magento stores.  Follow me on <a href="http://www.twitter.com/bobbyshaw">twitter</a> to hear about it.
