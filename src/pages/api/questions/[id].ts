import type { NextApiRequest, NextApiResponse } from 'next'
import { shuffleArray } from '../../../common/utils/arrays'
import questions from '../../../../src/services/quiz/quiz.data'
import { IError, IQuestion } from '../../../../src/services/quiz/quiz.types'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<IQuestion | IError>
) => {
  const selectedId = Number(req.query.id)
  const currentQuestion = questions.find(
    (question) => question.id === selectedId
  )

  if (currentQuestion?.id) {
    const QuestionWithScrambledAnswers = {
      ...currentQuestion,
      answers: shuffleArray(currentQuestion.answers),
    }
    return res.status(200).json(QuestionWithScrambledAnswers)
  }

  res.status(400).json({ message: 'Invalid ID' })
}

export default handler
