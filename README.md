# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
   - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

![](screenshot.png)

### Links

<<<<<<< HEAD
- Solution URL: [https://github.com/whoiskekeanyway/theme-switching-calculator](https://github.com/whoiskekeanyway/theme-switching-calculator)
=======
- Solution URL: [Github](https://github.com/whoiskekeanyway/theme-switching-calculator)
>>>>>>> ed802643cf877e9ebc2dc98f93ca79caf012aef0
- Live Site URL: [theme-switching-calculator.netlify.app](theme-switching-calculator.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


###  - What I learned

What are Pseudo-classes?
A pseudo-class is used to define a special state of an element.

The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

The toLocaleString() method returns a string with a language sensitive representation of this date.



```js
function toggleTheme() {
  const radioBtn = document.querySelector(".switch");
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-new");
    radioBtn.style.backgroundColor = "hsl(177, 92%, 70%)";
  } else {
    setTheme("theme-dark");
    radioBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  }
}

if statement to toggle between three different theme based on the user's preference

```

## Author

- Website - [scriptsandtags.com](https://scriptsandtags.com)
- Frontend Mentor - [@whoiskekeanyway](https://www.frontendmentor.io/profile/whoiskekeanyway)
- Twitter - [@scriptsandtags](https://www.twitter.com/whoiskekeanyway)

