---
layout: post
status: publish
published: true
title: ! 'Allow Social Promotion on Magento Order Success Page '
author: Tom Robertshaw
categories:
- Magento Development
---
<img src="/img/2010/07/Order-Success-Page-300x209.png" alt="Order Success Page" title="Order Success Page" />

We all know that product promotion from a friend or family member is the best kind of advertising.  This is especially true when we know they have put their money where their mouth is and bought the produce themselves.

So, one evening I decided to play around with an idea.  I felt that the Magento Order Success page - the page that customers are redirected to after completing their order, was under-used.  It merely thanked them for their custom and gave them their order reference number.  Time for some customisation!

I modified the order success page using layout updates to use my own template.  After the standard order information I looped through the products in the order and displayed the product name, product image and then two links.  One directed users to twitter whereon (if logged in) their status box would be completed with the message:

{% highlight text %}
I just bought a $product_name from $shop_name. $product_url
{% endhighlight %}

The other used Facebook's <a href="http://wiki.developers.facebook.com/index.php/Facebook_Share">share API</a> to post the product url.

To get the order information on the order success page, I did this:

{% highlight php %}
<?php $_order = Mage::getModel('sales/order')->loadByIncrementId($this->getOrderId()); ?>
<?php foreach ( $_order->getAllItems() as $_item ): ?>
	<?php $_product = Mage::getModel('catalog/product')->load($_item->getProductId()); ?>
<?php endforeach; ?>
{% endhighlight %}

I knew that some product URLs would be long and ugly for twitter so I wrote a short Model and function that takes a bit.ly users username, API key and long url and makes the request to bit.ly.  It then returns the shortened url (or the long one if it fails).  These details can then be set in the Magento config for the module.

<img src="/img/2010/07/Internet-Explorer-Degradation.png" alt="Internet Explorer Degradation" title="Internet Explorer Degradation" />

As part of the fun, I experimented with using solely css and html for the Facebook and Twitter icons instead of images.  I came across <a href="http://nicolasgallagher.com/experimental-pure-css-social-media-icons/">Nicolas Gallagher's</a> piece on the topic and decided to try it out.  I was impressed with the results, very swish.

Most of the modern browsers support the shadow and radius used apart from Internet Explorer.   Although, as you can see in the demo shot in IE, although the funky effects are missing, the icons are still recognisable so I decided to leave them in the module.

You can download this module for free from <a href="http://www.magentocommerce.com/magento-connect/Meanbee/extension/4103/meanbee_ordershare">Magento Connect</a>.
