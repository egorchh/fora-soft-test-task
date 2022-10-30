const ActionTypes = {
  JOINED: "JOINED",
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
    default:
      return state;
  }
};
