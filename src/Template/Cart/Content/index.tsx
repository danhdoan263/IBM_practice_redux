import ProductsCard from '@/Components/Card/ProductsCard'
import type { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '@/features/cartSlice'

const CartContent = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    console.log(cart);

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='border border-teal-400 rounded-lg p-2.5 flex flex-col gap-2.5'>
                Your Order
                {cart.cart.map((item) => (
                    <ProductsCard
                        className='relative sm:flex sm:gap-3'
                        key={item.id}
                        description={item.description}
                        price={item.price}
                        image={item.path}
                        name={item.name}
                        width='300px'
                        height='300px'
                        count={item.count}
                        remove={true}
                        buyClassName='bg-teal-400 text-white px-4 py-2 rounded-md absolute right-0 bottom-0'
                        increase={true}
                        onClick={()=>{
                            dispatch(removeFromCart(item))
                        }}
                        onClickIncrease={()=>{
                            dispatch(addToCart(item))
                        }}
                    />
                ))}
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p>{cart.cart.reduce((acc, item)=> acc + item.price * item.count, 0)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartContent