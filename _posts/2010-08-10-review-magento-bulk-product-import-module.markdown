---
layout: post
status: publish
published: true
title: ! 'Review: Magento Bulk Product Import Module'
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 463
wordpress_url: http://tomrobertshaw.net/?p=463
date: 2010-08-10 15:21:43.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 2243
  author: ! 'Comic: Magento Developer Excuses Part 1 | Magento News'
  author_email: ''
  author_url: http://www.magentonews.co.uk/magento-tips/comic-magento-developer-excuses-part-1/
  date: !binary |-
    MjAxMC0wOS0yNCAxMzo1NDo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOS0yNCAxMjo1NDo1NiArMDEwMA==
  content: ! '[...] the downtime on Friday while 270 products were being imported
    with the help of a useful module, I edited this xkcd [...]'
- id: 3702
  author: Praful
  author_email: rajput.praful@gmail.com
  author_url: http://www.burningdesire.co.in
  date: !binary |-
    MjAxMi0wNy0xMyAxNDo1Mzo0NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wNy0xMyAxMzo1Mzo0NiArMDEwMA==
  content: ! "Hello,\r\n\r\nReally it so helpful . I am feeling very glad.\r\n\r\nIt
    was very nice experience to working with magento import module.\r\n\r\nThanks\r\nPraful"
- id: 3707
  author: Darren LeDoux
  author_email: darren@elitetacticalcomponents.com
  author_url: ''
  date: !binary |-
    MjAxMi0wOC0wMiAyMDoyNjoxNCArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wOC0wMiAxOToyNjoxNCArMDEwMA==
  content: We paid this developer to install the Import/Export Product Extension.
    The extension has never worked properly. At first we tried to set up a discussion
    with him to go over specifically what we needed this to do and he refused to arrange
    a call. We paid him up front for the extension and 3 hours of time. His original
    estimate for completing this was 5 to 8 hours. He spent 7 hours on this extension
    and it has bugs in it. Originally he blamed the hosting, but there is not a problem
    on that end. We have had someone look into it, and the problem lies in the extension.
    When we contacted him to fix it, he requested that we purchase more time to fix
    the extension that he installed and has not worked. Poor customer service and
    no accountability for his service.
- id: 3712
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMi0wOC0xNCAxMDozMjoyMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wOC0xNCAwOTozMjoyMSArMDEwMA==
  content: ! "Sorry to hear that you've had problems with the review module.  It's
    been a while since I used it now but my own experience of Scott was that he was
    very helpful and even sent me some alternative code for product image import.\r\n\r\nThe
    best place to check for reviews of the module is on <a href=\"http://www.magentocommerce.com/magento-connect/bolasevich/extension/1894/custom-bulk-product-import-+-export-with-tier-pricing--product-custom-options--configurable-products--bundle-products--grouped-products--downloadable\"
    rel=\"nofollow\">Magento Connect</a> where he has had a lot of first class reviews."
- id: 4998
  author: iLoveMage
  author_email: magentowizards@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMy0wMy0yOCAwODo1NTo0OCArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0yOCAwNzo1NTo0OCArMDAwMA==
  content: ! "Yes Import Configurable and Grouped Products magento extension will
    help you to import your configurable and grouped products into magento store and
    also assign the simple products automatically to their respected configurable
    or grouped products.\r\n\r\nThanks\r\niLoveMage"
---
Time for a product review.  I've used a  Product Import module from Magento Connect for a couple of <a href="http://www.meanbee.com">Meanbee</a> projects now and have been so impressed that I thought I'd share it with you.

Out of the box, Magento does not support the importing of:

<ul>
     <li>Multiple/Gallery Images</li>
     <li>Configurable Products</li>
     <li>Bundle Products</li>
     <li>Related Products</li>
     <li>Cross-sells</li>
     <li>Up-sells</li>
     <li>Custom Options</li>
</ul>

This is severely limiting. This would put many people off Magento if they thought they would have to go through manually populating their catalogue through the administration interface.

Luckily, this is where the community comes in to save the day.  I do love open-source.

<a href="http://www.magentocommerce.com/magento-connect/bolasevich/extension/1894/custom-bulk-product-import-+-export-with-tier-pricing--product-custom-options--configurable-products--bundle-products--grouped-products--downloadable">This</a> module from Scott Bolasevich, while not blessed with a short name... <a href="http://www.magentocommerce.com/magento-connect/bolasevich/extension/1894/custom-bulk-product-import-+-export-with-tier-pricing--product-custom-options--configurable-products--bundle-products--grouped-products--downloadable">Custom Bulk Product Import + Export with Tier Pricing / Product Custom Options / Configurable Products / Bundle Products / Grouped Products / Downloadable</a>, it is exactly what I've wanted.  It covers all of the shortfalls that I mentioned above.

Installing the module wasn't too testing as it comes with sufficient documentation, including samples.  There's some local Mage code to put in the right directory.  Then you create a couple of Advanced Profiles in Magento Admin, one for importing and the other for exporting.  This is simply a case of copy and pasting some XML in to place.

When using it, I found the best way to import products, as always, was to do one product fully in Magento Admin, then export all products through the new advanced profile.   This will give you a standard to work against when adding the rest of your catalogue to the spreadsheet.

<h3>How does it deal with the extra input?</h3>

For multiple images, it adds an extra column "Gallery", where you can put up to three images separated by commas.  The limitation here is that you are required to import all images in one go.  If you need to add one further image, you'll have to reimport all images again from the media/import directory.  Slight annoyance, but not something that's too much hassle.  From discussion with Scott, it seems this is more of a Magento limitation at the moment rather than the module.

When it comes to custom options, I again recommending setting these up for at least one product manually first as the formatting is slightly more complex.  I'll give you an example for setting up colours as custom options on your products:

The header row has:

<pre lang="text">
Color:drop_down:1:0
</pre>

This represents the title, input type, boolean value of whether it is required and another for sort order with other custom options.

One of my products then has:

<pre lang="text">
Green:fixed:0.0000:sku:1|Yellow:fixed:0.0000:sku:2
</pre>

Each option is divided by a vertical line.  The configuration for each option is then partitioned with a colon.  These match up with the configuration for an option if you were doing it manually. So here we have the name, price type, price, sku and sort order.

Specifying bundle products works in a similar manner to custom options.

For related and cross-sell products, there's an extra column where you list the SKU of the related products.  

<h3>Wonderful, 7 Days a Week Support</h3>

What's also really nice about this module is the great support.  I emailed Scott pre and post sales and his response time was excellent and was very helpful.

<h3>Conclusion</h3>

The module is priced at $99.99 which I believe is good value for money.  It quickly pays for itself with the time you save populating the catalogue.   Of course, the more products you have, the more you'll realise a product such as this is going to be essential!

<a href="http://www.magentocommerce.com/magento-connect/bolasevich/extension/1894/custom-bulk-product-import-+-export-with-tier-pricing--product-custom-options--configurable-products--bundle-products--grouped-products--downloadable">Go get it</a>

