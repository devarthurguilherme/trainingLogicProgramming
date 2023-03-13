//What should I do with these local variables?

try {
    var height = Number(prompt("Digit the height, please!"));
    var base = Number(prompt("Digite the base now!"));
} catch(e) {
    console.log(e);
}

if(isNaN(height) || isNaN(base)) throw new Error("Did you digit just numbers?");

console.log(height, base);