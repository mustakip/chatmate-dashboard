import actionTypes, {
  onSendMessageFailure,
  onSendMessageSuccess
} from "../actions/dashboardActionTypes";
import { Cmd, loop } from "redux-loop";
import { post } from "../../dataService";

const initialState = {
  chatData: [],
  sendMessageStatus: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return loop(
        { ...state, sendMessageStatus: "LOADING" },
        Cmd.run(post, {
          args: ["/message", action.payload],
          failActionCreator: onSendMessageFailure,
          successActionCreator: onSendMessageSuccess
        })
      );

    case actionTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        chatData: action.payload,
        sendMessageStatus: "SUCCESS"
      };

    case actionTypes.SEND_MESSAGE_ERROR:
      return { ...state, sendMessageStatus: "FAILED" };

    default:
      return state;
  }
};
