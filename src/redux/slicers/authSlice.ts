import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    loading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: true,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login (state, action: PayloadAction<string>) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },
        logout (state) {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        },
        setAuthLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
});

export const { login, logout, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;