---
layout: post
status: publish
published: true
title: Add Increase and Decrease Quantity Buttons to Items in Magento Cart
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 517
wordpress_url: http://tomrobertshaw.net/?p=517
date: 2010-08-14 13:49:22.000000000 +01:00
categories:
- Magento Development
tags: []

---
When a customer views their cart, each product that they have added will be listed.   By default, Magento provides info for each product, e.g. name, image, quantity, price.  Customers can change the quantity in the text box and submit the "Update Shopping Cart" button.  That is a lot of effort for the user, we want to make this process as smooth as possible.

We can make it easier by adding +1 and -1 links to change the quantity of each item.   We will do this with some very simple JavaScript which takes the current value and adjusts it.  Once this has been done, we submit the form through JavaScript to reduce customer effort.

In my implementation I have used images for the links, but obviously you could use text, e.g (&uarr; &darr;).    The following two code snippets should surround the input quantity box on the shopping cart/basket page:

{% highlight php %}
<?php 
  <input name="cart[<?php echo $_item->getId() ?>][qty]" value="<?php echo $this->getQty() ?>" size="4" title="<?php echo $this->__('Qty') ?>" class="input-text qty" maxlength="12" id="cart[<?php echo $_item->getId() ?>][qty]"/>
?>
{% endhighlight %}

This can be found in <tt> app/design/frontend/[interface_name]/[theme_name]/template/checkout/cart/item/default.phtml</tt>

Increase by one:

{% highlight php %}
<?php
  <a onclick="changeItemQuantity( <?php echo $_item->getId() ?>, 1 ); return false;" href="#"><img alt="add-arw" src="<?php echo $this->getSkinUrl('images/add-arw.png') ?>"></a>
?>
{% endhighlight %}

Decrease by one:

{% highlight php %}
<?php
  <a onclick="changeItemQuantity( <?php echo $_item->getId() ?>, -1 ); return false;" href="#"><img alt="add-arw" src="<?php echo $this->getSkinUrl('images/add-arw.png') ?>"></a>
?>
{% endhighlight %}

Now the JavaScript function.  We do not want it duplicated for every item so you can either put it in your theme's JavaScript file or just below the table in the parent template - <tt>app/design/frontend/[interface_name]/[theme_name]/template/checkout/cart.phtml</tt>

After the quantity is changed, we submit the cart form so that the totals are kept up to date.  When decreasing quantity, Magento removes the item after form submission if the quantity is 0.

{% highlight javascript %}
function changeItemQuantity( id , num ) {
    var qty_id = "cart[" + id + "][qty]";
    var currentVal = parseInt( $(qty_id).value );
    if ( currentVal != NaN )
    {
        $(qty_id).value = currentVal + num;
        $("products-table-basket").submit();
    }
}
{% endhighlight %}

There, a tiny bit of JavaScript which will help to ease the customer's journey to purchasing from your Magento Store!
