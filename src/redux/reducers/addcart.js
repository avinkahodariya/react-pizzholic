const intialstate = {
  item: [],
};

const addcart = (state = intialstate, action) => {
  switch (action.type) {
    case "addcart": {
      state.item.push(action.payload);
      return {
        item: state.item,
      };
    }
  }
};
export default addcart;
