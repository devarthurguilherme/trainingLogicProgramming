let player1 = parseFloat(prompt("Player 1, digite a number"));
let player2 = parseFloat(prompt("Player 2, digite a number"));


if(player1 == player2) {
    alert("Number equal, end game!");
} else {
    let aNumber = parseInt(Math.random() * 2);
    alert(`Random is ${aNumber}`)
    if(aNumber == 0) {
        if(player1 < player2) {
            alert("Player 1 win!")
        } else {
            alert("Player 2 win!")
        }

    } else {
        if(player1 > player2) {
            alert("Player 1 win!")
        } else {
            alert("Player 2 win!")
        }
    }
}