---
layout: post
status: publish
published: true
title: Magento Webinar - Best Practices for Magento Developers
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 118
wordpress_url: http://tomrobertshaw.net/?p=118
date: 2010-02-10 21:38:17.000000000 +00:00
categories:
- Magento Development
tags: []
comments: []
---
This evening, I attended the first in a series of Magento Webinars for developers - "Best Practices for Magento Developers".  It was mainly aimed at getting developers involved with improving the Magento Core code.  It ran through some PHP and Zend Framework coding standards and so would be useful to watch for any developer starting out with Magento, whether this is building commercial extensions or writing theme templates.

Once this week's webinar is online - it will be able to be found at <a href="http://www.magentocommerce.com/media/webinar-archive">http://www.magentocommerce.com/media/webinar-archive</a>.  It was presented by Koby Oz, Magento Marketing Director, the Magento Product Manager and Roy Ganor, Zend Studio Project Leader.

I thoroughly recommend watching it, especially if you're just starting out with Magento, but I thought I'd go through a few of the topics and tips covered.

The Webinar started off with a brief introduction to navigating the Magento 1.4 source code in Zend Studio.  Being based on Eclipse it has lots of tricks built in to make development as quick and easy as possible, a few of these were demonstrated.

Some nice ones included tools for re-factoring of code  e.g. abstracting code into methods to make it simpler.  Another useful touch included navigating classes with auto-completion on camel case, e.g. typing MCMC would bring up the Magento_Checkout_Model_Cart class.

You should already be familiar with the Zend Framework folder structure:

<em>Module/controller/action
Checkout/cart/index</em>

There were some notes on keeping to the MVC pattern while developing, as well as some generic programming tips like using small, well named methods.  Methods should always begin with a verb, follow with a noun and be obvious to the reader what function they perform.  

Code reuse via extending classes was discussed; cut and paste is strictly forbidden!  Extending classes with observers and subscribers was talked about in some detail and I recommend watching the video and listening to the commentary to get the description of the best way to extend classes and things to look out for when doing so - like rewriting already rewritten classes!

The presentation then turned to template coding and some tips on how to do it right.  Some rules and conventions were also set out here, including how to best write your themes to be ready for Magento upgrades.  If you make a copy of the base template when working on themes, you can then easily review on upgrade for changes to see how they will affect you.

It was emphasised that there is a large amount of code that you should be able to reuse from <em>core/template</em>, <em>page/html_wrapper</em>, and <em>core/text_list</em>.  So make yourself familiar with these first so that you know what has already been done.

It was announced that a Magento Contributor Portal is coming soon for people that want to get involved.  So if you want to work on the Magento core, write documentation, be part of Quality Assurance, or even work on Magento's design, you should watch the series and get in touch with Magento. 

So go <a href="http://www.magentocommerce.com/media/webinar-archive">watch</a>.
