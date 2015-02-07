---
layout: page
title:  < open tag &gt; <\close tag&gt;
tagline: Style over substance over style.
---
<!-- this is setting up the URL paths -->
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


