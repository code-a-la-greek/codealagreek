---
layout: ../../layouts/PostLayout.astro
title: "Rating Component"
image: "https://raw.githubusercontent.com/PanuGr/frontendmentor-challenges/main/newbie/interactive-rating-component/screenshot.jpg"
date: "2022-06-13"
categories:
  - challenges
  - newbie
---
This is a solution to the *<ins>[Interactive rating component challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)</ins>* on Frontend Mentor.

**Users should be able to:**
- View the optimal layout for the app depending on their device’s screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the “Thank you” card state after submitting a rating

## Features:
- Semantic HTML5 markup
- CSS custom properties, Scss syntax
- dialog markup
- dialog polyfill
- Skypack cdn

For this challenge, I thought to use the new dialog element. It’s mostly supported in all browsers and it has many built-in features. It was fairly easy to implement this element and create a modal. Later I added a dialog polyfill to make it work in browsers that don’t support dialog. I imported the polyfill from the skypack library.

## Resources:
- *<ins>[The dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)</ins>*
- *<ins>[Use dialog for the easiest way to modal](https://youtu.be/TAB_v6yBXIE)</ins>*

*<ins>[See the demo](https://panugr.github.io/frontendmentor-challenges/newbie/interactive-rating-component/)</ins>* <br>
*<ins>[See the code](https://github.com/PanuGr/frontendmentor-challenges/tree/main/newbie/interactive-rating-component)</ins>*