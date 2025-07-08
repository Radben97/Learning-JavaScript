let playGame = confirm("Shall we play a game then");
if (playGame) {
  playerChoice = prompt("Choose rock, paper or scissors");
  if (playerChoice) {
    playerone = playerChoice.trim().toLowerCase();
    if (
      playerone === "rock" ||
      playerone === "paper" ||
      playerone === "scissors"
    ) {
      computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      switch (playerone) {
        case "rock":
          computer === "rock"
            ? alert("tie")
            : computer === "paper"
            ? alert(`computer:${computer}\nyou lose`)
            : alert(`computer:${computer}\nyou won`);
          break;
        case "paper":
          computer === "rock"
            ? alert(`computer:${computer}\nyou won`)
            : computer === "paper"
            ? alert(`computer:${computer}\ntie`)
            : alert(`computer:${computer}\nyou lose`);
          break;
        case "scissors":
          computer === "rock"
            ? alert(`computer:${computer}\nyou lose`)
            : computer === "paper"
            ? alert(`computer:${computer}\nyou lose`)
            : alert(`computer:${computer}\ntie`);
          break;
        default:
          alert("error");
      }
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("ok thank you for playing");
    } else {
      alert("Enter rock, paper or scissors only");
    }
  } else {
    alert("Maybe you changed your mind, see ya next time");
  }
} else {
  alert("ok, maybe next time");
}
