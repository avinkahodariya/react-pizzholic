const intialstate = {
  item: [],
};

const addcart = (state = intialstate, action) => {
  switch (action.type) {
    case "addcart": {
      console.log("as");
      if (state.item == undefined) {
        state.item = [];
      }
      state.item.push(action.payload);
      return {
        item: state.item,
      };
    }
    default:
      return state;
  }
};
export default addcart;
