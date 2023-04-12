let output = document.querySelector("#output");
let msg = '';


function outputDisplay(m) {
    output.innerHTML += m;
};


function Address(dates) {
    this.local = dates.local || '';
    this.n = dates.n || '';
    
    if(dates.complement) {
        this.complement = dates.complement;
    } else {
        this.complement = "empty"
    }

    this.city = dates.city;
    this.estate = dates.estate;
}

let  alunos = [
    {nome: 'daniel', id: 112233, address: new Address({local: 'rua faz de conta', n: 2, complement: 'ap 3', city: 'são paulo', estate: 'SP'})},
    {nome: 'josé', id: 112244, address: new Address({local: 'rua belezura', n: 5, complement: null, city: 'Sao paulo', estate: ''})},
    {nome: 'joão', id: 113344, address: new Address({local: 'rua belezura', n: 20, complement: 'perto do josé', city: 'São Paulo', estate: ''})},
    {nome: 'maria', id: 114444, address: new Address({local: 'rua chuchu', n: 1, complement: null, city: '', estate: 'RJ'})},
    {nome: 'ana', id: 114555, address: new Address({local: 'Av belezura', n: 41, complement: null, city: '', estate: 'SP'})}
];

let alunosAddress = new Array();

for(let i = 0; i < alunos.length; i++) {
    alunosAddress.push(alunos[i].address);
};

// or
let nameLearner = [];
for(let i = 0; i < alunos.length; i++) {
    nameLearner[i] = alunos[i].nome;
};

alunosAddress[1].estate = "SP";
alunosAddress[2].estate = "RJ";
alunosAddress[3].city = "São Gonçalo";
alunosAddress[4].city = "Santos";

for(let i = 0; i < alunosAddress.length; i++) {
    let addresses = alunosAddress[i];
    msg += `<hr />`
    msg += `<h2>${nameLearner[i]}</h2>`
    for(key in addresses) {
        if( addresses[key] !== '') {
            msg += `${key}: ${addresses[key]} <br />`;
        } else {            
            if(key == "city" || key == "estate") {
                msg += `*${key} is required! <br />`;
            } else {
                msg += `${key}: empty <br />`;
            }
        };
    };
};


outputDisplay(msg);