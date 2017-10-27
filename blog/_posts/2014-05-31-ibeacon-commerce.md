---
layout: post
status: publish
published: true
title: Beacon-assisted Commerce
categories:
- Ecommerce
---

Just under a year ago, Apple quietly announced iBeacons at WWDC.  While their potential uses are inviting, their uptake so far has been limited and tentative.

Naturally, I'm mostly interested in their potential within commerce as they could be a tool to help bind the offline and online worlds.

## What is a beacon?

A beacon is a *dumb* device costing in the region of $10 to $50.  It uses [Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) to routinely broadcast a unique identifier.  Devices within a ~70m radius can listen for and react to this notification. Compared to regular Bluetooth, removing the requirement to pair with devices results in reduced power consumption which allows for a battery lifetime of up to 2 years.   

A mobile device can acknowledge the beacon and provide an estimated distance to it.  Apple makes a point of referring to it as an "estimate", and indeed the iBeacon has three level classification strategy of "immediate", "near" and "far".  While [trileteration](http://en.wikipedia.org/wiki/Trilateration) has been [experimented with](https://github.com/MatVre/MiBeaconTrilaterationDemo), beacons are more suited to geo-fencing and zoning rather than [accurately measuring distances](http://www.thetalkingllama.com/2014/01/how-accurate-are-estimotes-at-measuring-distance/).

[Localz](http://localz.co/), a beacon platform provider, advertises them as a "digital cookie for the real world".  While somewhat of a crude metaphor, the concept of being able to track people's movements, whether in the physical or digital world, is correct.

The predominant feature of an app that integrates with iBeacons, is being able to send push notifications with location-relevant advertising, coupons or other information.  [Estimote](http://estimote.com/), one of the iBeacon manufacturers, provide some [good examples](http://estimote.com/api/) of displaying a message or notification upon entering or leaving a zone.

Crucially, iBeacons are monitored even when the app is closed.  So when a device moves in or out of a region the app is woken to enable handling the event.  See the [official documentation](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/LocationAwarenessPG/RegionMonitoring/RegionMonitoring.html) for more information.

Apple's iBeacon technology is available for Android as well as iOS.  There are alternative providers of similar technology including [Gimbal](https://www.gimbal.com/) and [Datzing](http://www.datzing.com/). The latter advertises the advantage of not requiring separate hardware and instead makes use of the WiFi and Bluetooth technology built into other devices.

NFC is commonly mentioned as a competitor and while the aim of this article was not to perform a comparison, in short they appear to serve different purposes.  NFC is more suited to contactless payments than it is proximity notifications.  NFC has a maximum working distance of 20cm as opposed to Bluetooth Low Energy's [potential range of over 100m](http://www.Bluetooth.com/Pages/low-energy-tech-info.aspx).


## Who's using them?

Following their announcement, Apple [rolled out to 254 stores](http://www.zdnet.com/apple-launches-ibeacon-in-254-stores-to-streamline-shopping-experience-7000024026/).  It is used to send push notifications with product suggestions, as well as informing customers when their order is ready for collection.  It is reported that their New York store has in the region of 20 beacons.

[Virgin Atlantic](http://www.zdnet.com/uk/virgin-atlantic-tests-apples-ibeacon-at-heathrow-7000028987/) have recently implemented a pilot programme at London Heathrow with the aim of being able to map their customers journey through the airport.  Initially, the benefit to the customer is their app being able to automatically bring up Passbook with their mobile boarding pass when they approach security.

[Tesco](http://www.marketingmagazine.co.uk/article/1288355/tesco-trials-ibeacons-rules-marketing-messages-use) are trialling iBeacons in Chelmsford, but are avoiding its potential marketing uses.  Instead, they have a similar approach to Apple, in that they provide customers a notification when they arrive in store that their order is ready to be collected.

[Walmart](http://9to5mac.com/2014/05/29/ge-integrates-ibeacons-in-new-led-lighting-fixtures-rolling-out-in-walmart-other-retailers/) are going to be pairing beacon technology with visible light communication once they have completed installation of the brand new technology from [Bytelite](http://www.bytelight.com/).

## Marketing nightmare?

The concern for businesses is how to use the technology effectively so as not to intimidate customers with unsolicited messages and invading their privacy, e.g. making the customer aware that you know the aisle that they spend the most time deliberating in.

We were in a similar position over 10 years ago with regular Bluetooth where [Bluejacking](http://en.wikipedia.org/wiki/Bluejacking) could be used to send unsolicited messages to other Bluetooth device.  The worry is how the software could be abused.  Few people want to walk through a shopping mall and get hounded by interruptions with offers and advertisements.

The key in customer engagement is the timing; it should be when the customer wants it, thereby enabling them.

That being said, [a survey](http://marketingland.com/survey-consumers-ready-indoor-location-marketing-76846) of a thousand US adults showed that 77% of consumers said they would be happy to share their location should they receive something of value in return.  With iBeacon, this could be a [highly targeted coupon code](http://www.theguardian.com/media-network/marketing-agencies-association-partner-zone/ibeacons-shopping-2014) or personalised product recommendation.


## Assisted Decision Making

The real power of beacons in commerce lies in being able to provide key information to customer behaviour analysis.  This could aid the move to provide the personalised experiences that many talk of as the future of commerce.

Multi-channel brands are now in prime position to understand customer behaviour between website and store. Using an app with beacon technology integrated, it could intelligently make suggestions based on the customer history and knowledge of the current location. Perhaps this would be by displaying featured products that are in stock and are related to a customer's previous purchase, then providing in-store location and finally being able to call over a store representative.  Alternatively, notify your store representatives on internal systems when your most valuable customers arrive.

Rather than beacons being another medium to prompt advertisements, it can be a mechanism through which to refine customer communication timing.  Fewer, tailored messages in which you are able to better understand and respond to your individual customer's needs are going to be more effective than mass-mailing generic newsletters.

Not only can this be used to control marketing efforts in-store, it has the potential to feed back into the customer analytical engine to allow for even more intelligent engagement.  For example, featuring a product on the ecommerce site because it is known that the customer spent time by the item in store yet did not purchase.  Essentially, this is recovery technique for abandoned carts of the real world. Woh.


## Summary

While adoption of beacons might be considered slow, it is due to a careful balance of providing a better experience to customers without intimidating them.  Allowing them gradually to become acclimatised to the technology.

iBeacons alone may not be a significant enough reason to build a mobile app.  However if you already have one,  integrating this technology could provide very valuable information about your customers.  It is another data-point in a [data hungry world](http://www.youtube.com/watch?v=Pj-qBUWOYfE) in the race to better understand, so that you can better deliver to loyal customers.

For more developer oriented information, [here's a good tutorial](http://www.devfright.com/ibeacons-tutorial-ios-7-clbeaconregion-clbeacon/) on iBeacons.

Are you integrating beacons into your business? I would love to hear your stories.
