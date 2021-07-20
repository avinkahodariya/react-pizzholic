import React from "react";
import Ingrediants from "./Ingrediants";
import styles from "./pizzaedit.module.css";
import Cart from "./Cart";
import { useHistory } from "react-router-dom";
const Nav = (props) => {
  let history = useHistory();
  console.log(props.ingre);

  const redirectToCart = () => {
    history.push({ pathname: "/cart" });
  };
  return (
    <div>
      <Ingrediants
        ingre={props.ingre}
        image={props.image}
        handleChange={props.handleChange}
      />
      <button className={styles} onClick={redirectToCart}>
        Buy It...
      </button>
      <button className={styles} onClick={props.AddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default Nav;
