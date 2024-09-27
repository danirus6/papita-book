import axios from 'axios'

const URL = 'http://localhost:3000'

const getAllGenres = async () => {
	const res = await axios.get(URL + '/genres')
	return res.data
}

const genresService = { getAllGenres }

export default genresService
