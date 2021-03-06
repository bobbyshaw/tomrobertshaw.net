---
layout: post
status: publish
published: true
title: How to Change the Footer Links in Magento
categories:
    - Magento
---
Magento's XML layout and template framework and the flexibility that it brings is awesome, but unfortunately it does come with its own learning curve.  This can take some time getting used to if you're unfamiliar with Zend Framework and can turn the most trivial of tasks like modifying the links in the footer of a page somewhat more involved.

So let's have a look at <tt>template/page/html/footer.phtml</tt>

You will be able to see that this gives us the footer div and loads most of the content through:

{% highlight php %}
<?php echo $this->getChildHtml() ?>
{% endhighlight %}

This is looking for xml layout instructions with a reference named "footer".  We find one appearance in cms.xml.

{% highlight xml %}
<reference name="footer">
    <block type="cms/block" name="cms_footer_links" before="footer_links">
         <!--
              The content of this block is taken from the database by its block_id.
              You can manage it in admin CMS -> Static Blocks
          -->
        <action method="setBlockId"><block_id>footer_links</block_id></action>
    </block>
</reference>
{% endhighlight %}

As the comment explains, this merely defines that there is a static block available, named "footer_links" and its content is defined in <tt>Magento Admin->CMS->Static Blocks</tt>.

You can change the static block that is loaded by updating the block id with the name of your block.

You can then create your list of links as appropriate in the Magento backend, the default footer block contains:

{% highlight html %}
<ul>
    <li><a href="\{\{store direct_url="about-magento-demo-store"\}\}">About Us</a></li>
    <li class="last"><a href="\{\{store direct_url="customer-service"\}\}">Customer Service</a></li>
</ul>
{% endhighlight %}

There are a couple of reasons why it's great to edit the footer links in this way.  One is that the store owner can easily change the footer at a later date without needing a professional to hand.  Another, is the flexibility to add different content if you so wish, it doesn't have to be a simple list of links.

Another block with a "footer" reference can be found in page.xml:

{% highlight xml %}
<block type="page/html_footer" name="footer" as="footer" template="page/html/footer.phtml">
    <block type="page/template_links" name="footer_links" as="footer_links" template="page/template/links.phtml"/>
</block>
{% endhighlight %}

In the <tt>page/template/links.phtml</tt> file we can see a function call to <tt>$this->getLinks();</tt>

The structure for this Block is in

<pre lang="text">/app/code/core/Mage/Page/Block/Template/Links.php</pre>

Now layouts can add links to this structure.  So if we take a quick grep of the layout files for block name "footer_links", we can see what else is adding items to the footer links by the <tt>addLink</tt> method.

<strong><tt>layout/rss.xml</tt></strong>

{% highlight xml %}
<reference name="footer_links">
    <action method="addLink" translate="label title" module="rss" ifconfig="rss/config/active"><label>RSS</label><url>rss</url><title>RSS</title><prepare>true</prepare><urlParams/><position/><li/><a>class="link-rss"</a></action>
</reference>
{% endhighlight %}

<strong><tt>layout/catalog.xml</tt></strong>

{% highlight xml %}
<reference name="footer_links">
    <action method="addLink" translate="label title" module="catalog" ifconfig="catalog/seo/site_map"><label>Site Map</label><url helper="catalog/map/getCategoryUrl" /><title>Site Map</title></action>
</reference>
{% endhighlight %}


<strong><tt>layout/catalogsearch.xml</tt></strong>

{% highlight xml %}
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
{% endhighlight %}

<strong><tt>layout/contacts.xml</tt></strong>

{% highlight xml %}
<reference name="footer_links">
    <action method="addLink" translate="label title" module="contacts" ifconfig="contacts/contacts/enabled"><label>Contact Us</label><url>contacts</url><title>Contact Us</title><prepare>true</prepare></action>
</reference>
{% endhighlight %}

Now that you know where each of these are defined you can remove them if necessary in your theme.  Of course, you have now realised that this is also a second method for adding footer links!  The advantage of this method is that if all you need is another link, it doesn't require you to go into the Admin interface to add new cms block.   It all can be done in xml files rather than being in the database.

This took me some time to work out first time around, so I hope it's useful and time-saving to another Magento developer!
