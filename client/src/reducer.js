const ActionTypes = {
  JOINED: "JOINED",
  SET_USERS: "SET_USERS",
  SET_MESSAGES: "SET_MESSAGES",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.JOINED:
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        userName: action.payload.userName,
      };
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};
