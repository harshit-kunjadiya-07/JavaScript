# 🖼️ Image Background Slider

A simple and professional **full-screen image slider** built using **HTML, CSS, and JavaScript**.

Click the **‹ Previous** and **› Next** buttons to change the background image.

## ✨ Features

* Full-screen background images
* Previous and Next navigation
* Infinite image looping
* Simple and clean design
* Pure HTML, CSS & JavaScript
* No external libraries

## 🎮 Slider Controls

| Button | Action              |
| ------ | ------------------- |
| `‹`    | Show previous image |
| `›`    | Show next image     |

When the slider reaches the first or last image, it automatically continues from the opposite side.

## 🖼️ Images

Images are stored in a JavaScript array:

```javascript
const arr = [
    "joy.jpg",
    "Best one.jpg",
    "earth2.jpg",
    "space.jpg",
    "cloud.jpg",
    "Mountain.jpg",
    "Best_one.jpg",
    "vally.jpg"
];
```

To add or remove images, simply update this array.

## ⚙️ Slider Logic

The `index` variable stores the current image position.

**Previous:**

```javascript
index--;

if (index < 0) {
    index = arr.length - 1;
}
```

**Next:**

```javascript
index++;

if (index >= arr.length) {
    index = 0;
}
```

The selected image is applied to the background using JavaScript:

```javascript
document.getElementById("bg").style.backgroundImage =
    `url(${arr[index]})`;
```

## 🎨 Design

* Full viewport height
* Background image covers the screen
* Transparent navigation buttons
* Large arrow controls
* Minimal and clean interface

## 🚀 How to Run

1. Open the project in your code editor.
2. Make sure the image files are available.
3. Open `index.html` in a browser.
4. Use the arrow buttons to slide through the images.

## 📚 What I Learned

This project helped me practice:

* JavaScript arrays
* Array indexing
* DOM manipulation
* `onclick` events
* Functions
* Conditional statements
* CSS background properties
* Basic image-slider functionality

---

**Built with HTML • CSS • JavaScript**

## Output Images

![Project Image](./output/Document%20-%20Google%20Chrome%2004-10-2026%2010_54_57.png)
![Project Image](./output/Document%20-%20Google%20Chrome%2004-10-2026%2010_54_52.png)
![Project Image](./output/Document%20-%20Google%20Chrome%2004-10-2026%2010_55_34.png)
![Project Image](./output/Document%20-%20Google%20Chrome%2004-10-2026%2010_55_37.png)
![Project Image](./output/Document%20-%20Google%20Chrome%2004-10-2026%2010_55_11.png)


# Project Video

[ project3 Video](https://drive.google.com/file/d/1vYdJW346Hcn-NSgcZlNAraN23ZiaYqKn/view?usp=sharing)
