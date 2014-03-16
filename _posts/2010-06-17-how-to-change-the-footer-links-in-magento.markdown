---
layout: post
status: publish
published: true
title: How to Change the Footer Links in Magento
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 177
wordpress_url: http://tomrobertshaw.net/?p=177
date: 2010-06-17 19:00:10.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 3356
  author: Khinda
  author_email: cskhinda@rediffmail.com
  author_url: http://www.prolificrafts.com/
  date: !binary |-
    MjAxMS0wNy0yOCAwNzoxMToxNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0yOCAwNjoxMToxNSArMDEwMA==
  content: thanks alot for the help..... nicely explained....
- id: 3452
  author: Ezekiel Diligence
  author_email: ezekieldiligence@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMS0xMi0xNCAwMzoyNzoxNCArMDAwMA==
  date_gmt: !binary |-
    MjAxMS0xMi0xNCAwMjoyNzoxNCArMDAwMA==
  content: This was a massive help today in clearing up some of the basic logic working
    behind the scenes. A definite bookmark.  Thanks loads Tom.
- id: 3506
  author: BabooMamo
  author_email: kretosh@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMy0xNCAxNjozMTozNiArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMy0xNCAxNTozMTozNiArMDAwMA==
  content: Yes, this was of great help. Thank you!
- id: 3587
  author: Jay
  author_email: israelj@redeyeusa.com
  author_url: ''
  date: !binary |-
    MjAxMi0wNC0xMiAxNzozNjoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wNC0xMiAxNjozNjoxNiArMDEwMA==
  content: I'm sure this helps somebody who knows what they are doing. I just want
    to change the "contact us", "about us", and "customer service" links so they display
    info relevant to my business. I don't follow any of the above.
- id: 3755
  author: Plamen Stoyanov
  author_email: plamen.stoyanov.bg@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wOS0yOCAxNzoxODo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wOS0yOCAxNjoxODo1NSArMDEwMA==
  content: Hi, I need to re-order the footer links and it is mix of static block links
    and structural blocks defined in the xml. How can I do it? What is the easiest
    way? Can I pu all the links in the static block? I need a way to link "Contact
    Us" and other block.
- id: 4202
  author: yang chong
  author_email: yanguchong@hotmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0xMS0yNCAyMDowMjowOSArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMS0yNCAxOTowMjowOSArMDAwMA==
  content: thanks appreciate the write up
- id: 4207
  author: Rania
  author_email: raniagk@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0xMS0yNSAwOTowMTo1MCArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMS0yNSAwODowMTo1MCArMDAwMA==
  content: thank you very much for your article. I was finally able to remove the
    existing footer links.
- id: 4802
  author: seamless gutters
  author_email: katharina-peterson@aol.com
  author_url: http://gutterguardsvancouver.webs.com/
  date: !binary |-
    MjAxMy0wMS0xNCAwNzo1Nzo0MSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMS0xNCAwNjo1Nzo0MSArMDAwMA==
  content: ! "Hey there just wanted to give you a quick heads up and let you know
    a few of the pictures aren't loading properly. I'm not sure why but I think its
    a linking \r\nissue. I've tried it in two different internet browsers and both
    show the same outcome."
- id: 5465
  author: MagePsycho
  author_email: magepsycho@gmail.com
  author_url: http://www.magepsycho.com
  date: !binary |-
    MjAxMy0wNy0yNiAxNToyNTozOCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNy0yNiAxNDoyNTozOCArMDEwMA==
  content: ! "In order to remove any links like Top Links, Footer Links, My Account
    Links etc via admin interface, I would recommend the following free extension
    which just works out of the box: \r\nhttp://www.magentocommerce.com/magento-connect/frontend-links-manager.html
    \r\nHappy E-Commerce!"
- id: 5492
  author: Jitendra
  author_email: jitendra.m@cisinlabs.com
  author_url: ''
  date: !binary |-
    MjAxMy0wOS0wNCAwOTozOTozNiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wOS0wNCAwODozOTozNiArMDEwMA==
  content: Nice guide to change footer links, I like it. It is good step by step tutorial
    to change footer links.
---
Magento's XML layout and template framework and the flexibility that it brings is awesome, but unfortunately it does come with its own learning curve.  This can take some time getting used to if you're unfamiliar with Zend Framework and can turn the most trivial of tasks like modifying the links in the footer of a page somewhat more involved.

So let's have a look at <tt>template/page/html/footer.phtml</tt>

You will be able to see that this gives us the footer div and loads most of the content through:

<pre lang="php">
<?php echo $this->getChildHtml() ?>
</pre>

This is looking for xml layout instructions with a reference named "footer".  We find one appearance in cms.xml.

<pre lang="xml">
<reference name="footer">
    <block type="cms/block" name="cms_footer_links" before="footer_links">
         <!--
              The content of this block is taken from the database by its block_id.
              You can manage it in admin CMS -> Static Blocks
          -->
        <action method="setBlockId"><block_id>footer_links</block_id></action>
    </block>
</reference>
</pre>

As the comment explains, this merely defines that there is a static block available, named "footer_links" and its content is defined in <tt>Magento Admin->CMS->Static Blocks</tt>.

You can change the static block that is loaded by updating the block id with the name of your block.

You can then create your list of links as appropriate in the Magento backend, the default footer block contains:

<pre lang="html4strict">
<ul>
    <li><a href="{{store direct_url="about-magento-demo-store"}}">About Us</a></li>
    <li class="last"><a href="{{store direct_url="customer-service"}}">Customer Service</a></li>
</ul>
</pre>

There are a couple of reasons why it's great to edit the footer links in this way.  One is that the store owner can easily change the footer at a later date without needing a professional to hand.  Another, is the flexibility to add different content if you so wish, it doesn't have to be a simple list of links.

Another block with a "footer" reference can be found in page.xml:

<pre lang="xml">
<block type="page/html_footer" name="footer" as="footer" template="page/html/footer.phtml">
    <block type="page/template_links" name="footer_links" as="footer_links" template="page/template/links.phtml"/>
</block>
</pre>

In the <tt>page/template/links.phtml</tt> file we can see a function call to <tt>$this->getLinks();</tt>

The structure for this Block is in 

<pre lang="text">/app/code/core/Mage/Page/Block/Template/Links.php</pre>

Now layouts can add links to this structure.  So if we take a quick grep of the layout files for block name "footer_links", we can see what else is adding items to the footer links by the <tt>addLink</tt> method.

<strong><tt>layout/rss.xml</tt></strong>

<pre lang="xml">
<reference name="footer_links">
    <action method="addLink" translate="label title" module="rss" ifconfig="rss/config/active"><label>RSS</label><url>rss</url><title>RSS</title><prepare>true</prepare><urlParams/><position/><li/><a>class="link-rss"</a></action>
</reference>
</pre>

<strong><tt>layout/catalog.xml</tt></strong>

<pre lang="xml">
<reference name="footer_links">
    <action method="addLink" translate="label title" module="catalog" ifconfig="catalog/seo/site_map"><label>Site Map</label><url helper="catalog/map/getCategoryUrl" /><title>Site Map</title></action>
</reference>
</pre>

<strong><tt>layout/catalogsearch.xml</tt></strong>

<pre lang="xml">
<reference name="footer_links">
    <action method="addLink" translate="label title" module="catalogsearch" ifconfig="catalog/seo/search_terms">
        <label>Search Terms</label>
        <url helper="catalogsearch/getSearchTermUrl" />
        <title>Search Terms</title>
    </action>
    <action method="addLink" translate="label title" module="catalogsearch">
        <label>Advanced Search</label>
        <url helper="catalogsearch/getAdvancedSearchUrl" />
        <title>Advanced Search</title>
    </action>
</reference>
</pre>

<strong><tt>layout/contacts.xml</tt></strong>

<pre lang="xml">
<reference name="footer_links">
    <action method="addLink" translate="label title" module="contacts" ifconfig="contacts/contacts/enabled"><label>Contact Us</label><url>contacts</url><title>Contact Us</title><prepare>true</prepare></action>
</reference>
</pre>

Now that you know where each of these are defined you can remove them if necessary in your theme.  Of course, you have now realised that this is also a second method for adding footer links!  The advantage of this method is that if all you need is another link, it doesn't require you to go into the Admin interface to add new cms block.   It all can be done in xml files rather than being in the database.

This took me some time to work out first time around, so I hope it's useful and time-saving to another Magento developer! 
