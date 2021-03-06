---
layout: post
status: publish
published: true
title: Gource Video Showing Magento Theme Development
categories:
    - Fun
tags: []
---
Time for some Friday fun.  Last weekend, I played with <a href="http://code.google.com/p/gource/">Gource</a>, a software version control visualisation tool.  It allows you to create videos of commits to your Git repository over time and by different users.

This only works for Git, Mercurial and Bazaar, but there are third party integrations for CVS and SVN.  See <a href="http://code.google.com/p/gource/">google hosted project</a> for more information on this.

<a href="http://www.nicksays.co.uk/">Nick</a> and I recently worked on an emergency project for a client to convert a Photoshop design into a Magento theme in 2 days.  I thought I'd use this as an example of what it can do.  Although it is a rather short project to be creating visualisations with, I still found it pretty cool.

<iframe src="//player.vimeo.com/video/14097573" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Now all I can think about is how awesome it would be to see the Magento team create a similar visualisation for the core code.  

<h2>Setting up on Mac</h2>

I run <a href="http://www.macports.org/">MacPorts</a> so to install Gource was nice and easy:

{% highlight bash %}
sudo port sync
sudo port install gource
{% endhighlight %}

Then, I moved into the folder with my git repository and ran:

{% highlight bash %}
gource --disable-progress --stop-at-end --output-ppm-stream - | ffmpeg -y -fpre /path/to/libx264-default.ffpreset -b 3000K -r 60 -f image2pipe -vcodec ppm -i - -vcodec libx264 gource.mp4
{% endhighlight %}

If you make any of your own videos with Gource, post links in the comments for us all to see!
