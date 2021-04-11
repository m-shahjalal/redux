import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsers from '../api/user';

const User = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div>
			{user && user.loading ? (
				<h1>Data fetching...</h1>
			) : (
				<h1>Fetched data</h1>
			)}
			{user &&
				user.user.length > 0 &&
				user.user.map((usr) => <div key={usr}>{usr}</div>)}
		</div>
	);
};

export default User;
