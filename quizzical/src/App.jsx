import { useState } from "react"
import { decode } from "html-entities"

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  const questionElements = questions.map((q, index) => (
    <fieldset className="question-container" key={index}>
      <legend className="question">{decode(q.question)}</legend>
      <label>
        <input type="radio" name={q.question} value="option-1" />
        {decode(q.correct_answer)}
      </label>
      <label>
        <input type="radio" name={q.question} value="option-2" />
        {decode(q.incorrect_answers[0])}
      </label>
      <label>
        <input type="radio" name={q.question} value="option-3" />
        {decode(q.incorrect_answers[1])}
      </label>
      <label>
        <input type="radio" name={q.question} value="option-4" />
        {decode(q.incorrect_answers[2])}
      </label>
    </fieldset>
  ))

  function startQuiz() {
    setQuizStarted(true)
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }

  function renderQuiz() {
    if (!quizStarted) {
      return (
        <header>
          <h1>Quizzical</h1>
          <p>Some description if needed</p>
          <button onClick={startQuiz}>Start quiz</button>
        </header>
      )
    } else {
      return (
        <form>
          {questionElements}
          <button>Check answers</button>
        </form>
      )
    }
  }

  return (
    <>
      {renderQuiz()}
    </>
  )
}

export default App