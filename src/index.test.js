import { ship, gameboard } from "./game-components";

// import { gameController } from "./index";

describe("ship.hit()", () => {
  test("calling hit on destroyer shound make it sink", () => {
    const destroyer = ship(2);
    destroyer.increaseHitCount();
    destroyer.increaseHitCount();
    expect(destroyer.isSunk()).toBe(true);
  });
});

describe("ship.isSunk()", () => {
  test("ship.isSunk should return true after running the hit function as ship length is 1", () => {
    const destroyer = ship(1);
    destroyer.increaseHitCount();
    expect(destroyer.isSunk()).toBe(true);
  });
});


describe("gameboard.checkShipSunkStatus", () => {
  test("gameboard.checkShipSunkStatus should return true after all ships are sunk", () => {

    const board = gameboard()
    const ships = board.getShips()
    ships.carrier.increaseHitCount();
    ships.carrier.increaseHitCount();
    ships.carrier.increaseHitCount();
    ships.carrier.increaseHitCount();
    ships.carrier.increaseHitCount();
    ships.battleship.increaseHitCount();
    ships.battleship.increaseHitCount();
    ships.battleship.increaseHitCount();
    ships.battleship.increaseHitCount();
    ships.cruiser.increaseHitCount();
    ships.cruiser.increaseHitCount();
    ships.cruiser.increaseHitCount();
    ships.submarine.increaseHitCount();
    ships.submarine.increaseHitCount();
    ships.submarine.increaseHitCount();
    ships.destroyer.increaseHitCount();
    ships.destroyer.increaseHitCount();
    expect(board.checkShipSunkStatus()).toBe(true)



  })
  
  
  })


