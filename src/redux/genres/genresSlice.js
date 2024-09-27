import genresService from './genresService'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	genresList: [],
}

export const getGenres = createAsyncThunk('genres/getAll', async () => {
	try {
		return await genresService.getAllGenres()
	} catch (error) {
		console.error(error)
	}
})

export const genresSlice = createSlice({
	name: 'genres',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGenres.fulfilled, (state, action) => {
			state.genresList = action.payload
		})
	},
})

export default genresSlice.reducer
