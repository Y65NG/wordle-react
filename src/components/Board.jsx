import React, { useContext, useState } from "react"
import { AppContext } from "../App"

import Letter from "./Letter"

function Board() {
  const { board } = useContext(AppContext)
  const boardEle = board.map((row, rowIndex) => (
    <div className="row" key={rowIndex}>
      {row.map((letter, colIndex) => {
        return (
          <Letter letterPos={colIndex} attemptVal={rowIndex} key={colIndex} />
        )
      })}
    </div>
  ))
  return <div className="board">{boardEle}</div>
}

export default Board
