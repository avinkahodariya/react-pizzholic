import React from "react";
import styles from "./pizza.module.css";
import italian from "./italian.jpg";
import veg from "./veg.jpg";
import paneer from "./paneer.jpg";
import masroom from "./masroom.jpg";
import pasta from "./pasta.jpg";

const Pizzabox = (props) => {
  return (
    <div className={styles.box} id={props.id}>
      <div className={styles.img}>
        <img src={props.image} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}> {props.name}</p>
        <div className={styles.ingredients}>
          Ingredients:
          <div className={styles.ingre}>
            {props.ingredients.map((ingre) => {
              return <span>{ingre} </span>;
            })}
          </div>
        </div>
        <div className={styles.price}>
          <p className={styles.rupi}> {props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Pizzabox;
