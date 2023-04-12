/*let  alunos = [
    {nome: 'daniel', id: 112233, endereco: 'rua faz de conta 2, ap 3, são paulo SP'},
    {nome: 'josé', id: 112244, endereco: 'rua belezura 5, Sao paulo'},
    {nome: 'joão', id: 113344, endereco: 'rua belezura 20, Sao Paulo - perto do josé'},
    {nome: 'maria', id: 114444, endereco: 'rua chuchu 1, RJ'},
    {nome: 'ana', id: 114555, endereco: 'Av belezura 41,  SP'},
];*/

function Address(dates) {
    this.local = dates.local || '';
    this.n = dates.n || '';
    
    if(dates.complement) {
        this.complement = dates.complement;
    } else {
        this.complement = "Empty"
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

/*for(let i = 0; i < alunos.length; i++) {
    alunosAddress.push(alunos[i].address);
};*/

// or

for(let i = 0; i < alunos.length; i++) {
    alunosAddress[i] = alunos[i].address;
}

console.log(alunosAddress);