import React, { createContext, useState } from "react"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { boardDefault } from "./words"
import wordlist from "./wordlist"
import GameStart from "./components/GameStart"
import GameOver from "./components/GameOver"
import UserGuide from "./components/UserGuide"
import guideIcon from "./assets/open-book.png"

export const AppContext = createContext()

function App() {
  const filteredList = wordlist.filter((word) => word.length == 5)
  const [secret, setSecret] = useState(
    filteredList[Math.floor(Math.random() * filteredList.length)]
  )
  const [rowNumber, setRowNumber] = useState(6)

  const boardDefault = new Array(rowNumber).fill().map((item) => {
    return new Array(secret.length).fill("")
  })
  const [board, setBoard] = useState(boardDefault)
  const [curPos, setCurPos] = useState({ row: 0, col: 0 })
  const [wrongLetters, setWrongLetters] = useState(new Set())
  const [gameState, setGameState] = useState({ state: 0, isCorrect: false })
  const [showGuide, setShowGuide] = useState(true)
  const [language, setLanguage] = useState(true)

  function restart() {
    setSecret(filteredList[Math.floor(Math.random() * filteredList.length)])
    setRowNumber(secret.length + 1)

    setWrongLetters(new Set())
    setGameState({ state: 1, isCorrect: false })
    setCurPos({ row: 0, col: 0 })

    console.log(secret, rowNumber)
    setBoard(
      new Array(rowNumber).fill().map((item) => {
        return new Array(secret.length).fill("")
      })
    )
  }

  function toggleGuide() {
    setShowGuide((prevState) => !prevState)
  }

  function toggleLanguage() {
    setLanguage((prevLang) => !prevLang)
  }

  function onAddLetter(keyVal) {
    if (curPos.col >= secret.length) return
    const newBoard = [...board]
    newBoard[curPos.row][curPos.col] = keyVal
    setCurPos({
      ...curPos,
      col: curPos.col + 1,
    })
    setBoard(newBoard)
  }
  function onDelete() {
    if (curPos.col === 0) return
    const newBoard = [...board]
    newBoard[curPos.row][curPos.col - 1] = ""
    setCurPos({
      ...curPos,
      col: curPos.col - 1,
    })
    setBoard(newBoard)
  }
  function onEnter() {
    if (curPos.col !== secret.length || board[curPos.row][curPos.col] === "")
      return
    console.log(gameState)
    if (board[curPos.row].join("") === secret) {
      setGameState({ isCorrect: true, state: 2 })
    } else if (curPos.row === rowNumber - 1) {
      setGameState({ isCorrect: false, state: 2 })
    }
    // console.log("after", gameState)
    setWrongLetters((prevList) => {
      const newWrongLetters = board[curPos.row].filter(
        (letter) => !secret.includes(letter)
      )
      return new Set([...prevList, ...newWrongLetters])
    })
    console.log(wrongLetters)

    setCurPos({
      row: curPos.row + 1,
      col: 0,
    })
  }

  return (
    <div className="container">
      <nav>
        <h1>Wordle</h1>
        <div className={`language`} onClick={toggleLanguage}>
          {language ? "中" : "Eng"}
        </div>
        <div
          className={`guide-btn ${showGuide ? "darken" : ""}`}
          onClick={toggleGuide}
        >
          <img className="guide-icon" src={guideIcon}></img>
        </div>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          curPos,
          setCurPos,
          rowNumber,
          setRowNumber,
          secret,
          setSecret,
          onAddLetter,
          onDelete,
          onEnter,
          wrongLetters,
          gameState,
          setGameState,
          restart,
          toggleGuide,
          language,
        }}
      >
        {gameState.state === 0 ? (
          <div>
            <GameStart />
            {showGuide && <UserGuide />}
          </div>
        ) : gameState.state === 1 ? (
          <div className="game">
            {showGuide && <UserGuide />}
            <Board />
            <Keyboard />
          </div>
        ) : (
          <div className="game">
            <Board />
            <GameOver />
          </div>
        )}
      </AppContext.Provider>
    </div>
  )
}

export default App
