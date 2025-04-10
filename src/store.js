import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './assets/slices/counter/counterSlice'

export const store = configureStore({
    reducer: {
        count: counterSlice,
    },
  })