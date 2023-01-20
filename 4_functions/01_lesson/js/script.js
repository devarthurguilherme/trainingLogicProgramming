let message = "";
let output = document.querySelector("#output");

let toCreate = document.querySelector("#toCreate");
let toClean = document.querySelector("#toClean");

toCreate.addEventListener("click", create);
toClean.addEventListener("click", clean);


function create() {    
    clean();
    //Ask number to user
    let n = prompt("Hello, please, to digit a number");
    //To convert
    n = parseFloat(n);
    //Loop
        //To create i
        let i = 0;
        
        // while lower 1000;
        while( i <= 1000)
        // add to message
        {
            let result = n * i;
            message += `${n} x ${i} = ${result} <br />`;
            i++;
        }

        output.innerHTML = message;
}

function clean() {
    message = '';
    output.innerHTML = message;
}