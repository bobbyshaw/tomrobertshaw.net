---
layout: post
status: publish
published: true
title: Handy regex for adding inline translations to Magento template files
categories:
    - Magento
---
When developing Magento themes, you will quite often have flat HTML that you are breaking apart and putting into Magento's template files.  One thing that I have OCD-like tendencies with is the need to make sure that all text is in an inline translate.  By that I mean using:

{% highlight php %}
<?php echo $this->__('Basket') ?>
{% endhighlight %}

Obviously, this is good practice to have when building any Magento store! However, it can sometimes mean a lot of repetitive typing, so I decided to use a regular expression instead to replace text automatically.  I've tended to use textmate during development and so have used the following for "Find and Replace", but they can easily be converted to be used in your text editor or IDE of choice.

Find this:
{% highlight bash %}
([^-])>([^<\s][^<]*)<
{% endhighlight %}

Replace with:

{% highlight php %}
$1><?php echo $this->__("$2") ?><
{% endhighlight %}


This snippet will work even if the file already includes some inline translates.  I've tested it a bit, but if anyone finds some edge cases where it doesn't work, then let me know.

For <tt>"$2"</tt> I'd normally use single quotes, but the current regex won't look for and escape the string if it already contains a quote, e.g. an apostrophe.  So I've left it as double quotes as these are less likely to appear in strings.

Note this regex won't replace attributes e.g. alt and title tags. Just the content within elements.
