import Icon from '@/Components/Icon/Icon'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartHeader = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center gap-2'>
            <Icon icon="long-arrow" style={{ transform: 'rotate(180deg) translateY(40%)' }} size={51} 
            onClick={()=>{
                navigate(-1)
            }}
            />
            <h1 className='text-2xl font-bold'>Your Cart</h1>
        </div>
    )
}

export default CartHeader