---
title: ES6 Object Destructuring
date: 2019-04-17T02:30:25.024Z
category: ES6
tags:
  - javascript
  - programming
  - learning
---
Recently, due to our ESLint configuration at work, I've been using object destructuring a lot. This was added as a way to directly grab values from an object with much cleaner syntax.

A basic example of this would be along the lines of 
```javascript
const { theme } = this.props;
```

This would just return the value of the `theme` key from `this.props`.  Using ES5 syntax it would look something like this.
```javascript
var theme = this.props.theme;
```

If you need to import multiple variables you can use commas to separate them:
```javascript
const { theme, content, children } = this.props;
```

Need to import nested values?
```javascript
const { styles: { backgroundColor, fontSize }} = this.props;
```

Or maybe you need to import a variable under a different name
```javascript
const { id: previousId } = prevProps;
```

As you can see, destructuring objects can be super useful and helpful for cleaning up your code.

Hope this helped!
If there's any other ES6 features you'd like to know about, let me know below!

-TT
