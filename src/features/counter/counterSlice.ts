import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { RootState } from '../../app/store'

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0,
}



export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        decrement: (state) => {
            state.count -= 1
          },
    }

})
export const { increment, decrement } = counterSlice.actions
export const selectCount = (state: RootState) => state.root.count
export default counterSlice.reducer

