---
layout: post
status: publish
published: true
title: How to Add a Static Block to Your Magento Theme
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 263
wordpress_url: http://tomrobertshaw.net/?p=263
date: 2010-07-09 10:06:07.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 3321
  author: Melanie from Tiny Toys
  author_email: info@tinytoys.com.au
  author_url: http://www.tinytoys.com.au/
  date: !binary |-
    MjAxMS0wNS0xMiAwNDozNzoxOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNS0xMiAwMzozNzoxOSArMDEwMA==
  content: ! "My footer links are working fine. But I am trying to add a static block
    for some pages which would be footer text that appears under the footer links.
    \r\n\r\nSo I created a static block and on the page where i wanted it to appear,
    I added this as the custom xml layout update. This way I got the block to appear
    only on the pages that I wanted it to appear on. \r\n\r\n \t                 \t
    \           toy-story-page-footer-block         \t      \r\n\r\nAll this was done
    via the admin, no change in codes. \r\n\r\nBut all of a sudden, none of the footer
    blocks seem to appear, I haven't changed any settings. I use filezilla for ftp
    and I may have accidentally moved some folders, I am trying to figure out if I
    did or not. \r\n\r\nHave been trying to fix this for the past month and have read
    every form possible. \r\n\r\nAny help will be really appreciated."
- id: 3323
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMS0wNS0xMyAwODo1NToyOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNS0xMyAwNzo1NToyOSArMDEwMA==
  content: Hi Melanie, I'll email you as that may be a more appropriate way of helping.
- id: 5399
  author: BIlal
  author_email: rumman_shahid@live.com
  author_url: http://itplanet.pk/wrist-watches/replica-watches/casio/edifice.html
  date: !binary |-
    MjAxMy0wNS0wMyAyMTozNjozOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0wMyAyMDozNjozOSArMDEwMA==
  content: ! "Hi, How Do i Place \"Order This Product\" Form In Product Page...\r\nCan
    Any One Help?"
---
When creating your magento theme, you often will want to insert cms static blocks rather than keeping all of the content in the theme.  The store owner is going to want to change the content now and again and if you do as much as possible with static blocks, they can be edited in the Magento Admin.

Place in the appropriate layout file and scope.  If this was, for example, a static block in the footer, you would need to add it in <tt>app/design/frontend/[interface_name]/[theme_name]/layout/page.xml</tt> inside the scope of the "footer" block.

<pre lang="xml">
<block type="cms/block" name="reference_to_static_block">
    <action method="setBlockId"><block_id>name-of-static-block</block_id></action>
</block>
</pre>

The <tt>name-of-static-block</tt> has to be the static block identifier in <tt>Magento Admin -> CMS -> Static Blocks</tt>

Then in your template, continuing with the example of it being in the footer, we then get static block content using this sweet and simple line in <tt>app/design/frontend/[interface_name]/[theme_name]/template/page/html/footer.phtml</tt>:

<pre lang="php">
<?php echo $this->getChildHtml('reference_to_static_block') ?>
</pre>
