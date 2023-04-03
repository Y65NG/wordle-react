import React, { useContext } from "react"
import { AppContext } from "../App"

function Key({ keyVal, bigKey }) {
  const { onAddLetter, onEnter, onDelete } = useContext(AppContext)
  function handleClick(event) {
    if (!bigKey) {
      onAddLetter(keyVal)
    } else if (keyVal === "ENTER") {
      onEnter()
    } else if (keyVal === "DELETE") {
      onDelete()
    }
  }

  return (
    <div className={`key ${bigKey && "big"}`} onClick={handleClick}>
      {keyVal}
    </div>
  )
}

export default Key
