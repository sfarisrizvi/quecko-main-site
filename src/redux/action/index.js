
export const GetUsers = (value) => async (dispatch) => {
  console.log(value);
  dispatch({
    type: "GETUSER",
    payload: value,
  });
};