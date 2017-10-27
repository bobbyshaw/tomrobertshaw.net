---
layout: post
status: publish
published: true
title: Finding Swimming Pools with IBM Watson
categories:
- Machine Learning
- IBM Watson
---

Much of my recent research and development time recently has been spent exploring IBM's
machine learning.  For anyone that's spent time with me will know that I'm a little bit
obsessed with the potential of Watson's APIs.  I'm impressed with the direction that IBM
is taken and they've become creators of innovate software services of the future.  As they
transition away from hardware this is a very exciting time.

I was grateful for the opportunity to share my knowledge and excitement for Watson
at both BathCamp and PHP South West.

[Youtube]()

[Slides]()

In my presentation I share how easy it is for experienced developers but novice 'machine learners'
are able to get up and running without needing a background in statistics.

The highlight of my experience with Watson so far is working with the [Visual Recognition]() API.

I first experimented with this API through my interests in website profiling.  I
was looking to classify the industry vertical of ecommerce sites.  I first attempted this
with naive Bayes with not a lot of success.  I then trained Watson on screenshots
of 1000 ecommerce home pages that I had classified.  The results were impressive.

I then moved on to an opportunity whereby I classified property photography for an
estate agent.  With automated feeds of properties coming through, it's hard to validate
the images are optimised and adhere to the terms and conditions of the site.

The property was primarily located in Spain so some of the categorisations that
were important to us where whether the photo was of: Swimming Pool, Inside, Outside,
which room it was in and whether there were any company logos inserted into the image.

While only a prototype project, I was able to correctly classify images with Swimming Pools
over 80% of the time.

I've released a PHP library should you wish to integrate this into your own site which
is available on Packagist.

There are plenty of other APIs that I'm looking to get experience with:

- Trade-off Analytics
    - Can I work this into Ecommerce.  We're used to using filters to represent our
    product desires but this is far too rigid a system. If we could show alternative
    products that fall just outside the customers filters in theory you may be able to
    up-sell/aid discovery of products that wouldn't otherwise have been found.
- Retrieve and Rank
    - This appears to be tailored to larger text sources and natural language questions and search.  
    By my reckoning there is still potential for this to be used as a product search service
    that is trained to re-rank products based on their add to basket and conversion rate
    for that keyword. Admittedly it may be overkill when their service is capable of much more.
    - The other idea is using it to train it on Meanbee' internal documentation site, Confluence,
    so that we can use a Slack bot that can advise on the best place to look when someone is struggling.
- Visual Recognition
    - I would enjoy working more with this. Image recognition is one of the areas of machine learning
    which has only recently achieved better than human accuracy.  This means there's greater application
    opportunities that haven't been tried so often before.  One idea is training it on social media photos
    to help discover and filter out feeds for brands so that they can prioritise engagement with customers.
