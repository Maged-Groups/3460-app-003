import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: null,
        loggedin: false,
        token: null
    },
    reducers: {
        login: (state, { payload }) => {
            console.log('payload', payload)

            state.loggedin = true;
            state.user = payload

        },
        logout: (state) => {
            state.loggedin = false;
            state.user = null;
            state.token = null;
        }
    }
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions