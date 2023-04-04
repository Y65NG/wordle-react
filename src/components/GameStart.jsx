import React, { useContext } from "react"
import { AppContext } from "../App"

function GameStart() {
  const { gameState, setGameState, language } = useContext(AppContext)
  return (
    <div className="start-page">
      <button
        onClick={() => {
          setGameState({ isCorrect: false, state: 1 })
        }}
      >
        {language ? "Start" : "开始游戏"}
      </button>
    </div>
  )
}

export default GameStart
