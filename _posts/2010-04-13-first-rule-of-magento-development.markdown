---
layout: post
status: publish
published: true
title: First Rule of Magento Development
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 156
wordpress_url: http://tomrobertshaw.net/?p=156
date: 2010-04-13 20:24:07.000000000 +01:00
categories:
- Magento Development
tags: []
comments: []
---
The first rule of magento development is one that I keep having to relearn every time I install magento.  I am going to write it here, if only as a reminder to myself!

<b>Disable the Magento cache.</b>  It's great for speed on a live site but not necessary when developing.  Many a minute has been wasted after installing a module that I know to be in a stable state and it not work due to inexplicable reasons.

To disable the cache.  Go to your magento admin, then:

<pre lang="text">System -> Cache Management -> Select All -> Actions -> Disable -> Submit </pre>

Confession complete.
