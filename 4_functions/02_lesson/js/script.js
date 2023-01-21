let numberUser = prompt("Digit a number");

let add = document.querySelector("#add");
let less = document.querySelector("#less");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");

add.addEventListener("click", toAdd);
less.addEventListener("click", subtract);
multiplication.addEventListener("click", toMultiply);
division.addEventListener("click", toDivide);

function write() {
    let outPut = document.querySelector("#outPut");
    outPut.innerHTML = numberUser;
}

write();

function toAdd() {
    let otherNumber = parseFloat(prompt("Digit other number to add"));

    numberUser = parseFloat(numberUser);
    numberUser += otherNumber;

    write();
};

function subtract() {
    let otherNumber = parseFloat(prompt("Digit other number to subtract"));

    numberUser = parseFloat(numberUser);
    numberUser -= otherNumber;

    write();
};

function toMultiply() {
    let otherNumber = parseFloat(prompt("Digit other number to multiply"));

    numberUser = parseFloat(numberUser);
    numberUser *= otherNumber;

    write();
};

function toDivide() {
    let otherNumber = parseFloat(prompt("Digit other number to divide"));

    numberUser = parseFloat(numberUser);
    numberUser /= otherNumber;

    write();
};