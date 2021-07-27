let intialstate = {
  useremailsignin: null,
};

const useremail = (state = intialstate, action) => {
  switch (action.type) {
    case "USEREMAILSIGNIN":
      {
        return { ...state, useremailsignin: action.payload.data };
      }
      break;
    default:
      return state;
  }
};
export default useremail;
