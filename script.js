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

// colors

let green = "#2da714"
let red = "#ee1121"
let orange = "#f18b0e"
let grey = "#7c8382"
let blue = "#2539ecd5"

// DOM Access

let pscore = document.querySelector(".pscore")
let round = document.querySelector(".round")
let cscore = document.querySelector(".cscore")
let msg = document.querySelector(".msg")
let cimage = document.querySelector(".cimage")
let pimage = document.querySelector(".pimage")
let cgame = document.querySelector(".cgame")
let pgame = document.querySelector(".pgame")
let instruction = document.querySelector(".instruction")

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
  round.textContent = ++roundno

  let cSelect = cSelection() // ### automated stuff (returns - rock, paper, scissor)) ###

  console.log(pSelect, cSelect)
  // #### update DOM here - pimage (with what pSelect text) cimage with what cs chose ####
  pimage.textContent = movesEmojis[pSelect]
  cimage.textContent = movesEmojis[cSelect]

  // ### call roundWinner here

  msg.textContent = updateWinner(pSelect, cSelect)

  // ### update scoreboard

  pscore.textContent = pScore
  cscore.textContent = cScore

  //console.log(`Player: ${pScore} Computer: ${cScore} `)

  instruction.style.display = "block"

  if (pScore == 5 || cScore == 5) {
    msg.textContent = gameWinner(pScore, cScore)
    pscore.textContent = 0
    round.textContent = 0
    cscore.textContent = 0

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
  msg.textContent += " "

  cimage.textContent = "🤖"
  cimage.style.backgroundColor = blue

  instruction.style.display = "none"

  pimage.textContent = "💪"
  pimage.style.backgroundColor = blue
  cgame.textContent = 0
  pgame.textContent = 0
}

//supporting functions

// cSelection - computer makes a choice - based on random concept
const cSelection = () => {
  let index = Math.floor(Math.random() * 3)

  return moves[index]
}

// here round winner is decided and is declared in the console

const updateWinner = (pSelect, cSelect) => {
  let roundScore = roundPlay(pSelect, cSelect)
  colorUpdate(roundScore)
  switch (roundScore) {
    case -1:
      cScore++
      return ` You lost this round, booooo!`
      break

    case 1:
      pScore++
      return ` You won this round, yaaay!`
      break

    case 0:
      return `You both drawed out.... 
       Processor unhappy!`
      break
  }
}

const colorUpdate = (roundScore) => {
  switch (roundScore) {
    case -1:
      cimage.style.backgroundColor = green
      pimage.style.backgroundColor = red
      break

    case 1:
      cimage.style.backgroundColor = red
      pimage.style.backgroundColor = green
      break

    case 0:
      cimage.style.backgroundColor = orange
      pimage.style.backgroundColor = orange
      break
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
  instruction.style.display = "none"

  if (pScore > cScore) {
    updateIcons("😎", green, grey)
    return `You showed the computer who's the boss, you won!`
  } else if (cScore > pScore) {
    updateIcons("🙄", grey, green)
    return `Yikes! Better luck next time.`
  } else {
    updateIcons("😵", green, grey)
    return `You both drawed out! 
    No fun for me!`
  }
}

const updateIcons = (player, colorP, colorC) => {
  pimage.textContent = player
  cimage.textContent = "🤖"
  pimage.style.backgroundColor = colorP
  cimage.style.backgroundColor = colorC
}
