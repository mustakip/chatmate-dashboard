import { compose, createStore } from "redux";
import reducer from "./reducers/reducer.js";
import { install } from "redux-loop";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(install());

const store = createStore(reducer, {}, enhancer);

export default store;
