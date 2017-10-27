---
layout: post
status: publish
published: true
title: 'Magento Themes: Using locales with translate.csv'
categories:
    - Magento
---
I have been converting Photoshop designs into Magento themes recently and wanted to leave a couple of tips.

Say for example, you wanted to change every mention of  'Shopping Cart' or perhaps the top links.  Finding every location in Magento's template files would be time consuming, and missing one would cause an inconsistency that could harm customer experience.

Luckily Magento has just the feature for the job.  Located in <pre lang="text">app/design/frontend/default/default/locale/en_US</pre> we have a translate.csv file.  Obviously this directory will differ depending on the store, theme, and locale.  This .csv file is used to translate the Magento default interface into other <a href="http://www.magentocommerce.com/langs">languages</a> and <a href="http://www.magentocommerce.com/magento-connect/filter/all/languages-locales">locales</a>.

Inside my translate.csv file I have:

<pre lang="text">
"My Cart", "My Basket"
"My Cart (%s item)","My Basket ( %s item )"
"My Cart (%s items)","My Basket ( %s items )"
"Shopping Cart","Shopping Basket"
</pre>

As you can see, we wanted to refer to a basket instead of a cart store-wide.  The <tt>%s</tt> matches the number of items in cart.

So the first quoted item is the text that we wish to replace, and the item after the comma is the text we are going to put in its place.  

Nice and simple, thanks Magento.
