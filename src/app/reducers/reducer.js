import dashboardReducer from "../Dashboard/reducers/dashboardReducer.js";
import friendListReducer from "../Dashboard/reducers/friendListReducer.js";
import { combineReducers } from "redux-loop";

export default combineReducers({
  chats: dashboardReducer,
  friendList: friendListReducer
});
