import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Quiz from '../../components/Quiz/Quiz'
import QuizServices from '../../services/quiz/quiz.services'
import { IQuestion } from '../../services/quiz/quiz.types'
import styles from './Quiz.module.css'

const QuizView = () => {
  const router = useRouter()
  const [questionIds, setQuestionIds] = useState<number[]>([])
  const [question, setQuestion] = useState<IQuestion>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  useEffect(() => {
    getQuestionIds()
  }, [])

  useEffect(() => {
    questionIds.length > 0 && getQuestion(questionIds[0])
  }, [questionIds])

  const getQuestionIds = async () => {
    const ids = await QuizServices().getQuestionIds()
    setQuestionIds(ids)
  }

  const getQuestion = async (id: number) => {
    const question = await QuizServices().getQuestion(id)
    setQuestion(question)
  }

  const questionAnswered = (question: IQuestion) => {
    setQuestion(question)
    question.correct && setCorrectAnswers(correctAnswers + 1)
  }

  const nextQuestionId = () => {
    if (question?.id) {
      const nextIndex = questionIds.indexOf(question.id) + 1
      return questionIds[nextIndex]
    }
  }

  const goToNextStep = () => {
    const nextId = nextQuestionId()
    nextId ? getQuestion(nextId) : goToResult()
  }

  const goToResult = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questionIds.length,
        correctAnswers,
      },
    })
  }

  return (
    <div className={styles.quizBox}>
      {question && (
        <Quiz
          question={question}
          lastQuestion={!nextQuestionId()}
          questionAnswered={questionAnswered}
          goToNextStep={goToNextStep}
        />
      )}
    </div>
  )
}

export default QuizView
