import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const { actions: countActions, reducer: countReducer } = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    reset: () => 0,
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementBy: (state, action: PayloadAction<number>) => state + action.payload,
    decrementBy: (state, action: PayloadAction<number>) => state - action.payload,
  },
})
