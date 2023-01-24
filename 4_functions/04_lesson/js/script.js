let numberUser = prompt("Digit a number");

function write() {
    let outPut = document.querySelector("#outPut");
    outPut.innerHTML = numberUser;
}

write();

function calc(operation) {
    let otherNumber = parseFloat(prompt("Digit other number"));
    numberUser = parseFloat(numberUser);

    switch(operation) {
        case '+':
            numberUser += otherNumber;
            break;
        case '-':
            numberUser -= otherNumber;
            break;
        case '*':
            numberUser *= otherNumber;
            break;
        case '/':
            numberUser /= otherNumber;
            break;
    }

    write();
}