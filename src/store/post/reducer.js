import { GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE } from './action';

const initialState = {
	post: [],
	loading: false,
	error: null,
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POST:
			return { ...state, loading: true };
		case GET_POST_SUCCESS:
			return { ...state, loading: false, post: [...action.payload] };
		case GET_POST_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default postReducer;
