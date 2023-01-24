import { useState } from 'react'
import { IAnswer } from '../../services/quiz/quiz.types'
import styles from './Answer.module.css'

interface AnswerProps {
  answer: IAnswer
  index: number
  letter: string
  letterBackgroundColor: string
  onResponse: (index: number) => void
}

const Answer = ({
  answer,
  index,
  letter,
  letterBackgroundColor,
  onResponse,
}: AnswerProps) => {
  const revealedStyle = answer.revealed ? styles.revealed : ''

  const CardFront = () => (
    <div className={styles.front}>
      <div
        className={styles.letter}
        style={{ background: letterBackgroundColor }}
      >
        {letter}
      </div>
      <div className={styles.value}>{answer.value}</div>
    </div>
  )

  const CardBack = () => (
    <div className={styles.back}>
      {answer.correct ? (
        <div className={styles.correct}>
          <div>A resposta correta é...</div>
          <div className={styles.value}>{answer.value}</div>
        </div>
      ) : (
        <div className={styles.wrong}>
          <div>A resposta informada está errada :c</div>
          <div className={styles.value}>{answer.value}</div>
        </div>
      )}
    </div>
  )

  return (
    <div className={styles.answerBox} onClick={() => onResponse(index)}>
      <div className={`${styles.answer} ${revealedStyle}`}>
        <CardFront />
        <CardBack />
      </div>
    </div>
  )
}

export default Answer
