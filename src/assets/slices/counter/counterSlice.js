import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        state.value++
        
      },
      decrement: (state) => {
        state.value--
      },
      multiply: (state) => {
        state.value *=2
      },
      devide: (state) => {
        state.value /=2
      }

    
  },
})


export const { increment,decrement,multiply,devide } = counterSlice.actions

export default counterSlice.reducer