import actionTypes from '../actionTypes';

const initialState = {
  username: ""
};


const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.updateUsername:
      state.username = action.payload.username;
      return state;
    default:
      return state;
  }
};

export default userDetailsReducer;