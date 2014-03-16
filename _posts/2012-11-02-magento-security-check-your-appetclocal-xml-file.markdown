---
layout: post
status: publish
published: true
title: ! 'Magento Security: Check your app/etc/local.xml file.'
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 2102
wordpress_url: http://tomrobertshaw.net/?p=2102
date: 2012-11-02 11:49:11.000000000 +00:00
categories:
- Magento Development
tags: []
comments:
- id: 3772
  author: Vern Burton
  author_email: vern@tarcinilconsulting.com
  author_url: http://www.tarcinilconsulting.com
  date: !binary |-
    MjAxMi0xMS0wMiAxNToxMzozOCArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMS0wMiAxNDoxMzozOCArMDAwMA==
  content: ! "You are able to block this in nginx via you server {} config via a location
    tag.\r\n\r\n<code>\r\n    ## These locations would be hidden by .htaccess normally\r\n
    \       autoindex off;\r\n\tlocation ^~ /app/                { deny all; }\r\n
    \       location ^~ /includes/           { deny all; }\r\n        location ^~
    /lib/                { deny all; }\r\n        location ^~ /media/downloadable/
    { deny all; }\r\n        location ^~ /pkginfo/            { deny all; }\r\n        location
    ^~ /report/config.xml   { deny all; }\r\n        location ^~ /var/                {
    deny all; }\r\n        location = /RELEASE_NOTES.txt { deny all; }\r\n        location
    = /LICENSE_AFL.txt   { deny all; }\r\n        location = /LICENSE.html      {
    deny all; }\r\n        location = /LICENSE.txt       { deny all; }\r\n        location
    = /php.ini.sample    { deny all; }\r\n        location = /index.php.sample  {
    deny all; }        \r\n        location  /.                  { return 404; }\r\n</code>"
- id: 3773
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMi0xMS0wMiAxNTozMTowMCArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMS0wMiAxNDozMTowMCArMDAwMA==
  content: Thanks Vern!
- id: 4432
  author: Josua Marcel C.
  author_email: josua.marcelc@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0xMi0xMCAwNTowMjoyNSArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMi0xMCAwNDowMjoyNSArMDAwMA==
  content: ! "Tom,\r\n\r\ncan you give an example of htaccess?"
- id: 4489
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMi0xMi0xMyAxNzoyNDoyMSArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMi0xMyAxNjoyNDoyMSArMDAwMA==
  content: Hi Josua, you should look at the .htaccess that Magento provides :)
- id: 4804
  author: Marcin
  author_email: marcin@php4u.co.uk
  author_url: http://php4u.co.uk
  date: !binary |-
    MjAxMy0wMS0xNSAwOTo1MzoyOSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMS0xNSAwODo1MzoyOSArMDAwMA==
  content: Also worth to mention that magento itself is probing if local.xml is accessible
    from outside (whenever you access admin)
- id: 4853
  author: joe M
  author_email: sales@advancedsportvehicles.com
  author_url: http://www.advancedsportvehicles.com
  date: !binary |-
    MjAxMy0wMi0xOCAwMzoyOTo1NyArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMi0xOCAwMjoyOTo1NyArMDAwMA==
  content: ! "hi everyone! well i must say first i never expected to have so manyyyyy!!
    issues . it seem that the Magento store breaks itself overnight!! since i got
    this community Magento it has been a real headache to say the list. \r\nand now
    after all this time 2 2 and 1/2 months later i get that stupid message on my admin
    , what??!?!?!? security risk!! htaccess file, oh the famous htaccess!! \r\ni got
    to say,, when i was using an inferior product yes i didn't have all this nice
    features but the damm thing worked!! i changed to make more money , not less money!!
    this Magento to go to enterprise is an arm and a leg US$ over 1,000 a month??!?!?
    what? i don't make that kind of money not even for me !! \r\n\r\nall i would love
    to see is a version that is between the enterprise and that community thing!!
    i would be happy to pay a one time fee for something that can work without breaking
    itself.. \r\nthat's all"
- id: 5611
  author: Jumi
  author_email: maiphan3010@gmail.com
  author_url: http://www.magestore.com/simicart/
  date: !binary |-
    MjAxMy0xMi0yNSAwNDoyMjoyNiArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0xMi0yNSAwMzoyMjoyNiArMDAwMA==
  content: Thank you for the very useful post.
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
