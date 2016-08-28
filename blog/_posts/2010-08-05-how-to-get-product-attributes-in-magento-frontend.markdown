---
layout: post
status: publish
published: true
title: How to Get Product Attributes in Magento Frontend
categories:
- Magento Development
---
Almost every store is going to require custom attributes for its products.  Naturally, you are going to want to advertise some of these features on the category and product listing pages.   So I'd thought I'd take the time to write a short note on how to get this done.

Initially, for each product attribute which you want to use on the product page or category page, you will have tell Magento whether or not they should be made available.

To do this, find the attribute under <tt>Magento Admin -> Catalog -> Attributes -> Manage Attribute</tt> Sets.  Then under frontend properties, near the bottom, you will find options for: "Visible on Product View Page on Front-end" and "Used in Product Listing".  These will allow you to display the attribute on the product page and category page respectively.

Then, when it comes to your theme design, there are a couple of ways that you can retrieve the attribute.  For most you will be able to use:

{% highlight php %}
<?php echo $_product->getAttributeName(); ?>
{% endhighlight %}

For example, suppose you were selling computer monitors and you had a field called <tt>screen_size</tt>.  You would get the product field by:

{% highlight php %}
<?php echo $_product->getScreenSize(); ?>
{% endhighlight %}

However, if the attribute is a dropdown box, this will only return an ID, so you will need to use another method.  Luckily, it's just as simple to remember!  The <tt>getAttributeText</tt> function takes the field name as a parameter.

{% highlight php %}
 <?php echo $_product->getAttributeText('screen_size');  ?>
{% endhighlight %}

That's it! If you cannot get it to work, double check that you have set the right scope for the attribute in admin.
