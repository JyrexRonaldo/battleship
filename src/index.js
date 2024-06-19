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

    let activeOpponent = players[1]

    let gameStatus = `${player[0]}'s turn `

    const switchActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const switchActiveOpponent = () => {
        activeOpponent = activeOpponent === players[1] ? players[0] : players[1]
    }

    const getActivePlayer = () => activePlayer
    
    const getActiveOpponent = () => activeOpponent

    const playRound = (xPos, yPos) => {
        activeOpponent.receiveAttack(xPos, yPos)
        if (activeOpponent.checkShipSunkStatus()) {
            gameStatus = `${activePlayer.getPlayerName} won!`
            return
        }
        gameStatus = `${activePlayer.getPlayerName}'s turn`
        switchActivePlayer()
        switchActiveOpponent()
    }

    const getGameStatus = () => gameStatus
    
    return {getPlayers, getActivePlayer, getActiveOpponent ,playRound, getGameStatus}
})()






























































const screenController = (function screenController() {
    const playerOneGrid = document.querySelector(".battlefield .ocean-grid .coordinates")
    const playerTwoGrid = document.querySelector(".battlefield .tracking-grid .coordinates")
    const[playerOne, playerTwo] = gameController.getPlayers()
    

    

    const updateGameboard = (currentPlayer, currentGrid, gridCode) => {
        currentPlayer.getBoard().forEach((xArray,) => {
            xArray.forEach((coordinate) => {
                const coordinateDiv = document.createElement("div")
                coordinateDiv.dataset.xCoordinate = coordinate.getXCoordinate()
                coordinateDiv.dataset.yCoordinate = coordinate.getYCoordinate()
                if (coordinate.getAttackedStatus() === true) {
                    coordinateDiv.style.backgroundColor = "orange"                    
                }
                if (gridCode === 1) {
                    if (coordinate.getShipName()) {
                        
                    }
                }
                currentGrid.appendChild(coordinateDiv)
    
            })
        })
    }

    updateGameboard(playerOne, playerOneGrid)
    updateGameboard(playerTwo, playerTwoGrid)
    
    // return {
    //     updateGameboard
    // }


})()

export { gameController, screenController };