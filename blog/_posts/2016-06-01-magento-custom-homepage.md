---
layout: post
status: publish
published: true
title: Magento Custom Homepage Per Theme.
categories:
- magento-development
---

Magento's multi-website, multi-store management is fantastic for handling internationalisation
and design variations. One of the features that can help support design variations are using
theme exceptions based on browser user agent.

For those clients where a responsive overhaul of the site isn't achievable we have often launched
a minimum viable product responsive site and only made it available for tablet devices.

This allows us to reduce costs for the client while also ensure that their customers are getting
a better experience.  Longer term this can then be improved and added to so that it can be built out
into the primary theme for the site.

For the most part we can create a theme that uses all of the content that is already managed
through the site: categories, products, CMS pages without any need to duplicate content.  One page
where it can be hard to avoid is with the home page.  This page is often feature rich with a variety
of content which was not designed for mobile use.

By default, the CMS to be used as the home page can be only set on a per store basis.  This is great,
but creating a store view solely for this purpose could be considered overkill.

For this reason, I delivered a small module that adds to the configuration area a way of defining a
different homepage for any theme that is used.

So whether a design is enabled for a marketing campaign, or for a particular user agent, the CMS page
that should be used for the home page can be configured to match.
