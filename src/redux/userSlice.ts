import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    avatar: string | null;
    isAdmin: boolean;
    accessToken: string | null;
    role: 'user' | 'admin' | null;
}

const initialState: UserState = {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    isAdmin: false,
    accessToken: '',
    role: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
            Object.assign(state, action.payload);
        },
        resetUser: () => initialState,
    },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
