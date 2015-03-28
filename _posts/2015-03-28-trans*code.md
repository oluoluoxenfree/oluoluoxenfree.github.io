---
layout: post
---
![transcode was awesome](https://pbs.twimg.com/media/CBLhXw0UcAEUGfD.jpg)

Today I went to an awesome event; [Trans*code](http://trans-code.org/). In their own words:
> "Trans*code aims to help draw attention to transgender issues through a topic focused hackday while introductory programming workshops allow for participation from community members not currently working in technology. Participants from all skill levels are welcome."

I'm interested in initiatives that widen access to coding. Beginner friendly hackdays seem to be few and far between. [hacksoton](http://hacksoton.com/) is one example but other than that I'm still on the lookout.

I'm also interested in hackathons that:

- create things people could one day use, and

- solve an actual problem.

I sometimes get a bit disheartened by the things I see on a service called [Product Hunt](http://www.producthunt.com/). Yo for [generic and trivial placeholder] was a theme for a while and whilst it's fun, it's also boring.

More seriously, shutting out the voices of under-represented people will cause the industry to stagnate. We'll create more and more apps that only cater to a small subset of people, get massive amounts of funding, and ultimately fail. We can make a better world through tech, not just one that tells you where your nearest artisanal coffee house is.

My team made a sentiment analysis of tweets mentioning the keyword trans. At the minute it's pretty basic, and I was sad I didn't get to work on the sentiment analysis or any of the backend as it was all in python. We also used [flask](http://flask.pocoo.org/), which is like [jekyll](http://jekyllrb.com/) but based on python. The API we used for the sentiment analysis called [textblob](http://textblob.readthedocs.org/en/dev/). My team told me it is simple to learn and use, so I'm looking forward to playing with it.

There was also a demo of something called the [BBC Micro Bit](http://www.bbc.co.uk/news/technology-31859283). It's a bit of hardware that's small, programmable and on the way to every eleven year old near you in a few months time! There's an open source javascript version called [codebug](https://www.kickstarter.com/projects/922345933/codebug) which I'm backing.

I liked the format; the project proposals were written on a whiteboard at the front during a break. Then the writers explained their ideas and everyone filtered towards their areas of interest. Some of the teams spent the day completely on research, whilst others like us had skeletal working prototypes. One example is [loofinder](http://loofinder.herokuapp.com/), an app for finding gender neutral bathrooms. It used [Open Street Map](http://www.openstreetmap.org/).

One of the key things I learnt is how important it is to have good project leadership, or at least a solid game plan. If you spend too long deciding what you're going to do you'll never have enough time to make something in six hours.

In true hackathon style we were still coding right up until the deadline. I decided to use a library called [c3](http://c3js.org/). It looked like a quicker way to get a graph up and running than using vanilla [d3](http://d3js.org/). Big mistake! There seems to be a problem with the way [c3 handles json in pie charts](https://github.com/masayuki0812/c3/issues/484), and the docs are unfinished. I'd still recommend c3 for anyone who wants to mess around with data viz and only has a small amount of data.

I learnt a few things other things. Virtual environments allow you to specify the packages and modules within a project without interfering with other stuff. It's a bit like node's package manager except it also controls the version of python. There's also [a version for node](https://github.com/ekalinin/nodeenv)!

Lastly, you can apparently use json to transfer stuff in any weird format. By any weird format I mean like this, which is what got our code to work:

```python

    evalution_json = json.dumps(
        [
          [ 'positive', positivity_percentage ],
          [ 'negative', negativity_percentage ]
        ]

    return render_template('hello.html', sentiment=evalution_json)

```

I could have solved the problem with c3 a lot sooner if I had realised, but I don't think it's best practice, which makes me feel slightly better.

I've gotten tons of ideas from the day, met a lot of awesome people and a got taste of what it's like to work under pressure with strangers. Watch this space!
