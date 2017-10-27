---
layout: post
status: publish
published: true
title: 37 Point Magento Pre-Launch Checklist
categories:
    - Magento
---
[Guess what, I'm now available as a <a href="/img/2010/11/Magento-Pre-Launch-Checklist.pdf">PDF</a>.]

Taking any website live can be a very stressful time as a developer.   Your client is pushing to go live as soon as possible and the pressure can make it easy to forget steps.  I've compiled some tips and tricks that I have picked up on <a href="http://www.meanbee.com">Meanbee's</a> projects for moving your Magento store from development to production.

<ol id="contents">
  <li><a href="#baseurls">Base URLs</a></li>
  <li><a href="#favicon">Favicon.ico</a></li>
  <li><a href="#htmlhead">HTML Head</a></li>
  <li><a href="#placeholder">Placeholder Images</a></li>
  <li><a href="#contact">Contact Information</a></li>
  <li><a href="#transactional">Transactional Emails</a></li>
  <li><a href="#plaintext">Plain-text Passwords</a></li>
  <li><a href="#adminurl">Change Admin Url</a></li>
  <li><a href="#invoice">Invoice and Packing Slip Design</a></li>
  <li><a href="#tax">Tax Settings</a></li>
  <li><a href="#shippingorigin">Shipping Origin</a></li>
  <li><a href="#404">404 Page</a></li>
  <li><a href="#cleardata">Clear Test Data</a></li>
  <li><a href="#inventory">Product Inventory</a></li>
  <li><a href="#flushjs">Flush JavaScript to 1 file</a></li>
  <li><a href="#minifycss">Minify the CSS</a></li>
  <li><a href="#flushcss">Flush CSS to 1 file</a></li>
  <li><a href="#maintenance">Maintenance.flag</a></li>
  <li><a href="#errorpage">Error Page Design</a></li>
  <li><a href="#indexmanagement">Index Management</a></li>
  <li class="col2 col-top"><a href="#caching">Enable Caching</a></li>
  <li class="col2"><a href="#compilation">System Compilation</a></li>
  <li class="col2"><a href="#analytics">Google Analytics</a></li>
  <li class="col2"><a href="#googlebase">Google Base</a></li>
  <li class="col2"><a href="#sitemap">Google Sitemap</a></li>
  <li class="col2"><a href="#newsletter">Newsletter Subscriptions</a></li>
  <li class="col2"><a href="#shippingmethods">Shipping Methods</a></li>
  <li class="col2"><a href="#paymentgateways">Payment Gateways</a></li>
  <li class="col2"><a href="#ssl">SSL Certificate</a></li>
  <li class="col2"><a href="#modulelicenses">Module Licenses</a></li>
  <li class="col2"><a href="#phpconfig">PHP Configuration</a></li>
  <li class="col2"><a href="#crons">Turn on the Crons</a></li>
  <li class="col2"><a href="#logcleaning">Log Cleaning</a></li>
  <li class="col2"><a href="#disablemodules">Disable Unnecessary Modules</a></li>
  <li class="col2"><a href="#backup">Database Backup and Restoration</a></li>
  <li class="col2"><a href="#fastweb">"The Web should be fast"</a></li>
  <li class="col2"><a href="#beprepared">Be prepared</a></li>
</ol>
<ol>
    <li id="baseurls"><h2>Base URLs</h2></li>

	<p class="tick">These are URLs that are stored in the database table core_config_data but can also be accessed through the admin interface if you have access to it: <tt>System &rarr; Configuration &rarr; Web</tt>.   When you move the site, they will need to be updated otherwise all URLs will be referring back to the staging site.  P.S. Don't forget the trailing forward slash!</p>

    <li id="favicon"><h2>Favicon</h2></li>

    <p class="tick">Magento can be hard work at times, but that does not mean you can get away with making a fool out of yourself by forgetting to create a favicon.</p>

    <li id="htmlhead"><h2>HTML Head</h2></li>

    <p class="tick">Do not leave the original settings in the HTML head.  You should change the title and set the meta description and keywords, these are important for SEO.  <tt>System &rarr; Configuration &rarr; General &rarr; Design &rarr; HTML Head</tt>.</p>

   <li id="placeholder"><h2>Placeholder Images</h2></li>

   <p class="tick">These are the images shown when a product does not have its own image.   Create a default set for your site and place them in: <tt>catalog/products/placeholder/image.jpg</tt>, <tt>catalog/products/placeholder/small_image.jpg</tt> and <tt>catalog/products/placeholder/thumbnail.jpg</tt>.   Alternatively they can be uploaded in admin: <tt>System &rarr; Configuration &rarr; Catalog &rarr; Catalog &rarr; Product Image Placeholders</tt>.

    <li id="contact"><h2>Contact Information</h2></li>

    <p class="tick">Ensure all the store information and email addresses are set.  You will be able to find these in <tt>System &rarr; Configuration &rarr; General and System &rarr; Configuration &rarr; Store Email Addresses</tt>.</p>

    <li id="transactional"><h2>Transactional Emails</h2></li>

    <p class="tick">Transactional emails use a different logo to the default one.  Make sure that the image that you want to use is saved in your theme directory as logo_email.gif.</p>

    <p>Most of the emails will now be sorted due to using the configuration that you have already set.  However, there are a couple of templates that as of version 1.4.1.1 (still use hard coded values so it's necessary to go in to these and make some changes manually.  **Note that this has now been fixed in 1.6+**. To save you some time, the email templates that are affected are:</p>

        <ul>
            <li>Newsletter subscription confirmation - "Demo Store"</li>
            <li>New account confirmation key - "Demo Store"</li>
            <li>New password - "Demo Store"</li>
            <li>Share Wishlist  - "Demo Store"</li>
            <li>New Order - "PST"</li>
        </ul>
   <p>&nbsp;</p>

   <li id="plaintext"><h2>Plain-text Passwords in Emails are Evil</h2></li>

   <p class="tick">It really gripes me when websites send out plain-text passwords in emails.  Unfortunately, Magento does this as soon as you sign up for an account.  So, I would personally recommend going into the transaction email for account confirmation and replace the password with some holding text e.g. "********".   If people are interested in a "click-to-reset" password recovery module for Magento, <a href="http://www.meanbee.com">let me know</a>.</p>

    <li id="adminurl"><h2>Change Admin Url</h2></li>

    <p class="tick">For security, it is best to change the URL that the admin interface resides on.  This can be changed in the <tt>app/etx/local.xml</tt> file.  You will see "admin" defined as the frontname for the admin router.  Change this, and then delete cache before visiting your new admin url.</p>

    <li id="invoice"><h2>Invoice and Packing Slip Design</h2></li>

	<p class="tick">Here, you will need to upload the logo that is to be used for invoices.  Alternatively you can place logo_email.gif in your images folder in the skin directory.  There are a few other settings that you should pay attention to.

    <li id="tax"><h2>Tax Settings</h2></li>

    <p class="tick">These should be all set up already, but it does not hurt to see if anything in the configuration was overlooked.  These can be found in <tt>System &rarr; Configuration &rarr; Sales &rarr; Tax</tt> and also <tt>Sales &rarr; Tax</tt>.</p>

    <li id="shippingorigin"><h2>Shipping Origin</h2></li>

    <p class="tick">Directly related to the tax settings, the shipping origin needs to be set to the correct country in order to use the appropriate tax rates.</p>

    <li id="404"><h2>404 Page</h2></li>

    <p class="tick">Not to be pushed to the side of a development of any site.  Remember to test it.  Customers that find it will already be disappointed, do not let yourselves down by leaving the default Magento blocks still there.   So, please remember to "Kill the dog".</p>

    <p>Also, in the default 404 page which can be found in CMS &rarr; Pages, there is reference to "Magento Store".  Ditch it.</p>

    <li id="cleardata"><h2>Clear Test Data</h2></li>

    <p class="tick">Remove all products, orders and customers that were created during development</p>

   <li id="inventory"><h2>Product Inventory</h2></li>

   <p class="tick">When importing products the first time around, it is likely that you did not bother with managing stock. It's an unnecessary hassle when developing.  Before you go live, check with your client what configuration he would like set up.   You may have to do another product import with stock levels before going live.</p>

	<li id="flushjs"><h2>Flush JavaScript to 1 file</h2></li>

	<p class="tick">One essential measure to reduce loading time is by limiting the number of HTTP requests that are made each time.   Magento stores can be heavy in JavaScript, but you can keep the requests down by flushing all of your JavaScript files into one: <tt>System &rarr; Configuration &rarr; Developer &rarr; JavaScript Settings</tt>.</p>

	<p>You may have used the odd bit of inline JavaScript when developing.  These will need to be moved in to their own file to avoid any unnecessary slowing of page load times.</p>

	<li id="minifycss"><h2>Minify the CSS</h2></li>

	<p class="tick">Use a <a href="http://www.minifycss.com/css-compressor/">CSS compressor</a>.  Keep two versions of the css, one in readable form e.g. styles.css.orig and then have a minified version styles.css.</p>

	<li id="flushcss"><h2>Flush CSS to 1 file</h2></li>

	<p class="tick">This is the same idea as the JavaScript flushing, but be careful, it is currently an experimental feature.  Best to enable on the staging server before taking it live to see if it has any side effects.  It can be found in <tt>System &rarr; Configuration &rarr; Developer &rarr; CSS Settings</tt></p>

       <p>A useful extension available on <a href="http://www.magentocommerce.com/magento-connect">Magento Connect</a> is <a href="http://www.magentocommerce.com/magento-connect/FOOMAN/extension/457/fooman-speedster">Fooman Speedster</a>.    It combines, minifies and compresses all JavaScript and CSS.</p>

	<li id="maintenance"><h2>Maintenance.flag</h2></li>

	<p class="tick">Touch this file in the root of the Magento installation and it will display a holding page while you are going live.  Especially useful if you are using something slow like FTP.  Move this file across first and then queue the rest of Magento to transfer.</p>

        <li id="errorpage"><h2>Error Page Design</h2></li>

        <p class="tick">When there is an error on the site, or the maintenance.flag file is set, a different theme is used to display the error message.  Without changing this your customers will see the Magento logo and default theme.  To adapt this page to your own template you will need to modify the files located in the <tt>errors</tt> directory.</p>

        <p>You will not want the error page to print a stack trace.  To stop this happening open <tt>errors/local.xml</tt> (assuming you are working from the sample), and then change the action from "print" to "email".  You can then set an email address for it to send the error report to.</p>

	<li id="indexmanagement"><h2>Index Management</h2></li>

	<p class="tick">Make sure you have re-indexed after making any catalogue changes.</p>

	<li id="caching"><h2>Caching</h2></li>

	<p class="tick">Caching, although on by default would have been the first thing you disabled when beginning development.  So, remember to re-enable and refresh it when you are ready to go.</p>

        <li id="compilation"><h2>System Compilation</h2></li>

        <p class="tick">Another essential way to keep the loading time of your Magento site down is to compile it.   Page loading times are said to have a performance increase of up to 50%, this is definitely not something you want to miss out on.   You will be able to find settings for this in <tt>System &rarr; Tools &rarr; Compilation</tt>.   


    <li id="analytics"><h2>Google Analytics</h2></li>

    <p class="tick">Your client is going to want to see how traffic fairs from day one.  Magento does all the hard word for you (as per usual).  Set up your <a href="http://www.google.com/analytics/">Google Analytics</a> account and then put your account number in System &rarr; Configuration &rarr; Sales &rarr; Google API &rarr; Google Analytics.</li>

    <li id="googlebase"><h2>Google Base</h2></li>

    <p class="tick">Another essential Google service that is already integrated into Magento.  There are a few steps to do this, but <a href="http://inchoo.net/">Inchoo</a> have written a nice <a href="http://inchoo.net/ecommerce/magento/adding-magento-products-to-google-base/">article</a> on it.</p>

    <li id="sitemap"><h2>Google Sitemap</h2></li>

     <p class="tick">No excuses for this one, my Grandmother could do it and she still thinks the postman delivers your emails (true story).  Simply "Create Sitemap" in <tt>Catalog &rarr; Google Sitemap</tt>.  Then, if you are using Google Webmaster Tools you can also point Google towards it.</p>

    <p>There are further settings for this, e.g. to automatically regenerate the sitemap, and they can be found in <tt>System &rarr; Configuration &rarr; Catalog &rarr; Google Sitemap</tt>

    <li id="newsletter"><h2>Newsletter Subscriptions</h2></li>

    <p class="tick">Test that customers can sign up and unsubscribe and that newsletters can be sent out.   You don't want to be testing this process once you have real customers in the system.</p>

    <li id="shippingmethods"><h2>Shipping Methods</h2></li>

    <p class="tick">If you are using a fixed product or cart fee then make sure it is set.  If you are going down the cart weight route then you should confirm that the logic is correct and that all products have weights attached to them</p>

    <li id="paymentgateways"><h2>Payment Gateways</h2></li>

    <p class="tick">Double check that your payment gateway is ready to jump from testing to live.</p>

    <li id="ssl"><h2>SSL Certificate</h2></li>

    <p class="tick">This is one that is often "left on the shopping list". Many payment gateways will not allow you to take the system live until you have one.</p>

    <li id="modulelicenses"><h2>Module Licenses</h2></li>

    <p class="tick">Some modules from Magento connect require you to enter a license key when setting up.  Make sure that this key is still going to be valid when you move domains and obtain a new key if required.</p>

    <li id="phpconfig"><h2>PHP Configuration</h2></li>

    <p class="tick">Make sure that you have reasonable values for <tt>memory_limit</tt> and <tt>max_execution_time</tt>.   This way, the heavier operations that Magento carries out can complete successfully.  If either are too restrictive a product export/import will fail.

    <li id="crons"><h2>Turn on the Crons</h2></li>

    <p class="tick">Some things in Magento require scripts to be run periodically in order to keep things up to date, e.g. Google Sitemap.xml.  In order to configure these you will need to look in <tt>System &rarr; Configuration &rarr; Advanced &rarr; System</tt> and modify the Cron.php file in the root of your Magento installation.  The Magento Wiki has a <a href="http://www.magentocommerce.com/wiki/1_-_installation_and_configuration/how_to_setup_a_cron_job">page</a> on this. </p>

    <li id="logcleaning"><h2>Log Cleaning</h2></li>

    <p class="tick">Magento keeps logs in the database, which, over time, can become bloated.   There is an option in admin to clean the logs periodically, it can be found in: <tt>System &rarr; Configuration &rarr; Advanced &rarr; System &rarr; Log cleaning</tt>.   This will need enabling as it is disabled by default, I recommend daily cleaning.   Some articles suggest that use should optimise the log tables regularly as well in order to keep their size down.</p>

    <li id="disablemodules"><h2>Disable Unnecessary Modules</h2></li>

   <p class="tick">It's not likely that your store uses every feature built in to Magento, so why have it enabled?  You can disable modules in System &rarr; Configuration &rarr; Advanced.  For example, ones that you might not be using include Mage_Wishlist, Mage_Newsletter, Mage_Poll, Mage_Rating and Mage_Tag.</p>

    <li id="backup"><h2>Database Backup and Restoration Strategy</h2></li>

    <p class="tick">I'm not going to suggest any particular strategy, but take database backups <i>regularly</i>, and know how to restore when the time comes.  There's even an <a href="http://www.magentocommerce.com/magento-connect/centerax/extension/2927/automatic-db-backups">Automatic Database Backup</a> module to do it for you.</p>

    <li id="fastweb"><h2>"The Web should be fast"</h2></li>

   <p class="tick">Test your site out for speed.   There are many different tools that you can use for this.  I'd recommend either the <a href="http://developer.yahoo.com/yslow/">YSlow</a> extension for Firebug in Firefox, or <a href="http://gtmetrix.com">GTMetrix</a>.  These will then show your weak points and offer suggestions on how to make improvements.</p>

   <p>Speed should still be a priority even in the broadband age.   Remember that even with increasing internet speeds, there are still many on very limited connections.  What's more, you are always being compared to other sites, so if you are too slow, your customers may move to a competitor.</p>

    <li id="beprepared"><h2>Be prepared</h2></li>

    <p class="tick">Once you have gone live, don't expect that to be the end of development.  There are likely to be many bug fixes, editions and further development work.  When developing sites with <a href="http://www.meanbee.com/">Meanbee</a>, we use a git repository and keep this up to date with all changes.  This way we can always have two identical versions of the site; one that is public facing and the staging area.  Once we are happy with changes we can push them live.  With ssh access this could not be simpler with a <i>git pull</i> but becomes slightly more difficult if only FTP access is available.  Unfortunately, this is often the case with managed hosting.  A service that I was recently introduced to by <a href="http://www.nicksays.co.uk/">Nick</a> and we now use at Meanbee is <a href="http://www.deployhq.com/">Deploy</a>.  Although still in Beta, it allows you to release the changes to the live site effortlessly even when using FTP.  Marvellous.</p>

<p> Have you learnt from experience and want to add an item to this list?  Share it, your Magento buddies will be most grateful.</p>

</ol>

<a id="float-to-top" href="#" onclick="$.scrollTo('#contents', {duration:300}); return false;">Back to Top &uarr;</a>
