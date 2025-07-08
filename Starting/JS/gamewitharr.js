const playGame = confirm("shall we play a game then");
if (playGame) {
    
    while (playGame) {
        const playerChoice = prompt("rock, paper or scissors");
        if(
            playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors")
        {
            playerMove = playerChoice.trim().toLowerCase();
            gameArray = [0,"rock", "paper", "scissors"];
            delete gameArray[0];
            computerChoice = Math.floor(Math.random() * 3 + 1);
            computerMove = gameArray[computerChoice];
            switch (playerChoice) {
              case "rock":
                computerMove === "rock"
                  ? alert("tie")
                  : computerMove === "paper"
                  ? alert(`computerMove:${computerMove}\nyou lose`)
                  : alert(`computerMove:${computerMove}\nyou won`);
                break;
              case "paper":
                computerMove === "rock"
                  ? alert(`computerMove:${computerMove}\nyou won`)
                  : computerMove === "paper"
                  ? alert(`computerMove:${computerMove}\ntie`)
                  : alert(`computerMove:${computerMove}\nyou lose`);
                break;
              case "scissors":
                computerMove === "rock"
                  ? alert(`computerMove:${computerMove}\nyou lose`)
                  : computerMove === "paper"
                  ? alert(`computerMove:${computerMove}\nyou lose`)
                  : alert(`computerMove:${computerMove}\ntie`);
                break;
              default:
                alert("error");
            }
            let playAgain = confirm("Play again?");
            if (playAgain) {
                continue;
            } else {
                alert("ok thank you for playing");
                break;
            }
        }
        else {
            alert("enter rock paper or scissors only");
            continue;
        }
    }
}
else {
    alert("ok see ya next time");
}