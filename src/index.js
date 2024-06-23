import "./reset.css";
import "./style.css";

import { player } from "./game-components";

const gameController = (function gameController() {
  const players = [player("Player 1", "real"), player("Computer", "computer")];

  const getPlayers = () => players;

  let activePlayer = players[0];

  let activeOpponent = players[1];

//   let winningMessage = null

  let gameOver = false

  const isGameOver = () => gameOver

  let gameStatus = `${activePlayer.getPlayerName()}'s turn `;

  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const switchActiveOpponent = () => {
    activeOpponent = activeOpponent === players[1] ? players[0] : players[1];
  };

  const getActivePlayer = () => activePlayer;

  const getActiveOpponent = () => activeOpponent;

  let x = 0
  const y = 0

  const playRound = (xPos, yPos) => {
    //   gameStatus = `${activePlayer.getPlayerName()}'s turn`;
    if (activeOpponent.getBoard()[xPos][yPos].getAttackedStatus() === true) {
      return;
    }
    activeOpponent.receiveAttack(xPos, yPos);
    if (activeOpponent.checkShipSunkStatus()) {
      gameStatus = `${activePlayer.getPlayerName()} won!`;
    //   console.log(gameStatus)
    //   winningMessage = `${activePlayer.getPlayerName} won!`;
     gameOver = true
      return;
    }
    switchActiveOpponent();
    switchActivePlayer();
    gameStatus = `${activePlayer.getPlayerName()}'s turn`;
    if (activePlayer.getPlayerType() === "computer") {
    //   let randomXCoordinate = null;
    //   let randomYCoordinate = null;

    //   do {
    //     randomXCoordinate = activePlayer.getRandomCoordinate();
    //     randomYCoordinate = activePlayer.getRandomCoordinate();
    //   } while (
    //     activeOpponent
    //       .getBoard()
    //       [randomXCoordinate][randomYCoordinate].getAttackedStatus() === true
    //   );
      
    //   playRound(randomXCoordinate, randomYCoordinate);
      playRound(x, y);
      x += 1

    }
  };

  const getGameStatus = () => gameStatus;

//   const getWinningMessage = () => winningMessage

  return {
    getPlayers,
    getActivePlayer,
    getActiveOpponent,
    playRound,
    getGameStatus,
    // getWinningMessage,
    isGameOver,
  };
})();



































































const screenController = (function screenController() {
  const main = document.querySelector("main");
  const gameStatusDiv = document.querySelector("main > div:nth-child(3) .status")
//   console.log(gameStatusDiv)
    
  
  // const enemyCoordinateDiv = document.querySelector(".tracking-grid .coordinates")
  const playerOneGrid = document.querySelector(
    ".battlefield .ocean-grid .coordinates"
  );
  const playerTwoGrid = document.querySelector(
    ".battlefield .tracking-grid .coordinates"
  );
  const [playerOne, playerTwo] = gameController.getPlayers();

  const updateGameboard = (currentPlayer, container, containerCode) => {
    const coordinateContainerDiv = container;
    coordinateContainerDiv.innerHTML = "";
    currentPlayer.getBoard().forEach((xArray) => {
      xArray.forEach((coordinate) => {
        const coordinateDiv = document.createElement("div");
        coordinateDiv.dataset.xCoordinate = coordinate.getXCoordinate();
        coordinateDiv.dataset.yCoordinate = coordinate.getYCoordinate();
        if (coordinate.getAttackedStatus() === true) {
          coordinateDiv.classList.add("shot");
        }
        if (containerCode === 1) {
          if (coordinate.getShipName()) {
            coordinateDiv.dataset.shipName = coordinate.getShipName();
            coordinateDiv.style.backgroundColor = "#5F5F5F";
          }
          
        }
        coordinateContainerDiv.appendChild(coordinateDiv);
      });
    });
  };


  playerOne.placeShip("carrier", 0, 0, true); // 5
    // playerOne.placeShip("destroyer", 2, 5, true); // 2
    // playerOne.placeShip("battleship", 2, 2, true); // 4
    // playerOne.placeShip("cruiser", 2, 3, true); // 3
    // playerOne.placeShip("submarine", 2, 4, true); // 3

    playerTwo.placeShip("carrier", 0, 0, true); // 5

    // playerOne.randomizeShipPlacement();

  updateGameboard(playerOne, playerOneGrid, 1);
  updateGameboard(playerTwo, playerTwoGrid, 2);

  // return {
  //     updateGameboard
  // }

  // console.log(enemyCoordinateDiv.outerHTML)
  main.addEventListener("click", (e) => {
    // console.log(e.target);
    // console.log(e.target.parentNode.parentNode.parentNode);
    
    if (
      e.target.parentNode.parentNode.parentNode.getAttribute("class") ===
      "tracking-grid"
    ) {

        if (gameController.isGameOver()) {
            gameStatusDiv.textContent = gameController.getGameStatus()
            return
        }
      const coordinateDiv = e.target;
      gameController.playRound(
        coordinateDiv.dataset.xCoordinate,
        coordinateDiv.dataset.yCoordinate
      );

      
      setTimeout(() => {
          updateGameboard(playerOne, playerOneGrid, 1);
          gameStatusDiv.textContent = `${playerOne.getPlayerName()}'s turn`
          if (gameController.isGameOver()) {
            gameStatusDiv.textContent = gameController.getGameStatus()
        }
        }, 500)
        
        
        //   console.log(playerTwo)
        //   console.log(playerTwo.getBoard())
        //   console.log(playerTwo.getShips())
        //   console.log(gameController.getWinningMessage())
        gameStatusDiv.textContent = `${playerTwo.getPlayerName()}'s turn`
        updateGameboard(playerTwo, playerTwoGrid, 2);
    //   if (gameController.getWinningMessage()) {
    //     gameStatusDiv.textContent = gameController.getWinningMessage()
    //   }
    if (gameController.isGameOver()) {
        if (gameController.getActivePlayer() === playerTwo) {
            return
        }
        gameStatusDiv.textContent = gameController.getGameStatus()
    }
    }
  });
})();

export { gameController, screenController };
