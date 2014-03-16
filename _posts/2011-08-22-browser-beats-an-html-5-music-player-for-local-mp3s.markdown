---
layout: post
status: publish
published: true
title: ! 'Browser Beats: An HTML 5 music player for local MP3s'
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 1664
wordpress_url: http://tomrobertshaw.net/?p=1664
date: 2011-08-22 16:55:50.000000000 +01:00
categories:
- Technology
- Fun
tags: []
comments: []
---
Play your local mp3 files in the browser with <strong><a href="http://tomrobertshaw.net/browserbeats" title="Browser Beats" target="_blank">Browser Beats</a></strong>, a hack weekend project by <a href="http://twitter.com/tgerulaitis">Tomas Gerulaitis</a> and me.  

This weekend, <a href="http://www.storm-consultancy.com/">Storm Consultancy</a> held their second hack weekend. A time for webbies to descend on "Storm Towers" to code, design, drink, eat pizza and play Guitar Hero.  I paired up with Tomas to build a browser music player (only compatible with Chrome), that plays local MP3 files using the HTML 5 audio element.

<a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a>, a handy template for budding web apps, was released on Friday, so we decided it would be pretty cool to make use of that.  While we didn't need many of its features, we made use of the grid system and the modal box.

Functionality-wise, Browser Beats allows you to add local files to your "Library", then click to add them to the now playing queue.  There are then basic controls at the bottom of the page to move between tracks on your playlist.  

<a href="http://tomrobertshaw.net/wp-content/uploads/2011/08/Browser-Beats.png"><img src="http://tomrobertshaw.net/wp-content/uploads/2011/08/Browser-Beats-1024x724.png" alt="" title="Browser Beats" width="640" height="452" class="aligncenter size-large wp-image-1665" /></a>

We used a JavaScript ID3 library <a href="https://github.com/aadsm/JavaScript-ID3-Reader">available on GitHub</a> to get the tags of tracks to populate the library.  For the custom audio controls, we had help from <a href="http://terrillthompson.com/tests/html5-audio.html">Terrill Thompson</a>.

Obviously, it's very limited in functionality.  Major omissions at the moment include a method of saving your library so that it's retained after page reload.  However, all in all, a fun weekend's work.

Thanks to Storm for putting on the event!
