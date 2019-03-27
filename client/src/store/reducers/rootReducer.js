



import { combineReducers } from 'redux';
import itemReducer from './itemReducer';




const rootReducer=combineReducers({
    itemReducer: itemReducer,
});



export default rootReducer
