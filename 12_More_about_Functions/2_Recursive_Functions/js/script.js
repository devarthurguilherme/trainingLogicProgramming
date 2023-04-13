function fibonacci(n) {
    let a = 1;
    let b = 0;
    let temp;
    
    
    while (n--) {
        temp = a;
        a = a + b;
        b = temp;
    };

    return b;
};

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log("-------------------------------------------------------");

function fibonacci2(n) {
    if( n <= 2) {
        return 1;
    };

    return fibonacci2(n - 1) + fibonacci2(n - 2);
};

console.log(fibonacci2(3));
console.log(fibonacci2(6));

//12min