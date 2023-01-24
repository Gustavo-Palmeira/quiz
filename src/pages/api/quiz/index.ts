import { NextApiRequest, NextApiResponse } from 'next'
import { shuffleArray } from '../../../common/utils/arrays'
import questions from '../../../../src/services/quiz/quiz.data'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const ids = questions.map((question) => question.id)

  res.status(200).json(shuffleArray(ids))
}

export default handler
