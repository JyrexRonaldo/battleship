import "./reset.css";
import "./style.css";

import { gameController as activeGameController} from "./game-components";

const gameController = activeGameController();

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
  let shipDivs = document.querySelectorAll(".ships > div:nth-child(2) > div");
  const shipNames = [
    ...document.querySelectorAll(".ships > div:nth-child(2) > div"),
  ].map((div) => div.getAttribute("class"));

  const shipContainerDiv = document.querySelector(".ships > div:nth-child(2)");

  const updateShipContainer = (currentPlayer, container) => {
    const containerDiv = container;
    containerDiv.innerHTML = "";
    const ships = currentPlayer.getShips();
    Object.keys(ships).forEach((key) => {
      const shipOuterDiv = document.createElement("div");
      shipOuterDiv.classList.add(key);
      const shipMiddleDiv = document.createElement("div");
      shipMiddleDiv.classList.add(key);
      for (let i = 0; i < ships[key].getShipLength(); i += 1) {
        const shipInnerDiv = document.createElement("div");
        shipInnerDiv.classList.add(key);
        shipMiddleDiv.append(shipInnerDiv);
      }
      shipOuterDiv.append(shipMiddleDiv);
      containerDiv.append(shipOuterDiv);
    });
  };

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
            // containerCode === 1 signals player ship instead of enemy ship
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

  const addDirectionChange = () => {
    shipDivs = document.querySelectorAll(".ships > div:nth-child(2) > div");
    shipDivs.forEach((ship) => {
      ship.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        selectedShip = ship.getAttribute("class");
        e.target.parentNode.classList.toggle("rotate");
        setShipDirection(e);
      });
    });
  };

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
      updateShipContainer(playerOne, shipContainerDiv);
      addDirectionChange();
    }

    if (e.target.textContent === "Start your game!") {
      if (shipContainerDiv.hasChildNodes() === false) {
        switchPage(2);
        playerTwo.randomizeShipPlacement();
        updateGameboard(playerOne, playerOneGrid, 1);
        updateGameboard(playerTwo, playerTwoGrid, 2);
        gameStatusDiv.textContent = gameController.getGameStatus();
      }
    }

    if (e.target.textContent === "Randomize ships!") {
      playerOne.randomizeShipPlacement();

      if (shipContainerDiv.hasChildNodes() === true) {
        shipDivs.forEach((ship) => {
          shipContainerDiv.removeChild(ship);
        });
      }

      updateGameboard(playerOne, playerOnePlacementGrid, 1);
    }

    if (e.target.textContent === "Clear board!") {
      playerOne.resetBoard();
      updateGameboard(playerOne, playerOnePlacementGrid, 1);
      updateShipContainer(playerOne, shipContainerDiv);
      addDirectionChange();
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
            const message = playerOne.placeShip(
              selectedShip,
              xPos,
              yPos,
              shipDirection
            );
            if (message === "success") {
              shipContainerDiv.removeChild(
                shipContainerDiv.querySelector(`div.${selectedShip}`)
              );
            }
            selectedShip = null;
            shipDirection = null;
          }
          updateGameboard(playerOne, playerOnePlacementGrid, 1);
        }
      }
    }
  });

  addDirectionChange();
})();

export { gameController, screenController };
