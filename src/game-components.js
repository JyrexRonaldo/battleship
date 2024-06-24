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

  let sunkStatus = false;

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

  const setSunkStatus = () => {
    sunkStatus = true;
  };

  const getSunkStatus = () => sunkStatus;

  return {
    getXCoordinate,
    getYCoordinate,
    setOccupiedStatus,
    getOccupiedStatus,
    setShipName,
    getShipName,
    setAttackedStatus,
    getAttackedStatus,
    setSunkStatus,
    getSunkStatus,
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

  const getBoard = () => board;

  const getShips = () => ships;

  const checkCoordinatesAvailability = (
    shipTypeName,
    xPos,
    yPos,
    direction
  ) => {
    const shipType = ships[shipTypeName];
    const length = shipType.getShipLength();
    // direction = true means horizontal direction
    // direction = false means vertical direction
    let available = null;
    if (direction) {
      for (let i = 0; i < length; i += 1) {
        // console.log({xPos , i})
        if (xPos + i === 10) {
          available = false;
          break;
        }
        available = board[xPos + i][yPos].getOccupiedStatus() === false;
        if (available === false) {
          break;
        }
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        // console.log({yPos, i})
        if (yPos + i === 10) {
          available = false;
          break;
        }
        available = board[xPos][yPos + i].getOccupiedStatus() === false;
        if (available === false) {
          break;
        }
      }
    }

    return available;
  };

  const spaceOutShipsHorizontally = (xPos, yPos, length) => {

    if (board[xPos-1] && board[xPos-1][yPos-1]) {
      const rearLeftCorner = board[xPos-1][yPos-1]  
      if (rearLeftCorner) {
        rearLeftCorner.setOccupiedStatus()
      }
    }
    // const rearLeftCorner = board[xPos-1][yPos-1]

    // if (rearLeftCorner) {
    //   rearLeftCorner.setOccupiedStatus()
    // }

    if (board[xPos-1] && board[xPos-1][yPos]) {
      const rear = board[xPos-1][yPos]

    if (rear) {
      rear.setOccupiedStatus()
    }
    }

    // const rear = board[xPos-1][yPos]

    // if (rear) {
    //   rear.setOccupiedStatus()
    // }

    if (board[xPos-1]&& board[xPos-1][yPos+1]) {
      const rearRightCorner = board[xPos-1][yPos+1]

    if (rearRightCorner) {
      rearRightCorner.setOccupiedStatus()
    }
    }

    // const rearRightCorner = board[xPos-1][yPos+1]

    // if (rearRightCorner) {
    //   rearRightCorner.setOccupiedStatus()
    // }

    if ( board[xPos+length] &&  board[xPos+length][yPos-1]) {
      const frontLeftCorner = board[xPos+length][yPos-1]
    
    if (frontLeftCorner) {
      frontLeftCorner.setOccupiedStatus()
    }
    }

    // const frontLeftCorner = board[xPos+length][yPos-1]
    
    // if (frontLeftCorner) {
    //   frontLeftCorner.setOccupiedStatus()
    // }

    
    if (board[xPos + length] && board[xPos + length][yPos]) {
      const front = board[xPos + length][yPos]

    if (front) {
      front.setOccupiedStatus()
    }
    }
    
    // const front = board[xPos + length][yPos]

    // if (front) {
    //   front.setOccupiedStatus()
    // }


    if (board[xPos + length] && board[xPos + length][yPos+1]) {
      const frontRightCorner = board[xPos + length][yPos+1]

    if (frontRightCorner) {
      frontRightCorner.setOccupiedStatus()
    }
    }

    // const frontRightCorner = board[xPos + length][yPos+1]

    // if (frontRightCorner) {
    //   frontRightCorner.setOccupiedStatus()
    // }

    const leftSideArray = []
    const rightSideArray = []
    for (let i = 0; i < length; i += 1) {

      if (board[xPos + i] && board[xPos + i][yPos - 1]) {
        leftSideArray.push(board[xPos + i][yPos - 1])  
      }


      if (board[xPos + i] && board[xPos + i][yPos + 1]) {
        rightSideArray.push(board[xPos + i][yPos + 1])
      }

      // leftSideArray.push(board[xPos + i][yPos - 1])
      // rightSideArray.push(board[xPos + i][yPos + 1])
    }

    leftSideArray.forEach((coordinate) => {
      if (coordinate) {
        coordinate.setOccupiedStatus()
      }
    })

    rightSideArray.forEach((coordinate) => {
      if (coordinate) {
        coordinate.setOccupiedStatus()
      }
    })

  }

  const spaceOutShipsVertically = (xPos, yPos, length) => {
   if (board[xPos+1] && board[xPos+1][yPos-1]) {
    const rearLeftCorner = board[xPos+1][yPos-1]

    if (rearLeftCorner) {
      rearLeftCorner.setOccupiedStatus()
    }
   }
   
    // const rearLeftCorner = board[xPos+1][yPos-1]

    // if (rearLeftCorner) {
    //   rearLeftCorner.setOccupiedStatus()
    // }

   if (board[xPos] && board[xPos][yPos-1]) {
    const rear = board[xPos][yPos-1]

    if (rear) {
      rear.setOccupiedStatus()
    }
   }

    // const rear = board[xPos][yPos-1]

    // if (rear) {
    //   rear.setOccupiedStatus()
    // }

    if (board[xPos-1] && board[xPos-1][yPos-1]) {
      const rearRightCorner = board[xPos-1][yPos-1]

    if (rearRightCorner) {
      rearRightCorner.setOccupiedStatus()
    }
    }
    
    // const rearRightCorner = board[xPos-1][yPos-1]

    // if (rearRightCorner) {
    //   rearRightCorner.setOccupiedStatus()
    // }


    if (board[xPos+1] && board[xPos+1][yPos + length]) {
      const frontLeftCorner = board[xPos+1][yPos + length]

    if (frontLeftCorner) {
      frontLeftCorner.setOccupiedStatus()
    }
    }

    // const frontLeftCorner = board[xPos+1][yPos + length]

    // if (frontLeftCorner) {
    //   frontLeftCorner.setOccupiedStatus()
    // }


    if (board[xPos] && board[xPos][yPos + length]) {
      const front = board[xPos][yPos + length]

    if (front) {
      front.setOccupiedStatus()
    }  
    }

    // const front = board[xPos][yPos + length]

    // if (front) {
    //   front.setOccupiedStatus()
    // }

    if (board[xPos - 1] && board[xPos - 1][yPos+length]) {
      const frontRightCorner = board[xPos - 1][yPos+length]

    if (frontRightCorner) {
      frontRightCorner.setOccupiedStatus()
    }  
    }

    // const frontRightCorner = board[xPos - 1][yPos+length]

    // if (frontRightCorner) {
    //   frontRightCorner.setOccupiedStatus()
    // }

    const leftSideArray = []
    const rightSideArray = []
    for (let i = 0; i < length; i += 1) {

      if (board[xPos + 1] && board[xPos + 1][yPos + i]) {
        leftSideArray.push(board[xPos + 1][yPos + i])  
      }

      if (board[xPos - 1] && board[xPos - 1][yPos + i]) {
        rightSideArray.push(board[xPos - 1][yPos + i])  
      }


      // leftSideArray.push(board[xPos + 1][yPos + i])
      // rightSideArray.push(board[xPos - 1][yPos + i])
    }

    leftSideArray.forEach((coordinate) => {
      if (coordinate) {
        coordinate.setOccupiedStatus()
      }
    })

    rightSideArray.forEach((coordinate) => {
      if (coordinate) {
        coordinate.setOccupiedStatus()
      }
    })

  }




  const placeShip = (shipTypeName, xPos, yPos, direction) => {
    const shipType = ships[shipTypeName];
    const length = shipType.getShipLength();
    const checkSpace = checkCoordinatesAvailability(
      shipTypeName,
      xPos,
      yPos,
      direction
    );
    let message = "ship has been placed";

    if (checkSpace) {
      // direction = true means horizontal direction
      // direction = false means vertical direction
      if (direction) {
        for (let i = 0; i < length; i += 1) {
          board[xPos + i][yPos].setOccupiedStatus();
          board[xPos + i][yPos].setShipName(shipType.getShipName());
        }
        spaceOutShipsHorizontally(xPos, yPos, length)
      } else {
        for (let i = 0; i < length; i += 1) {
          board[xPos][yPos + i].setOccupiedStatus();
          board[xPos][yPos + i].setShipName(shipType.getShipName());
        }
        spaceOutShipsVertically(xPos, yPos, length)
      }
    } else {
      message = "can't place ship";
    }

    return message;
  };

  const setSunkStatus = () => {
    const boats = Object.keys(ships);
    const sunkShipNames = boats.filter((boat) => ships[boat].isSunk());
    sunkShipNames.forEach((boatName) => {
      board.forEach((xArray) => {
        xArray.forEach((coordinate) => {
          if (boatName === coordinate.getShipName()) {
            coordinate.setSunkStatus();
          }
        });
      });
    });
  };

  const receiveAttack = (xPos, yPos) => {
    const attackCoordinate = board[xPos][yPos];
    // console.log(attackCoordinate)
    // attackCoordinate.setAttackedStatus();
    attackCoordinate.setAttackedStatus();
    if (attackCoordinate.getOccupiedStatus()) {
      const attackedShip = attackCoordinate.getShipName();
      ships[attackedShip].increaseHitCount();
    }
    setSunkStatus();
  };

  const checkShipSunkStatus = () => {
    const boats = Object.keys(ships);
    const sunkValues = boats.map((boat) => ships[boat].isSunk());
    if (sunkValues.includes(false)) {
      return false;
    }
    return true;
  };

  const getRandomDirection = () => {
    const number = Math.floor(Math.random() * 2);
    return number === 0;
  };

  const getRandomCoordinate = () => {
    const coordinate = Math.floor(Math.random() * 10);
    return coordinate;
  };

  const randomizeShipPlacement = () => {
    const shipNames = Object.keys(ships);
    shipNames.forEach((shipName) => {
      let randomXCoordinate = null;
      let randomYCoordinate = null;
      let randomDirection = null;
      let checkSpace = null;

      do {
        randomXCoordinate = getRandomCoordinate();
        randomYCoordinate = getRandomCoordinate();
        randomDirection = getRandomDirection();
        checkSpace = checkCoordinatesAvailability(
          shipName,
          randomXCoordinate,
          randomYCoordinate,
          randomDirection
        );
      } while (checkSpace === false);

      placeShip(
        shipName,
        randomXCoordinate,
        randomYCoordinate,
        randomDirection
      );
    });
  };

  return {
    placeShip,
    receiveAttack,
    checkShipSunkStatus,
    getShips,
    randomizeShipPlacement,
    getBoard,
    getRandomCoordinate,
  };
}

function player(name, type) {
  const playerName = name;

  const playerType = type;

  const board = gameboard();

  const placeShip = (shipTypeName, xPos, yPos, direction) => {
    board.placeShip(shipTypeName, xPos, yPos, direction);
  };

  const receiveAttack = (xPos, yPos) => {
    board.receiveAttack(xPos, yPos);
  };

  const checkShipSunkStatus = () => board.checkShipSunkStatus();


  const getShips = () => board.getShips();
  

  const randomizeShipPlacement = () => {
    board.randomizeShipPlacement();
  };

  const getPlayerType = () => playerType;

  const getPlayerName = () => playerName;

  const getBoard = () => board.getBoard();

  const getRandomCoordinate = () => board.getRandomCoordinate()

  return {
    getPlayerName,
    getPlayerType,
    placeShip,
    receiveAttack,
    checkShipSunkStatus,
    getShips,
    randomizeShipPlacement,
    getBoard,
    getRandomCoordinate
  };
}

export { ship, gameboard, player };
