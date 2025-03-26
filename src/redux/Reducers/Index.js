let initState = {
  GetUserAll: "",
  // allowance: 0,
  // send: "",
  // withDraw: "",
  // deposite: ""
};

export const UserReducer = (state = initState, action) => {

  const { type, payload } = action; //object destr
  console.log(payload);
  switch (type) {
    case "GETUSER":
      return {
        ...state,
        GetUserAll: payload,
      };

    default:
      return state;
  }
};