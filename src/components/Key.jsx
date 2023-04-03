import React, { useContext } from "react"
import { AppContext } from "../App"

function Key({ keyVal, bigKey }) {
  const { onAddLetter, onEnter, onDelete, wrongLetters } =
    useContext(AppContext)
  function handleClick(event) {
    if (!bigKey && !wrongLetters.has(keyVal)) {
      onAddLetter(keyVal)
    } else if (keyVal === "ENTER") {
      onEnter()
    } else if (keyVal === "DELETE") {
      onDelete()
    }
  }

  return (
    <div
      className={`key ${bigKey && "big"} ${
        wrongLetters.has(keyVal) && "wrong"
      }`}
      onClick={handleClick}
    >
      {keyVal === "DELETE" ? "DEL" : keyVal}
    </div>
  )
}

export default Key
