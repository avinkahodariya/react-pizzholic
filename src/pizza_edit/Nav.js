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
        <button className={styles.buybutton}>Buy It...</button>
      </div>
    </div>
  );
};

export default Nav;
