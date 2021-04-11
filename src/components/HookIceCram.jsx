import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from '../store/ice-cream/action';

const HookIceCram = () => {
	const iceCram = useSelector((state) => state.iceCream.numOfIceCream);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of IceCram - {iceCram} </h2>
			<button onClick={() => dispatch(buyIcecream())}>Buy Cake</button>
		</div>
	);
};

export default HookIceCram;
