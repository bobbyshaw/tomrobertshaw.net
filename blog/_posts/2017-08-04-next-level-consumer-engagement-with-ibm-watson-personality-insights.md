---
layout: post
status: publish
published: true
title: Next Level Consumer Engagement with IBM Watson Personality Insights
categories:
- ibm-watson
---

The sheer volume of data that is produced and made publicly available each day is astounding and is only set to continue growing rapidly. One of the challenges of building upon this treasure trove of information is that the majority of it is unstructured. Traditional computing requires structured data; data that is clearly labelled with every possible annotation that we may be interested in. This isn't viable and means that traditional computing can not make the most of the information provided.

With the power of Artificial Intelligence, IBM, with the suite of Watson technologies that it has created, has been able to achieve what previously was not feasible. These tools can ingest large amounts of unstructured data and glean meaning in real time. In addition, this can be achieved through simple APIs hosted in the cloud which gives huge potential to scale to handle massive data sources.

All of these features together open up a plethora of new opportunities. One of these is being able to perform intelligent analysis on social media posts and other user-generated content like forum posts. Previously, only rudimentary sentiment analysis was feasible. Now, with tools such as the [Personality Insights API](https://www.ibm.com/watson/services/personality-insights/), complex linguistic analysis can be performed without any machine learning expertise.  The tool infers personality traits and grades against [industry standard models](https://www.ibm.com/watson/developercloud/doc/personality-insights/models.html) from Psychology which include The Big 5, Needs and Values. I recently wrote about one experiment of mine to [analyse reddit users' values](https://tomrobertshaw.net/2017/04/investigating-redditors-values-with-ibm-watson/).

These APIs have proven valuable for [Konvo](http://ecc.ibm.com/case-study/us-en/ECCF-XIC12357USEN), who are providing personalised trends to consumers and cutting out social media noise. By using the Natural Language Understanding API to identify keywords in conversations and Personality Insights to identify user interests, Konvo are able to prioritise and filter so that only the most relevant content is shown.  Building on top of IBM technologies has meant that they have been able to validate their product more quickly and with less investment than expected.

What's more, Watson takes decades of psychology research and can correlate personality characteristics with consumption preferences of an individual just by analysing text that they have written.

By implementing these technologies, companies can achieve industry leading personalisation.  For instance, they would be able recognise which customers respond well to targeted promotions, which respond well to discount marketing campaigns, and those that buy because they are loyal to the brand. Enabling brands to communicate with customers in a way that's going to maximise engagement.

Analysing text is incredibly simple with Watson's API and pre-trained models.  The simplest way to request a personality profile can be seen in the example blow.  Text to be analysed is provided from a file, the data-binary option preserving UTF-8 data. By adding a `consumption_preferences` flag and setting it to true, the profile will also return consumption preferences in addition to the personality profiles

```shell
curl -X POST -u "{username}:{password}"
--header "Content-Type: text/plain;charset=utf-8"
--header "Accept: application/json"
--data-binary @<filename>
"https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2016-10-20&consumption_preferences=true"
```

The response structure is shown below. Note that it is provided in JSON format because we sent an Accept header with `application/json` in the request.

One of the first sections to be returned is the Big 5 personality profile. This categories individuals across five dimensions, these are: Agreeableness, Conscientiousness, Extraversion
Emotional range and Openness. We can see here the each category is broken down further into its components. Here we see the individual rates in the 90th percentile for Adventurousness, contributing to being in 80th percentile for openness. This means that this individual's writing exhibits this particular trait more than 90% of the population sampled.

The next section considers Needs and we see that the text submitted shows a need for Challenge in the 67th percentile. The last section of personality traits is Values. Again, this follows a similar format providing percentile information along with a label for each Value and the raw score.

As we passed the `consumption_preferences` parameter, the last item in the response includes inferences on predicted consumption behaviours based on the combination of the personality traits identified. There are multiple consumption preference categories in which multiple consumption behaviours are available. In this example we see Health and Activity Preferences category and a score of 1 for “Prefers to eat out”.  Consumption preference scores may be 0 (unlikely), 0.5 (neutral) and 1 (likely). So here we see a very adventurous character, that enjoys a challenge and values conservation highly. This together with the rest of the analysis, Watson is able to advise us that they prefer to go out for dinner.

```json
{
  "personality": [
    {
      "trait_id": "big5_openness",
      "name": "Openness",
      "category": "personality",
      "percentile": 0.8011555009553,
      "raw_score": 0.77565404255038,
      "children": [
        {
          "trait_id": "facet_adventurousness",
          "name": "Adventurousness",
          "category": "personality",
          "percentile": 0.89755869047319,
          "raw_score": 0.54990704031219
        },
        . . .
      ]
    },
    . . .
  ],
  "needs": [
    {
      "trait_id": "need_challenge",
      "name": "Challenge",
      "category": "needs",
      "percentile": 0.67362332054511,
      "raw_score": 0.75196348037675
    },
    . . .
  ],
  "values": [
    {
      "trait_id": "value_conservation",
      "name": "Conservation",
      "category": "values",
      "percentile": 0.89268222856139,
      "raw_score": 0.72135308187423
    },
    . . .
  ],
  "consumption_preferences": [
    {
      "consumption_preference_category_id": "consumption_preferences_health_and_activity",
      "name": "Health & Activity Preferences",
      "consumption_preferences": [
        {
          "consumption_preference_id": "consumption_preferences_eat_out",
          "name": "Prefers to eat out",
          "score": 1
        },
        . . .
      ]
    },
    . . .
  ],
}
```

To see the depth of personality profiles, consider the below sunburst graphic which is a visualisation of the Personality Insights API results based on a transcript of Barack Obama in a 2012 debate. He scores highly for Conscientiousness, Openness and Emotional Range.

![Obama Personality Analysis](/img/2017/08/obama-personality.jpg)

What [Edge Up Sports](http://ecc.ibm.com/case-study/us-en/ECCF-MEC03025USEN) have been able to create with the Personality Insights API is an impressive case study for the service.  The CEO, Illya Tabakh, believes that cognitive computing will transform the way fantasy football is played. They have created an app that analyses social media posts to keep track of mentions of professional football players. With this information they can gather consensus on the sentiment towards players. Crucially, the crowd-sourcing aspect of this enables both the player's on-field and off-field activity to get a more comprehensive picture. To further increase the sentiment accuracy each social media user's personality profile can be built which gives us the ability to reduce source bias.
This approach has drastically reduced the amount of research time required for fantasy football participants to create and manage their team which in turn has increased adoption.

The depth of analysis that the Personality Insights API can provide means that it recommends using 3000 words to maximise its accuracy. If a judgement needs to be made on a small amount of text, a high-level emotion analysis can be performed using the [Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/) service. Like the Personality Traits API, this takes written text and provides information on the emotions expressed by the individual.  Being tuned to provide insights on smaller amounts of texts means that this is well suited to a greater number of situations where background isn't available on each individual.

There are huge opportunities within customer support, whether voice or chat. From guiding conversations or providing aggregated reports using emotion detection. There is so much opportunity here that IBM have provided a specific [customer engagement endpoint](https://www.ibm.com/watson/developercloud/doc/tone-analyzer/using-tone-chat.html) which allows chat transcripts, annotated with customer and agent label, to be analysed for tone.

An example request to the `tone_chat` endpoint is shown below. In the same way as other IBM API requests, the user credentials are passed using basic authentication and the JSON content-type header is sent to show that data is being sent in JSON format.

```shell
curl -X POST --user "{username}":"{password}"
--header "Content-Type: application/json"
--data-binary @./tone-chat.json
"https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone_chat?version=2016-05-19"
```

The request references the `tone-chat.json` file, we would expect this to contain a chat log as a list of utterances, each one with the message itself and optionally the source user:

```json
{
  "utterances": [
    {
      "text": "Hello, I'm having a problem with your product.",
      "user": "customer"
    },
    {
      "text": "OK, let me know what's going on, please.",
      "user": "agent"
    },
    {
      "text": "Well, nothing is working :(",
      "user": "customer"
    },
  ]
}
```

The service will then respond for tones recognised for each utterance and confidence scores for these tones, e.g.

```json
   {
      "utterance_id": 2,
      "utterance_text": "Well, nothing is working :(",
      "tones": [
        {
          "score": 0.753187,
          "tone_id": "frustrated",
          "tone_name": "frustrated"
        },
        {
          "score": 0.940611,
          "tone_id": "sad",
          "tone_name": "sad"
        }
      ]
    }
```

It's easy to see how this could be integrated quickly, even if the first step was just to create reports on customer satisfaction levels and the effectiveness of the customer service team.

Reviewing the effectiveness of the sentiment and emotion analysis tools that Watson provides, the advantage that businesses have integrating it into their product or service is extraordinary. The detail and accuracy of personality profile data that is available with IBM Watson, paired with the modern research that is available, is enabling the creation of completely new product offerings and helping companies gain the competitive edge in their sector.
