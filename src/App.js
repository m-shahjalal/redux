import './App.css';
import Post from './components/Post';
import User from './components/User';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<User />
				<Post />
			</header>
		</div>
	);
}

export default App;
