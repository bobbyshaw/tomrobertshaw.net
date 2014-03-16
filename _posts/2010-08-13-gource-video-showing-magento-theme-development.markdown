---
layout: post
status: publish
published: true
title: Gource Video Showing Magento Theme Development
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 533
wordpress_url: http://tomrobertshaw.net/?p=533
date: 2010-08-13 09:29:03.000000000 +01:00
categories:
- Magento Development
tags: []
comments: []
---
Time for some Friday fun.  Last weekend, I played with <a href="http://code.google.com/p/gource/">Gource</a>, a software version control visualisation tool.  It allows you to create videos of commits to your Git repository over time and by different users.

This only works for Git, Mercurial and Bazaar, but there are third party integrations for CVS and SVN.  See <a href="http://code.google.com/p/gource/">google hosted project</a> for more information on this.

<a href="http://www.nicksays.co.uk/">Nick</a> and I recently worked on an emergency project for a client to convert a Photoshop design into a Magento theme in 2 days.  I thought I'd use this as an example of what it can do.  Although it is a rather short project to be creating visualisations with, I still found it pretty cool.

<object width="800" height="600" class="aligncenter"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=14097573&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=ff9933&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=14097573&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=ff9933&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="800" height="600"></embed></object>

Now all I can think about is how awesome it would be to see the Magento team create a similar visualisation for the core code.  

<h2>Setting up on Mac</h2>

I run <a href="http://www.macports.org/">MacPorts</a> so to install Gource was nice and easy:

<pre lang="text">
sudo port sync
sudo port install gource
</pre>

Then, I moved into the folder with my git repository and ran:

<pre lang="text">
gource --disable-progress --stop-at-end --output-ppm-stream - | ffmpeg -y -fpre /path/to/libx264-default.ffpreset -b 3000K -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 gource.mp4
</pre>

If you make any of your own videos with Gource, post links in the comments for us all to see!
