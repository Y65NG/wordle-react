import React, { useContext } from "react"
import { AppContext } from "../App"

function Letter({ letterPos, attemptVal }) {
  const { board, secret, curPos } = useContext(AppContext)
  const letter = board[attemptVal][letterPos]
  const color =
    letter === ""
      ? "none"
      : letter === secret.slice(letterPos, letterPos + 1).toUpperCase()
      ? "green"
      : secret.includes(letter.toLowerCase())
      ? "yellow"
      : "red"

  return (
    <div className={`letter ${attemptVal < curPos.row ? color : "none"}`}>
      {letter}
    </div>
  )
}

export default Letter
