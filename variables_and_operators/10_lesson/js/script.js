//player1 digit a number
let player1 = parseInt(prompt('numero do jogador 1'));

//player1 digit a number
let player2 = parseInt(prompt('numero do jogador 2'));

//if they were equal, to show message 'draw'
if(player1 === player2){
    alert('You drawing');
} else {
    //To random a number between 0 or 1
    let nRandom = parseInt(Math.random() * 2);
    // If number random were zero, wins who to have smaller number
    if((nRandom === 0 && player1 < player2) || (nRandom === 1 && player1 > player2)){
            alert(`random was ${nRandom}`)
            alert('ganhou o jogador 1');
        } else {
            alert(`random was ${nRandom}`)
            alert('ganhou o jogador 2');
        }    
}