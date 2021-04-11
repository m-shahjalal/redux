export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';
export const POST_POST = 'POST_POST';

const actions = {};

actions.getPostRequest = () => {
	return {
		type: GET_POST,
	};
};

actions.getPostSuccess = (payload) => {
	return { type: GET_POST_SUCCESS, payload };
};

actions.getPostFailure = (payload) => {
	return { type: GET_POST_FAILURE, payload };
};

export default actions;
