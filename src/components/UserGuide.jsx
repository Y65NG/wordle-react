import React, { useContext } from "react"
import { AppContext } from "../App"

function UserGuide() {
  const { toggleGuide } = useContext(AppContext)
  return (
    <div className="guide">
      <div className="close-btn" onClick={toggleGuide}>
        X
      </div>
      <h1>教程</h1>
      <section>
        <p>
          你有六次机会来猜一个单词，按回车键提交答案。每次提交答案后，不同的颜色表示这次猜测的准确程度
        </p>
        <hr />
        <p>
          <span className="bold">例子</span>
        </p>
        <div className="row">
          <div className="letter green">W</div>
          <div className="letter">E</div>
          <div className="letter">A</div>
          <div className="letter">R</div>
          <div className="letter">Y</div>
        </div>
        <p className="margin-bottom">
          &#x2022; <span className="bold">"W"</span> 这个字母在正确的位置
        </p>
        <div className="row">
          <div className="letter">P</div>
          <div className="letter yellow">I</div>
          <div className="letter">L</div>
          <div className="letter">L</div>
          <div className="letter">S</div>
        </div>
        <p className="margin-bottom">
          &#x2022; <span className="bold">"I"</span>{" "}
          这个字母在答案中有但不在正确的位置
        </p>
        <div className="row">
          <div className="letter">V</div>
          <div className="letter">A</div>
          <div className="letter">G</div>
          <div className="letter red">U</div>
          <div className="letter">E</div>
        </div>
        <p className="margin-bottom">
          &#x2022; 答案中没有 <span className="bold">"U"</span> 这个字母
        </p>
      </section>
    </div>
  )
}

export default UserGuide
