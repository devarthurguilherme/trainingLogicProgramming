let n1 = Number(prompt("Digit a number"));
let n2 = Number(prompt("Digit other number"));
let output = document.querySelector("#outPut");
let btnAlert = document.querySelector("#alert");
let btnOutput = document.querySelector("#btnOutput");
let result = toCalc(n1, n2);

btnAlert.addEventListener("click", toShowAlert);
btnOutput.addEventListener("click", toShowOutput);

function toGetDates() {
    
}

function toCalc(a, b) {
    return a * b;
}

function toShowAlert() {
    alert(result);
};

function toShowOutput() {
    output.innerHTML = result;
};