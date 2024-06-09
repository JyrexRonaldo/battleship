import { ship } from "./game-components";

describe("ship.hit()", () => {
  test("calling hit on destroyer shound make it sink", () => {
    const destroyer = ship(2);
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(true);
  });
});

describe("ship.isSunk()", () => {
  test("ship.isSunk should return true after running the hit function as ship length is 1", () => {
    const destroyer = ship(1);
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(true);
  });
});
