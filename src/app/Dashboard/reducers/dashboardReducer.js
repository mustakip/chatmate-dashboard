import actionTypes, {onSendMessageFailure, onSendMessageSucess} from '../../actionTypes';
import {Cmd,loop} from 'redux-loop'
import dataService from "../../dataService";

const initialState = {
  chatData: [],
  sendMessageStatus: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      console.log("sending message", action.payload);
      return loop({...state, sendMessageStatus: "LOADING"},Cmd.run(dataService.post,{
        args:["/message",action.payload],
        failActionCreator:onSendMessageFailure,
        successActionCreator:onSendMessageSucess
      }));

    case actionTypes.SEND_MESSAGE_SUCESS:
      console.log("this is the payload in success => ",action.payload);
      return {...state,chatData:action.payload,sendMessageStatus:"SUCESS"};

    case actionTypes.SEND_MESSAGE_ERROR:
      return {...state,sendMessageStatus:"FAILED"};

    default:
      return state;
  }
};
