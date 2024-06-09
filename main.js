/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game-components.js":
/*!********************************!*\
  !*** ./src/game-components.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });
// import "./reset.css";
// import "./style.css";

function ship(length, name) {
  let hitCount = 0;
  const shipLength = length;
  const shipName = name;

  const hit = () => {
    hitCount += 1;
  };

  const isSunk = () => hitCount >= shipLength;

  const getShipLength = () => shipLength;

  const getShipName = () => shipName;

  return { hit, isSunk, getShipLength, getShipName };
}

const coordinates = (xPos, yPos) => {
  const xCoordinate = xPos;
  const yCoordinate = yPos;

  const getXCoordinate = () => xCoordinate;
  const getYCoordinate = () => yCoordinate;

  let occupied = false;

  let shipName = null;

  let attacked = false;

  const occupy = () => {
    occupied = true;
  };

  const setShipName = (name) => {
    shipName = name;
  };

  const getShipName = () => shipName;

  const getOccupiedStatus = () => occupied;

  const setAttacked = () => {
    attacked = true;
  };

  const getAttackedStatus = () => attacked;

  return {
    getXCoordinate,
    getYCoordinate,
    occupy,
    getOccupiedStatus,
    setShipName,
    getShipName,
    setAttacked,
    getAttackedStatus,
  };
};

function gameboard() {
  const board = [];

  for (let x = 0; x < 10; x += 1) {
    board[x] = [];
    for (let y = 0; y < 10; y += 1) {
      board[x][y].push(coordinates(x, y));
    }
  }

  const ships = {
    carrier: ship(5, "carrier"),
    battleship: ship(4, "battleship"),
    cruiser: ship(3, "cruiser"),
    submarine: ship(3, "submarine"),
    destroyer: ship(2, "destroyer"),
  };

  const availableCoordinates = (length, xPos, yPos, direction) => {
    // direction = true means horizontal direction
    // direction = false means vertical direction
    let available = null;
    if (direction) {
      for (let i = 0; i < length; i += 1) {
        available = board[xPos + i][yPos].occupied === false;
        if (available === false) {
          break;
        }
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        available = board[xPos][yPos + i].occupied === false;
        if (available === false) {
          break;
        }
      }
    }

    return available;
  };

  const placeShip = (shipType, xPos, yPos, direction) => {
    const length = shipType.getShipLength;
    const freeSpace = availableCoordinates(length, xPos, yPos, direction);
    let message = null;

    if (freeSpace) {
      // direction = true means horizontal direction
      // direction = false means vertical direction
      if (direction) {
        for (let i = 0; i < length; i += 1) {
          board[xPos + i][yPos].occupy();
        }
      } else {
        for (let i = 0; i < length; i += 1) {
          board[xPos][yPos + i].occupy();
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
      ships[attackedShip].hit();
    }
  };

  const allShipSunkStatus = (battleships) => {
    const boats = Object.keys(battleships);
    const sunkValues = boats.map((boat) => battleships[boat].isSunk());
    if (sunkValues.includes(false)) {
      return false;
    }
    return true;
  };

  return { placeShip, receiveAttack, allShipSunkStatus };
}

function player(name) { 
  const playerName = name 

  const board = gameboard()

  const getPlayerName = () => playerName

  const getBoard = () => board
 
  return {getPlayerName, getBoard}
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-components */ "./src/game-components.js");


const gameController = (function() {
    
})()

const screenController = (function() {

})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFbUM7Ozs7Ozs7O1VDbEtuQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjREOztBQUU1RDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3Jlc2V0LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gc2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgbGV0IGhpdENvdW50ID0gMDtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgY29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRDb3VudCArPSAxO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID49IHNoaXBMZW5ndGg7XG5cbiAgY29uc3QgZ2V0U2hpcExlbmd0aCA9ICgpID0+IHNoaXBMZW5ndGg7XG5cbiAgY29uc3QgZ2V0U2hpcE5hbWUgPSAoKSA9PiBzaGlwTmFtZTtcblxuICByZXR1cm4geyBoaXQsIGlzU3VuaywgZ2V0U2hpcExlbmd0aCwgZ2V0U2hpcE5hbWUgfTtcbn1cblxuY29uc3QgY29vcmRpbmF0ZXMgPSAoeFBvcywgeVBvcykgPT4ge1xuICBjb25zdCB4Q29vcmRpbmF0ZSA9IHhQb3M7XG4gIGNvbnN0IHlDb29yZGluYXRlID0geVBvcztcblxuICBjb25zdCBnZXRYQ29vcmRpbmF0ZSA9ICgpID0+IHhDb29yZGluYXRlO1xuICBjb25zdCBnZXRZQ29vcmRpbmF0ZSA9ICgpID0+IHlDb29yZGluYXRlO1xuXG4gIGxldCBvY2N1cGllZCA9IGZhbHNlO1xuXG4gIGxldCBzaGlwTmFtZSA9IG51bGw7XG5cbiAgbGV0IGF0dGFja2VkID0gZmFsc2U7XG5cbiAgY29uc3Qgb2NjdXB5ID0gKCkgPT4ge1xuICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXRTaGlwTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgc2hpcE5hbWUgPSBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBOYW1lID0gKCkgPT4gc2hpcE5hbWU7XG5cbiAgY29uc3QgZ2V0T2NjdXBpZWRTdGF0dXMgPSAoKSA9PiBvY2N1cGllZDtcblxuICBjb25zdCBzZXRBdHRhY2tlZCA9ICgpID0+IHtcbiAgICBhdHRhY2tlZCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0QXR0YWNrZWRTdGF0dXMgPSAoKSA9PiBhdHRhY2tlZDtcblxuICByZXR1cm4ge1xuICAgIGdldFhDb29yZGluYXRlLFxuICAgIGdldFlDb29yZGluYXRlLFxuICAgIG9jY3VweSxcbiAgICBnZXRPY2N1cGllZFN0YXR1cyxcbiAgICBzZXRTaGlwTmFtZSxcbiAgICBnZXRTaGlwTmFtZSxcbiAgICBzZXRBdHRhY2tlZCxcbiAgICBnZXRBdHRhY2tlZFN0YXR1cyxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICBib2FyZFt4XSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgYm9hcmRbeF1beV0ucHVzaChjb29yZGluYXRlcyh4LCB5KSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgY2Fycmllcjogc2hpcCg1LCBcImNhcnJpZXJcIiksXG4gICAgYmF0dGxlc2hpcDogc2hpcCg0LCBcImJhdHRsZXNoaXBcIiksXG4gICAgY3J1aXNlcjogc2hpcCgzLCBcImNydWlzZXJcIiksXG4gICAgc3VibWFyaW5lOiBzaGlwKDMsIFwic3VibWFyaW5lXCIpLFxuICAgIGRlc3Ryb3llcjogc2hpcCgyLCBcImRlc3Ryb3llclwiKSxcbiAgfTtcblxuICBjb25zdCBhdmFpbGFibGVDb29yZGluYXRlcyA9IChsZW5ndGgsIHhQb3MsIHlQb3MsIGRpcmVjdGlvbikgPT4ge1xuICAgIC8vIGRpcmVjdGlvbiA9IHRydWUgbWVhbnMgaG9yaXpvbnRhbCBkaXJlY3Rpb25cbiAgICAvLyBkaXJlY3Rpb24gPSBmYWxzZSBtZWFucyB2ZXJ0aWNhbCBkaXJlY3Rpb25cbiAgICBsZXQgYXZhaWxhYmxlID0gbnVsbDtcbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGF2YWlsYWJsZSA9IGJvYXJkW3hQb3MgKyBpXVt5UG9zXS5vY2N1cGllZCA9PT0gZmFsc2U7XG4gICAgICAgIGlmIChhdmFpbGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhdmFpbGFibGUgPSBib2FyZFt4UG9zXVt5UG9zICsgaV0ub2NjdXBpZWQgPT09IGZhbHNlO1xuICAgICAgICBpZiAoYXZhaWxhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcFR5cGUsIHhQb3MsIHlQb3MsIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBUeXBlLmdldFNoaXBMZW5ndGg7XG4gICAgY29uc3QgZnJlZVNwYWNlID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMobGVuZ3RoLCB4UG9zLCB5UG9zLCBkaXJlY3Rpb24pO1xuICAgIGxldCBtZXNzYWdlID0gbnVsbDtcblxuICAgIGlmIChmcmVlU3BhY2UpIHtcbiAgICAgIC8vIGRpcmVjdGlvbiA9IHRydWUgbWVhbnMgaG9yaXpvbnRhbCBkaXJlY3Rpb25cbiAgICAgIC8vIGRpcmVjdGlvbiA9IGZhbHNlIG1lYW5zIHZlcnRpY2FsIGRpcmVjdGlvblxuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeFBvcyArIGldW3lQb3NdLm9jY3VweSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeFBvc11beVBvcyArIGldLm9jY3VweSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBcImNhbid0IHBsYWNlIHNoaXBcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhQb3MsIHlQb3MpID0+IHtcbiAgICBjb25zdCBhdHRhY2tDb29yZGluYXRlID0gYm9hcmRbeFBvc11beVBvc107XG4gICAgYXR0YWNrQ29vcmRpbmF0ZS5zZXRBdHRhY2tlZCgpO1xuICAgIGlmIChhdHRhY2tDb29yZGluYXRlLmdldE9jY3VwaWVkU3RhdHVzKCkpIHtcbiAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IGF0dGFja0Nvb3JkaW5hdGUuZ2V0U2hpcE5hbWUoKTtcbiAgICAgIHNoaXBzW2F0dGFja2VkU2hpcF0uaGl0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBTdW5rU3RhdHVzID0gKGJhdHRsZXNoaXBzKSA9PiB7XG4gICAgY29uc3QgYm9hdHMgPSBPYmplY3Qua2V5cyhiYXR0bGVzaGlwcyk7XG4gICAgY29uc3Qgc3Vua1ZhbHVlcyA9IGJvYXRzLm1hcCgoYm9hdCkgPT4gYmF0dGxlc2hpcHNbYm9hdF0uaXNTdW5rKCkpO1xuICAgIGlmIChzdW5rVmFsdWVzLmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4geyBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBTdW5rU3RhdHVzIH07XG59XG5cbmZ1bmN0aW9uIHBsYXllcihuYW1lKSB7IFxuICBjb25zdCBwbGF5ZXJOYW1lID0gbmFtZSBcblxuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpXG5cbiAgY29uc3QgZ2V0UGxheWVyTmFtZSA9ICgpID0+IHBsYXllck5hbWVcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkXG4gXG4gIHJldHVybiB7Z2V0UGxheWVyTmFtZSwgZ2V0Qm9hcmR9XG59XG5cbmV4cG9ydCB7IHNoaXAsIGdhbWVib2FyZCwgcGxheWVyIH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcCwgZ2FtZWJvYXJkLCBwbGF5ZXIgfSBmcm9tIFwiLi9nYW1lLWNvbXBvbmVudHNcIjtcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgXG59KSgpXG5cbmNvbnN0IHNjcmVlbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=