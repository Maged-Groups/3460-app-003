import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: [],
        totalPrice: 0,
        itemsCount: 0
    },
    reducers: {
        addToCart: (state, { payload: product }) => {
            const existingProductIndex = state.cartItems.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                // If the product already exists in the cart, increase its quantity
                state.cartItems[existingProductIndex].quantity += 1;
            } else {
                // If the product is new to the cart, add it with a quantity of 1
                state.cartItems.push({ ...product, quantity: 1 });
            }
            console.log('state.cartItems', state.cartItems);
            state.itemsCount += 1;
            state.totalPrice += product.price;
        },
        removeFromCart: () => { },
        emptyCart: () => { },
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
