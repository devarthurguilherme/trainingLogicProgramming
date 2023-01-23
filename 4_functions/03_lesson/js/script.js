let show = document.querySelector("#show");

show.addEventListener("click", toShow);

function write(n) {
    let outPut = document.querySelector("#outPut")
    outPut.innerHTML = n;
}

function toShow() {
    let n1 = parseFloat(prompt("Digit large of Retangule"));
    let n2 = parseFloat(prompt("Digit height of Retangule"));
    let result = (n1 * n2) + "²";

    write(result);
}