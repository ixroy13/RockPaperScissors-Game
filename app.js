const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const lizardButton = document.querySelector(".lizard");
const spockButton = document.querySelector(".spock");
const score = document.querySelector(".score p");
const scoreOne = document.querySelector(".playerScore");
const scoreTwo = document.querySelector(".pcScore");
const newGame = document.querySelector(".reset");
const helpButton = document.querySelector(".help");
const settingsBtn = document.querySelector(".settings-btn");
const settingsMenu = document.querySelector(".settings");
const playerOneNick = document.querySelector("#player1name");
const playerTwoNick = document.querySelector("#player2name");
const p1Nick = document.querySelector(".p1 span");
const p2Nick = document.querySelector(".p2 span");
const p1Color = document.querySelector("#player1color");
const p2Color = document.querySelector("#player2color");

const pcChoice = () => {
  a = Math.floor(Math.random() * 5);
  return a;
};

const numToName = (a) => {
  switch (a) {
    case 0:
      return "nożyce";
    case 1:
      return "kamień";
    case 2:
      return "papier";
    case 3:
      return "lizard";
    case 4:
      return "spock";
  }
};

/*
0 nozyce
1 kamien
2 papier
3 lizard
4 spock
*/

let playerScore = 0;
let pcScore = 0;

rockButton.onclick = () => {
  compChoice = pcChoice();
  if (compChoice == 0 || compChoice == 3) {
    score.innerText = `Wygrałeś, komputer dał ${numToName(compChoice)}`;
    playerScore += 1;
    scoreOne.innerText = Number(playerScore);
  } else if (compChoice == 2 || compChoice == 4) {
    score.innerText = `Przegrałeś, komputer dał ${numToName(compChoice)}`;
    pcScore += 1;
    scoreTwo.innerText = Number(pcScore);
  } else {
    score.innerText = `Remis, komputer dał ${numToName(compChoice)}`;
  }
};

paperButton.onclick = () => {
  compChoice = pcChoice();
  if (compChoice == 0 || compChoice == 3) {
    score.innerText = `Przegrałeś, komputer dał ${numToName(compChoice)}`;
    pcScore += 1;
    scoreTwo.innerText = Number(pcScore);
  } else if (compChoice == 1 || compChoice == 4) {
    score.innerText = `Wygrałeś, komputer dał ${numToName(compChoice)}`;
    playerScore += 1;
    scoreOne.innerText = Number(playerScore);
  } else score.innerText = `Remis, komputer dał ${numToName(compChoice)}`;
};

scissorsButton.onclick = () => {
  compChoice = pcChoice();
  if (compChoice == 2 || compChoice == 3) {
    score.innerText = `Wygrałeś, komputer dał ${numToName(compChoice)}`;
    playerScore += 1;
    scoreOne.innerText = Number(playerScore);
  } else if (compChoice == 1 || compChoice == 4) {
    score.innerText = `Przegrałeś, komputer dał ${numToName(compChoice)}`;
    pcScore += 1;
    scoreTwo.innerText = Number(pcScore);
  } else score.innerText = `Remis, komputer dał ${numToName(compChoice)}`;
};

lizardButton.onclick = () => {
  compChoice = pcChoice();
  if (compChoice == 4 || compChoice == 2) {
    score.innerText = `Wygrałeś, komputer dał ${numToName(compChoice)}`;
    playerScore += 1;
    scoreOne.innerText = Number(playerScore);
  } else if (compChoice == 1 || compChoice == 0) {
    score.innerText = `Przegrałeś, komputer dał ${numToName(compChoice)}`;
    pcScore += 1;
    scoreTwo.innerText = Number(pcScore);
  } else score.innerText = `Remis, komputer dał ${numToName(compChoice)}`;
};

spockButton.onclick = () => {
  compChoice = pcChoice();
  if (compChoice == 0 || compChoice == 1) {
    score.innerText = `Wygrałeś, komputer dał ${numToName(compChoice)}`;
    playerScore += 1;
    scoreOne.innerText = Number(playerScore);
  } else if (compChoice == 2 || compChoice == 3) {
    score.innerText = `Przegrałeś, komputer dał ${numToName(compChoice)}`;
    pcScore += 1;
    scoreTwo.innerText = Number(pcScore);
  } else score.innerText = `Remis, komputer dał ${numToName(compChoice)}`;
};

//HELP BUTTON

helpButton.onclick = () => {
  helpButton.classList.toggle("open");
};

// NEW GAME BUTTON

newGame.onclick = () => {
  if (playerScore != 0 || pcScore != 0) {
    playerScore = 0;
    pcScore = 0;
    scoreOne.innerText = playerScore;
    scoreTwo.innerText = pcScore;
    score.innerText = "Nowa gra!";
  }
};

// SETTINGS BUTTON

settingsBtn.onclick = () => {
  settingsBtn.classList.toggle("settings-animation");
  settingsMenu.classList.toggle("settings-open");
  document.documentElement.style.setProperty("--player-1-color", p1Color.value);
  document.documentElement.style.setProperty("--player-2-color", p2Color.value);
};

// NICK CHANGE

const changeNickOne = () => {
  playerOneNick.value != ""
    ? (p1Nick.innerText = playerOneNick.value)
    : (p1Nick.innerText = "you");
};

const changeNickTwo = () => {
  playerTwoNick.value != ""
    ? (p2Nick.innerText = playerTwoNick.value)
    : (p2Nick.innerText = "pc");
};

// COLOR CHANGE




