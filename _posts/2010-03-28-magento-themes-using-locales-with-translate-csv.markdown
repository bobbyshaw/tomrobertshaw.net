---
layout: post
status: publish
published: true
title: ! 'Magento Themes: Using locales with translate.csv'
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 145
wordpress_url: http://tomrobertshaw.net/?p=145
date: 2010-03-28 21:18:08.000000000 +01:00
categories:
- Magento Development
tags: []
comments:
- id: 3367
  author: John Cronin
  author_email: john@upthejunction.com
  author_url: http://twitter.com/upthejunction
  date: !binary |-
    MjAxMS0wOS0yOSAxODoyMjowMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wOS0yOSAxNzoyMjowMyArMDEwMA==
  content: ! "Hi Tom\r\n\r\nDo you need to configure magento to \"look for\" the translate.csv
    file?\r\n\r\nI have created a /app/locale/en_GB directory and set 'United Kingdom'
    as locale in my store admin. As I understand it, this directory takes precedence
    over a theme-specific locale directory?\r\n\r\nA simple translate.csv entry replacing
    'Add To Cart' with 'Add To Basket' doesn't appear to have any effect.\r\n\r\nI've
    seen reference elsewhere to multiple files with names such as Mage_Tax.csv Mage_Catalog.csv
    Mage_Checkout.csv\r\n\r\nTranslations within these files do get picked up in store
    view. \r\n\r\nIdentifying which of Mage_* files relate to which element of the
    store view can be a little hit-and-miss.\r\n\r\nAny thoughts?\r\n\r\nCheers\r\n\r\nJohn"
- id: 3368
  author: Tom Robertshaw
  author_email: tom.robertshaw@meanbee.com
  author_url: ''
  date: !binary |-
    MjAxMS0wOS0yOSAxOTozMTo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wOS0yOSAxODozMTo1MyArMDEwMA==
  content: ! "Hi John,\r\n\r\nYou wouldn't want to be making any changes to Mage_*.csv
    files as these may be overridden by Magento upgrades.  Each of the files in this
    directory are defined in module config.xml files so Magento doesn't actually look
    for a translate.csv file in that directory as far as I'm aware. \r\n\r\nThe only
    place it looks for a translate.csv directory is in the theme.  So I'd recommend
    using that.  I've not read up on precedence, although you say you've seen it that
    app/locale takes precedence I'd have thought the theme directory should be the
    one to take precedence."
- id: 3369
  author: John Cronin
  author_email: john@upthejunction.com
  author_url: http://twitter.com/upthejunction
  date: !binary |-
    MjAxMS0wOS0yOSAxOTo1MTo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wOS0yOSAxODo1MTo1MyArMDEwMA==
  content: ! "Thanks Tom\r\n\r\nGood point re: Mage_* being overridden.\r\n\r\nIn
    a quick test I deleted /app/locale/en_GB/ and created a translate.csv in a new
    locale/en_GB directory below my store theme. 'Add To Cart\",\"Add To Test\" translation
    worked.\r\n\r\nLeaving that file in place I then re-added /app/locale/en_GB/*
    and those appear to take precedence over the translate.csv file.\r\n\r\nUsing
    a theme-based translate.csv suites my needs, so I'll take that approach.\r\n\r\nJohn"
- id: 3407
  author: HelpfulSole
  author_email: asdsda@oinsdof.com
  author_url: ''
  date: !binary |-
    MjAxMS0xMC0xNyAyMzowNzo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0xMC0xNyAyMjowNzo1NSArMDEwMA==
  content: ! "Hi\r\nThanks for the info, it helped me. One more thing I needed to
    do was put my theme name into the following settings page:\r\n\r\n  System -&gt;
    Configuration -&gt; Design -&gt; Themes -&gt; Translations.\r\n\r\nCheers :)"
- id: 3442
  author: Simon Bérubé
  author_email: simon@sberube.net
  author_url: http://pixelsbysimon.com/
  date: !binary |-
    MjAxMS0xMS0xNCAwMjoyMzoxMCArMDAwMA==
  date_gmt: !binary |-
    MjAxMS0xMS0xNCAwMToyMzoxMCArMDAwMA==
  content: Thanks for the tip. This is so much better than replacing text in template
    files.
- id: 3463
  author: Luisangel
  author_email: andy@rotaryband.com
  author_url: http://www.facebook.com/profile.php?id=100000494065352
  date: !binary |-
    MjAxMi0wMi0wMiAwMjo0MzoyMyArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMi0wMiAwMTo0MzoyMyArMDAwMA==
  content: Thanks! I&#8217;ve been tnyirg to find that for ages. I still can&#8217;t
    find a way to translate some of the fixed page content (e.g. the empty basket
    page) or the buttons. Any ideas?
- id: 3521
  author: varma
  author_email: rnvhyd@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMy0yMCAwODoxNzo0NiArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0wMy0yMCAwNzoxNzo0NiArMDAwMA==
  content: how to change default language of static page paragraphs and headings in
    magento.
- id: 5490
  author: Rahul
  author_email: info@lakeside.com.np
  author_url: http://lakeside.com.np
  date: !binary |-
    MjAxMy0wOC0yNyAxMTo1NjoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wOC0yNyAxMDo1NjoyNyArMDEwMA==
  content: Yes, thanks you a lot. This saved a huge amount of time for me.
- id: 5550
  author: Magento Inventory Management extension
  author_email: SchlauTarter584@googlemail.com
  author_url: http://magentoinventorymanagement.blogspot.com/
  date: !binary |-
    MjAxMy0xMS0xNSAwMjozMTozMSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0xMS0xNSAwMTozMTozMSArMDAwMA==
  content: I am going to immediately take hold of ones rss or atom while i cannot
    locating the e-mail ongoing web page link or maybe e-newsletter assistance. Conduct
    you have every? Make sure you ok, i'll understand to ensure I might sign up. Appreciate
    it.
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
