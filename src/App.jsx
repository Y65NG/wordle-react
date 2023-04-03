import React, { createContext, useState } from "react"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { boardDefault } from "./words"

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [curPos, setCurPos] = useState({ row: 0, col: 0 })
  const [rowNumber, setRowNumber] = useState(7)
  const [secret, setSecret] = useState("words")

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
    const newBoard = [...board]
    if (curPos.col !== secret.length || newBoard[curPos.row][curPos.col] === "")
      return

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
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
