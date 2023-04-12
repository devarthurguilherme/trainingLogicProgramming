let arthur = {
    nome: "Arthur",
    lastName: "Silva",
    old: 31,
    birthday: "4 April"
};

for(key in arthur){
    console.log(key);
    console.log(key, ": ", arthur[key]); // = arthur.nome, arthur.lastName, arthur.old, arthur.birthday
};
