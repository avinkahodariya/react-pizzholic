const intialstate = { usernamelogin: null, usernamesignin: null };

const username = (state = intialstate, action) => {
  console.log("vb");
  switch (action.type) {
    case "USERNAMELOGIN":
      return { ...state, usernamelogin: action.payload };

      break;
    case "USERNAMESIGNIN":
      return { ...state, user };

      break;
    default:
      return state;
  }
};
export default username;
