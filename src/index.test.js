
import { ship } from "./index";

/*
describe("calculator.add", () => {
  test("5 + 3 should equal 8", () => {
    expect(calculator.add(5, 3)).toEqual(8);
  });

  test("10 + 7 should equal 17", () => {
    expect(calculator.add(10, 7)).toEqual(17);
  });

  test("100 + 30 should equal 130", () => {
    expect(calculator.add(100, 30)).toEqual(130);
  });
});
*/

// ship.hi()

describe("ship functions", () => {
  test("ship.hit(), should increase ship.getHit()", () => {
    const destroyer = ship()
    destroyer.hit()
    // console.log(ship.getHitCount())
    expect(destroyer.getHitCount()).toBe(1)
  })

  test("ship.getHitCount should return the default hit value which is 0", () => {
    const destroyer = ship()
    expect(destroyer.getHitCount()).toBe(0)
  })

  test("ship.isSunk should return true after ship hit is increase to ship length", () => {
    const destroyer = ship(1)
    destroyer.hit()
    expect(destroyer.isSunk()).toBe(true)
  })

  
})