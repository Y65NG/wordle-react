import React, { useContext } from "react"
import { AppContext } from "../App"

function GameOver() {
  const { gameState, secret, restart } = useContext(AppContext)
  console.log(gameState)
  return (
    <div>
      {gameState.isCorrect ? (
        <div className="over win">
          Congradulations! The secret word is {secret}
        </div>
      ) : (
        <div className="over lose">Game Over. The secret word is {secret}</div>
      )}
      {/* <button className="restart" onClick={restart}>
        Restart
      </button> */}
    </div>
  )
}

export default GameOver
