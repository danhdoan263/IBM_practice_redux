import Icon from '@/Components/Icon/Icon'
import styles from './styles.module.scss'
type ButtonCircleProps = {
    icon: string;
    size?: number;
    className?: string;
    onClick?: () => void;
}
const ButtonCircle = ({icon, size = 24, className, onClick}: ButtonCircleProps) => {
    return (
        <div className={styles.buttonCircle + ' ' + className} onClick={onClick}>
            <Icon icon={icon} size={size} />
        </div>
    )
}

export default ButtonCircle