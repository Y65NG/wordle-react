import React, { useContext } from "react"
import { AppContext } from "../App"

function GameStart() {
  const { gameState, setGameState } = useContext(AppContext)
  return (
    <div className="start-page">
      <button
        onClick={() => {
          setGameState({ isCorrect: false, state: 1 })
        }}
      >
        Start
      </button>
    </div>
  )
}

export default GameStart
