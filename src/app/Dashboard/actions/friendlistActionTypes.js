const actionTypes = {
  GET_FRIENDLIST: "GET_FRIENDLIST",
  GET_FRIENDLIST_SUCCESS: "GET_FRIENDLIST_SUCCESS",
  GET_FRIENDLIST_ERROR: "GET_FRIENDLIST_ERROR"
};

const getFriendList = () => {
  return {
    type: actionTypes.GET_FRIENDLIST,
    payload: null
  };
};

const onGetFriendListSuccess = payload => ({
  type: actionTypes.GET_FRIENDLIST_SUCCESS,
  payload
});

const onGetFriendListFailure = payload => ({
  type: actionTypes.GET_FRIENDLIST_ERROR,
  payload
});

export { getFriendList, onGetFriendListFailure, onGetFriendListSuccess };

export default actionTypes;
