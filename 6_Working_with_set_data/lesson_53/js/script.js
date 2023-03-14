let output = document.querySelector("#output");
let msg = "";



const pen = {
    nome: "pen",
    price: 2.21,
    qtd: 3,

    ToBuyPen() {

        if(this.qtd == 0) {
            this.qtd = 0;
            console.log("It's over the Pens!")
        } else {
            console.log("To buy a pen!");
            this.qtd = this.qtd - 1;
        };
    }
};

pen.ToBuyPen();

msg += 'nome :' + pen.nome + '<br>';
msg += 'price :' + pen.price + '<br>';
msg += 'qtd :' + pen.qtd + '<br>';


displayOutput(msg);

function displayOutput(m) {
    output.innerHTML = m;
}



