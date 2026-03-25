import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: [],
        totalPrice: 0,
        itemsCount: 0
    },
    reducers: {
        addToCart: () => { },
        removeFromCart: () => { },
        emptyCart: () => { },
    }
});

// return of the createSlice API function
// cartSlice = {
//     reducer: {
//         cartItems: 0
//     },
//     actions: {
//         addToCart: () => { },
//         removeFromCart: () => { },
//         emptyCart: () => { },
//     }
// }

export default cartSlice.reducer;

