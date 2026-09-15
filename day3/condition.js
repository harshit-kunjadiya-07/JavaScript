console.log("condition statement");

var pin = 1234

var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));

while (true) {

    if (pin === 1234) {
        console.log("Pin is correct");    
    } else {
        console.log("Pin is incorrect");
    }
}  


switch (num1 + num2) {
    case 1:
        console.log(alert("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2)));
        break;
    case 2:  
        console.log(alert("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2)));
        break;

    default:
        console.log(alert("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2)));
        break;
}
