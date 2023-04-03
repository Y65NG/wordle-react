import React, { createContext, useState } from "react"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { boardDefault } from "./words"
import wordlist from "./wordlist"

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
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
