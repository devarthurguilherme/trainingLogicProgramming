let output = document.querySelector("#output");
let msg = '';

function arrayNumbers(n) {
    let sorteados = [];

    function sortear() {
        return Math.floor(Math.random() * 60);
    };

    while(sorteados.length < n) {
        let sorteado = sortear();
        if(sorteados.indexOf(sorteado) === -1) {
            sorteados[sorteados.length] = sorteado;
        };
    }

    return sorteados;
};

let arrayLoterry = arrayNumbers(6);

msg = msg + arrayLoterry.join(" - ");
let myNumbers = [3, 6, 28, 44, 63, 79];

for(let i = 0; i < 6; i++) {
    msg += `<p> ${myNumbers[i]}: `;

    if(arrayLoterry.indexOf(myNumbers[i]) === -1) {
        msg += "not";
    } else {
        msg += "yes";
    };

    msg += "</p>";
}

output.innerHTML = msg;

