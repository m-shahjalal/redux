import { useDispatch, useSelector } from 'react-redux';
import fetchPost from '../api/post';

const Post = () => {
	const post = useSelector((state) => state.post);
	const dispatch = useDispatch();

	return (
		<div>
			{post && post.loading ? (
				<h1>Data fetching...</h1>
			) : (
				<h1>Fetched data</h1>
			)}
			{post &&
				post.post.length > 0 &&
				post.post.map((pst) => (
					<div key={pst.id} style={{ padding: '20px' }}>
						<h3>{pst.title}</h3>
						<p>{pst.body}</p>
					</div>
				))}
			<button onClick={() => dispatch(fetchPost())}>click</button>
		</div>
	);
};

export default Post;
