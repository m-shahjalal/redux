import axios from 'axios';
import actions from '../store/user/action';

const fetchUsers = () => {
	actions.fetchUserRequest();

	return (dispatch) => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				const data = res.data.map((usr) => usr.name);
				dispatch(actions.fetchSuccess(data));
			})
			.catch((e) => {
				const message = e.message;
				dispatch(actions.fetchError(message));
			});
	};
};

export default fetchUsers;
