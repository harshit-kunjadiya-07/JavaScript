const arr = ["joy.jpg" ,"Best one.jpg" ,  "earth2.jpg", "space.jpg" , "cloud.jpg" , "Mountain.jpg" , "Best_one.jpg" , "vally.jpg"];

let index = 0;

document.getElementById("bg").style.backgroundImage = `url(${arr[index]})`;

document.getElementById("btn1").onclick = function () {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    document.getElementById("bg").style.backgroundImage = `url(${arr[index]})`;
};

document.getElementById("btn2").onclick = function () {
    index++;
    if (index >= arr.length) {
        index = 0;
    }
    document.getElementById("bg").style.backgroundImage = `url(${arr[index]})`;
};