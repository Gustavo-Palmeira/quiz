import QuizServices from '../../services/quiz/quiz.services'
import { IQuestion } from '../../services/quiz/quiz.types'
import Button from '../Button/Button'
import Question from '../Question/Question'
import styles from './Quiz.module.css'

interface QuizProps {
  question: IQuestion
  lastQuestion: boolean
  questionAnswered: (question: IQuestion) => void
  goToNextStep: () => void
}

const Quiz = ({
  question,
  lastQuestion,
  questionAnswered,
  goToNextStep,
}: QuizProps) => {
  const onResponse = (index: number) => {
    if (typeof question.correct === 'undefined')
      questionAnswered(QuizServices().answerQuestionWith(question, index))
  }

  return (
    <div className={styles.quizBox}>
      {question && (
        <Question
          question={question}
          questionTime={30}
          onResponse={onResponse}
          timeout={goToNextStep}
        />
      )}

      <Button
        text={lastQuestion ? 'Finalizar' : 'Próxima'}
        onClick={goToNextStep}
      />
    </div>
  )
}

export default Quiz
