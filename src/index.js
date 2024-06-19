import "./reset.css";
import "./style.css";

import { player } from "./game-components";

const gameController = (function gameController() {
  const players = [player("Player 1", "real"), player("Player 2", "computer")];

  const getPlayers = () => players;

  let activePlayer = players[0];

  let activeOpponent = players[1];

  let gameStatus = `${player[0]}'s turn `;

  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const switchActiveOpponent = () => {
    activeOpponent = activeOpponent === players[1] ? players[0] : players[1];
  };

  const getActivePlayer = () => activePlayer;

  const getActiveOpponent = () => activeOpponent;

  const playRound = (xPos, yPos) => {
    activeOpponent.receiveAttack(xPos, yPos);
    if (activeOpponent.checkShipSunkStatus()) {
      gameStatus = `${activePlayer.getPlayerName} won!`;
      return;
    }
    gameStatus = `${activePlayer.getPlayerName}'s turn`;
    // switchActivePlayer();
    // switchActiveOpponent();
  };

  const getGameStatus = () => gameStatus;

  return {
    getPlayers,
    getActivePlayer,
    getActiveOpponent,
    playRound,
    getGameStatus,
  };
})();

const screenController = (function screenController() {
  const main = document.querySelector("main");
  // const enemyCoordinateDiv = document.querySelector(".tracking-grid .coordinates")
  const playerOneGrid = document.querySelector(
    ".battlefield .ocean-grid .coordinates"
  );
  const playerTwoGrid = document.querySelector(
    ".battlefield .tracking-grid .coordinates"
  );
  const [playerOne, playerTwo] = gameController.getPlayers();

  const updateGameboard = (currentPlayer, grid, gridCode) => {
    const currentGrid = grid;
    currentGrid.innerHTML = "";
    currentPlayer.getBoard().forEach((xArray) => {
      xArray.forEach((coordinate) => {
        const coordinateDiv = document.createElement("div");
        coordinateDiv.dataset.xCoordinate = coordinate.getXCoordinate();
        coordinateDiv.dataset.yCoordinate = coordinate.getYCoordinate();
        if (coordinate.getAttackedStatus() === true) {
          coordinateDiv.classList.add("shot");
        }
        if (gridCode === 1) {
          if (coordinate.getShipName()) {
            coordinateDiv.dataset.shipName = coordinate.getShipName()
            coordinateDiv.style.backgroundColor = "blue";
          }
        }
        currentGrid.appendChild(coordinateDiv);
      });
    });
  };

  //   playerOne.placeShip("carrier" , 3, 3, true)
  //   playerOne.placeShip("battleship" , 1, 5, true)
  //   playerOne.placeShip("cruiser" , 7, 5, true)
  //   playerOne.placeShip("carrier" , 3, 3, true)
  //   playerOne.placeShip("carrier" , 3, 3, true)

  playerOne.randomizeShipPlacement();

  updateGameboard(playerOne, playerOneGrid, 1);
  updateGameboard(playerTwo, playerTwoGrid);

  // return {
  //     updateGameboard
  // }

  // console.log(enemyCoordinateDiv.outerHTML)
  main.addEventListener("click", (e) => {
    console.log(e.target)
    // console.log(e.target.parentNode.parentNode.parentNode);
    if (
      e.target.parentNode.parentNode.parentNode.getAttribute("class") ===
      "tracking-grid"
    ) {
      const coordinateDiv = e.target;
      gameController.playRound(
        coordinateDiv.dataset.xCoordinate,
        coordinateDiv.dataset.yCoordinate
      );
      updateGameboard(playerTwo, playerTwoGrid, 2);
    }
  });
})();

export { gameController, screenController };
