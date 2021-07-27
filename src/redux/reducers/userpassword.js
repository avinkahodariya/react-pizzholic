let intialstate = {
  userpasswordlogin: null,
  userpasswordsignin: null,
};

const userpassword = (state = intialstate, action) => {
  switch (action.type) {
    case "USERPASSWORDLOGIN":
      {
        return state.userpasswordlogin + 1;
      }
      break;
    case "USERPASSWORDSIGNIN":
      {
        return state.userpasswordsignin + 1;
      }
      break;
    default:
      return state;
  }
};

export default userpassword;
