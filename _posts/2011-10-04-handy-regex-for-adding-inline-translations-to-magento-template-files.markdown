---
layout: post
status: publish
published: true
title: Handy regex for adding inline translations to Magento template files
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 1810
wordpress_url: http://tomrobertshaw.net/?p=1810
date: 2011-10-04 21:55:22.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 3462
  author: Denis
  author_email: andfang@andfang.com
  author_url: http://www.facebook.com/profile.php?id=100003405391518
  date: !binary |-
    MjAxMi0wMi0wMSAxODo0NTowNiArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMi0wMSAxNzo0NTowNiArMDAwMA==
  content: ! 'Thanks TomGood point re: Mage_* being ordvrieden.In a quick test I deleted
    /app/locale/en_GB/ and created a translate.csv in a new locale/en_GB directory
    below my store theme. &#8216;Add To Cart&#8221;,&#8221;Add To Test&#8221; translation
    worked.Leaving that file in place I then re-added /app/locale/en_GB/* and those
    appear to take precedence over the translate.csv file.Using a theme-based translate.csv
    suites my needs, so I&#8217;ll take that approach.John'
- id: 4830
  author: MagePsycho
  author_email: magepsycho@gmail.com
  author_url: http://www.magepsycho.com
  date: !binary |-
    MjAxMy0wMi0wOCAxNToxMTozNiArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMi0wOCAxNDoxMTozNiArMDAwMA==
  content: ! "If you are using #Netbeans then you are lucky enough to use Macros for
    converting label/text for inline translation.\r\nYou can find more info about
    Macros in order to use with Magento templating here: http://www.blog.magepsycho.com/using-netbeans-macros-to-speed-up-magento-templating/"
---
When developing Magento themes, you will quite often have flat HTML that you are breaking apart and putting into Magento's template files.  One thing that I have OCD-like tendencies with is the need to make sure that all text is in an inline translate.  By that I mean using:
<pre lang="php">
<?php echo $this->__('Basket') ?>
</pre>

Obviously, this is good practice to have when building any Magento store! However, it can sometimes mean a lot of repetitive typing, so I decided to use a regular expression instead to replace text automatically.  I've tended to use textmate during development and so have used the following for "Find and Replace", but they can easily be converted to be used in your text editor or IDE of choice.

Find this: 
<pre>
([^-])>([^<\s][^<]*)<
</pre>
Replace with:
<pre lang="php">
$1><?php echo $this->__("$2") ?><
</pre>

This snippet will work even if the file already includes some inline translates.  I've tested it a bit, but if anyone finds some edge cases where it doesn't work, then let me know. 

For <tt>"$2"</tt> I'd normally use single quotes, but the current regex won't look for and escape the string if it already contains a quote, e.g. an apostrophe.  So I've left it as double quotes as these are less likely to appear in strings.

Note this regex won't replace attributes e.g. alt and title tags. Just the content within elements. 
