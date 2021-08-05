const intialstate = {
  user: [],
  found: false,
};

const register = (state = intialstate, action) => {
  switch (action.type) {
    case "Register": {
      console.log(
        "🚀 ~ file: register.js ~ line 54 ~ register ~ state",
        action.type,
        action.payload,
        state.user
      );
      console.log(state.user);

      if (state.user.length !== 0) {
        var a = state.user.find((e) => {
          if (
            e.username == action.payload.username ||
            e.email == action.payload.email
          ) {
            return true;
          } else {
            return false;
          }
        });
        console.log("a is:", a);
        if (a) {
          console.log("a is found");
          return { ...state, found: true };
        } else {
          console.log("a is not fohnf");
          state.user.push(action.payload);

          return {
            ...state,
            user: state.user,
            found: false,
          };
        }
      } else {
        state.user.push(action.payload);

        return { ...state, user: state.user, found: false };
      }
    }

    default:
      return state;
  }
};
export default register;
