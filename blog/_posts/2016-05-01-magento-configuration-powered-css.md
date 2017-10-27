---
layout: post
status: publish
published: true
title: Magento Configuration Powered CSS Extension
categories:
- Magento
---

A problem that we've come across a few times at Meanbee is needing to apply different
CSS depending on admin configuration settings and images uploaded.

It's not an overwhelming problem but still one that we didn't have a re-usable solution for.
This is particularly important if you want to keep on top of performance by not having inline styles.  
It also helps when needing to support retina images while minimising effort on the client's part.

So I've released a Magento Configuration Powered CSS extension. The features are straightforward

- A template that can be overwritten in the theme which is used to generate the CSS file.
Essentially, this will be CSS statements surrounded by if statements
- A helper which allows you to access config easily.  There's a 'mixin' style helper
for outputting high DPI media query
- A "Re-generate CSS" action is available in the Cache Management area. This takes store
data and generates a CSS file for each store view.
- The custom CSS file is added to the head of the page if available.

This was first used on our project for Irregular Choice. Since then it's also been improved for multi-server/immutable environment by [Ash Smith]() due to its deployment on Smythson.
