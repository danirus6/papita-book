import { Button, Form, InputNumber, Select, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { createBook } from '../../redux/books/booksSlice'

const AddBook = () => {
	const [form] = Form.useForm()

	const dispatch = useDispatch()
	const { Option } = Select
	const { genresList } = useSelector((state) => state.genres)

	const onFinish = (values) => {
		console.log('Received values of form: ', values)
		dispatch(createBook(values))
		form.resetFields()
	}

	return (
		<Form onFinish={onFinish} form={form}>
			<Form.Item label="Book Name" name="name">
				<Input placeholder="Book name" />
			</Form.Item>

			<Form.Item name="GenreId" label="Select Genres">
				<Select mode="multiple" placeholder="Please select genre">
					{genresList &&
						genresList.map((genre) => (
							<Option key={genre.id} value={genre.id}>
								{genre.name}
							</Option>
						))}
				</Select>
			</Form.Item>

			<Form.Item label="Price">
				<Form.Item name="price" noStyle>
					<InputNumber />
				</Form.Item>
				<span className="ant-form-text"> €</span>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddBook
