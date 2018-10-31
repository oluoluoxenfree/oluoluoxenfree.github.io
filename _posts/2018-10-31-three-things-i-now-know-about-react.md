---
layout: post
title: Three things I've learnt about React
---

## How to live dangerously

`dangerouslySetInnerHTML` doesn't evaluate script tags, or phrased another way you can't just use it as is to inject Javascript into the page to be executed. It is a wrapper around `element.innerHtml`,  which doesn’t run script tags by default if you use it. Instead, dangerously set your html straight onto the script tag, and try to resist the urge to run with scissors after all that danger.

## Unidirectional data flow finally clicked for me

Data flows down from the parent elements to their children, and if a child needs to return data it calls a function that lives in a parent element. 

## The difference between props and state

State is for managing changing values that need to primarily affect top level components; it is often passed down through props and changed using callback functions. Props are for values that are passed from parent to child and flow only in one direction; unidirectional flow!
