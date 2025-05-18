import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    potColor: string;
    path: string;
    count: number;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price,
                    path: action.payload.path,
                    potColor: action.payload.potColor,
                    count: 1
                })
            }
        },
        removeFromCart: (state, action)=>{
            const item = (state.cart.find(item => item.id === action.payload.id))
            if(item && item.count >1){
                item.count -=1
            } else{
                state.cart = state.cart.filter(item => item.id !== action.payload.id)
            }
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer