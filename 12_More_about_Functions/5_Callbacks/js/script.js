function sayHello(who, cb) {
    if(typeof cb === 'function') {
        return cb(who);
    }

    return console.log(`Hello ${who} :)`);
};

function goodNight(who) {
    console.log(`Good Night ${who}`);
};

sayHello("Arthur", goodNight);
sayHello("Guilherme", function(w) {
    console.log(`Good afternoon ${w}`);
});