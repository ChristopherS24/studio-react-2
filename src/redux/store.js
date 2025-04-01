import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice.js'
import { citiesReducer } from './citiesSlice.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
  },
})