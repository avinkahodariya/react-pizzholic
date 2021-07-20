import React from "react";
import Ingrediants from "./Ingrediants";
import styles from "./pizzaedit.module.css";

const Nav = (props) => {
  console.log(props.ingre);
  return (
    <div>
      <div>
        <Ingrediants
          ingre={props.ingre}
          image={props.image}
          handleChange={props.handleChange}
        />
        {/* <div className={styles.BuyAddButton}>
          <button className={styles.buybutton} onClick={BuyButton}>
            Buy It...
          </button>
          <button className={styles.buybutton} onClick={AddToCart}>
            Add To Cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
