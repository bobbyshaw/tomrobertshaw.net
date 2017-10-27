---
layout: post
status: publish
published: true
title: Magento Footer JS Experiment
categories:
- Magento
- Projects
---

I've pushed an update to the [github](https://github.com/bobbyshaw/magento-footer-js) repo for Magento Footer JS.

It was an experiment that I worked on over Christmas in 2013.

I hadn't gone back to it for a while and then something clicked about the way I was doing it.  As is always the way with looking back at code, I realised that I had my head stuck in "Magento development" mode and tried to move all scripts to my own layout block.  

This was a silly move as it just added complexity for two main reasons:

- The observer needed to avoid processing on this new block
- Maintaining script order was impossible because blocks aren't rendered in the same order as they are output on the page. Consider how a ``childHtml`` call would work within a template.

Instead, on a train back from Brighton to Bath I re-architected.  Now, it looks for script tags (and those that are inside HTML conditions) with regular expressions and moves it to the end of the HTML of the current block.

This could have been done for each block individually and eventually the scripts would render at the end of the page.


Remember, the aim for this is to make the best of a bad situation with so much inline JavaScript in Magento which means the core JS cannot be moved to the bottom of the page or added once the page has finished rendering.

By moving JS to the bottom we are not improving on the DOM load time but are allowing the majority of the DOM to be processed before script sources are fetched and downloaded. This should improve perceived loading time.

Next up is to test against a client site in staging to see what webpagespeedtest reports of the change.
