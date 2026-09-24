var istrue = true;
while (istrue) {

    var num = parseInt(Math.random() * 100);
    var count = 10;
    while (true) {
        if (count == 0) {
            alert("you have no chance left ");
            break;
        }
        var input = Number(prompt("Enter the guess number"));
        count--;
        if (num < input) {
            alert("too low" + " you have " + count + " chance left");
        } else if (num > input) {
            alert("too high" + " you have " + count + " chance left");
        } else {
            alert("correct!");
            break;
        }
    }
    istrue = confirm("Do you want to play again?");
}