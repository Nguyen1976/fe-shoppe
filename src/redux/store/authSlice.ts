import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | null;
    role: 'user' | 'admin' | null;
}

const initialState: AuthState = {
    accessToken: null,
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ accessToken: string; role: 'user' | 'admin' }>
        ) => {
            state.accessToken = action.payload.accessToken;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.accessToken = null;
            state.role = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;