// Formal Way
let obj = new Object();
obj.nome = "My Object";
obj.funcao = function() {
    console.log("Hello, I am " + this.nome)
};

obj.funcao();
console.log(obj);

console.log("___________x____________");
// Literal Way
let obj2 = {
    nome: "My second Object",
    funcao: function() {
        console.log(`My object2 is called ${this.nome}`);
    }
};

console.log(obj2.nome)
obj2.funcao();
console.log("___________x____________");

// Customized Objects - With Functions
let endereco1 = {
    "Local": "Street X",
    number: 2
};

let endereco2 = {
    "Local": "Street Y",
    number: 3
};

let endereco3 = {
    "Local": "Street Z",
    number: 4
};

let myArray = new Array();
let today = new Date();
let obj3 = new Object();

function Address(local, number, cep) {
    this.local = local;
    this.number = number; 
    this.cep = cep;

    this.completeLocal = function() {
        return `${this.local}, ${this.number}, ${this.cep}`;
    }
};

let endereco4 = new Address("Star Street", 242, "4775-454");
let endereco5 = new Address("Avenue Suburban", 1040, "4712-786");
console.log(endereco4);
console.log(endereco5);
console.log(endereco4.completeLocal());
console.log(endereco5.completeLocal());