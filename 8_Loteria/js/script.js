

/*let sorteados = [];

while(sorteados.length < 6) {
    let sorteado = sortear();
    if(sorteados.indexOf(sorteado) === -1) {
        sorteados[sorteados.length] = sorteado;
    };

    console.log(sorteados.length, sorteado);
}*/

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

let arrayLoterry = arrayNumbers(10);
console.log(arrayLoterry);
console.log(typeof arrayLoterry)

