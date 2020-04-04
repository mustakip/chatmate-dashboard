import actionTypes, {
  onGetFriendListSuccess,
  onGetFriendListFailure
} from "../actions/friendlistActionTypes.js";
import { Cmd, loop } from "redux-loop";
import { get } from "../../dataService.js";

const initialState = {
  friendList: [],
  getFriendListStatus: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FRIENDLIST:
      return loop(
        { ...state, getFriendListStatus: "LOADING" },
        Cmd.run(get, {
          args: ["/api/friends"],
          failActionCreator: onGetFriendListFailure,
          successActionCreator: onGetFriendListSuccess
        })
      );

    case actionTypes.GET_FRIENDLIST_SUCCESS:
      return {
        ...state,
        friendList: action.payload,
        getFriendListStatus: "SUCCESS"
      };

    case actionTypes.GET_FRIENDLIST_ERROR:
      return { ...state, friendList: [], getFriendListStatus: "FAILED" };

    default:
      return state;
  }
};
