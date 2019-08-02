import {createStore} from 'redux';
import userDetailsReducer from './reducers/userDetailsReducer';


const store = createStore(userDetailsReducer, {username: "something"});

export default store;