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
comments:
- id: 3347
  author: tuba
  author_email: webdev244-magento@yahoo.co.in
  author_url: http://psdtomagento.net
  date: !binary |-
    MjAxMS0wNy0wNyAxNzoxNDoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0wNyAxNjoxNDoyNyArMDEwMA==
  content: Worked perfectly! I am using Magento 1.5.1.0. Thank you for the post.
- id: 3350
  author: KevinH
  author_email: info@kevinhorst.de
  author_url: ''
  date: !binary |-
    MjAxMS0wNy0xMSAxNjo0MToxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0xMSAxNTo0MToxMiArMDEwMA==
  content: ! "I wrote a new Extension for this:\r\nhttp://www.magentocommerce.com/magento-connect/kevinhorst/extension/6991/kh_cartqtybuttons"
- id: 3351
  author: ian
  author_email: ian_gallimore@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMS0wNy0xMiAxODowNTo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0xMiAxNzowNTo1NiArMDEwMA==
  content: ! "Hi,\r\n\r\nDo you know if this is meant to work with 1.4 as I'm getting
    an error on the final line of the java-script:\r\n\r\n$(\"products-table-basket\").submit();\r\n\r\nNowhere
    in the cart.phtml can I see any reference to $product-table-basket. Am I missing
    something?\r\n\r\nThanks,\r\nIan"
- id: 3352
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMS0wNy0xMiAxODoxNTowNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0xMiAxNzoxNTowNSArMDEwMA==
  content: Ah yes, from 1.4 they removed the id from the /checkout/cart/updatePost/
    form. You should just be able to add it back in, worked for me.
- id: 3460
  author: Fred
  author_email: f.rofl@live.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMS0zMSAxNTo0OTowMyArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMS0zMSAxNDo0OTowMyArMDAwMA==
  content: ! "if you want to use this on the cart page here's my approach:\r\n<code>\r\n&lt;select
    name=&quot;cart[getId() ?&gt;][qty]\" class=\"input-text qty\" id=\"qty\" onchange=\"form.submit()\"&gt;\r\ngetQty()
    == $value) $selected = ' selected=\"selected\"';\r\n  else                           $selected
    = '';\r\n?&gt;\r\n&lt;option  value=\"\"&gt; \r\n\r\n\r\n</code>"
- id: 3461
  author: Fred
  author_email: f.rofl@live.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMS0zMSAxNTo1MDoxOCArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMS0zMSAxNDo1MDoxOCArMDAwMA==
  content: ! "it formatted the code\r\nCheck it here http://pastebin.com/ipGfqgLs"
- id: 3684
  author: Neal
  author_email: erogenos6@aol.com
  author_url: ''
  date: !binary |-
    MjAxMi0wNS0xNCAxMzo1ODozMCArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wNS0xNCAxMjo1ODozMCArMDEwMA==
  content: Where do you add the javascript to? I tried adding it under the table above
    the other script, along with trying to add it to other locations all over the
    page to no avail. Does this work on 1.6?
- id: 5425
  author: Aruna
  author_email: arunashetty.15@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMy0wNS0yOCAwODo0NTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0yOCAwNzo0NTo0MyArMDEwMA==
  content: ! "Hi,i am using magento 1.7.i want to add Quantity increase and decrease
    buttons in the cart block which is present in the home page.i have followed all
    the steps given.Quantity is increasing in the input text you have given.but when
    i do check out the values in the input box (you have given) are not passing to
    cart page and the amount of items are not updated in home page as well as  in
    cart page.Please help me out in solving this.\r\nThanks in advance"
- id: 5443
  author: Sheri
  author_email: arthropodboy@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMy0wNi0yMyAxNzo0NTo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNi0yMyAxNjo0NTo1NCArMDEwMA==
  content: ! "To make this work in Magento 1.7:\r\n\r\nGo to app/design/frontend/[interface_name]/[theme_name]/template/checkout/cart.phtml
    and change the  tag that starts the cart table to the following:\r\n<code>\r\n&lt;form
    action=&quot;getUrl('checkout/cart/updatePost') ?&gt;\" method=\"post\" id=\"products-table-basket\"&gt;\r\n</code>\r\n\r\nThat
    should do it."
- id: 5444
  author: Sheri
  author_email: arthropodboy@yahoo.com
  author_url: http://www.1800nursery.com
  date: !binary |-
    MjAxMy0wNi0yMyAxNzo1ODozMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNi0yMyAxNjo1ODozMyArMDEwMA==
  content: Everything that Tom states in his article is correct for 1.7 including
    the placement of the javascript.  Just change the <code></code> tag above.
- id: 5487
  author: clement
  author_email: clement@fitdigital.co.uk
  author_url: ''
  date: !binary |-
    MjAxMy0wOC0yMyAxMjowMzoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wOC0yMyAxMTowMzoxMiArMDEwMA==
  content: ! "to get it to work properly with jquery I changed the javascript to this:\r\n\r\nvar
    qty_id = \"#cart\\\\[\" + id + \"\\\\]\\\\[qty\\\\]\";\r\nvar currentVal = parseInt(
    jQuery(qty_id).val() );\r\nif ( currentVal != NaN )\r\n{\r\n    jQuery(qty_id).val(
    (currentVal + num) );\r\n    jQuery(\"#products-table-basket\").submit();\r\n}"
- id: 5503
  author: Fidulho
  author_email: ale_00@msn.com
  author_url: ''
  date: !binary |-
    MjAxMy0wOS0zMCAxNzowMDoxMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wOS0zMCAxNjowMDoxMyArMDEwMA==
  content: ! "In Chrome and IE10, this works good, but in IE8-9 this doesn't work!\r\n\r\nHave
    a fix for this?"
---
When a customer views their cart, each product that they have added will be listed.   By default, Magento provides info for each product, e.g. name, image, quantity, price.  Customers can change the quantity in the text box and submit the "Update Shopping Cart" button.  That is a lot of effort for the user, we want to make this process as smooth as possible.

We can make it easier by adding +1 and -1 links to change the quantity of each item.   We will do this with some very simple JavaScript which takes the current value and adjusts it.  Once this has been done, we submit the form through JavaScript to reduce customer effort.

In my implementation I have used images for the links, but obviously you could use text, e.g (&uarr; &darr;).    The following two code snippets should surround the input quantity box on the shopping cart/basket page:

<pre lang="php">
<input name="cart[<?php echo $_item->getId() ?>][qty]" value="<?php echo $this->getQty() ?>" size="4" title="<?php echo $this->__('Qty') ?>" class="input-text qty" maxlength="12" id="cart[<?php echo $_item->getId() ?>][qty]"/>
</pre>

This can be found in <tt> app/design/frontend/[interface_name]/[theme_name]/template/checkout/cart/item/default.phtml</tt>

Increase by one:
<pre lang="php">
<a onclick="changeItemQuantity( <?php echo $_item->getId() ?>, 1 ); return false;" href="#"><img alt="add-arw" src="<?php echo $this->getSkinUrl('images/add-arw.png') ?>"></a>
</pre>

Decrease by one:

<pre lang="php">
<a onclick="changeItemQuantity( <?php echo $_item->getId() ?>, -1 ); return false;" href="#"><img alt="add-arw" src="<?php echo $this->getSkinUrl('images/add-arw.png') ?>"></a>
</pre>

Now the JavaScript function.  We do not want it duplicated for every item so you can either put it in your theme's JavaScript file or just below the table in the parent template - <tt>app/design/frontend/[interface_name]/[theme_name]/template/checkout/cart.phtml</tt>

After the quantity is changed, we submit the cart form so that the totals are kept up to date.  When decreasing quantity, Magento removes the item after form submission if the quantity is 0.

<pre lang="javascript">
function changeItemQuantity( id , num ) {
    var qty_id = "cart[" + id + "][qty]";
    var currentVal = parseInt( $(qty_id).value );
    if ( currentVal != NaN )
    {
        $(qty_id).value = currentVal + num;
        $("products-table-basket").submit();
    }
}
</pre>

There, a tiny bit of JavaScript which will help to ease the customer's journey to purchasing from your Magento Store!
