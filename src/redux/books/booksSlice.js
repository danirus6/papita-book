import booksService from './booksService'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	bookList: [],
	book: {},
}

export const getBooks = createAsyncThunk('books/getAll', async () => {
	try {
		const response = await booksService.getAllBooks()
		return response
	} catch (error) {
		console.error(error)
	}
})

export const createBook = createAsyncThunk('books/createBook', async (book) => {
	try {
		return await booksService.createBook(book)
	} catch (error) {
		console.error(error)
	}
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
	try {
		return await booksService.deleteBook(id)
	} catch (error) {
		console.error(error)
	}
})

export const getById = createAsyncThunk('books/getById', async (id) => {
	try {
		return await booksService.getById(id)
	} catch (error) {
		console.error(error)
	}
})

export const update = createAsyncThunk('books/update', async (book) => {
	try {
		return await booksService.update(book)
	} catch (error) {
		console.error(error)
	}
})

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBooks.fulfilled, (state, action) => {
				state.bookList = action.payload
			})
			.addCase(createBook.fulfilled, (state, action) => {
				state.bookList = [...state.bookList, action.payload]
			})
			.addCase(deleteBook.fulfilled, (state, action) => {
				state.bookList = state.bookList.filter(
					(book) => book.id !== +action.payload.id
				)
			})
			.addCase(getById.fulfilled, (state, action) => {
				state.book = action.payload
			})
			.addCase(update.fulfilled, (state, action) => {
				const books = state.bookList.map((book) => {
					if (book.id === +action.payload.id) {
						return action.payload 

					}
					return book
				})
				state.bookList = books
			})
	},
})

export default booksSlice.reducer
