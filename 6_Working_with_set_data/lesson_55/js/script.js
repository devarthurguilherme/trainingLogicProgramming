let products = [
    {nome: "pencil", price: 1.99, qtd: 3},
    {nome: "pen", price: 2.50, qtd: 4},
    {nome: "rubber", price: 1.50, qtd: 8}
];

let output = document.querySelector("#output");
let msg = "";


for(let i = 0; i < products.length; i++) {
    msg += `<h2>Product: ${products[i].nome}</h2>`;
    msg += `<p>price: ${products[i].price}</p>`;
    msg += `<p>qtd: ${products[i].qtd}</p>`;
    msg += "<hr />"
}

output.innerHTML += msg;