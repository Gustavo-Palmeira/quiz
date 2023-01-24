import { http } from '../http'
import { IQuestion } from './quiz.types'

const QuizServices = () => {
  const getQuestionIds = async () => {
    const { data: ids } = await http.get('/api/quiz')
    return ids
  }

  const getQuestion = async (id: number) => {
    const { data: question } = await http.get(`/api/questions/${id}`)
    return question
  }

  const answerQuestionWith = (question: IQuestion, answerIndex: number) => {
    const isAnswerCorrect = question.answers[answerIndex]?.correct
    const answers = revealAnswer(question, answerIndex)

    return { ...question, answers, correct: isAnswerCorrect }
  }

  const revealAnswer = (question: IQuestion, answerIndex: number) => {
    const answers = question.answers.map((answer, index) => {
      const selectedAnswer = index === answerIndex
      const shouldReveal = selectedAnswer || answer.correct
      return { ...answer, revealed: shouldReveal }
    })

    return answers
  }

  return { getQuestionIds, getQuestion, answerQuestionWith, revealAnswer }
}

export default QuizServices
