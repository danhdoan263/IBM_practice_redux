import ButtonCircle from "@/Components/common/ButtonCircle/ButtonCircle"
import styles from './styles.module.scss'
import TextCircle from "@/Components/common/TextCircle/TextCircle"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const MenuRight = () => {
  const navigate = useNavigate()
  const [isCount, setIsCount] = useState<string | number>('count')
  const count = useSelector((state:RootState)=>state.cart.cart.length)

  useEffect(()=>{
    if(count === 0){
      setIsCount('cart')
    }else{
      setIsCount(count)
    }
  },[count])
  return (
    <div className={styles.menuRight + ' flex items-center lg:gap-[46px] gap-4'}>
      <ButtonCircle icon="heart"/>
      <div className={styles.cart} onClick={()=>{
        navigate('/cart')
      }}>
        <TextCircle>{isCount}</TextCircle>
        <ButtonCircle icon="cart" size={37} className={styles.cartButton}/>
      </div>
      <ButtonCircle icon="user" size={16}/>
    </div>
  )
}
export default MenuRight