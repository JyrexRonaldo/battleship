// import "./reset.css";
// import "./style.css";

function ship(length) {
  let hitCount = 0;
  const shipLength = length;

  const hit = () => {
    hitCount += 1;
  };

  const isSunk = () => hitCount >= shipLength;

  return { hit, isSunk };
}

function gameboard() {
  const board = [];

  const coordinates = (xPos, yPos) => {
    const xCoordinate = xPos;
    const yCoordinate = yPos;

    let occupied = false;

    const occupy = () => {
      occupied = true;
    };

    const getOccupiedStatus = () => occupied;

    return { xCoordinate, yCoordinate, occupy, getOccupiedStatus };
  };

  for (let x = 0; x < 10; x += 1) {
    board[x] = [];
    for (let y = 0; y < 10; y += 1) {
      board[x][y].push(coordinates(x, y));
    }
  }

  return {};
}

export { ship, gameboard };
