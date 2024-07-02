import "./reset.css";
import "./style.css";

import { player } from "./game-components";

const gameController = (function gameController() {
  const players = [player("Player 1", "real"), player("Computer", "computer")];

  const getPlayers = () => players;

  let [activePlayer, activeOpponent] = players;

  let gameOver = false;

  const isGameOver = () => gameOver;

  let gameStatus = `${activePlayer.getPlayerName()}'s turn `;

  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const switchActiveOpponent = () => {
    activeOpponent = activeOpponent === players[1] ? players[0] : players[1];
  };

  const getActivePlayer = () => activePlayer;

  const getActiveOpponent = () => activeOpponent;

  const playRound = (xPos, yPos) => {
    if (activeOpponent.getBoard()[xPos][yPos].getAttackedStatus() === true) {
      return;
    }
    activeOpponent.receiveAttack(xPos, yPos);
    if (activeOpponent.checkFleetSunkStatus()) {
      gameStatus = `${activePlayer.getPlayerName()} won!`;
      gameOver = true;
      return;
    }
    switchActiveOpponent();
    switchActivePlayer();
    gameStatus = `${activePlayer.getPlayerName()}'s turn`;
    if (activePlayer.getPlayerType() === "computer") {
      let randomXCoordinate = null;
      let randomYCoordinate = null;

      do {
        randomXCoordinate = activePlayer.getRandomCoordinate();
        randomYCoordinate = activePlayer.getRandomCoordinate();
      } while (
        activeOpponent
          .getBoard()
          [randomXCoordinate][randomYCoordinate].getAttackedStatus() === true
      );
      playRound(randomXCoordinate, randomYCoordinate);
    }
  };

  const getGameStatus = () => gameStatus;

  const resetGame = () => {
    activePlayer.resetBoard();
    activePlayer.resetShips();
    activeOpponent.resetBoard();
    activeOpponent.resetShips();
    gameOver = false;
    gameStatus = `${activePlayer.getPlayerName()}'s turn `;
    [activePlayer, activeOpponent] = players;
  };

  return {
    getPlayers,
    getActivePlayer,
    getActiveOpponent,
    playRound,
    getGameStatus,
    isGameOver,
    resetGame,
  };
})();

const screenController = (function screenController() {
  const main = document.querySelector("main");
  const screens = [...main.querySelectorAll("div:not(div div)")];
  const gameStatusDiv = document.querySelector(
    "main > div:nth-child(3) .status"
  );

  const playerOneGrid = document.querySelector(
    ".battlefield .ocean-grid .coordinates"
  );
  const playerTwoGrid = document.querySelector(
    ".battlefield .tracking-grid .coordinates"
  );
  const playerOnePlacementGrid = document.querySelector(
    ".ship-placement .ocean-grid .coordinates"
  );
  const [playerOne, playerTwo] = gameController.getPlayers();
  let selectedShip = null;
  let shipDirection = null;
  const shipDivs = document.querySelectorAll(".ships > div:nth-child(2) > div");
  const shipNames = [
    ...document.querySelectorAll(".ships > div:nth-child(2) > div"),
  ].map((div) => div.getAttribute("class"));

  const updateGameboard = (currentPlayer, container, containerCode) => {
    const coordinateContainerDiv = container;
    coordinateContainerDiv.innerHTML = "";
    currentPlayer.getBoard().forEach((xArray) => {
      xArray.forEach((coordinate) => {
        const coordinateDiv = document.createElement("div");
        coordinateDiv.dataset.xCoordinate = coordinate.getXCoordinate();
        coordinateDiv.dataset.yCoordinate = coordinate.getYCoordinate();
        if (coordinate.getAttackedStatus()) {
          coordinateDiv.classList.add("shot");
        }

        if (coordinate.getSunkStatus()) {
          coordinateDiv.classList.replace("shot", "sunk");
        }

        if (coordinate.getShipName()) {
          if (containerCode === 1) {
            coordinateDiv.classList.replace("shot", "attacked");
          } else {
            coordinateDiv.classList.replace("shot", "hit");
          }
        }

        if (containerCode === 1) {
          coordinateDiv.classList.add("ocean-coord");
        } else {
          coordinateDiv.classList.add("track-coord");
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

  const switchPage = (page) => {
    screens.forEach((screen) => {
      screen.classList.add("hidden");
    });
    screens[page].classList.remove("hidden");
  };

  const setShipDirection = (e) => {
    if (e.target.parentNode.getAttribute("class").includes("rotate")) {
      shipDirection = true;
    } else {
      shipDirection = false;
    }
  };

  // playerTwo.randomizeShipPlacement();

  // playerOne.placeShip("carrier", 3, 1, false)

  main.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "track-coord") {
      if (gameController.isGameOver()) {
        gameStatusDiv.textContent = gameController.getGameStatus();
        return;
      }

      const coordinateDiv = e.target;
      gameController.playRound(
        coordinateDiv.dataset.xCoordinate,
        coordinateDiv.dataset.yCoordinate
      );

      setTimeout(() => {
        updateGameboard(playerOne, playerOneGrid, 1);
        gameStatusDiv.textContent = `${playerOne.getPlayerName()}'s turn`;
        if (gameController.isGameOver()) {
          gameStatusDiv.textContent = gameController.getGameStatus();
        }
      }, 500);
      gameStatusDiv.textContent = `${playerTwo.getPlayerName()}'s turn`;
      updateGameboard(playerTwo, playerTwoGrid, 2);
      if (gameController.isGameOver()) {
        if (gameController.getActivePlayer() === playerTwo) {
          return;
        }
        gameStatusDiv.textContent = gameController.getGameStatus();
      }
    }

    if (e.target.textContent === "Return to starting menu") {
      switchPage(0);
    }

    if (
      e.target.textContent === "Restart game!!" ||
      e.target.textContent === "Place your ships!"
    ) {
      switchPage(1);
      gameController.resetGame();
      updateGameboard(playerOne, playerOnePlacementGrid, 1);
    }

    if (e.target.textContent === "Start your game!") {
      switchPage(2);
      playerTwo.randomizeShipPlacement();
      updateGameboard(playerOne, playerOneGrid, 1);
      updateGameboard(playerTwo, playerTwoGrid, 2);
      gameStatusDiv.textContent = gameController.getGameStatus();
    }

    if (e.target.textContent === "Randomize ships!") {
      playerOne.randomizeShipPlacement();
      updateGameboard(playerOne, playerOnePlacementGrid, 1);
    }

    if (e.target.textContent === "Clear board!") {
      playerOne.resetBoard();
      updateGameboard(playerOne, playerOnePlacementGrid, 1);
    }

    if (shipNames.includes(e.target.getAttribute("class"))) {
      selectedShip = e.target.getAttribute("class");
      setShipDirection(e);
    }

    if (e.target.getAttribute("class") !== null) {
      if (e.target.getAttribute("class").includes("ocean-coord")) {
        if (
          e.target.parentNode.parentNode.parentNode.parentNode
            .getAttribute("class")
            .includes("ship-placement")
        ) {
          const xPos = e.target.dataset.xCoordinate;
          const yPos = e.target.dataset.yCoordinate;
          if (selectedShip !== null && shipDirection !== null) {
            playerOne.placeShip(selectedShip, xPos, yPos, shipDirection);
            selectedShip = null
            shipDirection = null
          }
          updateGameboard(playerOne, playerOnePlacementGrid, 1);
        }
      }
    }
  });

  shipDivs.forEach((ship) => {
    ship.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      selectedShip = ship.getAttribute("class");
      e.target.parentNode.classList.toggle("rotate");
      setShipDirection(e);
    });
  });
})();

export { gameController, screenController };
