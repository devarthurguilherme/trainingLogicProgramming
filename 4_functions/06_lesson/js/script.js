let numberUser = prompt("Digit a number");

write(numberUser);

function write(message) {
    let outPut = document.querySelector("#outPut");
    outPut.innerHTML = message;
}

function initialCalc(symbol) {
    let n1 = document.querySelector("#outPut").textContent;
    n1 = parseFloat(n1);
    let n2 = prompt("Digit other number");
    n2 = parseFloat(n2);
    let msg = calc(symbol, n1, n2);

    write(msg);
}

function calc(symbol, n1, n2) {
    let result = 0;

    switch(symbol) {
        case '+':
            result = n1 += n2;
            break;
        case '-':
            result = n1 -= n2;
            break;
        case '*':
            result = n1 *= n2;
            break;
        case '/':
            result = n1 /= n2;
            break;
    }

    return result;
}