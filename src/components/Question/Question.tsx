import styles from './Question.module.css'
import Enunciation from '../Enunciation/Enunciation'
import { IQuestion } from '../../../src/services/quiz/quiz.types'
import Answer from '../Answer/Answer'
import Timer from '../Timer/Timer'

interface QuestionProps {
  question: IQuestion
  questionTime?: number
  onResponse: (index: number) => void
  timeout: () => void
}

const letters = [
  { value: 'A', color: '#f2c866' },
  { value: 'B', color: '#f266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#9EE596' },
]

const Question = ({
  question,
  questionTime,
  onResponse,
  timeout,
}: QuestionProps) => {
  console.log('questionTime', questionTime)
  return (
    <div className={styles.question}>
      <Enunciation text={question.enunciation} />
      <Timer
        key={question.id.toString()}
        duration={questionTime || 5}
        timeout={timeout}
      />
      {question.answers.map((answer, index) => (
        <Answer
          key={answer.value}
          answer={answer}
          index={index}
          letter={letters[index].value}
          letterBackgroundColor={letters[index].color}
          onResponse={onResponse}
        />
      ))}
    </div>
  )
}

export default Question
