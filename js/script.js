{
  const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nieznany ruch";
      }
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log("moves:", argComputerMove, argPlayerMove);
      if (argPlayerMove == "nieznany ruch") {
        printMessage("Nieznany ruch!");
      } else if (argComputerMove == argPlayerMove) {
        printMessage("Remis!");
      } else if (
        (argComputerMove == "kamień" && argPlayerMove == "nożyce") ||
        (argComputerMove == "papier" && argPlayerMove == "kamień") ||
        (argComputerMove == "nożyce" && argPlayerMove == "papier")
      ) {
        printMessage("Ty wygrywasz!");
      } else {
        printMessage("Komputer wygrywa!");
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    /*if (randomNumber == 1) {
      computerMove = "kamień";
    } else if (randomNumber == 2) {
      computerMove = "papier";
    } else if (randomNumber == 3) {
      computerMove = "nożyce";
    }*/
    printMessage("Mój ruch to: " + computerMove);

    /*let playerInput = prompt(
      "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
    );*/

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    /*if (playerInput == "1") {
      playerMove = "kamień";
    } else if (playerInput == "2") {
      playerMove = "papier";
    } else if (playerInput == "3") {
      playerMove = "nożyce";
    }*/
    printMessage("Twój ruch to: " + playerMove);

    displayResult(computerMove, playerMove);

    /*if (playerMove == "nieznany ruch") {
      printMessage("Nieznany ruch!");
    } else if (computerMove == playerMove) {
      printMessage("Remis!");
    } else if (
      (computerMove == "kamień" && playerMove == "nożyce") ||
      (computerMove == "papier" && playerMove == "kamień") ||
      (computerMove == "nożyce" && playerMove == "papier")
    ) {
      printMessage("Ty wygrywasz!");
    } else {
      printMessage("Komputer wygrywa!");
    }*/
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
