import styles from './Enunciation.module.css'

interface EnunciationProps {
  text: string
}

const Enunciation = ({ text }: EnunciationProps) => {
  return (
    <div className={styles.enunciationBox}>
      <div className={styles.enunciation}>{text}</div>
    </div>
  )
}

export default Enunciation
