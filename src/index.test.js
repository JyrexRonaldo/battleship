import { coordinates, ship, 
  //  gameboard, player 
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


describe("coordinates.getXCoordinate", () => {
  test("getXCoordinate method should return 5", () => {
    const testCoordinate1 = coordinates(5,5)
    expect(testCoordinate1.getXCoordinate()).toBe(5)
  })

  test("getXCoordinate method should return 5", () => {
    const testCoordinate2 = coordinates(7,5)
    expect(testCoordinate2.getXCoordinate()).toBe(7)
  })

  test("getXCoordinate method should return 5", () => {
    const testCoordinate3 = coordinates(3,5)
    expect(testCoordinate3.getXCoordinate()).toBe(3)
  })
})

describe("coordinates.getYCoordinate", () => {
  test("getYCoordinate method should return 5", () => {
    const testCoordinate1 = coordinates(3,4)
    expect(testCoordinate1.getYCoordinate()).toBe(4)
  })

  test("getYCoordinate method should return 5", () => {
    const testCoordinate2 = coordinates(3,2)
    expect(testCoordinate2.getYCoordinate()).toBe(2)
  })

  test("getYCoordinate method should return 5", () => {
    const testCoordinate3 = coordinates(3,1)
    expect(testCoordinate3.getYCoordinate()).toBe(1)
  })
})

describe("coordinates.setOccupiedStatus", () => {
  test("getOccupiedStatus should return false if setOcuppied status is not run", () => {
    const testCoordinate1 = coordinates(3,4)
    expect(testCoordinate1.getOccupiedStatus()).toBe(false)
  })

  test("getOccupiedStatus should return true after setOcuppied status is run", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setOccupiedStatus()
    expect(testCoordinate2.getOccupiedStatus()).toBe(true)
  })
})

describe("coordinates.getOccupiedStatus", () => {
  test("getOccupiedStatus should return false if setOcuppied status is not run", () => {
    const testCoordinate1 = coordinates(3,4)
    expect(testCoordinate1.getOccupiedStatus()).toBe(false)
  })

  test("getOccupiedStatus should return true after setOcuppied status is run", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setOccupiedStatus()
    expect(testCoordinate2.getOccupiedStatus()).toBe(true)
  })
})

describe("coordinates.setShipName", () => {
  test("setShipName should be able to take a value to set the ship name", () => {
    const testCoordinate1 = coordinates(3,4)
    testCoordinate1.setShipName("destroyer")
    expect(testCoordinate1.getShipName()).toBe("destroyer")
  })
})

describe("coordinates.getShipName", () => {
  test("getShipName should return specified ship name after it has been set", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setShipName("Bogdanov")
    expect(testCoordinate2.getShipName()).toBe("Bogdanov")
  })
})

describe("coordinates.setAttackedStatus", () => {
  test("getAttackedStatus should return true after setAttackedStatus has been set", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setAttackedStatus()
    expect(testCoordinate2.getAttackedStatus()).toBe(true)
  })

  test("getAttackedStatus should return false if setAttackedStatus has not been set", () => {
    const testCoordinate2 = coordinates(3,2)
    expect(testCoordinate2.getAttackedStatus()).toBe(false)
  })
})

describe("coordinates.getAttackedStatus", () => {
  test("getAttackedStatus should return true after setAttackedStatus has been set", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setAttackedStatus()
    expect(testCoordinate2.getAttackedStatus()).toBe(true)
  })

  test("getAttackedStatus should return false if setAttackedStatus has not been set", () => {
    const testCoordinate2 = coordinates(3,2)
    expect(testCoordinate2.getAttackedStatus()).toBe(false)
  })
})


describe("coordinates.setSunkStatus", () => {
  test("getSunkStatus should return true after setSunkStatus has been set", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setSunkStatus()
    expect(testCoordinate2.getSunkStatus()).toBe(true)
  })

  test("getSunkStatus should return false if setSunkStatus has not been set", () => {
    const testCoordinate2 = coordinates(3,2)
    expect(testCoordinate2.getSunkStatus()).toBe(false)
  })
})


describe("coordinates.getSunkStatus", () => {
  test("getSunkStatus should return true after setSunkStatus has been set", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setSunkStatus()
    expect(testCoordinate2.getSunkStatus()).toBe(true)
  })

  test("getSunkStatus should return false if setSunkStatus has not been set", () => {
    const testCoordinate2 = coordinates(3,2)
    expect(testCoordinate2.getSunkStatus()).toBe(false)
  })
})

describe("coordinates.setSpaceAvailability", () => {
  test("getSpaceAvailability should return false after setSpaceAvailability has been set", () => {
    const testCoordinate2 = coordinates(3,2)
    testCoordinate2.setSpaceAvailability()
    expect(testCoordinate2.getSpaceAvailability()).toBe(false)
  })

  test("getSpaceAvailability should return true if setSpaceAvailability has not been set", () => {
    const testCoordinate2 = coordinates(3,2)
    expect(testCoordinate2.getSpaceAvailability()).toBe(true)
  })
})

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