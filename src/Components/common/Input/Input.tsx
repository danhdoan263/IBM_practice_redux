import styles from './styles.module.scss'
type InputProps = {
    type?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, placeholder,  onChange }: InputProps) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className={styles.input} onChange={onChange} />
        </div>
    )
}

export default Input