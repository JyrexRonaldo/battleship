import { coordinates, ship, gameboard, player } from "./game-components";

// import { gameController } from "./index";

describe("ship.increaseHitCount()", () => {
  test("calling hit on testDestroyer shound make it sink", () => {
    const testDestroyer = ship(2, "destroyer");
    for (let i = 0; i < 2; i += 1) {
      testDestroyer.increaseHitCount();
    }
    expect(testDestroyer.isSunk()).toBe(true);
  });

  test("calling hit on testCarrier shound make it sink", () => {
    const testCarrier = ship(5, "destroyer");
    for (let i = 0; i < 5; i += 1) {
      testCarrier.increaseHitCount();
    }
    expect(testCarrier.isSunk()).toBe(true);
  });

  test("calling hit on testCruiser shound make it sink", () => {
    const testCruiser = ship(3, "destroyer");
    for (let i = 0; i < 3; i += 1) {
      testCruiser.increaseHitCount();
    }
    expect(testCruiser.isSunk()).toBe(true);
  });
});

describe("ship.isSunk()", () => {
  test("isSunk method should return false if ship is not sunk", () => {
    const testDestroyer = ship(2, "testDestroyer");

    testDestroyer.increaseHitCount();

    expect(testDestroyer.isSunk()).toBe(false);
  });

  test("isSunk method should return true if ship is sunk", () => {
    const testCarrier = ship(5, "testCarrier");
    for (let i = 0; i < 5; i += 1) {
      testCarrier.increaseHitCount();
    }
    expect(testCarrier.isSunk()).toBe(true);
  });

  test("isSunk method should return false if ship is not sunk", () => {
    const testCruiser = ship(3, "testCruiser");
    for (let i = 0; i < 2; i += 1) {
      testCruiser.increaseHitCount();
    }
    expect(testCruiser.isSunk()).toBe(false);
  });
});

describe("ship.getShipLength()", () => {
  test("getShipLength method should return 2 on testDestroyer", () => {
    const testDestroyer = ship(2, "testDestroyer");
    expect(testDestroyer.getShipLength()).toBe(2);
  });

  test("getShipLength method should return 5 on testCarrier", () => {
    const testCarrier = ship(5, "testCarrier");
    expect(testCarrier.getShipLength()).toBe(5);
  });

  test("getShipLength method should return 3 on testCruiser", () => {
    const testCruiser = ship(3, "testCruiser");
    expect(testCruiser.getShipLength()).toBe(3);
  });
});

describe("ship.getShipName()", () => {
  test("getShipName method should return testDestroyer", () => {
    const testDestroyer = ship(2, "testDestroyer");
    expect(testDestroyer.getShipName()).toBe("testDestroyer");
  });

  test("getShipName method should return testCarrier", () => {
    const testCarrier = ship(5, "testCarrier");
    expect(testCarrier.getShipName()).toBe("testCarrier");
  });

  test("getShipName method should return testCruiser", () => {
    const testCruiser = ship(3, "testCruiser");
    expect(testCruiser.getShipName()).toBe("testCruiser");
  });
});

describe("coordinates.getXCoordinate", () => {
  test("getXCoordinate method should return 5", () => {
    const testCoordinate1 = coordinates(5, 5);
    expect(testCoordinate1.getXCoordinate()).toBe(5);
  });

  test("getXCoordinate method should return 5", () => {
    const testCoordinate2 = coordinates(7, 5);
    expect(testCoordinate2.getXCoordinate()).toBe(7);
  });

  test("getXCoordinate method should return 5", () => {
    const testCoordinate3 = coordinates(3, 5);
    expect(testCoordinate3.getXCoordinate()).toBe(3);
  });
});

describe("coordinates.getYCoordinate", () => {
  test("getYCoordinate method should return 5", () => {
    const testCoordinate1 = coordinates(3, 4);
    expect(testCoordinate1.getYCoordinate()).toBe(4);
  });

  test("getYCoordinate method should return 5", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getYCoordinate()).toBe(2);
  });

  test("getYCoordinate method should return 5", () => {
    const testCoordinate3 = coordinates(3, 1);
    expect(testCoordinate3.getYCoordinate()).toBe(1);
  });
});

describe("coordinates.setOccupiedStatus", () => {
  test("getOccupiedStatus should return false if setOcuppied status is not run", () => {
    const testCoordinate1 = coordinates(3, 4);
    expect(testCoordinate1.getOccupiedStatus()).toBe(false);
  });

  test("getOccupiedStatus should return true after setOcuppied status is run", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setOccupiedStatus();
    expect(testCoordinate2.getOccupiedStatus()).toBe(true);
  });
});

describe("coordinates.getOccupiedStatus", () => {
  test("getOccupiedStatus should return false if setOcuppied status is not run", () => {
    const testCoordinate1 = coordinates(3, 4);
    expect(testCoordinate1.getOccupiedStatus()).toBe(false);
  });

  test("getOccupiedStatus should return true after setOcuppied status is run", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setOccupiedStatus();
    expect(testCoordinate2.getOccupiedStatus()).toBe(true);
  });
});

describe("coordinates.setShipName", () => {
  test("setShipName should be able to take a value to set the ship name", () => {
    const testCoordinate1 = coordinates(3, 4);
    testCoordinate1.setShipName("destroyer");
    expect(testCoordinate1.getShipName()).toBe("destroyer");
  });
});

describe("coordinates.getShipName", () => {
  test("getShipName should return specified ship name after it has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setShipName("Bogdanov");
    expect(testCoordinate2.getShipName()).toBe("Bogdanov");
  });
});

describe("coordinates.setAttackedStatus", () => {
  test("getAttackedStatus should return true after setAttackedStatus has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setAttackedStatus();
    expect(testCoordinate2.getAttackedStatus()).toBe(true);
  });

  test("getAttackedStatus should return false if setAttackedStatus has not been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getAttackedStatus()).toBe(false);
  });
});

describe("coordinates.getAttackedStatus", () => {
  test("getAttackedStatus should return true after setAttackedStatus has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setAttackedStatus();
    expect(testCoordinate2.getAttackedStatus()).toBe(true);
  });

  test("getAttackedStatus should return false if setAttackedStatus has not been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getAttackedStatus()).toBe(false);
  });
});

describe("coordinates.setSunkStatus", () => {
  test("getSunkStatus should return true after setSunkStatus has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setSunkStatus();
    expect(testCoordinate2.getSunkStatus()).toBe(true);
  });

  test("getSunkStatus should return false if setSunkStatus has not been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getSunkStatus()).toBe(false);
  });
});

describe("coordinates.getSunkStatus", () => {
  test("getSunkStatus should return true after setSunkStatus has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setSunkStatus();
    expect(testCoordinate2.getSunkStatus()).toBe(true);
  });

  test("getSunkStatus should return false if setSunkStatus has not been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getSunkStatus()).toBe(false);
  });
});

describe("coordinates.setSpaceAvailability", () => {
  test("getSpaceAvailability should return false after setSpaceAvailability has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setSpaceAvailability();
    expect(testCoordinate2.getSpaceAvailability()).toBe(false);
  });

  test("getSpaceAvailability should return true if setSpaceAvailability has not been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getSpaceAvailability()).toBe(true);
  });
});

describe("coordinates.getSpaceAvailability", () => {
  test("getSpaceAvailability should return false after setSpaceAvailability has been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    testCoordinate2.setSpaceAvailability();
    expect(testCoordinate2.getSpaceAvailability()).toBe(false);
  });

  test("getSpaceAvailability should return true if setSpaceAvailability has not been set", () => {
    const testCoordinate2 = coordinates(3, 2);
    expect(testCoordinate2.getSpaceAvailability()).toBe(true);
  });
});

describe("gameboard.checkFleetSunkStatus", () => {
  test("gameboard.checkFleetSunkStatus should return true after all ships are sunk", () => {
    const testBoard = gameboard();
    const ships = testBoard.getShips();

    const sinkShip = (boatName) => {
      for (let i = 0; i < boatName.length; i += 1) {
        ships[boatName].increaseHitCount();
      }
    };

    sinkShip("carrier");

    sinkShip("battleship");

    sinkShip("cruiser");

    sinkShip("submarine");

    sinkShip("destroyer");

    expect(testBoard.checkFleetSunkStatus()).toBe(true);
  });

  test("gameboard.checkFleetSunkStatus should return false because the destroyer ship is not sunk", () => {
    const testBoard = gameboard();
    const ships = testBoard.getShips();

    const sinkShip = (boatName) => {
      for (let i = 0; i < boatName.length; i += 1) {
        ships[boatName].increaseHitCount();
      }
    };

    sinkShip("carrier");

    sinkShip("battleship");

    sinkShip("cruiser");

    sinkShip("submarine");

    expect(testBoard.checkFleetSunkStatus()).toBe(false);
  });
});

describe("gameboard.getShips", () => {
  test("gameboard.getShips should return the initialized ship object in the gameboard factory", () => {
    const testShips = {
      carrier: ship(5, "carrier"),
      battleship: ship(4, "battleship"),
      cruiser: ship(3, "cruiser"),
      submarine: ship(3, "submarine"),
      destroyer: ship(2, "destroyer"),
    };

    const testBoard = gameboard();

    // expect(board.getShips()).toEqual(ships)
    expect(JSON.stringify(testBoard.getShips())).toEqual(
      JSON.stringify(testShips)
    );
  });
});

describe("gameboard.placeShip", () => {
  test("checking the occupied status of the ship coordinates should all return true after ship is placed", () => {
    const testBoard = gameboard();
    testBoard.placeShip("carrier", 2, 2, true);
    for (let i = 0; i < 5; i += 1) {
      expect(testBoard.getBoard()[2 + i][2].getOccupiedStatus()).toBe(true);
    }
  });

  test("checking the occupied status of the ship coordinates should all return true after ship is placed", () => {
    const testBoard = gameboard();
    testBoard.placeShip("destroyer", 3, 3, true);
    for (let i = 0; i < 2; i += 1) {
      expect(testBoard.getBoard()[3 + i][3].getOccupiedStatus()).toBe(true);
    }
  });

  test("checking the occupied status of the ship coordinates should all return false if no ship is placed", () => {
    const testBoard = gameboard();
    for (let i = 0; i < 2; i += 1) {
      expect(testBoard.getBoard()[3 + i][3].getOccupiedStatus()).toBe(false);
    }
  });
});

describe("gameboard.placeShip", () => {
  test("checking the occupied status of the ship coordinates should all return true after ship is placed", () => {
    const testBoard = gameboard();
    testBoard.placeShip("carrier", 2, 2, true);
    for (let i = 0; i < 5; i += 1) {
      expect(testBoard.getBoard()[2 + i][2].getOccupiedStatus()).toBe(true);
    }
  });

  test("checking the occupied status of the ship coordinates should all return true after ship is placed", () => {
    const testBoard = gameboard();
    testBoard.placeShip("destroyer", 3, 3, true);
    for (let i = 0; i < 2; i += 1) {
      expect(testBoard.getBoard()[3 + i][3].getOccupiedStatus()).toBe(true);
    }
  });

  test("checking the occupied status of the ship coordinates should all return false if no ship is placed", () => {
    const testBoard = gameboard();
    for (let i = 0; i < 2; i += 1) {
      expect(testBoard.getBoard()[3 + i][3].getOccupiedStatus()).toBe(false);
    }
  });
});

describe("gameboard.receiveAttack", () => {
  test("triggering receiveAttack(2,2) should cause getattackedStatus on coordinate(2,2) to return true", () => {
    const testBoard = gameboard();
    expect(testBoard.getBoard()[2][2].getAttackedStatus()).toBe(false);
    testBoard.receiveAttack(2, 2);
    expect(testBoard.getBoard()[2][2].getAttackedStatus()).toBe(true);
  });

  test("triggering receiveAttack(5,5) should cause getattackedStatus on coordinate(5,5) to return true", () => {
    const testBoard = gameboard();
    expect(testBoard.getBoard()[5][5].getAttackedStatus()).toBe(false);
    testBoard.receiveAttack(5, 5);
    expect(testBoard.getBoard()[5][5].getAttackedStatus()).toBe(true);
  });
});

describe("gameboard.randomizeShipPlacement", () => {
  test("all ships should be present on board after randomizeShipPlacement is run", () => {
    const testBoard = gameboard();
    testBoard.randomizeShipPlacement();
    const testCoordinates = testBoard.getBoard();
    const testBoardShips = Object.keys(testBoard.getShips());
    const testPlacedShips = [];

    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        if (testCoordinates[x][y].getShipName() !== null) {
          if (!testPlacedShips.includes(testCoordinates[x][y].getShipName())) {
            testPlacedShips.push(testCoordinates[x][y].getShipName());
          }
        }
      }
    }

    testPlacedShips.forEach((testShipName) => {
      expect(testBoardShips).toContain(testShipName);
    });
  });
});

describe("gameboard.getBoard", () => {
  test("getBoard should return game board", () => {
    const testBoard = gameboard();
    const board = [];

    for (let x = 0; x < 10; x += 1) {
      board[x] = [];
      for (let y = 0; y < 10; y += 1) {
        board[x].push(coordinates(x, y));
      }
    }
    expect(JSON.stringify(testBoard.getBoard())).toEqual(JSON.stringify(board));
  });
});

describe("gameboard.getRandomCoordinate", () => {
  test("getRandomCoordinate should return a number between 0 and 9 inclusive", () => {
    const testBoard = gameboard();

    expect(testBoard.getRandomCoordinate()).toBeLessThanOrEqual(9);
    expect(testBoard.getRandomCoordinate()).toBeGreaterThanOrEqual(0);
  });

  test("getRandomCoordinate should return a number between 0 and 9 inclusive", () => {
    const testBoard = gameboard();

    expect(testBoard.getRandomCoordinate()).toBeLessThanOrEqual(9);
    expect(testBoard.getRandomCoordinate()).toBeGreaterThanOrEqual(0);
  });

  test("getRandomCoordinate should return a number between 0 and 9 inclusive", () => {
    const testBoard = gameboard();

    expect(testBoard.getRandomCoordinate()).toBeLessThanOrEqual(9);
    expect(testBoard.getRandomCoordinate()).toBeGreaterThanOrEqual(0);
  });
});

describe("gameboard.resetBoard", () => {
  test("resetBoard should cause getOccupiedStatus to return false", () => {
    const testBoard = gameboard();
    testBoard.placeShip("carrier", 2, 2, true);
    testBoard.resetBoard();
    for (let i = 0; i < 5; i += 1) {
      expect(testBoard.getBoard()[2 + i][2].getOccupiedStatus()).toBe(false);
    }
  });

  test("resetBoard should cause getOccupiedStatus to return false", () => {
    const testBoard = gameboard();
    testBoard.placeShip("destroyer", 3, 3, true);
    testBoard.resetBoard();
    for (let i = 0; i < 2; i += 1) {
      expect(testBoard.getBoard()[3 + i][3].getOccupiedStatus()).toBe(false);
    }
  });
});

describe("gameboard.resetShips", () => {
  test("resetShips resets all ships to their initial state", () => {
    const testBoard = gameboard();

    const sinkShip = (boatName) => {
      for (let i = 0; i < boatName.length; i += 1) {
        testBoard.getShips()[boatName].increaseHitCount();
      }
    };

    sinkShip("carrier");

    expect(testBoard.getShips().carrier.isSunk()).toBe(true);

    testBoard.resetShips();

    expect(testBoard.getShips().carrier.isSunk()).toBe(false);
  });

  test("resetShips resets all ships to their initial state", () => {
    const testBoard = gameboard();

    const sinkShip = (boatName) => {
      for (let i = 0; i < boatName.length; i += 1) {
        testBoard.getShips()[boatName].increaseHitCount();
      }
    };

    sinkShip("destroyer");

    expect(testBoard.getShips().destroyer.isSunk()).toBe(true);

    testBoard.resetShips();

    expect(testBoard.getShips().destroyer.isSunk()).toBe(false);
  });
});
