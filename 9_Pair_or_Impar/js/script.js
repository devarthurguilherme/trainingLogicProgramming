let numberComputer;
let numberUser;
let myChoose = '';

function toPlay() {

    numberComputer = aleatoryNumber(5);
    numberUser = document.querySelector("#myNumber").value;
    myChoose = document.querySelector('input[type="radio"]:checked').value;

    numberUser = parseInt(numberUser);

    if(isNaN(numberUser)) {
        return alert("User! Digit your number please!");
    };

   

    let total = numberComputer + numberUser;
    let result = (total % 2 === 0) ? "pair" : "impar";

    console.log(total)
    toVerifyResult(result);

    return result;
};

function toVerifyResult(result) {
    if(myChoose === result) {
        alert("I win!");
        console.log(myChoose, result);
    } else {
        alert("Computer wins!");
        console.log(myChoose, result);
    };
};

function reset() {
    console.log("Reset Here!");
    numberComputer = '';
    numberUser = ' ';
    myChoose = '';
    result = '';
    total = '';
}

function aleatoryNumber(max) {
    return Math.floor(Math.random() * max + 1);
};

