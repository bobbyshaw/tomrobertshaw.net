---
layout: post
status: publish
published: true
title: What's new in Magento 1.7?
categories:
    - Magento
---
Magento 1.7 is at release candidate version one with <a href="http://www.magentocommerce.com/bug-tracking/search_result/?show_result=1&amp;version=1.7.0.0-rc1">10 open issues</a>.  We should be expecting the full release shortly to tie in with the annual <a href="http://www.imagineecommerce.com/">Imagine Conference</a>.

It's time for a whirlwind overview of some of the new features in Magento 1.7.

<h3>Captcha</h3>

It integrates Zend_Captcha on most customer related forms, e.g. register, login, forgot password, but (somewhat bizarrely) isn't included on the contact form this time around.

<img src="/img/2012/04/Captcha.png" alt="Captcha" title="Captcha" />

<h3>Redesigned iPhone Theme</h3>

Naturally, I went looking for something shiny and I wasn't disappointed.  Magento 1.7 brings a redesigned and rebuilt HTML 5 iPhone theme.

It's really nice and clean, there are some nifty touches like the flipping of products on the category page to see product review information and the add to cart button. It has a definite iPhone feel with the notification icons and grey hatched background used in a few places.

I did notice that any page that uses the new captcha integration in the iPhone theme breaks currently due to the use of a non-existent helper class.  However, <a href="http://www.magentocommerce.com/bug-tracking/issue?issue=13324">this bug</a> has already been reported, fixed and is due for release.

<img src="/img/2012/04/iPhone-Home.png" alt="iPhone - Home" title="iPhone - Home" />

<img src="/img/2012/04/iPhone-Category.png" alr="iPhone - Category" />

<img src="/img/2012/04/iPhone-Category-2.png" alt="iPhone Category 2" />

<img src="/img/2012/04/iPhone-Product.png" alt="iPhone Product" />

<img src="/img/2012/04/iPhone-Cart.png" alt="iPhone Cart" />

<h3>REST API</h3>

I've not had a chance to play, but this version also comes with a brand new REST API.  Yay.

<img src="/img/2012/04/REST.png" alt="REST" />

<h3>Pricing per Customer Group</h3>

It's now possible to set base prices for each customer group.

<img src="/img/2012/04/Group-Prices.png" alt="Group Prices" title="Group Prices" />

<h3>VAT Number Validation</h3>

Customers can now provide their VAT number when is then validated (frontend and backend orders).  The VAT number for the store is now also included in the store information configuration.

<img src="/img/2012/04/VAT-Validation.png" alt="VAT Validation" title="VAT Validation" />

<h3>Indexes</h3>

It is detailed in the release notes that indexers have been refactored. From the admin interface, we do now see an extra column that indicates whether an update is required or not.

<img src="/img/2012/04/Indexes.png" alt="Indexes" title="Indexes" />

<h3>Cookie Message</h3>

In response to the <a href="http://www.cookielaw.org/">EU cookie law</a>, Magento have now included the option to display a message to new customers indicating the necessity of cookies on the site and requesting permission to use them.

<img src="/img/2012/04/Cookie-Message.png" alt="Cookie Message" title="Cookie Message" />

<h3>Manage Currency Symbols</h3>

The ability to manage the currency symbols used around the site rather than being restricted to what is defined in the Zend library.

<img src="/img/2012/04/Manage-Currency.png" alt="Manage Currency" title="Manage Currency" />

<h3>System Backup</h3>

The backup functionality sees some major new features in 1.7.  First thing to notice is that there are now three backup options: "System Backup", "Database and Media", and "Database".  The latter of which we are already familiar with.  The "Database and Media" creates a .tgz of database and media files.  The "System Backup" functionality creates a .tgz of the entire installation (filesystem) of Magento.

<img src="/img/2012/04/Backup.png" alt="Backup" title="Backup" />

All backups now request a name to be given and also give the option of putting the store in maintenance mode while the backup is carried out.

<img src="/img/2012/04/System-Backup.png" alt="System Backup" title="System Backup" />

The fancy new feature on top of all of this is the ability to rollback to any one of these.  While everyone should already be doing their own secondary and tertiary offsite backups, this is a handy feature nonetheless. You shouldn't have a Magento store that isn't managed using a version control system, so I'd personally be cautious about ever using the rollback of a System Backup, but it's a nice to have.

<img src="/img/2012/04/Rollback.png" alt="Rollback" />

<h3>Auto-generation of Coupon Codes</h3>

Previously, by default in Magento, when creating a shopping cart price rule, and you wanted to specify a coupon you could only specify one.  Now, there's built-in functionality to auto-generate a pool of codes for a particular rule.

<img src="/img/2012/04/Autogen-Coupon-Codes.png" alt="Autogen Coupon Codes" title="Autogen Coupon Codes" />

<h3>And plenty more&hellip;</h3>

I have only spent a couple of hours dabbling with the latest release.  There are even more features, improvements and bug fixes that are being shipped.  One extra item that deserves a mention is the new "Cache[sic] on delivery" payment method!  Go and check out the <a href="http://www.magentocommerce.com/download/release_notes#Release Notes - Magento 1.7.0.0-rc1 (Mar 28, 2012)">full release notes</a>.
