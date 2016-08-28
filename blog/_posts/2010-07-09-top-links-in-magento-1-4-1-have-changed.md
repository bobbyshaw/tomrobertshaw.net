---
layout: post
status: publish
published: true
title: Top Links in Magento 1.4.1 Have Changed
categories:
- Magento Development
---

In previous versions of Magento the top links, i.e.

- My Account
- My Wishlist
- My Cart
- Checkout
- Log In

were called in:

{% highlight text %}
/app/design/frontend/[interface_name]/[theme_name]/template/page/html/top.links.html
{% endhighlight %}


In this file, the `$toplinks` array was looped through and a list of links are echoed.   The proper way to then add extra links to this array is by the `addLink` method in the appropriate layout file.  As some of you will notice this is similar in fashion to the footer links as I described in a previous [post](2010/06/how-to-change-the-footer-links-in-magento/).

The block that was used to define the toplink could be found in:

{% highlight text %}
/app/code/core/Mage/Page/Block/Html/Toplinks.php
{% endhighlight %}

This has now been deprecated, and the toplinks now follow the more generic links template in:

{% highlight text %}
app/code/core/Mage/Page/Block/Template/Links.php
{% endhighlight %}

So, if you were ever tempted to just hack an `&lt;li&gt;` element in the top links foreach loop, there's no doing that any more you naughty girls and boys!  Use Magento's built in awesomeness, that's why it's there!</p>

As an example, in a recent `/layout/page.xml` file I had the code below to add "help" and "contact us" links.

{% highlight xml %}
<block type="page/template_links" name="top.links" as="topLinks">
    <action method="addLink" translate="label title"><label>help</label><url>help</url><title>help</title><prepare/><urlParams/><position>100</position></action>
    <action method="addLink" translate="label title"><label>contact us</label><url>contacts</url><title>contact us</title><prepare/><urlParams/><position>10</position></action>
</block>
{% endhighlight %}



Easy as pie.
