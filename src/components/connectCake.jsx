import { connect } from 'react-redux';
import { buyCake } from '../store/cake/action';
const Cake = (props) => {
	return (
		<div>
			<h2>Number of cakes - {props.numOfCake} </h2>
			<button onClick={props.buyCake}>Buy Cake</button>
		</div>
	);
};

const mapStateToProps = (state) => ({ numOfCake: state.numOfCake });
const mapDispatchToProps = (dph) => ({ buyCake: () => dph(buyCake()) });

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
