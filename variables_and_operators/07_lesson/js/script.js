let num1 = prompt("Digit firt note");
let num2 = prompt("Digit second");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = (num1 + num2) / 2;

if(result > 5){
    alert(`The average ${result}, you were approved! `)
} else {
    alert(`The average ${result}, unfortunately you were not approved! `)
}