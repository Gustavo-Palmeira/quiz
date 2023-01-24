import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './Timer.module.css'

interface TimerProps {
  key: string
  duration: number
  timeout: () => void
}

const Timer = ({ duration, timeout }: TimerProps) => {
  return (
    <div className={styles.timerBox}>
      <CountdownCircleTimer
        duration={duration}
        size={100}
        isPlaying
        onComplete={timeout}
        colors={['#2BAA6D', '#DE1', '#E44A4C']}
        colorsTime={[duration, duration / 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer
