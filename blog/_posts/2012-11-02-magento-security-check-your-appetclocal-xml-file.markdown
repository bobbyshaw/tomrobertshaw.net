---
layout: post
status: publish
published: true
title: ! 'Magento Security: Check your app/etc/local.xml file.'
categories:
    - Magento
---
The local.xml that can found in the app/etc/ folder of your Magento installation.  It contains the database connection details to your store and the encryption key used to secure data. If a nefarious individual laid his hands on this, he/she would have everything they could want.

With the results from the upcoming eCommerce survey (soon to be released), I did some investigating and found that 156 out of 8082 Magento sites had publicly accessible app/etc/local.xml.  That's a whole load of customer data that people could run off with.

Once I'd sneaked in and set myself up with some cushty voucher codes (lol jk), I emailed every single one of these sites to let them know.  Now I'm writing this as a reminder to all those with a Magento store, who have built a Magento store, or know someone who has got one.  Please double check and get yourself secured.  Talk to your developer or host if you're not sure.  

<h2>Is your app/etc/local.xml visible?</h2>

To check whether you have an issue visit this URL in your browser:

<code>http://[your_magento_store.com]/app/etc/local.xml</code>

If you see a page of XML, then you have a problem.

<h2>How to solve it?</h2>

Now, if you're not sure, you probably should be getting someone else in. Otherwise...

If you are using Apache, there is a .htaccess file in the app/ folder that should be restricting the display of this file. If this isn't taking effect, then it's likely that your Apache server hasn't got AllowOverrides enabled for this directory.
