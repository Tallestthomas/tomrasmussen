---
title: Straight to the point with ES6 Arrow functions
date: 2019-03-01T01:42:17.875Z
category: Programming
tags:
  - javascript
  - programming
  - learning
---
Hello hello hello, long time no see everyone.  Since my last post, I've been super busy at my **amazing friggin job at [Red Ventures](https://redventures.com)**.  I've been learning a whole ton, and teaching a whole bunch too. Which has lead me to want to start writing again.

So, I'll be trying to write more, but shorter, posts. Just to give some quick insight on some javascript topics that I found a bit confusing when I first started. The general idea is to at least post something every Friday for y'all to enjoy.

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
### Booyah, that's some sexy code.

But in all seriousness, arrow functions clean up a lot of the mess that can happen *I'm look at you __functoin__*.  They also have another important feature.

### The problem with 'this'

When using a normal ES5 function, it creates is own binding of the 'this' keyword, aka it always binds to the owner of the function. Consider the following example.

```javascript
var oldFunction = function() {
  console.log(this);
}
```

If you were to run this function, it would print out the `window` object because `this` is actually bound to it in this instance. Now let's say you used that as an object method.

```javascript
var testObj = {
  string: 'this is a string',
  firstFunc: function() {
    console.log(this.string);
  }
}
```

What do you think this would print? That's, right `'this is a string'` because it `this` references `testObj`.  Now what if we wanted to use this in side of a nested function?

```javascript
var testObj = {  
  person: 'Tom',  
  foods: ['apples', 'tacos', 'burritos'],  
  firstFunc: function() {    
    this.foods.forEach(function(food) {      
      console.log(`${this.person} wants to eat ${food}`);    
    })
  }
};

testObj.firstFunc();
// undefined wants to eat apples
// undefined wants to eat tacos
// undefined wants to eat burritos
```

`this.person` is `undefined` because there is now `person` defined inside of `firstFunc`. That's a little confusing, right? In order for you to use `this.person` inside of that `forEach` loop, you'd have to do something like this.

```javascript
firstFunc: function() {
  var _this = this;
  this.foods.forEach(function(food){
    console.log(`${_this.person} wants to eat ${food}`);
  });
}
```

Or you could use the ES5.1 function `.bind` to make it a little bit easier:

```javascript
firstFunc: function() {
  this.foods.forEach(function(food){
    console.log(`${this.person} wants to eat ${food}`);
  }.bind(this));
}
```
### A little bit nicer, but still not pretty.

Now, let's rewrite that same method using arrow functions, shall we?


```javascript
firstFunc: function() {
  // Whatever 'this' is out here
  this.foods.forEach(food => {
     // Is what 'this' is in here
    console.log(`${this.person} wants to eat ${food}`);
  });
}
```

You would still use the `function` key word, for the initial declaration of `firstFunc`, but inside of the `forEach` you would use an arrow function because then `this` would reference whatever it is defined as inside of `firstFunc`.

If you were to use an arrow function to define `firstFunc` it would actually result in a `TypeError: Cannot read property 'forEach' of undefined` because it would be trying to look for a `foods` field in the `window` object.

*hooray javascript*

## Anyway, I hope this clears up some of the mystery around arrow functions and why you would use them.

If it doesn't, or this has just made you even more confused, leave a comment down below, [reach out to me on twitter](https://twitter.com/tallestthomas) or [instagram](https://instagram.com/tallestthomas). 

Until next week,

-TT
