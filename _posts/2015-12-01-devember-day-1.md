---
layout: post
---

I've decided to take part in [Devember](http://devember.org/rules/), as I missed [Codevember](http://codevember2015.tumblr.com/).

I, Olu, will participate to the next Devember. My Devember will be to complete [Twitter Windchimes](https://github.com/oluoluoxenfree/twitter_windchimes), start the [Trans*code Twitter node version](https://github.com/oluoluoxenfree/transtwitter), and to make some headway on the [Free Code Camp](http://www.freecodecamp.com/) Front-End Developer certificate tasks. I promise I will program for my Devember for at least an hour, every day of the next December. I will also write a daily public devlog and will make the produced code publicly available on the internet. No matter what, I will keep my promise.

##Day 1:

I finally finished [Lorem Blankum](https://lorem-blankum.herokuapp.com/) (The code is [here](https://github.com/oluoluoxenfree/lorem-blankum))! There's still a bit of div movement that I am not totally okay with but it's good enough, and I can go back and tweak that later on (as well as adding hashtag and at symbol stripping regex).

I learnt a lot more about flexbox, and discovered that adding `flex` properties to the three divs I was using was what I need after all, to grow and shrink certain divs, rather than `flex-start` and `flex-end` as I thought. The majority of the Javascript was already done but I added a reset function. This function was giving me problems:

```
$('.options').one('mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.options').removeClass('bounceInLeft').hide();
 });
```

I'm using the library animate.css and needed to add and remove classes when animations ended, but for some reason trying to reset in the middle of the process caused the second prompt to reappear back on the page. I learnt that adding extra vendor bindings - in this case `-webkitAnimationEnd` can cause problems as it only unbinds the event fired that first. Removing that fixed the problem.

The only other niggling thing was a problem with `y-overflow`; it was caused by automatic padding in the Skeleton framework.

A good first day but I wonder how easy it will be to keep this going! I might also work on [Advent of Code](http://adventofcode.com/) and [24 Pull Requests](http://24pullrequests.com/) but I've given myself a lot to work on already! There's also [24 Ways](https://24ways.org) for some cool technical reading every day.

Are you taking part in the festivities? Let me know in the comments.
