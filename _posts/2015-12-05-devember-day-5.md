---
layout: post
---

Today I barely did anything on my personal projects as I was at [codebar](https://codebar.io/), [24 pull requests](http://24pullrequests.com/), [your first pr](http://yourfirstpr.github.io/) and [ladies who code](http://www.meetup.com/Ladies-Who-Code-UK/) event to help people submit their first pull requests. Personally I worked on [Twitter Windchimes](https://github.com/oluoluoxenfree/twitter_windchimes) for a bit, deleting the chrome extension stuff and setting up the streaming for the app, though I'm unsure how I'll test this without getting banned by Twitter for a while for making too many requests, but we'll see.

I realise I haven't been posting much actual code in these devlogs but hopefully that'll change soon when I start getting more into Windchimes. I feel like nothing I'm doing is of particular interest though I guess I'm wrong about that when it comes to hapi servers at the very least, so I'll try and post about that when I'm feeling less tired.

Copying and pasting code you've previously written is a [code smell](http://c2.com/cgi/wiki?CodeSmell) according to [this talk](https://www.youtube.com/watch?v=JVlfj7mQZPo) by Elijah Manor, but I'm not sure if he means for large apps or just in general. I reuse the same server and modify it, though I guess it does end up being a crutch if you're not careful.

Speaking of crutches I finally removed the deprecated `gulp.run()` from my template gulp file.

The old syntax was:

```
gulp.task('default', function() {
  gulp.run('sass');
  gulp.watch('style.scss', function(event) {
        gulp.run('sass');
    });
});
```

The new syntax is:

```
gulp.task('default', function() {
  gulp.watch('style.scss', ['sass']);
});
```
Not completely sure about the reasoning behind the change save for [this stackoverflow post](http://stackoverflow.com/questions/28826418/gulp-run-alternative) but I've stopped getting threatening messages from gulp!

I'm excited to try and do an animation of some sort for the windchimes, and to also play around with an audio API to make the least irritating gangling and a (hopefully) more realistic effect. It should be interesting. I've done very small animations on [lorem blankum](https://lorem-blankum.herokuapp.com/) using [animate.css](https://daneden.github.io/animate.css/), and the blinking cursor of this blog, but I'm keen to continue learning more about it.

I'm also excited to try out a gif making app for linux called [silentcast](https://github.com/colinkeenan/silentcast), I'm going to use it to make demos of the different things I've made on github, add to my projects page and may update some of these posts as well.

I've also started doing the [free code camp](http://www.freecodecamp.com/) ziplines for more practice, especialy in making bootstrap less bootstrap-y. I was annoyed intially that I had to use [codepen](http://codepen.io/) for my code - despite loving the concept and wanting to get involved with the communtiy - but I know it has to be accesible to beginners so I'm glad they value them over my github contribution chart. The first task is to make [a portfolio page](http://codepen.io/oluoluoxenfree/full/bEGvpz/) (as of the fifth there's nothing on that page but a halfway finished navbar), so I'm emulating the style of this blog I guess but fitting more into the template of the example.

I want to practice [a11y](http://a11yproject.com/) best practices on it too so it may end up taking a lot longer than such a simple task ought, but no time to practice like the present, and it'll get me into better habits. I also made a small edit to the [Javascripthers](http://javascripthers.github.io/) site, as a few of the words that should be links didn't have links, silly me.

How was your day? Did you get much done? Let me know in the comments.
