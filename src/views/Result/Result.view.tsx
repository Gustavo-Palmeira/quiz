import { useRouter } from 'next/router'
import Button from '../../components/Button/Button'
import Statistic from '../../components/Statistic/Statistic'
import styles from './Result.module.css'

const ResultView = () => {
  const { query } = useRouter()
  const correctAnswers = Number(query.correctAnswers) || 0
  const total = Number(query.total) || 0
  const percentage = Math.round((correctAnswers / total) * 100)

  return (
    <div className={styles.resultBox}>
      <h1>Resultado</h1>
      <div className={styles.statisticBox}>
        <Statistic text="Perguntas" value={total} />
        <Statistic
          text="Certas"
          value={correctAnswers}
          backgroundColor="#9CD2A4"
        />
        <Statistic
          text="Percentual"
          value={`${percentage}%`}
          backgroundColor="#dd74dc"
        />
      </div>
      <Button href='/' text='Tentar Novamente' />
    </div>
  )
}

export default ResultView
