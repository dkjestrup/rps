function getComputerChoice () {
    let rng = (Math.random()*30)
    rng = Math.floor(rng/10)
    switch (rng) {
        case 0:
            return "paper"
        case 1:     
            return "scissors"
        case 2:
            return "rock"
    }}

function getPlayerChoice () {
    choice = promptPlayer().toLowerCase()
    validInput(choice)
    return choice;
}

function promptPlayer () {
    const prompt = require("prompt-sync")();
    return (prompt("Paper, scissors, rock?: "));
}

function validInput (choice) {
    if (((choice === 'rock') || (choice === 'scissors'))|| (choice === 'paper')){
        return choice;
    }
    console.log("Incorrect input, please enter rock, paper, or scissors")
    return getPlayerChoice();
}

const winTable = [['rock','scissors','paper'],['scissors','paper','rock']];

function playRound (){
    let computer = getComputerChoice();
    let player = getPlayerChoice();
    
    if (player === computer) {
        console.log(`DRAW: ${player} against ${computer}`)
        return 0.5;
    }else if (winTable[0].indexOf(player)===winTable[1].indexOf(computer)) {
        console.log(`WIN: ${player} beats ${computer}`)
        return 1;
    }else {
        console.log(`LOSE: ${player} is beaten by ${computer}`)
        return 0;
    }
}

function playFiveRounds (){
    let score = 0
    console.log(score)
    for (let i=0;i<5;i++){
        score = score + playRound()  
        console.log(score)
    }
    if (score === 2.5){
        console.log('You drew with the computer on 2.5 points!')
    } else if (score > 2.5) {
        console.log(`You beat the computer with ${score} points!!!`)
    } else {
        console.log(`You lost to the computer with only ${score} points`)
    }
    return;
}

playFiveRounds()