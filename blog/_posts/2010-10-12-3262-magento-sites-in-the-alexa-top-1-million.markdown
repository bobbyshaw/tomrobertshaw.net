---
layout: post
status: publish
published: true
title: 3262 Magento Sites in the Alexa Top 1 Million
categories:
- Magento Development
---

<div class="hivemind-promo">
    <h2>The Ecommerce Survey is now <a href="https://askhivemind.com/"><img src="/img/2015/06/hivemind_logo.svg" class="hivemind_logo" /></a></h2>
</div>

I've been thinking for a while that it would be interesting to look at the sites in the <a href="http://www.alexa.com/topsites">Alexa Top 1 Million</a> and determine how many of them were using Magento.  This weekend I finally got around to writing a script to investigate this.  I looked for a few ways to identify Magento and then used some basic regular expressions to match content.  I did the same for osCommerce to see how the results compared.

<img src="/img/2010/10/Screen-shot-2010-10-11-at-21.14.31.png" alt="Magento Vs osCommerce" title="Magento Vs osCommerce" />

In total, I found:

<ul>
    <li><strong>3262 Magento </strong></li>
    <li><strong>59 Magento Enterprise</strong>
    <li><strong>3128 osCommerce</strong>.</li>
</ul>

Magento has the slight lead and I would expect, if it follows the <a href="http://www.google.com/trends?q=magento%2Coscommerce">trend</a>, for the gap to increase over the next year.

Here are a few sites that I found to be powered by Magento:

<ul>
   <li><a href="http://bestbuy.com.mx" rel="nofollow">bestbuy.com.mx</a></li>
   <li><a href="http://acnestudios.com" rel="nofollow">acnestudios.com</a></li>
   <li><a href="http://www.rebel8.com" rel="nofollow">rebel8.com</a></li>
   <li><a href="http://web-blinds.com" rel="nofollow">web-blinds.com</a> (Enterprise)</li>
   <li><a href="http://www.modelzone.co.uk rel="nofollow"">modelzone.co.uk</a> (Enterprise)</li>
   <li><a href="http://www.giro.com/ rel="nofollow"">giro.com</a> (Enterprise)</li>
</ul>


<img src="/img/2010/10/Screen-shot-2010-10-11-at-21.15.03.png" alt="Magento Sites by Country" title="Magento Sites by Country" />

If we take a look at the countries that the Magento stores were hosted in, we can see that the United States has the clear majority with 1293.  Germany and the United Kingdom were the next largest hosts of Magento stores.  I was not able to identify the country location for 429 sites.

It is best to keep in mind the validity of the source data when undertaking any analysis.  Alexa determines its <a href="http://www.alexa.com/faqs/?p=134">traffic rankings</a> by looking at the sites that are visited by users of the <a href="http://www.alexa.com/toolbar">Alexa Toolbar</a>.

<p>N.B.  This is an early revision of the Magento tracking script, but I intend on re-running it in the coming months to identify changes in market share.</p>
