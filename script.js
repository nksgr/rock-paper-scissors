
// part 1 - rock paper scissor - 

//global variables

moves = ['rock', 'paper', 'scissors']
pScore = 0
cScore = 0


// list of functions: for part1 

/*

>>> game() - main game function - each game has 5 rounds <<< plays 1 game per func call


supporting functions for game(): 

1) pSelection - validates player's selection for the game

2) cSelection - game move for computer chosen at random 

3) roundWinner: decides who won the current round; calls roundPlay from here

4) roundPlay - to battle out the choices; returns values: (0 - draw; 1: player win; -1: computer win) 

5) gameWInneer: tally the score and decides who won the game


*/





// the main game function
const game = ()=>{

    pScore = 0;
    cScore = 0;
    

    for (let i=1; i<6; i++){

        console.log ("Round:", i)

        let pSelect = pSelection()
        let cSelect = cSelection() 

        console.log("Computer CHOSE: ", cSelect)

        console.log(roundWinner( pSelect, cSelect))

        console.log(`Player: ${pScore} Computer: ${cScore} `)

    }
    
    console.log(gameWinner(pScore, cScore))
    


}


//supporting functions


//pSelection - sanitizes user input... makes sure correct input is given by the user. 
// it prompts until user enters correct input
const pSelection = ()=>{

    // for part 1 - we're gonna assume that user inputs the correct words 
    let pSelect;
    let msg = "Your turn: Rock, paper, scissors"
    while(true){
        pSelect = prompt(msg).toLowerCase()

        if(moves.indexOf(pSelect) != -1)  break

        else  msg = "Please enter the correct move: rock, paper, scissors"
    }

    return pSelect
}

// cSelection - computer makes a choice - based on random concept
const cSelection = ()=>{

    let index = Math.floor(Math.random()*3)

    return moves[index]


}

// here round winner is decided and is declared in the console

    
const roundWinner = (pSelect, cSelect)=> {
    let roundScore = roundPlay(pSelect, cSelect) // calling roundplay function

    switch(roundScore){
        case -1: 
            cScore++;
            return (`${cSelect} beats ${pSelect}! You lost this round, booooo! `)
            break 

        case 1: 

            pScore++;
            return (`${pSelect} beats ${cSelect}! You won this round, yaaay! `)
            break 

        case 0: 

            return (`You both drawed out.... Processor unhappy!`)
    }
}

// here score is decided. Return values: -1 --> if player loses ; 1 --> if player wins ; 0 --> if both draw out

const roundPlay = (pSelect, cSelect)=>{
    
    switch(pSelect){
        case 'rock' : 

            switch (cSelect){
                case 'rock' : return 0;
            
                case 'paper': return -1;

                case 'scissors': return 1;
            }
            

        case 'paper':


            switch (cSelect){
                case 'rock' : return 1;
            
                case 'paper': return 0;

                case 'scissors': return -1;
            }
            

        case 'scissors':

            switch (cSelect){
                case 'rock' : return -1;
            
                case 'paper': return 1;

                case 'scissors': return 0;
            }
            
    }

    
}
    
// here, who won the game is decided. this function returns custom msgs 

const gameWinner = (pScore, cScore) =>{
    if (pScore > cScore){
        return "Yaaay! You won the game! You showed the computer who's the boss, for good!"
    }
    else if(cScore> pScore){
        return "Yikes! Better luck next time. Computer beat you real bad, yo!"
    }

    else{
        return "You both drawed out! No fun for me, processor was really betting on you, player!"
    }
}