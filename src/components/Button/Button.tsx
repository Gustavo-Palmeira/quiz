import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  href?: string
  onClick?: (event: any) => void
}

const Button = ({ text, href, onClick }: ButtonProps) => {
  const renderButton = () => (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton()
}

export default Button
