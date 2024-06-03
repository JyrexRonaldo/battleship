// import "./reset.css";
// import "./style.css";

function ship(length) {
  let hitCount = 0;
  const shipLength = length;

  const hit = () => {
    hitCount += 1;
  };

  const getHitCount = () => hitCount;

  const isSunk = () => shipLength === hitCount;

  return { hit, getHitCount, isSunk };
}

function gameboard() {

}

export { ship, gameboard };
