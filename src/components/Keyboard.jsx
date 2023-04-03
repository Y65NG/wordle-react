import React, { useCallback, useContext, useEffect } from "react"
import Key from "./Key"
import { AppContext } from "../App"

function Keyboard() {
  const keys = {
    line1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    line2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    line3: ["Z", "X", "C", "V", "B", "N", "M"],
  }
  const { onAddLetter, onDelete, onEnter } = useContext(AppContext)

  function isLetter(letter) {
    return (
      keys.line1.includes(letter) ||
      keys.line2.includes(letter) ||
      keys.line3.includes(letter)
    )
  }
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter()
    } else if (event.key === "Backspace") {
      onDelete()
    } else if (isLetter(event.key.toUpperCase())) {
      onAddLetter(event.key.toUpperCase())
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line top">
        {keys.line1.map((key, index) => (
          <Key keyVal={key} key={index} />
        ))}
      </div>
      <div className="line mid">
        {keys.line2.map((key, index) => (
          <Key keyVal={key} key={index} />
        ))}
      </div>

      <div className="line btm">
        <Key keyVal={"ENTER"} bigKey={true} />
        {keys.line3.map((key, index) => (
          <Key keyVal={key} key={index} />
        ))}
        <Key keyVal={"DELETE"} bigKey={true} />
      </div>
    </div>
  )
}

export default Keyboard
