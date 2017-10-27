---
layout: post
status: publish
published: true
title: Exception Printing Disabled by Default in Magento 1.4
categories:
    - Magento
---
While doing some development on the <a href="http://www.meanbee.com">Meanbee</a> postcode module today on Magento 1.4.0.1, I received the following error:

<pre lang="text">
There has been an error processing your request

Exception printing is disabled by default for security reasons.

Error log record number: 1037788671028
</pre>

It takes 2 seconds to enable this.  Go to the magento installation root and then into the errors folder.  Subsequently:

<pre lang="text">cp local.xml.sample local.xml </pre>

Exception printing is now enabled.
