import actionTypes from '../actionTypes'

const sendMessage = (message) => ({
  type: actionTypes.SEND_MESSAGE,
  payload: {message}
});

export default sendMessage;