let showDiv = document.querySelector("#showDiv");
let showAlert = document.querySelector("#showAlert");

showDiv.addEventListener("click", toShowDiv);
showAlert.addEventListener("click", toShowAlert);



function calc(w, h) {
    let result = (w * h) + "²";

    return result
}

function toShowDiv() {
    let width = parseFloat(prompt("Digit width of Retangule"));
    let height = parseFloat(prompt("Digit height of Retangule"));
    let area = calc(width, height);
    let outPut = document.querySelector("#outPut");

    outPut.innerHTML = `The area total is: ${area}`;
}

function toShowAlert() {
    let width = parseFloat(prompt("Digit width of Retangule"));
    let height = parseFloat(prompt("Digit height of Retangule"));
    let area = calc(width, height);
    
    alert(`The area total is: ${area}`)
}