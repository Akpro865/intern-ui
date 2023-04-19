import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	detail: []
}

export const detailSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: () => {}
})

export default detailSlice.reducer