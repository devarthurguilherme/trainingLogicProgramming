function bla(n) {
    /*let msg = '';
    while(n > 0) {
        msg += "bla ";
        n--;
    };*/

    /*for(let i = n; i > 0; i--) {
        msg += "bla ";
    }*/

    /*if(n > 1) {
        return bla(--n) + 'bla ';
    }
    return 'bla ';*/
    return (n > 1) ? bla(n - 1) + "bla " : "bla ";
};

console.log(bla(7));
console.log(bla(10));