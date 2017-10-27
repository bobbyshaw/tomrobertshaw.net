---
layout: post
status: publish
published: true
title: Having Trouble Importing Product Images into Magento?
categories:
    - Magento
---
So you've done a product import via spreadsheet only to find that none of your products have images.  Bummer.

There are a couple of things that you should check:

<ol>
    <li><strong>/media/import</strong> - ensure that all images that you wanted to import have been placed in this folder of the Magento installation on your server.</li>
    <li><strong>Leading slash</strong> - every image file name in the spreadsheet that you are going to import requires a leading forward slash, e.g. <tt>/my_thumbnail_image.png</tt></li>
</ol>

Once they have been imported you will then be able to delete them from the media/import folder.
