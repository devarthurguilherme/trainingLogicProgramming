let n = parseInt(prompt("Digit a number"));

/*for(let i = 0; i <= 1000; i++) {
    document.write(n + " x " + i + " = " + (n * i) + "<br />");
}*/

for(let i = 0; i <= 1000; i++) {
    
    let result = n * i;
    document.write(`${n} x ${i} = ${result} <br />`)

    if((i % 10 === 0) && (i > 0)) {
        document.write(`<hr />`)
    }
    
}