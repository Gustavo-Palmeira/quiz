import styles from './Statistic.module.css'

interface StatisticProps {
  value: number | string
  text: string
  backgroundColor?: string
  color?: string
}

const Statistic = ({
  value,
  text,
  backgroundColor,
  color,
}: StatisticProps) => {
  return (
    <div className={styles.statisticBox}>
      <div
        className={styles.value}
        style={{
          backgroundColor: backgroundColor || '#c0c0f5',
          color: color || '#333',
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Statistic
