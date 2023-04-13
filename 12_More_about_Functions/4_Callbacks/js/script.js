function test1() {
    console.log("Test1 was called!")
};
function test(p) {
    console.log("Test was called and receives a p = ", p);
};

function test2(callback) {
    console.log("To execute called!");

    if(typeof callback === 'function') {
        callback("parameter of callback");
    };
};

test2();
console.log("____________")
test2(test1);
console.log("____________")
test2(test);