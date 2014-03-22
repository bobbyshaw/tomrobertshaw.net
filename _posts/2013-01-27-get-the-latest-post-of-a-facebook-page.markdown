---
layout: post
status: publish
published: true
title: Get the Latest Post of a Facebook Page
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 2150
wordpress_url: http://tomrobertshaw.net/?p=2150
date: 2013-01-27 15:06:25.000000000 +00:00
categories:
- Development
tags: []
comments:
- id: 7595
  author: Akhtar Ali
  author_email: akhtarali441@gmail.com
  author_url: http://Yourdemoserver.in/rentmycab
  date: !binary |-
    MjAxNC0wMS0yOSAxMjozNzoxMyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0yOSAxMTozNzoxMyArMDAwMA==
  content: ! "Hii,\r\n\r\nI am unable to get the post from my facebook page.\r\ngetting
    an error Call to undefined function get_data();\r\n\r\nif there is any other method
    of getting the post please send a link on my mail"
- id: 7688
  author: dechefde@gmail.coom
  author_email: dechefde@gmail.com
  author_url: ''
  date: !binary |-
    MjAxNC0wMi0wNiAyMjo1NTowMCArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMi0wNiAyMTo1NTowMCArMDAwMA==
  content: ! "Thank you so much ! \r\nIt is really nice to have a simple, straightforward
    , complete tutorial, with all links needed.\r\nYou saved me many hours :)\r\n\r\nI
    just had to modify get_data() wrapper, adding <code>curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,
    false);</code>, to avoid SSL error (60)."
- id: 7689
  author: Fougere
  author_email: dechefde@gmail.com
  author_url: ''
  date: !binary |-
    MjAxNC0wMi0wNiAyMjo1Nzo1NyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMi0wNiAyMTo1Nzo1NyArMDAwMA==
  content: ! "Hi Akthar,\r\nLook in the tutorial above, there is a link to the get_data()
    code, in point 5.\r\nYou just have to copy paste this function in your php script."
---
My awesome friend <a href="https://twitter.com/lewisking">Lewis King</a> wanted to display the latest facebook post in the footer of a site that he's building.  He's not a developer, and facebook didn't make it easy. 

The tangled web of <a href="http://developer.facebook.com">facebook developer documentation</a> and inadequate access token description.  Most blog tutorials out there are outdated because of the introduction of required access tokens. 

My solution: 

<ol>
   <li>Get yourself an <a href="https://developers.facebook.com/tools/explorer">access token</a> (remember that you need to be an admin of the page that you want to read from).  You will need to select "manage_pages" from the extended permissions section before authorising the token.</li>

   <li>Find your USER_ID by going to <a href="http://graph.facebook.com/TheBobbyShaw">http://graph.facebook.com/USERNAME</a></li>

   <li>We have one access token, but we need to get a long-life access token for your page.  You can get this and token for your apps at this URL: <a href="https://graph.facebook.com/USER_ID/accounts?access_token=ACCESS_TOKEN">https://graph.facebook.com/USER_ID/accounts?access_token=ACCESS_TOKEN</a></li>

   <li>Take this new access token and go to: <a href="https://graph.facebook.com/PAGE_ID/promotable_posts?access_token=LONG_LIFE_ACCESS_TOKEN">https://graph.facebook.com/PAGE_ID/promotable_posts?access_token=LONG_LIFE_ACCESS_TOKEN</a></li>

   <li>You will now see an object with the page's latest posts with various fields available including the message and information about any URLs that were posts e.g. image and description.</li>

That was the difficult bit done.  It's very simple from a code point of view to get the page post data and show the latest one and link to it.
    
{% highlight php %}
<?php 
  $data = get_data("https://graph.facebook.com/PAGE_ID/promotable_posts?access_token=ACCESS_TOKEN");
  $result = json_decode($data);
?>
{% endhighlight %}

<a href="http://davidwalsh.name/curl-download">get_data</a> is a wrapper function for curl.

With this information we can take the first item in the data array and get the message.  Obviously this code should probably have more validation in it than it does. 
    
{% highlight php %}
<?php        
  $latest_post =  $result->data[0];
  $latest_post_text = $latest_post->message;
  $latest_post_link = $latest_post->actions[0]->link;
?>
<a href="<?php echo $latest_post_link ?>"><?php echo $latest_post_text ?></a>
{% endhighlight %}

There you go, Lewis.
