import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { deleteBook } from '../../redux/books/booksSlice'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
const Book = ({ name, price, id }) => {
	const dispatch = useDispatch()
	const [visible, setVisible] = useState(false)

	const showModal = (id) => {
		setVisible(true)
		console.log(id)
	}
	return (
		<>
			<p>{name}</p>
			<p>{price}€</p>
			<DeleteOutlined onClick={() => dispatch(deleteBook(id))} />
			<EditOutlined onClick={() => showModal(id)} />
		</>
	)
}

export default Book
