import { combineReducers } from 'redux';
import cakeReducer from './cake/reducers';
import iceCreamReducer from './ice-cream/reducer';
import postReducer from './post/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	user: userReducer,
	post: postReducer,
});

export default rootReducer;
