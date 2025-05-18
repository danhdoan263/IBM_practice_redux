import styles from './styles.module.scss'

type TextCircleProps = {
    children: React.ReactNode;
    className?: string;
}
const TextCircle = ({children, className}: TextCircleProps) => {
  return (
    <div className={styles.textCircle + ' ' + className}>
        {children}
    </div>
  )
}

export default TextCircle