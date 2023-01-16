let note1 = parseFloat(prompt("Digit your firt note"));
let note2 = parseFloat(prompt("Digit your second note"));

let media = (note1 + note2) / 2;

/*if(media > 5 && note1 != 0 && note2 != 0) {
    alert("Your media is " + media + ", so you are aproveded!")
} else {
    alert("Unfortunatelly, you were not aproveded!")
}*/

if(note1 === 0 || note2 === 0 || media <= 5) {
    alert("Unfortunatelly, you were not aproveded!")
} else {
    alert("Your media is " + media + ", so you are aproveded!")
}