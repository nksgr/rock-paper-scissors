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

// part 2 - rock paper scissor -

// DOM Access

let pscore = document.querySelector(".pscore")
let round = document.querySelector(".round")
let cscore = document.querySelector(".cscore")
let msg = document.querySelector(".msg")
let cimage = document.querySelector(".cimage")
let pimage = document.querySelector(".pimage")
let cgame = document.querySelector(".cgame")
let pgame = document.querySelector(".pgame")

//buttons:

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissor")
let resetbtn = document.querySelector(".reset")
let start = document.querySelector(".start")

//global variables

movesEmojis = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
}
moves = ["rock", "paper", "scissors"]

pScore = 0
cScore = 0
roundno = 0
pGame = 0
cGame = 0

// button's events

rock.addEventListener("click", () => {
  playRound("rock")
})

paper.addEventListener("click", () => {
  playRound("paper")
})

scissors.addEventListener("click", () => {
  playRound("scissors")
})

resetbtn.addEventListener("click", () => {
  reset()
})

const playRound = (pSelect) => {
  round.textContent = roundno

  let cSelect = cSelection() // ### automated stuff (returns - rock, paper, scissor)) ###

  console.log(pSelect, cSelect)
  // #### update DOM here - pimage (with what pSelect text) cimage with what cs chose ####
  pimage.textContent = movesEmojis[pSelect]
  cimage.textContent = movesEmojis[cSelect]

  // ### call roundWinner here

  msg.textContent = roundWinner(pSelect, cSelect)

  // ### update scoreboard

  pscore.textContent = pScore
  cscore.textContent = cScore

  //console.log(`Player: ${pScore} Computer: ${cScore} `)
  roundno++

  if (pScore == 5 || cScore == 5) {
    msg.textContent = gameWinner(pScore, cScore)
    pscore.textContent = 0
    round.textContent = 0
    cscore.textContent = 0
    cimage.textContent = ""
    pimage.textContent = ""

    if (pScore >= 5) {
      pGame++
    } else if (cScore >= 5) {
      cGame++
    }

    pScore = 0
    cScore = 0
    round = 0

    pgame.textContent = pGame
    cgame.textContent = cGame
  }
}

// the main game function
const reset = () => {
  pscore.textContent = 0
  round.textContent = 0
  cscore.textContent = 0
  msg.textContent = "Select your choice below"
  cimage.textContent = ""
  pimage.textContent = ""
  cgame.textContent = 0
  pgame.textContent = 0
}

//supporting functions

//pSelection - sanitizes user input... makes sure correct input is given by the user.
// it prompts until user enters correct input
const pSelection = () => {
  // #### make it as an event listenr for rock, paper, scissor

  let pSelect
  let msg = "Your turn: Click on your choice" //#### update msg box in DOM

  // #### return the clicked event

  return pSelect
}

// cSelection - computer makes a choice - based on random concept
const cSelection = () => {
  let index = Math.floor(Math.random() * 3)

  return moves[index]
}

// here round winner is decided and is declared in the console

const roundWinner = (pSelect, cSelect) => {
  let roundScore = roundPlay(pSelect, cSelect) // calling roundplay function

  switch (roundScore) {
    case -1:
      cScore++
      return ` You lost this round, booooo! ${cSelect} beats ${pSelect}!`
      break

    case 1:
      pScore++
      return ` You won this round, yaaay! ${pSelect} beats ${cSelect}!`
      break

    case 0:
      return `You both drawed out....  Processor unhappy!`
  }
}

// here score is decided. Return values: -1 --> if player loses ; 1 --> if player wins ; 0 --> if both draw out

const roundPlay = (pSelect, cSelect) => {
  switch (pSelect) {
    case "rock":
      switch (cSelect) {
        case "rock":
          return 0

        case "paper":
          return -1

        case "scissors":
          return 1
      }

    case "paper":
      switch (cSelect) {
        case "rock":
          return 1

        case "paper":
          return 0

        case "scissors":
          return -1
      }

    case "scissors":
      switch (cSelect) {
        case "rock":
          return -1

        case "paper":
          return 1

        case "scissors":
          return 0
      }
  }
}

// here, who won the game is decided. this function returns custom msgs

const gameWinner = (pScore, cScore) => {
  if (pScore > cScore) {
    return "Yaaay! You won the game! You showed the computer who's the boss, for good!"
  } else if (cScore > pScore) {
    return "Yikes! Better luck next time. Computer beat you real bad, yo!"
  } else {
    return "You both drawed out! No fun for me, processor was really betting on you, player!"
  }
}
