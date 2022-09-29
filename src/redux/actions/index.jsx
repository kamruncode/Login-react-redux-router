import * as actionTypes from "../actionTypes";

let id = 0;

const actionRegister = (label) => {
  return {
    type: actionTypes.REGISTER,
    payload: {
      label,
      id: ++id,
    },
  };
};
export default actionRegister;
