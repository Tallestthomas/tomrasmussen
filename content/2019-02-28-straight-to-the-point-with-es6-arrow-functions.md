---
title: Straight to the point with ES6 Arrow functions
date: 2019-03-01T01:42:17.875Z
category: Programming
tags:
  - javascript
  - programming
  - learning
---
Hello hello hello, long time no see everyone.  Since my last post, I've been super busy at my **amazing friggin job at Red Ventures**.  I've been learning a whole ton, and teaching a whole bunch too. Which has lead me to want to start writing again.

So, I'll be trying to write more, but shorter, posts. Just to give some quick insight on some javascript topics that I found a bit confusing when I first started.

## First up: Arrow Functions

Let's get right into it, what is an arrow function? Well, its a function written with a certain syntax, namely `=>`.  Let's say that we wanted to write simple function that would add two numbers and return the result.

In ES5, it would look something like this:
```javascript
function addNumbers(a,b){
  return a + b;
}
```
That's a lot of text for a little result. So let's move this into a basic arrow function using ES6 syntax.

```javascript
const addNumber = (a, b) => {
  return a + b
}
```
This does the same exact thing as the previous example, but it looks a little bit cleaner, right?  But we can actually simplify this even more thanks to something call **implicit returns**. What this means is that if an arrow function is not followed by a `{`, it will assume that whatever follows the arrow is to be returned.  It makes a lot more sense if you see it.

```javascript
const addNumber = (a,b) => a + b;
```
### Booyeah, that's some sexy code.

But in all seriousness, arrow functions clean up a lot of the mess that can happen *I'm look at you __functoin__*.  They also have another important feature.

### The problem with 'this'
