import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: 'modalsSlice',
    initialState: {
        showLogin: false,
        showRegister: false,
    },
    reducers: {
        toggleLoginModal: (state) => {
            state.showLogin = !state.showLogin
        },
        toggleRegisterModal: (state) => {
            state.showRegister = !state.showRegister
        },
    }
});

export default modalsSlice.reducer;
export const { toggleLoginModal, toggleRegisterModal } = modalsSlice.actions