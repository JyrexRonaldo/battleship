function ship(length, name) {
  let hitCount = 0;
  const shipLength = length;
  const shipName = name;

  const increaseHitCount = () => {
    hitCount += 1;
  };

  const isSunk = () => hitCount >= shipLength;

  const getShipLength = () => shipLength;

  const getShipName = () => shipName;

  return { increaseHitCount, isSunk, getShipLength, getShipName };
}

const coordinates = (xPos, yPos) => {
  const xCoordinate = xPos;
  const yCoordinate = yPos;

  const getXCoordinate = () => xCoordinate;
  const getYCoordinate = () => yCoordinate;

  let shipName = null;

  let occupied = false;

  let attacked = false;

  const setShipName = (name) => {
    shipName = name;
  };

  const getShipName = () => shipName;

  const setOccupiedStatus = () => {
    occupied = true;
  };

  const getOccupiedStatus = () => occupied;

  const setAttackedStatus = () => {
    attacked = true;
  };

  const getAttackedStatus = () => attacked;

  return {
    getXCoordinate,
    getYCoordinate,
    setOccupiedStatus,
    getOccupiedStatus,
    setShipName,
    getShipName,
    setAttackedStatus,
    getAttackedStatus,
  };
};

function gameboard() {
  const board = [];

  for (let x = 0; x < 10; x += 1) {
    board[x] = [];
    for (let y = 0; y < 10; y += 1) {
      board[x].push(coordinates(x, y));
    }
  }

  const ships = {
    carrier: ship(5, "carrier"),
    battleship: ship(4, "battleship"),
    cruiser: ship(3, "cruiser"),
    submarine: ship(3, "submarine"),
    destroyer: ship(2, "destroyer"),
  };

  const checkCoordinatesAvailability = (length, xPos, yPos, direction) => {
    // direction = true means horizontal direction
    // direction = false means vertical direction
    let available = null;
    if (direction) {
      for (let i = 0; i < length; i += 1) {
        available = board[xPos + i][yPos].getOccupiedStatus() === false;
        if (available === false) {
          break;
        }
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        available = board[xPos][yPos + i].getOccupiedStatus() === false;
        if (available === false) {
          break;
        }
      }
    }

    return available;
  };

  const placeShip = (shipType, xPos, yPos, direction) => {
    const length = shipType.getShipLength();
    const checkSpace = checkCoordinatesAvailability(
      length,
      xPos,
      yPos,
      direction
    );
    let message = null;

    if (checkSpace) {
      // direction = true means horizontal direction
      // direction = false means vertical direction
      if (direction) {
        for (let i = 0; i < length; i += 1) {
          board[xPos + i][yPos].setOccupiedStatus();
          board[xPos + i][yPos].setShipName(shipType.getShipName());
        }
      } else {
        for (let i = 0; i < length; i += 1) {
          board[xPos][yPos + i].setOccupiedStatus();
          board[xPos][yPos + i].setShipName(shipType.getShipName());
        }
      }
    } else {
      message = "can't place ship";
    }

    return message;
  };

  const receiveAttack = (xPos, yPos) => {
    const attackCoordinate = board[xPos][yPos];
    attackCoordinate.setAttacked();
    if (attackCoordinate.getOccupiedStatus()) {
      const attackedShip = attackCoordinate.getShipName();
      ships[attackedShip].increaseHitCount();
    }
  };

  const checkShipSunkStatus = (battleships) => {
    const boats = Object.keys(battleships);
    const sunkValues = boats.map((boat) => battleships[boat].isSunk());
    if (sunkValues.includes(false)) {
      return false;
    }
    return true;
  };

  return { placeShip, receiveAttack, checkShipSunkStatus };
}

function player(name) {
  const playerName = name;

  const board = gameboard();

  const getPlayerName = () => playerName;

  const getBoard = () => board;

  return { getPlayerName, getBoard };
}

export { ship, gameboard, player };
