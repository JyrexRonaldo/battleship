import "./reset.css";
import "./style.css";

import { player } from "./game-components";

const gameController = (function gameController() {
    const players = [
        player("Player 1", "real"),
        player("Player 2", "computer")
]

    const getPlayers = () => players

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const getActivePlayer = () => activePlayer

    // const playRound = (xPos, yPos) => {


    // }
    

    return {getPlayers, getActivePlayer}
})()

const screenController = (function screenController() {
    const playerOneGrid = document.querySelector(".battlefield .ocean-grid .coordinates")
    const playerTwoGrid = document.querySelector(".battlefield .tracking-grid .coordinates")
    const[playerOne, playerTwo] = gameController.getPlayers()

    

    const populateGameboard = (currentPlayer, currentGrid) => {
        currentPlayer.getBoard().forEach((xArray,) => {
            xArray.forEach((coordinate) => {
                const coordinateDiv = document.createElement("div")
                coordinateDiv.dataset.xCoordinate = coordinate.getXCoordinate()
                coordinateDiv.dataset.yCoordinate = coordinate.getYCoordinate()
                currentGrid.appendChild(coordinateDiv)
    
            })
        })
    }

    populateGameboard(playerOne, playerOneGrid)
    populateGameboard(playerTwo, playerTwoGrid)
    
    // return {
    //     populateGameboard
    // }


})()

export { gameController, screenController };