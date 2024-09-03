import { ship, 
  // coordinates, gameboard, player 
} from "./game-components";

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

// describe("gameboard.checkShipSunkStatus", () => {
//   test("gameboard.checkShipSunkStatus should return true after all ships are sunk", () => {
//     const board = gameboard();
//     const ships = board.getShips();
//     ships.carrier.increaseHitCount();
//     ships.carrier.increaseHitCount();
//     ships.carrier.increaseHitCount();
//     ships.carrier.increaseHitCount();
//     ships.carrier.increaseHitCount();
//     ships.battleship.increaseHitCount();
//     ships.battleship.increaseHitCount();
//     ships.battleship.increaseHitCount();
//     ships.battleship.increaseHitCount();
//     ships.cruiser.increaseHitCount();
//     ships.cruiser.increaseHitCount();
//     ships.cruiser.increaseHitCount();
//     ships.submarine.increaseHitCount();
//     ships.submarine.increaseHitCount();
//     ships.submarine.increaseHitCount();
//     ships.destroyer.increaseHitCount();
//     ships.destroyer.increaseHitCount();
//     expect(board.checkShipSunkStatus()).toBe(true);
//   });
// });


// describe("gameboard.getShips", () => {
//   test("gameboard.getShips should return the initialized ship object in the gameboard factory", () => {
//     const ships = {
//       carrier: ship(5, "carrier"),
//       battleship: ship(4, "battleship"),
//       cruiser: ship(3, "cruiser"),
//       submarine: ship(3, "submarine"),
//       destroyer: ship(2, "destroyer"),
//     };

//     const board = gameboard()

//     // expect(board.getShips()).toEqual(ships)
//   expect(board.getShips()).toEqual({
//     carrier: ship(5, "carrier"),
//     battleship: ship(4, "battleship"),
//     cruiser: ship(3, "cruiser"),
//     submarine: ship(3, "submarine"),
//     destroyer: ship(2, "destroyer"),
//   });
//   })
// })