import dashboardReducer from "../Dashboard/reducers/dashboardReducer";
import {combineReducers} from "redux-loop";

export default combineReducers({
  chats:dashboardReducer
})