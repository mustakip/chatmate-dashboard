import actionTypes from '../actionTypes'

const updateUsername = (username) => ({
  type: actionTypes.updateUsername,
  payload: {username}
})

export default updateUsername;