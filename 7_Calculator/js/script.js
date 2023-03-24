let n1 = '0';
let n2 = '';
let mathOperation = null;

let matchBtn = false;

function toFinishCalc() {
    matchBtn = true;

    let result = toCalc();
    console.log(`${n1} ${mathOperation} ${n2}`);
    console.log(result);
    n1 = result;
    display(n1);
    
}

/*function toIncludePoint() {
    if(n2 || mathOperation !== null) {
        console.log("N2 needs to include point here!");
        if(n2 === '') {
            n2 += '0.';
            display(n2);
        } else {
            n2 += '.';
        }
    } else {
        console.log("N1 needs to include point here!");
        n1 += '.';
    }
}*/
function toIncludePoint() {
    if(n2 === '' && mathOperation !== null) {
        n2 = n2 + "0.";
        display(n2);
    } else if (n2 !== '') {
        n2 = n2 + ".";
    } else {
        n1 = n1 + ".";
    }
}

function toGetPercent() {
    if(n2 === '' && mathOperation == null) {
        toClean();
    }

    if(n2 !== '') {
        n2 = n1 * (n2 / 100);
        let result = toCalc();
        n1 = result;
        display(n1);
        mathOperation = null;
        n2 = '';
    } else {
        n2 === '';
    };

}

function toStartCalc(symbol) {
    if(matchBtn) {
        matchBtn = false;
        n2 = '';
    }
    
    if(mathOperation === null || n2 === '') {
        mathOperation = symbol;
    } else {
        let result = toCalc();
        n1 = result;
        display(n1);
        n2 = '';
        mathOperation = symbol;
    }
};

function toCalc() {
    let result = 0;
    let n1Number = parseFloat(n1);
    let n2Number = parseFloat(n2);

    switch(mathOperation) {
        case "*":
            result = n1Number * n2Number;
            break;
        case "/":
            result = n1Number / n2Number;
            break;
        case "+":
            result = n1Number + n2Number;
            break;
        case "-":
            result = n1Number - n2Number;
            break;
    }

    return result;
}

function toClean() {
   n1 = '0';
   n2 = '';
   mathOperation = null;
   display(n1);
   matchBtn = false;
}

function toIncludeDigit(digit) {
    if(matchBtn) {
        toClean()
    }

    if(mathOperation !== null) {
        n2 = n2 + digit;
        display(n2);
    } else {
        if(n1 === '0') {
            n1 = digit;
            n1 = parseFloat(n1);
            display(n1);   
        } else {
            n1 = n1 + digit;
            display(n1);
        };
    };
};

function display(n) {
    let output = document.querySelector("#display");
    output.textContent = n;
}