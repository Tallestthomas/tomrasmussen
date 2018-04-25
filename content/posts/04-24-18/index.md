---
title: "Finding our way with array.map"
date: "04/24/2018"
category: "Tech"
slug: "finding-our-way-with-array-map"
tag:
  - programming
  - javascript
---

Howdy folks, I've been quite busy lately and haven't had much time to write anything. If you don't follow me on [Instagram](https://instagram.com/tallestthomas), I recently accepted a new job
as a Front End javascript developer, but the roles in another state, so I've had my hands full. Anyway, things have settled a bit, so I wanted to get something out for you all to enjoy.

## So, we're going to start talking about Array Methods

When ES5 javascript rolled out, it introduced a bunch of new methods for Arrays that make life much simpler.  There are three major ones that are constantly used **map, filter, reduce**. These functions are mainly quality of life improvements that help reduce the amount of code we have to write in order to work with arrays.

## Map, what does it do?

The first function that I want to talk about is **map**. What this function does is fairly straightforward: It's used to iterate through an array and return new values put into a brand new array.

### Wait...what?

Okay, that sounded all fancy shmancy, let's break it down to a simpler form. Say we had the following array:

```javascript
const array_one = [1, 2, 3, 4, 5];
```

With that array, we want to add 4 to each of the elements, but keep the
original array intact (hence the `const`). Now the old way of doing this
would take a bit of code.

```javascript
const array_one = [1, 2, 3, 4, 5];

function addFourToArray( array ) {
  let new_array = []
    for(i = 0; i < array.length;  i++) {
      new_array.push(array[i] + 4);
    }

  return new_array;
}

const array_two = addFourToArray(array_one);
```

That's a lot of code for something pretty simple, right?

## That's where the beauty of this function shines

In order to do this same exact operation with the newer .map functionality would
be this:

```javascript
const array_one = [1, 2, 3, 4, 5];

const array_two = array_one.map( number => number + 4);
```

Yup, that's it. That's everything you need to do for that, super simple, right?
Let's take the time to break this down a little farther so we can understand what is actually going on.

```javascript
  const new_array = array.map( function( currentValue[, index[, array]]){

    // Return elements for new_array

  }[, this]);
```

Taking away the arrow function makes things a little clearer.The map function does the exact same thing as our `addFourToArray` function but in a much more flexible manner. 
<br />
<br />
When you call **map** you must declare a callback function which in turn takes the argument of the `currentValue`, with the optional values of
`index` ( where `i = 0;` would be in a for loop), and `array` which would be an instance of the original array. 
<br />
<br />
The map function also takes a secondary argument which
would be what you want to bind as `this` when executing the callback.
<br />
<br />
After you've passed in your arguments, you can do whatever you would like to the
`currentValue`, and all you have to do now is return some sort of value. Doing
things like converting strings from lowercase to all uppercase, changing an array of temperatures from Celsius to Fahrenheit, or changing a certain key: value
pair inside of an array of objects. 
<br />
<br />
While you can use the classic `function` syntax for your callback, I much
prefer to use ES6's arrow functions, it just looks cleaner.

## A more practical use for map

So, we've looked at a very basic example of what this could be used for, but
let's see what it could be used for in a React Component.

```javascript
class SampleComponent extends React.Component{
  state = {
    users: [
      { 
        firstName: 'Tom',
        email: 'tom@example.com'
      },
      {
        firstName: 'Alfonz',
        email: 'alfonz@example.com'
      },
      {
        firstName: 'Edward',
        email: 'edward@example.com'
      }
    ]
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.state.users.map( (user, id) => (
              <li key={id}>{ user.firstName } { user.email }</li>
              )
            );
          }
        </ul>
      </div>
    );
  }
}
```

Here, we used the **map** function to iterate through the ` users ` array and
return each one as an ` <li> ` element containing each object's values.

Again, this is a pretty basic sample usage of the map function, but it is very flexible and useful, especially when combined with some of the other functions, such as `filter` (which I will be covering in the next post), and `reduce`.

Well, I hope you learned something, this is my first real attempt at
explaining some code via a blog post, so it should get better in time. But, if you have any questions feel free to leave a comment below, reach out to me on [Twitter]( https://twitter.com/tallestthomas ) or shoot me a DM on [Instagram](https://instagram.com/tallestthomas).

Until next time,<br/>
-TT

