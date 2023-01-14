let num1 = prompt("Digit a number");
let num2 = prompt("Digit other number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = num1 % num2;

alert(`The rest betwewn ${num1} and ${num2} is ${result}`);

result = num1 ** num2;

alert(`The num ${num1} elevated ${num2} is ${result}`);