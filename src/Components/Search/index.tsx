import Input from '@/Components/common/Input/Input'
import styles from './styles.module.scss'
import Icon from '../Icon/Icon'

interface SearchProps {
    onSearch: (value: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    return (
        <div className={styles.search}>
            <Input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
            />
            <Icon icon="search" size={20} className={styles.searchIcon} />
            <div className={styles.search__text}>
                <p>Search</p>
            </div>
        </div>
    )
}

export default Search