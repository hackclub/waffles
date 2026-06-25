# Get Started with JavaScript

You know HTML and CSS. HTML builds the page. CSS styles the page. JavaScript makes the page do things. JavaScript is the missing piece for your Waffles project.

This guide teaches you JavaScript from zero. By the end you will meet every requirement: three ways for a user to change the page, plus one of `fetch`, `setTimeout`, or `setInterval`.

Make a folder with `index.html`, `style.css`, and `script.js`. You will edit `script.js` here.

## 1. Add JavaScript to your page

Link your script before the closing `</body>` tag in `index.html`:

```html
<body>
    <!-- all your HTML goes here -->

    <script src="script.js"></script>
</body>
```

Why the bottom? The browser reads your file top to bottom. A script at the end loads after your HTML exists. Your JavaScript then finds every element.

Open `script.js` and write your first line:

```js
console.log("Hello, waffles!");
```

Open your page in a browser. Right-click, choose Inspect, then open the Console tab. You will see your message. `console.log()` prints values from your code. You will use `console.log()` often.

## 2. Variables and functions

Variables and functions are the two building blocks of every program.

A variable stores a value:

```js
let score = 0;          // a number you change later
const name = "Waffle";  // a value you never change
let isOpen = true;      // true or false
```

Use `let` when the value changes. Use `const` when the value stays the same.

A function is a set of instructions you run when you want:

```js
function sayHi() {
    console.log("Hi there!");
}

sayHi(); // runs the code inside and prints "Hi there!"
```

Functions take input, called parameters, and return a result:

```js
function add(a, b) {
    return a + b;
}

let total = add(2, 3); // total is now 5
```

You now have the variables and functions core concept.

## 3. Talk to the page (the DOM)

The DOM is JavaScript's name for your HTML page. To change an element, you select the element, then change the element.

Here is your HTML:

```html
<h1 id="title">My Site</h1>
<button id="myButton">Click me</button>
```

Select elements with `document.querySelector()`. The function takes a CSS selector, the same kind you write in CSS:

```js
const title = document.querySelector("#title");
const button = document.querySelector("#myButton");
```

Now change them:

```js
// Change the text
title.textContent = "Welcome to my site!";

// Change the style (camelCase, so background-color becomes backgroundColor)
title.style.color = "chocolate";
title.style.backgroundColor = "#FFF8E7";

// Add or remove a CSS class you defined in style.css
title.classList.add("highlight");
title.classList.toggle("hidden"); // adds the class if missing, removes the class if present
```

You now have updating the DOM and changing styles with JavaScript.

## 4. React to the user (event listeners)

An event is an action the user takes: a click, a key press, a form submit. An event listener waits for an event and runs a function when the event happens.

```js
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    alert("You clicked the button!");
});
```

The pattern stays the same: `element.addEventListener("eventName", functionToRun)`.

Common events you will use:

- `"click"`: user clicks an element
- `"input"`: user types in a text box
- `"submit"`: user submits a form
- `"mouseover"`: user hovers over an element

### Live updates while typing

```html
<input id="nameBox" type="text" placeholder="Your name">
<p id="greeting">Hello, stranger!</p>
```

```js
const nameBox = document.querySelector("#nameBox");
const greeting = document.querySelector("#greeting");

nameBox.addEventListener("input", function () {
    greeting.textContent = "Hello, " + nameBox.value + "!";
});
```

Every keystroke updates the greeting. `nameBox.value` holds the text the user typed.

You now have event listeners.

## 5. Make decisions (if statements)

An if statement runs code only when a condition is true.

```js
let score = 8;

if (score >= 10) {
    console.log("You win!");
} else if (score >= 5) {
    console.log("Almost there!");
} else {
    console.log("Keep trying!");
}
```

A common use is checking a form before submit:

```html
<form id="signup">
    <input id="email" type="text" placeholder="Email">
    <button type="submit">Join</button>
    <p id="error"></p>
</form>
```

```js
const form = document.querySelector("#signup");
const email = document.querySelector("#email");
const error = document.querySelector("#error");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    if (email.value.includes("@")) {
        error.textContent = "Thanks for signing up!";
        error.style.color = "green";
    } else {
        error.textContent = "Please enter a real email.";
        error.style.color = "red";
    }
});
```

You now have all five core concepts.

## 6. The special functions

Your project must use at least one of these three. Here is how each one works.

### `setTimeout`: run code once later

`setTimeout` waits a number of milliseconds (1000 ms = 1 second), then runs a function one time.

```js
const banner = document.querySelector("#banner");

setTimeout(function () {
    banner.textContent = "Surprise!";
}, 3000); // runs after 3 seconds
```

Use `setTimeout` for:

- pop-up messages
- hiding a notification after a few seconds
- timed reveals

[Learn more about setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)

### `setInterval`: run code again and again

`setInterval` runs a function every X milliseconds until you stop the timer.

```js
const clock = document.querySelector("#clock");

setInterval(function () {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000); // updates every second
```

Use `setInterval` for:

- live clocks
- slideshows
- countdowns
- animations

Save the timer, then call `clearInterval` to stop the timer:

```js
const timer = setInterval(tick, 1000);
clearInterval(timer); // stops the timer
```

[Learn more about setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)

### `fetch`: get data from another website

`fetch` asks another website for information, like a random joke, the weather, or a picture, and brings the data back to your page.

```js
const jokeBox = document.querySelector("#joke");

fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
        return response.json(); // turn the reply into usable data
    })
    .then(function (data) {
        jokeBox.textContent = data.setup + " ... " + data.punchline;
    });
```

What happens:

1. `fetch(url)` sends the request.
2. The first `.then()` unpacks the response into JSON (a data format).
3. The second `.then()` gives you the `data` to put on your page.

Fetching takes a moment, so the `.then()` blocks run after the data arrives. Pair `fetch` with a button so the user triggers the request:

```js
const button = document.querySelector("#jokeButton");

button.addEventListener("click", function () {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            jokeBox.textContent = data.setup + " ... " + data.punchline;
        });
});
```

[Learn more about fetch](https://www.w3schools.com/jsref/api_fetch.asp)

## 7. Put the pieces together

The requirements ask for three different ways the user changes the content. Here is one complete `script.js`:

```js
// FEATURE 1: change an image on click
const photo = document.querySelector("#photo");
photo.addEventListener("click", function () {
    photo.src = "waffle2.png";
});

// FEATURE 2: live character counter
const box = document.querySelector("#message");
const counter = document.querySelector("#count");
box.addEventListener("input", function () {
    counter.textContent = box.value.length + " characters";
});

// FEATURE 3: a live clock with setInterval
const clock = document.querySelector("#clock");
setInterval(function () {
    clock.textContent = new Date().toLocaleTimeString();
}, 1000);
```

With the matching HTML:

```html
<img id="photo" src="waffle1.png" alt="A waffle" width="200">
<input id="message" type="text" placeholder="Type here">
<p id="count">0 characters</p>
<p id="clock"></p>

<script src="script.js"></script>
```

Three features, one special function, every core concept. You have a passing project.

## 8. Your checklist

- [ ] Change something on the page (Feature 1)
- [ ] React to the user with an event (Feature 2)
- [ ] Use a core JavaScript idea: event listeners, if statements, DOM updates, style changes, or variables and functions (Feature 3)
- [ ] Use one of `fetch`, `setTimeout`, or `setInterval`
- [ ] Make every feature change the page so the user sees the change
- [ ] Give your functions clear, simple names
- [ ] Do all your own work. No AI, no copy-paste from the internet

Read the full [requirements](requirements.html) one more time before you submit.

## 9. Submit your site

When you finish, submit your site through the [Waffles submission form](https://forms.hackclub.com/waffles).

Stuck? Join `#waffles` on the [Hack Club Slack](https://hackclub.enterprise.slack.com/archives/C08QBKX5WCD) and ask your question.
