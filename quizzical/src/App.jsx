import { useState } from "react"
import { decode } from "html-entities"

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  const questionElements = questions.map((question, index) => (
    <fieldset className="question-container" key={index}>
      <legend className="question">{decode(question.question)}</legend>
      {question.answers.map((answer, index) => (
        <label key={index}>
          <input type="radio" name={question.question} value={answer} />
          {decode(answer)}
        </label>
      ))}
    </fieldset>
  ))

  function startQuiz() {
    setQuizStarted(true)
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions(data.results.map(question => {
        const answers = [...question.incorrect_answers]
        const randomIndex = Math.floor(Math.random() * (answers.length + 1))
        answers.splice(randomIndex, 0, question.correct_answer)
        return { ...question, answers: answers }
      })))
  }

  function renderQuiz() {
    if (quizStarted) {
      return (
        <form>
          {questionElements}
          <button>Check answers</button>
        </form>
      )
    } else {
      return (
        <header>
          <h1>Quizzical</h1>
          <p>Some description if needed</p>
          <button onClick={startQuiz}>Start quiz</button>
        </header>
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