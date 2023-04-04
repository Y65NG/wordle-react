import React, { useContext } from "react"
import { AppContext } from "../App"

function UserGuide() {
  const { toggleGuide, language } = useContext(AppContext)
  return (
    <div className="guide">
      <div className="close-btn" onClick={toggleGuide}>
        X
      </div>
      {language ? (
        <div className="content">
          <h1>User Guide</h1>
          <section>
            <p>
              Guess the word in 6 tries and hit the enter button to submit.
              <br />
              <br />
              After each guess, the color of the tiles will change to show how
              close your guess was to the word.
            </p>
            <hr />
            <p>
              <span className="bold">Examples</span>
            </p>
            <div className="row">
              <div className="letter green">W</div>
              <div className="letter">E</div>
              <div className="letter">A</div>
              <div className="letter">R</div>
              <div className="letter">Y</div>
            </div>
            <p className="margin-bottom">
              &#x2022; The word <span className="bold">"W"</span> is in the word
              and in the correct spot.
            </p>
            <div className="row">
              <div className="letter">S</div>
              <div className="letter yellow">T</div>
              <div className="letter">A</div>
              <div className="letter">R</div>
              <div className="letter">T</div>
            </div>
            <p className="margin-bottom">
              &#x2022; The letter <span className="bold">"T"</span> is in the
              word but in the wrong spot.
            </p>
            <div className="row">
              <div className="letter">V</div>
              <div className="letter">A</div>
              <div className="letter">G</div>
              <div className="letter red">U</div>
              <div className="letter">E</div>
            </div>
            <p className="margin-bottom">
              &#x2022; The letter <span className="bold">"U"</span> is not in
              the word.
            </p>
          </section>
        </div>
      ) : (
        <div className="content">
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
              <div className="letter">S</div>
              <div className="letter yellow">T</div>
              <div className="letter">A</div>
              <div className="letter">R</div>
              <div className="letter">T</div>
            </div>
            <p className="margin-bottom">
              &#x2022; <span className="bold">"T"</span>{" "}
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
      )}
    </div>
  )
}

export default UserGuide
