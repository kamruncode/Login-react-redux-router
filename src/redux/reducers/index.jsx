import * as actionTypes from "../actionTypes";

const initialState = {
  users: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
      break;

    default:
      return state;
  }
};

export default registerReducer;
