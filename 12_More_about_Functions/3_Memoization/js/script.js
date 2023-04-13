let called1 = 0;
let called2 = 0;
let called3 = 0;

console.log("---------------Fibonacci1----------------------------------------");
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

console.log(fibonacci(30));
console.log("-----------Fibonacci2--------------------------------------------");

function fibonacci2(n) {
    called2++
    
    if( n <= 2) {
        return 1;
    };

    return fibonacci2(n - 1) + fibonacci2(n - 2);
};

console.log(fibonacci2(30));

function fibonacci3(n, cache) {
    called3++;
    cache = cache || {};
    if(cache[n]) return cache[n];

    if(n <= 2) {
        return 1;
    } else {
        cache[n] = fibonacci3(n - 1, cache) + fibonacci3(n - 2, cache);
        return cache[n];
    };
};



console.log("---------------Fibonacci3----------------------------------------");
console.log(fibonacci3(30));
console.log("---------------Calleds----------------------------------------");
console.log("called 1",called1);
console.log("called 2",called2);
console.log("called 3",called3);