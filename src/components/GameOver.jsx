import React, { useContext } from "react"
import { AppContext } from "../App"

function GameOver() {
  const { gameState, secret, restart, language } = useContext(AppContext)
  console.log(gameState)
  return (
    <div>
      {gameState.isCorrect ? (
        <div className="over win">
          {language
            ? "Congradulations! The secret word is "
            : "你赢了！正确的单词就是 "}
          <span className="bold">{secret.toUpperCase()}</span>
        </div>
      ) : (
        <div className="over lose">
          {language
            ? "Game Over. The secret word is "
            : "你输了，正确的单词是 "}
          <span className="bold">{secret.toUpperCase()}</span>
        </div>
      )}
      <button className="restart" onClick={restart}>
        {language ? "Restart" : "重新开始"}
      </button>
    </div>
  )
}

export default GameOver
