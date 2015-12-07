---
layout: post
---

Today was an atypical day; I didn't code on my personal projects at all, but I did get my full hour. I remotely pair programmed with [Hannah](https://twitter.com/hannahedrosa), and we worked through some Javascript concepts like scope, function arguments, [callbacks](https://www.youtube.com/watch?v=x0vEMDDmzS0) and closures.

<iframe width="420" height="315" src="https://www.youtube.com/embed/x0vEMDDmzS0" frameborder="0" allowfullscreen></iframe>

She raised some interesting quesions despite being a newbie in her words: what is the value/type of `placeholder` in this before it's actually called?

```
  function foo(placeholder) {
    return placeholder
  }

```
I assumed it was the [`args` array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) like object but maybe it's something else, and I worry that's the kind of thing I'd have to read the Javascript specification to find out, but I'll report my findings tomorrow as I'm super tired.

Turns out I lied! I immediately googled and then asked about the topic in a slack group, and was answered by [Bryan](https://twitter.com/nebrius?lang=en), [Tyler](https://twitter.com/tbreisacher) and others.

It has no value until it's called but what I'm asking relies on understanding the way it's compiled, and there's no browser implementation agnostic way of describing it that isn't slow. I'd have a look at the [spec](http://www.ecma-international.org/ecma-262/6.0/) but apparently 'here be dragons', ha ha. A 'simple' (always relative) implementation is included in Chapter 14 so I'll have a look when I'm feeling brave.

My inner annoying three year old is still asking 'why? why? why?' but Tyler said that there are buckets for types of questions. Some questions have to be answered to write Javascript. Some will relate to performance. Some are just "I'm curious". That's definitely what this falls under, so I will leave it there for now. Diving into the spec is an adventure for a less busy time!

In case you're wondering what the hell a spec even is I'll write a post on that another day. [Najaf Ali](https://www.happybearsoftware.com/) recommended reading the[HTTP spec](http://tools.ietf.org/html/rfc2616) in his Kickstart Your Developer Career e-book (though he doesn't expect you to get all of it, or even the vast majority), and said in another talk that you basically have to just soldier through the hard parts sometimes. I don't think this is one of those times, just good to remember.

[Gordon](http://featherwax.com/) brought up the excllent point on a similar vein about yesterdays CSS and animation adventure. I'm distracting myself from what I really need to learn and do. I want to build the backend of this app for practice, as well as use the audio APIs. [Corin](http://www.infratxt.co/) reminded me about Node Inspector so I'm going to learn how to use it properly. In other words, I need to get it work first and styling - and a better name - can come after. CSS/SCSS may be acutely interesting to me at the moment but it's javascript I need to get a job. At least I have the basic structure of what I need out already. I'm not a designer - much to my dismay - so I may as well let other people who are more design inclined take over that part.

I was also worried that Twitter would [blacklist my dev account](https://dev.twitter.com/rest/public/rate-limiting) but the [streaming API](https://dev.twitter.com/streaming/overview) has different limits, I just need to work out what a single request counts as when you're streaming, as it cuts you off at 150 requests an hour. Is it as soon as you send a GET or does it mean every time something is returned?

I also caught up with [Olive](https://twitter.com/blackolive15), who is doing Free Code Camp as well. It's so amazing the people you meet through the internet, and I could write an entire rant about things such as ['look up'](https://www.youtube.com/watch?v=Z7dLU6fk9QY), but with my current [Rescuetime](https://www.rescuetime.com) stats I'm probably what they'd call an example. :P

There's also a chance I'll get to practice caching as that came up, but what I really need to do is look up web audio APIs. [Jennifer Dewalt](http://jenniferdewalt.com/) has a sound effect on the last website she did so I'll try and see if she has any other relevant things, as for some reason I think the code will be newbie friendly.

What did you get done today? Did any of this even make sense? Let me know in the comments.
