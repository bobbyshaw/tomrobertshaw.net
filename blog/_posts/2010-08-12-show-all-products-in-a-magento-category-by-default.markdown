---
layout: post
status: publish
published: true
title: Show All Products in a Magento Category by Default
categories:
    - Magento
---
If you don't have many items in each of your categories, you may be interested in showing all products by default.   The customer can then request to show less products and enforce pagination if they so wish.

This was exactly the request I recently got from a client.  Although I would not recommend it if you have too many products as it will result in a lot of non-requested scrolling for the visitor!

After checking the Magento Admin, I found that there was not an option to do this.  You can set the default items per page, but it has to be a numeric value.

So, I went into the Magento code and decided to modify the block in order to get the desired result.  If you would like to follow suit, first copy <tt>app/code/core/Mage/Catalog/Block/Product/List/Toolbar.php</tt> to the <tt>app/code/local/</tt> directory ready to make changes.  This is best practice when making any changes to Magento core code.  This way, when you do an upgrade, your changes will not be overwritten.

Inside this file, the function that we are interested in is <tt>getLimit()</tt> beginning around line 723.

{% highlight php %}
<?php
$limit = $this->getRequest()->getParam($this->getLimitVarName());
if ($limit && isset($limits[$limit])) {
    if ($limit == $defaultLimit) {
        Mage::getSingleton('catalog/session')->unsLimitPage();
    } else {
        $this->_memorizeParam('limit_page', $limit);
    }   
} else {
    $limit = Mage::getSingleton('catalog/session')->getLimitPage();
}
?>
{% endhighlight %}

This else on the outer if statement needs to be changed to a string rather than a number.  So for example:

{% highlight php %}
<?php
...
} else {
    $limit = 'all';
}   
?>
{% endhighlight %}

And voilá, now all of your product listing pages will display all items by default.
