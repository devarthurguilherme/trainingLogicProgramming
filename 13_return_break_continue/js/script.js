function jumpTest() {
    for(let i = 0; i < 10; i++) {
        if(i === 5) {
            console.log(i, "Five here! -> break");
            break; 
        };
        console.log(i)
    };
    return 'End of Function!'
};

let test = jumpTest();
console.log(test)

//return: To exit of function
//break: to exit of block IF and For and continue the function
//continue: It jumps of block IF and continues the loop