---
layout: post
status: publish
published: true
title: Catalog Prices Including Tax Not Working in Magento 1.4
categories:
- Magento Development
---
I was having the issue where even though I set catalog prices to be including tax, Magento was still adding tax on top of the product's unit price.

Changing the tax calculation option to 'excluding tax' did not even affect the prices shown on the frontend.

After a quick Google search, I found someone else had fixed the same problem on a Magento <a href="http://www.magentocommerce.com/boards/viewthread/78069/">forum thread</a>:

Simply go to:

<pre "text">System > Configuration > Sales > Shipping Settings > Origin</pre>

and make sure the origin is set to the appropriate country.  In this case I had to change from US to UK.
