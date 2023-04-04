import React, { useContext } from "react"
import { AppContext } from "../App"

function GameStart() {
  const {
    gameState,
    setGameState,
    language,
    difficulty,
    handleDifficulty,
    secret,
    setSecret,
    findSecretList,
  } = useContext(AppContext)
  return (
    <div className="start-page">
      <div className="difficulty">
        <div className="diff-choice">
          <input
            type="radio"
            id="diff-easy"
            name="diff"
            checked={difficulty === 0}
            onChange={handleDifficulty}
          />
          <label htmlFor="diff-easy" className="for">
            Easy
          </label>
        </div>
        <div className="diff-choice">
          <input
            type="radio"
            id="diff-medium"
            name="diff"
            checked={difficulty === 1}
            onChange={handleDifficulty}
          />
          <label htmlFor="diff-medium" className="for">
            Medium
          </label>
        </div>
        <div className="diff-choice">
          <input
            type="radio"
            id="diff-hard"
            name="diff"
            checked={difficulty === 2}
            onChange={handleDifficulty}
          />
          <label htmlFor="diff-hard" className="for">
            Hard
          </label>
        </div>
      </div>
      <button
        onClick={() => {
          const wordList = findSecretList(difficulty)
          // console.log(wordList)
          setSecret(wordList[Math.floor(Math.random() * wordList.length)])
          // console.log(secret)
          setGameState({ isCorrect: false, state: 1 })
        }}
      >
        {language ? "Start" : "开始游戏"}
      </button>
    </div>
  )
}

export default GameStart
