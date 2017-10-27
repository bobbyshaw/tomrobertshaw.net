---
layout: post
status: publish
published: true
title: Tools for Managing A PHP Library
categories:
- PHP
---

I spend an awful lot of time with Magento, but over the past year I've been catching up with how PHP has been progressing since the days when Magento was architected.

One of the small side-projects I took on to familiarise myself with modern PHP development was to create a [library](https://github.com/bobbyshaw/ibm-watson-visual-recognition-php) which served as an wrapper around the IBM Watson API for [Visual Recognition](https://www.ibm.com/watson/developercloud/visual-recognition.html).

## Composer Development Tools

When getting set up, I was interested in what development tools were available to help me to create "better software". What does a PHP Library developer's toolbox look like?

The ones that I have found useful are:

- [PHPUnit](https://github.com/sebastianbergmann/phpunit)
    - Clearly, you only write code with tests.
- [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer)
    - Ensure that you're sticking to a consistent coding style, e.g. PSR-2.
- [PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)
    - And then automatically fix when you miss the standards, because developers are lazy!
- [GrumPHP](https://github.com/phpro/grumphp)
    - I swear by this on all new projects. GrumPHP is a pre-commit hook task runner.  
    My common setup is for it to run through PSR-2 code styling checks and run through PHP Unit tests
    before allowing a commit message to be written.
    While I know the standards and I know to run tests, this is great for keeping me on the straight and narrow and not cutting corners.
- [Security Advisories](https://github.com/Roave/SecurityAdvisories)
    - I've not had it flag up anything yet but this library seems great. It validates that you're not distributing any out of date libraries with known vulnerabilities.

## Composer.lock

The age-old question of whether or not to commit the composer.lock file. My understanding is that you should for projects but it's no big deal for libraries. For projects, committing the lock file means that you have locked down the dependencies so that a new developer can come to the project and get started straight away.  For libraries, this [isn't so necessary](https://getcomposer.org/doc/02-libraries.md#lock-file) but you can if you'd like. By my reading, Composer will not use your lock file when it comes to identifying the versions of dependencies to use.

## Continuous Integration / Code Analyser

I tried a range of the tools available. For running through tests in a range of environments, I found [Travis CI](https://travis-ci.org/bobbyshaw/watson-visual-recognition-php) the easiest and most satisfying to get up and running.

As this was the first time that I had written a library, I was also looking for a code analyser to provide me with feedback. I tried [SensioLabs Insight](https://insight.sensiolabs.com/) and [Code Climate](https://codeclimate.com/) but I had the best success with [Scrutinizer](https://scrutinizer-ci.com/) which was the only one to find a logic error in my code (in addition to style/structure problems).

## Documentation

As developers, being able to generate documentation is the only way that we really want
to provide documentation, if at all.

As I had spent time documenting public methods to the best of my abilities, I used
[phpDocumentor](https://www.phpdoc.org/). However, I found that none of the themes provided were very user friendly or attractive. Even once it was generated, I wasn't sure what to do with it. It didn't seem right to commit it to the repository. I'm providing this library for free as in beer as well as in speech so I don't want to worry about hosting a documentation site. I'm unsure how people wish to consume documentation but I know they aren't going to generate it themselves.

My personal preference is for documentation to be in the project README.md.  Especially for single purpose
libraries where the scope of functionality shouldn't exceed what can be documented in a reasonable size readme file.

So I'm still looking for an answer here.  At the moment it's still a case of having phpDocumentor
configuration around for those that wish to use it but primarily hand-rolling my own documentation. For this particular project that's fine as it's not going to go through many releases and it's public
API is manageable in size.

## Providing a PHAR

On another project, [magedbm](https://github.com/meanbee/magedbm), which is a tool to manage database backups for Magento development environments, I had reason to package my work into a phar.  This would enable
easy installation on development, staging, and production environments without needing to worry
about dependencies breaking and minimising the number of installation steps.

There isn't an overwhelming amount of information on packaging PHP into phars. Presumably
because it's not something that's regularly needed as composer is sufficient for most needs.

I started off using [phar-composer](https://github.com/clue/phar-composer). This was functional but perhaps due to my misconfiguration the phar was coming out at around 22MB which was far too large.

I saw other projects were using the [Box project](https://github.com/box-project/box2) and this had far better luck and quickly reduced the size of the same phar to 7MB.

## Summary

There are so many great tools out there that are either open-source or free for open-source projects which is really encouraging for those that want to give it a go themselves.
