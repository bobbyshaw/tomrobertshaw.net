---
layout: post
status: publish
published: true
title: Investigating Redditors' values with IBM Watson
categories:
- ai
- psychology
- watson
---

This week saw the annual AISB conference come to Bath. That's the "Society for the Study of Artificial Intelligence and Simulation of Behaviour" for the uninitiated which I include myself in. In addition to researchers presenting their papers, there was a [hackathon](http://aisb2017.cs.bath.ac.uk/tutorialshackathon.html) that was opening to the public. The theme was "building Artificially Intelligent systems to work within society" and it was a great opportunity for academics to engage with the local developer community.

After an introduction to the researcher's projects, I joined a project with [Dr Virginia Dignum](https://twitter.com/vdignum), an Associate Professor at the Faculty of Technology, Policy and Management at Delft University of Technology. [Virginia's current research](https://sites.google.com/view/mood-aisb17/home) is considering tools that facilitate online discussion using AI. One of the aims of this is to reduce polarisation and encourage acceptance of others during online deliberation.

This is particularly relevant in the current political climate where there is dissatisfaction with voting outcomes. Individual polarisation leads to a large group of people that are distant from the majority vote resulting in a feeling of disconnection. This makes it more difficult to accept the decision and are likely to participate less. Another challenge with current voting mechanisms that make acceptance more difficult is that the majority vote does not have to be morally acceptable.

What Virginia and her associates are interested in are tools and techniques that help support the acceptance process after a debate rather than those that are focussed on the argumentative phase. The hypothesis is that if you understand the context of people's statements and their personal values, you are better positioned to empathise their position even if you disagree with it.

During the our discussions, there was one paper on [Understanding Individual's Personal Values from Social Media Word Use](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.636.7168&rep=rep1&type=pdf) that piqued our interest. In this study, the researchers look for patterns in word usage on Reddit against their values as determined through surveying. There's a way of categorising people's values called the [Basic Human Values](https://en.wikipedia.org/wiki/Theory_of_Basic_Human_Values). They were able to identify a range of correlations between language used and values held. For example, those that value self-enhancement show less anxiety and tend to give less advice to others. Those that are open to change write less about the past, and interestingly use more swear words and write with more certainty. People that are conservative write more about their home lives.

For the few hours that we had to experiment, we chose to do a similar investigation. We took a [highly-engaged post on reddit](https://www.reddit.com/r/privacy/comments/61kw34/uk_home_secretary_whatsapps_end_to_end_encryption/) and for each user, we looked at their most recent 100 comments and fed them into IBM Watson's [Personality Insights API](https://www.ibm.com/watson/developercloud/personality-insights.html). The results of this process provided us with an impression of the their values, needs and [Big 5 persaonlity traits](https://en.wikipedia.org/wiki/Big_Five_personality_traits).

We were then able to pick out their most defining characteristics and label their comments on the original discussion thread. At this point we ran out of time, but we envisage this could see this integrated into a browser extension that allowed you to quickly get some insight in to what a person values. The intended advantage here is that when discussing with "random" people on the internet, you can get more context on where they're coming from and what they value so that you may be able to empathise more with their opinion even if you disagree it. Having greater empathy with opposing views being seen to support the acceptance process.

The rough and ready code for this can be found on [github](https://github.com/bobbyshaw/reddit-personality-traits).

You can try out IBM's personality traits service yourself by letting it review your tweets! Here's what it thinks of me:

![Tom Robertshaw's personality traits](/img/2017/04/bobbyshaw-personality-traits.png)

[Create your own twitter personality trait profile](https://personality-insights-livedemo.mybluemix.net/).
