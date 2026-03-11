import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: 0
    },
    reducers: {
        addItem: () => { },
        removeItem: () => { },
        emptyCart: () => { },
        checkoutCart: () => { }
    }
});