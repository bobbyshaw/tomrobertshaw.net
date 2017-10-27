---
layout: post
status: publish
published: true
title: How could the WordPress Vs Thesis Theme Licensing Debate Affect Magento?
categories:
    - Magento
---
I will start off this post with a disclaimer.  I am not proficient with software licensing.  As a programmer I am naturally aware of them and have studied them for a short time while at University, but I confess that I am no expert.  During the research for this article, I have begun to have a better understanding but I welcome corrections and comments.  All opinions herein are my own and do not represent the opinions of Meanbee.

<h2>The WordPress / Thesis Whirlwind</h2>
A lot of web developers, designers and <a href="http://wordpress.org">WordPress</a> fans will have been following the disagreement between WordPress' <a href="http://ma.tt/">Matt Mullenweg</a> and <a href="http://diythemes.com/">DIYThemes</a>' <a href="http://www.pearsonified.com/">Chris Pearson</a>.  At the core, it was whether or not WordPress themes are derivative works of WordPress and therefore are required to honour the GPL license if distributed.

<a href="http://diythemes.com/">Thesis</a>, for the uninformed, is more of a theme framework than a theme.  It provides detailed site configuration, ideal for the non-technical user.  Together with 'search engine optimized code' aimed at removing the bloat, unintentional or otherwise, often found in WordPress themes.

I followed the WordPress GPL debate because it was something I wanted to better understand and I was interested to hear both sides of the argument.  To begin with I sympathised with the position from which Chris Pearson was coming.  However, by the end I understood why he was wrong and why themes and plug-ins had to be licensed under the GPL.

Matt praised Thesis and was genuinely glad that it was making money, nevertheless that does not change the clear fact that without WordPress, it would cease to function and would serve no purpose.  Themes and plug-ins integrate with and often make extensive use of WordPress' core functionality; they do not sit on top and run independently.    The <a href="http://www.softwarefreedom.org/">Software Freedom Law Center</a> undertook an in-depth analysis of how WordPress and themes interact.  They <a href="http://wordpress.org/news/2009/07/themes-are-gpl-too/">concluded</a> that the PHP of themes are derivative works while the GPL does not require the CSS and images to be.

<blockquote>
"HTML elements are intermingled with PHP in the two themes presented. These snippets of HTML interspersed with PHP throughout the theme PHP files together form a work whose form is highly dependent on the PHP and thus derivative of it."
</blockquote>

People often assume that making their product open-source means that they have to give it away for free, this is not true.  It is perfectly acceptable for the software to be free as in liberty and not be free as in price.  The businessman's risk is that someone else can then take the code, redistribute and undercut the price.   However, as Matt describes Thesis below, even if it is the same code, they will not be able to match your support.

<blockquote>
"...more than just a code and a theme; it is the forums, the support, the community, and all the things around it that make it valuable. That is not something that someone in another country selling it for half-price is going to be able to duplicate because they don’t have you."
</blockquote>

There is also the aspect of copyright.   In the Thesis case, although under the GPL a 'copycat' could redistribute the code, they would be legally unable to call it Thesis due to copyright.

The heated interview can be found in full on <a href="http://mixergy.com/chris-pearson-matt-mullenweg/">Mixergy</a>, I recommend listening if you haven't already to get a better picture of both sides of the argument.

This <a href="http://thenextweb.com/socialmedia/2010/07/22/wordpress-vs-thesis-the-battle-is-over/">battle appears to be over</a>, with Thesis now sporting a split GPL license.   This means that the PHP is available under GPL, while the CSS, JavaScript and images are proprietary.

<h2>How Does This Relate to Magento?</h2>

That's exactly what I have been thinking.  

Although I use WordPress for this and the <a href="http://meanbee.com">Meanbee</a> site, I have not really done much in terms of development with it.  So the confirmation that the themes have to be released under the GPL if distributed did not affect me much.

Then, I naturally extrapolated the situation to <a href="http://magentocommerce.com">Magento</a>.   I create themes and modules for Magento on a day to day basis with Meanbee.  It is the platform that is taking over the eCommerce world (some would say it <a href="http://www.google.com/trends?q=magento%2Cecommerce">already has</a>) and I truly love being a part of it.

So let us take a look at the <a href="http://www.magentocommerce.com/license/">licensing</a>.  Magento is released under the<a href="http://opensource.org/licenses/osl-3.0.php"> Open Software License v3.0</a>  rather than GPL.  From my understanding OSL claims to be better worded and closes down some of the loopholes.  <a href="http://www.itbusinessedge.com/cm/community/features/interviews/blog/rosen-gpl-is-good-but-osl-is-better/">For example</a>, application service providers that take GPL software and modify it in-house in order to provide services to 3rd parties would not be required to release the modified code under the GPL.  Conversely, with OSL it was determined that this service could be deemed a form of distribution and therefore they would be required to release the source code under the OSL.

When it comes to derivative works that are then distributed, the OSL is similar in its standing to the GPL.  

To be clear, here is the OSL definition of "Derivative Works"

<blockquote>
to translate, adapt, alter, transform, modify, or arrange the Original Work, thereby creating derivative works ("Derivative Works") based upon the Original Work; [§§ 1(b) ]
</blockquote>

Then, clause 1 part c of the license dictates that all derivative works must be released under the OSL.

<blockquote>
"Grant of Copyright License...to distribute or communicate copies of the Original Work and Derivative Works to the public, with the proviso that copies of Original Work or Derivative Works that You distribute or communicate shall be licensed under this Open Software License." [§§ 1(c) ]
</blockquote>

So we have now confirmed that the OSL requires derivative work to honour the same license.  We now need to decide whether Magento themes and modules are derivative works in the same way as has been discussed with regards to Wordpress.

I think the answer is a resounding "Yes".

Although Magento themes and modules have their own directories, this does not class them as separate from the core code.   They are certainly not standalone enough to be deemed original works.

Magento modules will often overwrite and extend Magento classes in order to modify or mimic the logic.   However, when it comes to execution on page load or action event, Magento does not know whether the code is Magento or foreign.

There is a significant amount of integration involved in theme production.  Themes require PHP templates and XML layouts in order to function.  They will use Magento's models in order to manipulate the data structures and blocks to format the data before it gets the the view.  Utilising either would be examples of derivative work.

A great explanation that helped me understand this in the Wordpress context was written by <a href="http://markjaquith.wordpress.com/2010/07/17/why-wordpress-themes-are-derivative-of-wordpress/">Mark Jaquith</a>.

<img src="/img/2010/08/Magento-Community-Licensing-Options.png" alt="Magento Community Licensing Options" />

Confusingly, when releasing a community module (i.e. free) on <a href="http://www.magentocommerce.com/magento-connect">Magento Connect</a>, we are offered to label the module as having any one of 8 different Open Source licenses.  Now, when it has already been noted that GPL and OSL are incompatible, without researching the others, how can a module developer choose any other option without breaching the terms of the license?

When it comes to listing a commercial module on Magento Connect. There is simply a text box to fill out the license details and then visitors are redirected to the developer's site in order to purchase.

To complicate matters further, Magento actually release their default theme under the <a href="http://www.opensource.org/licenses/afl-3.0.php">Academic Free License</a> rather than the OSL.  From my understanding, even though Magento own the copyright they have to respect the OSL, and themes are derivative works, ergo their default theme should also be released under the OSL.

Interestingly, the AFL does not restrict derivative work to be released under the same license:

<blockquote>
to distribute or communicate copies of the Original Work and Derivative Works to the public, under any license of your choice that does not contradict the terms and conditions, including Licensor's reserved rights and remedies, in this Academic Free License; [§§ 1(c) ]
</blockquote>

I am not sure how this affects theme licensing, some themes may contain work which could be argued to be derivative work of the base theme.   While others will make use of more Magento code.  Could you still argue that custom themes are extending the base theme?  I think it would be difficult to do so.  As soon as you moved into custom code it would be a derivative of work under the OSL rather than the AFL.

Whatever the legal answer, this certainly does not cover Magento modules.  How would the community react if they were told all modules, community and commercial were required to be distributed under the OSL?

<h2>Note on Distribution</h2>

Now, some of you may be panicking about the Magento theme you created for a client. "Is it safe?". The answer is yes.  Like the GPL, the requirement of the OSL license only applies if you distribute the work.  For example, if you create a Magento theme for a client's store, this does not class as distribution.  However, if you were to then release this as a Freemium or Premium theme, it would then need to be distributed under OSL.

<h2>Conclusion</h2>

Magento modules and likely also themes are classed as derivative works of OSL code.  Consequently developers have the legal and moral obligation to make the source code available under the Open Software License.  Magento have made not indication whether they are interested in pursuing members of the community which are not releasing under the OSL.  So there is no reason to immediately worry.

This article is still work in progress.  I am going to contact Roy Rubin, CEO of Magento, to request his opinion and would be interested in what the Magento community thinks.   I will post updates and corrections as necessary.
