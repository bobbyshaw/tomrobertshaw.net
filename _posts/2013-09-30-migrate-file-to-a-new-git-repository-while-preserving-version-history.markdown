---
layout: post
status: publish
published: true
title: Migrate file to a new git repository while preserving version history
author: Tom Robertshaw
author_login: admin
author_email: tom.robertshaw@meanbee.com
wordpress_id: 2237
wordpress_url: http://tomrobertshaw.net/?p=2237
date: 2013-09-30 21:46:33.000000000 +01:00
categories:
- Development
tags: []
comments: []
---
Finding myself in a position where I was decommissioning an old project and starting afresh, there was a file that I wanted to copy to my new project and, ideally, retain all of the valuable version history. 

After searching, I found reams of git commands piped together that <em>may</em> have solved my problem.  They tended to be working backwards, making me start with the full repository and then using git filter-branch to filter down to the file or directory that I needed, it just didn't seem right.  The tutorials were also lengthy and used multiple git commands in sequence that I couldn't follow so I wasn't comfortable using.

What I actually wanted was very simple. I wanted all patches for a single file and to apply them to a new repository.  I found a post explaining how to use <a href="http://blog.neutrino.es/2012/git-copy-a-file-or-directory-from-another-repository-preserving-history/">git format patch</a>.

I couldn't quite get this line working for me.  It was not including a patch for the root commit:

<pre lang="bash">
git format-patch -o ~/Code/patches $(git log file.txt|grep ^commit|tail -1|awk '{print $2}')^..HEAD file.txt
</pre>

In the end, I found that this was sufficient:

<pre lang="bash">
git format-patch -o ~/Code/patches --root file.txt
</pre>

This left me with a directory of patches, which, after initialising a new git repository, I could then apply in bulk with:

<pre lang="bash">
git am ~/Code/patches/*.patch
</pre>

Now, all being well that would have been problem solved.  However, somehow the git history on the file was messy.  Without going into details, it meant that the patches produced didn't make sense and it needed manual resolution.

After recovering from <em>that fear</em> you get when something goes wrong in git, I retaliated and was able to apply the patches manually with the help of <a href="http://www.pizzhacks.com/bugdrome/2011/10/deal-with-git-am-failures/">this post</a>.

<pre lang="bash">
git apply ~/Code/patches/0015-patchfile.patch --reject
(edit edit edit)
git add file.txt
git am --resolved
</pre>

And there we are.  One new repository with a brand new old file.
