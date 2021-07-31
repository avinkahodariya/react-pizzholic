const addToCart = (data, props) => {
  let item = JSON.parse(localStorage.getItem("item"));
  if (item == null) {
    item = [];
    item.push(data);
    console.log(item);
    localStorage.setItem("item", JSON.stringify(item));
  } else {
    item.push(data);
    localStorage.setItem("item", JSON.stringify(item));
  }
};

export default addToCart;
