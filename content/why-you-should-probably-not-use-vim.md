---
title: Why you should (probably not) use Vim
date: 2019-02-23T04:51:39.961Z
category: Tech
tags:
  - programming
  - neovim
  - vim
---
TLDR: Use VSCode unless you're willing to spend the time to learn Vim
and its motions.

_Random User: What editor/IDE do you use?_

Me: Vim :)

_RU: Is it any good?_

Me: For me, its great!

_RU: Okay, thank you._

![Several Day Laters](https://i.kym-cdn.com/photos/images/newsfeed/001/243/641/a37.png)

_RU: WTF I tried Vim and its horrible! How do you use it?!?!?!?!_

## This is a pretty normal conversation for me.

I have lots of people asking me, on
[Instagram](https://instagram.com/tallestthomas), what text editor I use,
they try it, and hate it, then blaming me for some reason. So, today, I'll be
trying to clear the air about my favorite editor, and why you should or
shouldn't use it.

## It's a blank canvas.

And I mean this in the most literal sense possible. There is no syntax
highlighting enabled by default, no automatic indenting right away, not even
instructions on how to use it!

### This could be seen as either a blessing or a curse.

On one hand, if you're like me, you see the land of infinite, granular
customization. Since there are no defaults, you can do pretty much whatever you
want in whatever manner you want. The possibilities are endless.

But for others, this is a bit terrifying. There's no structure, no way of
getting up and running immediately, no kind of hand holding. It takes a bunch
of time, research, and failed attempts to get your setup the way you like it.
Hell, I've been using it for roughly 4 years and I'm still tweaking my setup
constantly.

## The keyboard is the only way

All of Vim's movements ( aka 'motions' ), are using just a few specific keys on
the keyboard. `h, j, k, l, e, w, b, g` and a few others make up means to
navigate your files, and these can pretty advanced.

Want to copy a line? `yy`

Delete the next three words? `d3w`

Copy everything that's between two curly brackets? `yiw`

Reindent the entire file and return your cursor to where it was?
`` mzgg=G`z ``

It just keeps getting more and more advanced, with 100 different ways to
do things. Again, this is either good or bad. I personally hate moving my
hands away from the keyboard, but others that I know can't live without a
mouse.

The main idea behind Vim is to use your keys in the most efficient way,
which leads to the next point.

## There is a MASSIVE learning curve.

I remember when I first started using VIm, I had no clue what I was doing. I
would get confused between the `insert, visual, and normal` modes. I would
mix up what `W` and `E` does, or how to move between the splits that I had
open. It was frustrating as all hell, but in my opinion it was totally worth
it.

### Once I got past that initial wall, the level of my efficiency while coding skyrocketed.

But, I like learning stuff like this, and, again, it's not for everyone. A lot
of people don't want to spend the time to learn how to use something that
they need for their job, and I don't blame them. I spent a lot of my own
personal time learning and getting better with it.

VIm is one of those things, where the more time you put into it, the more it
rewards you. It's definitely not for those who want instant gratification.

## So what do I recommend?

[ VSCode ](https://code.visualstudio.com)

Why? Because out of the box its freakin awesome. If I wasn't so used to the
way that I have my editor setup, I'd probably switch. It's feature rich,
widely used, and has some of the best support and documentation.
Plus, the extension marketplace is absolutely massive and can help you find any
kind of package you might need.

### This is the editor I will recommend to every single new coder out there

If you do decide you want to learn Vim, I would use it a little bit at a
time ( and not during work hours ). You can get started by, first, using
`vimtutor`. Enter that into your terminal, and it'll open up an interactive
tutorial to help you get started. [ Vim Adventures](https://vim-adventures.com)
is also a great resource to help you visualize how motions work.

So to summarize:

## Only use Vim if you're willing to put in the time and are okay with losing some efficiency at first so you can gain an immense amount after some time.

That's all for now, if you have any questions feel free to drop a comment
below, or hit me up on [Twitter](https://twitter.com/tallestthomas) or
[Instagram](https://instagram.com/tallestthomas).

-TT
