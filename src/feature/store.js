import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './stateSlice'
import detailReducer from './detailSlice'

const store = configureStore({
	reducer: {
		state: stateReducer,
		detail: detailReducer,
	}
})

export default store