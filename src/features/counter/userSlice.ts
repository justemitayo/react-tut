import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface CounterState {
    data: [] | null, 
    loading: boolean,
    error: string | null
}

const initialState: CounterState = {
    data: [], 
    loading: false,
    error:''
}


export const getusers = createAsyncThunk('user', async() => {
    console.log('Fetching users...')
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return await response.json();
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getusers.pending, (state) => {
            state.loading = true
        })
        .addCase(getusers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getusers.rejected, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
    }

})
export default userSlice.reducer

