---
layout: post
status: publish
published: true
title: URL shortener "to" confuse users and url regex alike
categories:
- Technology
---
<p><h3><strong><a href="http://to/">http://to/</a></strong></h3></p>

<a href="http://to/"><img title="url-shortener" src="/img/2009/12/url-shortener-1024x345.png" alt="url-shortener" /></a>

This [experimental] url shortener came to light recently and confused many to how it actually works.

From a user's point of view, this could dominate the url shortening market with the 2 letter address alone.  On top, it's neat and appropriately named.

However, any users with a sprinkling of technical knowledge would be forgiven for being a bit confused. Normally you will register your domain e.g. tomrobertshaw.net and then either put your site here or at some subdomain.   This is known as the hostname.  Each hostname will have an A record in the DNS which can then be looked up to find where the site is located (IP address).

.to is the Top Level Domain (TLD) for Tongo, and this is what http://to/ is referring to. Although uncommon, it is perfectly valid for the TLDs to have A records and be used to host sites.

The problem currently arises that all urls are expected to have a "." in.  Therefore, browsers that try to be clever will try and "correct" you.  Note, if you can't get the site to work in your browser, try <a href="http://to./">http://to./</a> as this will force the browser to do the right thing.

After its surge in popularity, the owners have restricted usages to those with a password:

"Hey! This is just an experimental redirector, not intended for public use (yet). If you want to use this, you know who to contact..."

It will be interesting to see how this service develops when it gets released to the public.  It has a long way to catch up with the likes of <a href="http://bit.ly">bit.ly</a> which recently added <a href="http://blog.bit.ly/post/263859706/spam-and-malware-protection">spam and malware protection</a> to its service.
