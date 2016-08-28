---
layout: post
status: publish
published: true
title: ArticleCast with Pocket
categories:
- development
---

Try [ArticleCast](http://www.articlecast.co.uk/) now.

I've really enjoyed filling my time when driving and walking with podcasts. [Tim Ferris's podcast](http://fourhourworkweek.com/podcast/) is my favourite and has encouraged me to read the [four hour work week](http://fourhourworkweek.com/).

At the same time, I have used [Pocket](http://getpocket.com/) for a couple of years to keep track of articles that I want to read.  It's easier to add items to the queue and the reading experience is delightful.  However, I very rarely hit "inbox zero" with them.  I'd say that this is, in part, due to my lack of focus and getting distracted when there is internet access available.  What I thought would be an interesting experiment is if I could merge my two information gathering techniques so that I could listen to articles when I was on the move.

The Meanbee hack nights were the perfect place to kick-start this.  I teamed up with [Nick](https://www.nicksays.co.uk/), [Tomas](http://tgerulaitis.com/) and [Ash](https://www.ashsmith.io/), each taking on a component of the system and starting to build it upon Laravel.

Once logged in with Pocket, we are able to retrieve the list of unread articles and their title and excerpt.  It does not provide full article content though so we've used [PHP Goose](https://github.com/scotteh/php-goose) and [PHP Readability](http://code.fivefilters.org/php-readability/).  This has mixed results but we do get text content for 95% of articles.

The make or break for this project is the quality of the text to speech service.  At first we used [tts-api.com](http://tts-api.com/) but it became unavailable so we swapped it out for the [IBM Watson](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/text-to-speech.html) text to speech service.  I've been really impressed with its accuracy.

The production site is hosted on Heroku with audio files stored in Amazon S3.  I had some problems with the ephemeral file system.  We had architected the system heavily on statuses in order to facilitate the division of tasks and cope with task failure.  The problem was that the MP3 output of one task had disappeared by the time the upload to S3 task ran.  For now, I've simply moved them into the same task.

Sign in with your Pocket account at [ArticleCast](http://www.articlecast.co.uk/).  Unread articles are synchronised daily and the conversion and upload process is run every 10 minutes.  It will take a while to go through your entire feed upon first login and synchronisation. 

There are a couple of improvements that I'd like to make:

- Add the title into the content to be converted from text to speech.
- Add in silence at the beginning or end of episodes to make it more recognisable that you're moving on to the next article when listening to multiple in a row.
- The previous one could be tied in with having our own jingle saying "brought to you by" - more for clarity than advertising.

I'd love it if you tried it out and let me know your feedback [@bobbyshaw](http://twitter.com/bobbyshaw).