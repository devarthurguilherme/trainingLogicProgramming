let called1 = 0;
let called2 = 0;

function fibonacci(n) {
    called1++;

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
    called2++
    
    if( n <= 2) {
        return 1;
    };

    return fibonacci2(n - 1) + fibonacci2(n - 2);
};

console.log(fibonacci2(3));
console.log(fibonacci2(6));
console.log("-------------------------------------------------------");
console.log(called1);
console.log(called2);