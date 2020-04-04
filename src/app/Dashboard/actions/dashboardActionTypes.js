const actionTypes = {
  SEND_MESSAGE: "SEND_MESSAGE",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_ERROR: "SEND_MESSAGE_ERROR"
};

const sendMessage = payload => ({ type: actionTypes.SEND_MESSAGE, payload });

const onSendMessageSuccess = payload => ({
  type: actionTypes.SEND_MESSAGE_SUCCESS,
  payload
});

const onSendMessageFailure = payload => ({
  type: actionTypes.SEND_MESSAGE_ERROR,
  payload
});

export { sendMessage, onSendMessageFailure, onSendMessageSuccess };

export default actionTypes;
