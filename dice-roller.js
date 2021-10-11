// Here I have four more dices to play Yahtzee.
// We are basically getting random values from 1-6 for our five dices 

function RollSixSidedDice() {

    dice12 = document.getElementById("dice1").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice3").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice4").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice5").value = Math.floor(Math.random() * 6) + 1;

}