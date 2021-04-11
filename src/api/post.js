import axios from 'axios';
import actions from '../store/post/action';

const fetchPost = () => {
	return async (dispatch) => {
		dispatch(actions.getPostRequest());

		try {
			const data = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			console.log('this is data >>>', data.data);
			dispatch(actions.getPostSuccess(data.data));
		} catch (error) {
			dispatch(actions.getPostFailure(error.message));
		}
	};
};

export default fetchPost;
