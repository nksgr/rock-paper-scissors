
const cSelection = ()=>{
    let moves = ['rock', 'paper', 'scissors']
    let index = Math.floor( Math.random()*3)

    return moves[index]


}

const roundPlay = (player, comp)=>{
    return 1;
}

const game = ()=>{
    let pScore = 0
    let cScore = 0
    for (let i=1; i<6; i++){

        let pSelect = "rock" // pSelection()
        let cSelect = cSelection() 

        console.log(cSelect)
        let roundScore = roundPlay(pSelect, cSelect)

        switch(roundScore){
            case -1: 
                cScore++;
                console.log(`${cSelect} beats ${pSelect}! You lost this round, booooo! `)
                break 

            case 1: 

                pScore++;
                console.log(`${pSelect} beats ${cSelect}! You won this round, yaaay! `)
                break 

            case 0: 

                console.log(`You both drawed out.... Processor unhappy!`)
        }


        console.log(`Player: ${pScore} Computer: ${cScore} `)


    }

    
    
    


}

game()


const pSelection = ()=>{
    let pSelect
    let regex = /[rock]/ig // write the regex here 
    while(pSelect){

        pSelect = prompt()

        //use regex here to test for rock, paper, scissors, input.
        //the loop keeps running until player inputs correct stuff.
        // add a break statement if test() matches true

        if(regex.test(pSelect)) break 
        else {
            console.log("Invalid choice... please enter again")
        }
    }
    //code

}
