import { configureStore } from '@reduxjs/toolkit';

// Slices
import cartSlice from './cartSlice';
import userSlice from './userSlice'
import modalsSlice from './modalsSlice'

// const store = configureStore({
//     reducer: {}
// });

// export default store;


export default configureStore({
    reducer: {
        cartSlice,
        userSlice,
        modalsSlice
    }
});
