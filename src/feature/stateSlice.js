import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	home: true,
	category: false,
	comments: true
}

export const stateSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: () => {}
})

export default stateSlice.reducer