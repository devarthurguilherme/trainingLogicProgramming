let num1 = prompt("Digit a number");
let num2 = prompt("Digit other number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = (num1 + num2) / 2;

if( result > 5){
    alert(`The average ${result} is larger than 5 `)
} else {
    alert(`The average ${result} is lower than 5 `)
}