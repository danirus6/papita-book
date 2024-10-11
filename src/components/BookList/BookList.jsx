import { getBooks, getById } from '../../redux/books/booksSlice'
import { getGenres } from '../../redux/genres/genresSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import Book from './Book'
import AddBook from './AddBook'
import EditModal from './EditModal'
import './Book.css'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { deleteBook } from '../../redux/books/booksSlice'
import { useState } from 'react'

const BookList = () => {
	const dispatch = useDispatch()
	const { bookList } = useSelector((state) => state.books)
	const [visible, setVisible] = useState(false)

	const showModal = (id) => {
		setVisible(true)
		dispatch(getById(id))
	}

	useEffect(() => {
		dispatch(getBooks())
		dispatch(getGenres())
	}, [])

	return (
		<>
			<AddBook />
			{/* {bookList &&
				bookList.map((item) => (
					<Book
						key={item.id}
						name={item.name}
						price={item.price}
						id={item.id}
					/>
				))} */}
			{bookList &&
				bookList.map((item) => (
					<div key={item.id} className="book">
						<p>{item.name} - </p>
						<p>{item.price}€</p>
						<DeleteOutlined
							onClick={() => dispatch(deleteBook(item.id))}
							className="book-button"
						/>
						<EditOutlined
							onClick={() => showModal(item.id)}
							className="book-button"
						/>
					</div>
				))}
			<EditModal visible={visible} setVisible={setVisible} />
		</>
	)
}

export default BookList
