import Icon from '@/Components/Icon/Icon'
import styles from './styles.module.scss'
import { useState } from 'react'
const MenuLeft = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div  className={`flex items-center  flex-col mt-[20px] sm:mt-[10px]`}>
            <div onClick={() => setIsOpen(!isOpen)}>
                <Icon icon="menu" size={26}/>
            </div>
            <ul className={`${styles.menu} ${isOpen ? 'block' : 'hidden'} absolute top-10 left-0  mt-6 lg:flex gap-4 `}>
                <li>Home</li>
                <li>Collections</li>
                <li>New</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default MenuLeft