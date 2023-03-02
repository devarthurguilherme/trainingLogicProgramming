let userNumber = Number(prompt("Digite a number, please"));

let btnPlus = document.querySelector("#plus");
let btnMult = document.querySelector("#mult");
let btnDivide = document.querySelector("#divide");
let btnLess = document.querySelector("#less");

write(userNumber);

function write(message) {
    let output = document.querySelector("#outPut");
    output.innerHTML = message;
}

function toStartCalc(symbol) {
    let number1 = Number(document.querySelector('#outPut').textContent);
    let number2 = Number(prompt("Digit other number, please"));

    try{
        var msg = toCalc(symbol, number1, number2);
    } catch(e) {
        alert(e);
        return;
    };

    
    write(msg);
}

function toCalc(operation, n1, n2) {
    console.log(operation);

    if(operation !== '+' && operation !== '-' && operation !== ':' &&operation !== 'x') {
        throw new Error("Please, digit a symbol valid!");
    };

    if(isNaN(n1) || isNaN(n2)) {
        throw new Error("Please, Pass just numbers, ok?");
    };

    let calculedNumber;

    switch(operation) {
        case "x":
            calculedNumber = n1 * n2;
            break;

        case ":":
            calculedNumber = n1 / n2;
            break;

        case "+":
            calculedNumber = (n1 + n2);
            break;

        case "-":
            calculedNumber = n1 - n2;
            break;

        default:
            alert("Did you digited something?");
    };

    return calculedNumber
}