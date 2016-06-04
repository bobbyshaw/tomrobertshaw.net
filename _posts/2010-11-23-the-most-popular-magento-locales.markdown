---
layout: post
status: publish
published: true
title: The Most Popular Magento Locales
categories:
- Magento Development
---
I was interested in what locales are predominantly being used in Magento installations.   This kind of information is useful to see Magento's reach across the world.  What's more, it's interesting for developers to get some indication about what translations they should be looking to add to their modules.

I used the Magento sites from this month's <a href="/2010/11/magento-tops-ecommerce-market-share-november-2010/">eCommerce survey</a> and the first thing I did was look up their IP and hosting location.  This isn't a great representation; we don't know for sure that stores are being hosted in the country that they're based, but it's a start.

<table style="width:50%">
     <tr>
         <th>Number of Sites</th>
         <th>Hosting Location</th>
     </tr>
     <tr><td>1323</td><td>United States</td></tr>
     <tr><td>447</td><td>Germany</td></tr>
     <tr><td>439</td><td>Unknown</td></tr>
     <tr><td>265</td><td>United Kingdom</td></tr>
     <tr><td>165</td><td>France</td></tr>
     <tr><td>142</td><td>Netherlands</td></tr>
     <tr><td>49</td><td>Australia</td></tr>
     <tr><td>45</td><td>Brazil</td></tr>
     <tr><td>43</td><td>Italy</td></tr>
     <tr><td>40</td><td>Spain</td></tr>
     <tr><td>24</td><td>Sweden</td></tr>
     <tr><td>21</td><td>Canada</td></tr>
</table>

<img src="/img/2010/11/Hosting-Locations-of-Magento-Sites.png" alt="Hosting Locations of Magento Sites" title="Hosting Locations of Magento Sites" />

As we can see, United States has the runaway majority and Germany has the largest European presence.  Incidentally, the successful <a href="http://www.meet-magento.de/">Meet Magento</a> event was hosted in Leipzig earlier this month.  The UK and France follow not far behind.  The biggest limitation of this methodology was that I was unable to map a country from the IP of quite a few of the sites.

So, my improvement was to take a closer look at the actual content for each of the sites.  Luckily, by default in Magento there is a language code in the HTML tag at the top of the source of the page.   When a different locale is set up, Magento changes this tag to reflect the change.   For example, <a href="http://demo.magentocommerce.com/">demo.magentocommerce.com</a> shows:

{% highlight html %}
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
{% endhighlight %}

while <a href="http://score.nl/">score.nl</a> uses:

{% highlight html %}
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="nl" lang="nl">
{% endhighlight %}

So let's take a look at the results.   Over 63% of sites are in English, 13% German, 7% French and 4% Dutch.  This is actually pretty similar to the hosting location results.

<img src="/img/2010/11/magento-locales.png" alt="Magento Locales" title="magento-locales" />

Does this tie in with what you are seeing?  Any module and theme developers out there that want to share their experiences with language translations?


If anyone has any other ideas for things I could write a cheeky script to analyse, let me know :).
