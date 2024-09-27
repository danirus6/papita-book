import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const getAllBooks = async () => {
	const res = await axios.get(`${BASE_URL}/books`)
	return res.data
}

const createBook = async (book) => {
	const res = await axios.post(`${BASE_URL}/books`, book)
	return res.data
}

const deleteBook = async (id) => {
	const res = await axios.delete(`${BASE_URL}/books/id/${id}`)
	return res.data
}

const getById = async (id) => {
	const res = await axios.get(`${BASE_URL}/books/findById/${id}`)
	return res.data
}

const update = async (body) => {
	const res = await axios.put(`${BASE_URL}/books/updateBook/${body.id}`, body)
	return res.data
}

const booksService = { getAllBooks, createBook, deleteBook, getById, update }

export default booksService
