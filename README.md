<<<<<<< HEAD
=======
# ⚡ JavaScript

> **A simple and powerful language for web development.**

## 📌 What is JavaScript?

**JavaScript (JS)** is a programming language used to make websites **interactive and dynamic**.

### Web Technologies

* **HTML** → Structure
* **CSS** → Design
* **JavaScript** → Logic & Interaction

### Where is JavaScript Used?

* Websites
* Web applications
* Backend development
* APIs
* Mobile & desktop applications
* Games

---

## 🕒 History

* **1995** → Created by **Brendan Eich**
* **1997** → Standardized as **ECMAScript**
* **2009** → Node.js introduced JavaScript outside browsers
* **2015** → ES6 introduced modern JavaScript features

---

# 🧠 Basic JavaScript

### Variables

```js
let name = "Alex";
const age = 20;
```

### Data Types

```js
String
Number
Boolean
Undefined
Null
Object
Array
```

### Condition

```js
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}
```

### Loop

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Function

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

---

# 📦 Arrays & Objects

### Array

```js
let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits[0]);
```

### Object

```js
let user = {
    name: "Alex",
    age: 20
};

console.log(user.name);
```

---

# 🌐 DOM & Events

JavaScript can change HTML using the **DOM**.

```js
let title = document.getElementById("title");

title.textContent = "Hello JavaScript";
```

### Event

```js
button.addEventListener("click", function () {
    alert("Button Clicked!");
});
```

---

# 🚀 Modern JavaScript

Important modern features:

* `let` / `const`
* Arrow Functions
* Template Literals
* Destructuring
* Spread Operator
* Classes
* Modules
* Promises
* `async / await`

### Arrow Function

```js
const add = (a, b) => a + b;
```

### Template Literal

```js
let name = "Alex";

console.log(`Hello ${name}`);
```

---

# 🔌 API & Async JavaScript

### Fetch API

```js
fetch("https://example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));
```

### Async / Await

```js
async function getData() {
    const response = await fetch("https://example.com/data");
    const data = await response.json();

    console.log(data);
}
```

---

# 🟢 Node.js

**Node.js** allows JavaScript to run outside the browser.

Used for:

* Backend
* Servers
* REST APIs
* Real-time applications
* Automation

---

# 🗺️ Learning Roadmap

```text
JavaScript Basics
       ↓
Variables & Data Types
       ↓
Conditions & Loops
       ↓
Functions
       ↓
Arrays & Objects
       ↓
DOM & Events
       ↓
ES6+
       ↓
Async JS & APIs
       ↓
Projects
       ↓
React / Node.js
```

## 💡 Beginner Projects

1. Calculator
2. Digital Clock
3. To-Do List
4. Quiz App
5. Weather App

---

# ✅ Best Practices

* Use meaningful variable names.
* Prefer `const` and `let`.
* Keep code simple.
* Practice with projects.
* Learn JavaScript before frameworks.
* Write clean and readable code.

---

<div align="center">

### ⚡ Learn • Practice • Build • Improve

**JavaScript makes the web interactive.**

</div>
>>>>>>> bf79e3b3679a4e1f832b87a9bde4c44cacd2cc13
