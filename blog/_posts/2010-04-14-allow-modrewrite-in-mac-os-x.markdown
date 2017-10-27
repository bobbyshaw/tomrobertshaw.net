---
layout: post
status: publish
published: true
title: Allow ModRewrite in Mac OS X
---
ModRewrite is described on the <a href="http://httpd.apache.org/docs/1.3/mod/mod_rewrite.html">Apache page</a> as the "Swiss Army Knife of URL manipulation".  So you can imagine my upset when it wasn't working on my Mac.  Luckily, all I had to do was a small config change to enable it.

To fix this I had to edit:

<pre lang="text">/private/etc/apache2/httpd.conf</pre>

and change it to allow override by .htaccess files.

Find the directory at around line number 194 - <tt>/Library/WebServer/Documents </tt>.   Then change to:

<pre lang="text">AllowOverride All</pre>

You'll need to restart apache which you can do via <tt>System Preferences -> Sharing -> Web Sharing</tt> then uncheck and recheck it.  I prefer the old fashioned way:

<pre lang="text">sudo apachectl graceful</pre>

Note that if you are trying to get this to work on your apache local to your user area then you will also need to change that config.

P.s. There is also a quote from Brian Moore on the Apache page which describes ModRewrite as "voodoo", so beware!
