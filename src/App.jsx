import React, { createContext, useState } from "react"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { boardDefault } from "./words"
import wordlist from "./wordlist"
import GameStart from "./components/GameStart"
import GameOver from "./components/GameOver"

export const AppContext = createContext()

function App() {
  const filteredList = wordlist.filter(
    (word) => word.length > 4 && word.length < 7
  )
  const [secret, setSecret] = useState(
    filteredList[Math.floor(Math.random() * filteredList.length)]
  )
  const [rowNumber, setRowNumber] = useState(secret.length + 1)

  const boardDefault = new Array(rowNumber).fill().map((item) => {
    return new Array(secret.length).fill("")
  })
  const [board, setBoard] = useState(boardDefault)
  const [curPos, setCurPos] = useState({ row: 0, col: 0 })
  const [wrongLetters, setWrongLetters] = useState(new Set())
  const [gameState, setGameState] = useState({ state: 0, isCorrect: false })
  console.log(secret)
  function restart() {
    setSecret(filteredList[Math.floor(Math.random() * filteredList.length)])
    setRowNumber(secret.length + 1)
    const newSecret = secret
    const newRowNumber = rowNumber

    setWrongLetters(new Set())
    setGameState({ state: 1, isCorrect: false })
    setCurPos({ row: 0, col: 0 })

    console.log(secret, rowNumber)
    setBoard(
      new Array(newRowNumber).fill().map((item) => {
        return new Array(newSecret.length).fill("")
      })
    )
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
    if (board[curPos.row].join("") === secret.toUpperCase()) {
      setGameState({ isCorrect: true, state: 2 })
    } else if (curPos.row === rowNumber - 1) {
      setGameState({ isCorrect: false, state: 2 })
    }
    console.log("after", gameState)
    setWrongLetters((prevList) => {
      const newWrongLetters = board[curPos.row].filter(
        (letter) => !secret.includes(letter.toLowerCase())
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
        }}
      >
        {gameState.state === 0 ? (
          <GameStart />
        ) : gameState.state === 1 ? (
          <div className="game">
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
