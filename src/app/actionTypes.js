const actionTypes = {
  SEND_MESSAGE:"SEND_MESSAGE",
  SEND_MESSAGE_SUCESS:"SEND_MESSAGE_SUCESS",
  SEND_MESSAGE_ERROR:"SEND_MESSAGE_ERROR"
};

const sendMessage = (payload) => ({type:actionTypes.SEND_MESSAGE,payload});

const onSendMessageSucess = (payload) => ({type:actionTypes.SEND_MESSAGE_SUCESS, payload});

const onSendMessageFailure = (payload) => ({type: actionTypes.SEND_MESSAGE_ERROR, payload});

export {
  sendMessage,
  onSendMessageFailure,
  onSendMessageSucess
}

export default actionTypes;