let output = document.querySelector("#output");
let msg = '';
let products = ["pen","pencil", "shear","rubber", "note", "book"];

for(let count = 0; count < products.length; count++) {
    
    msg = msg + `<li>product ${count + 1}: ${products[count]}</li>`;
    outPutMsg();
    
};

function outPutMsg() {
    output.innerHTML = msg;
};