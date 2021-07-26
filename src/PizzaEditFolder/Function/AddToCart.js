import React, { useState } from "react";
import Ingrediants from "../Ingrediants";

const AddToCart = (id, name, price, ingrediants) => {
  const [Cart, setCart] = useState([]);
  const CartAdd = () => {
    setCart(...Cart, [id, name, price, ingrediants]);
  };
  return <></>;
};

export default AddToCart;
