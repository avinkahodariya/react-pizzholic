import React from "react";
import styles from "./pizza.module.css";
import italian from "./italian.jpg";
import veg from "./veg.jpg";
import paneer from "./paneer.jpg";
import masroom from "./masroom.jpg";
import pasta from "./pasta.jpg";
import { useHistory } from "react-router-dom";

const Pizzabox = (props) => {
  let history = useHistory();
  const data = {
    id: props.id,
    image: props.image,
    name: props.name,
    ingredients: props.ingredients,
    price: props.price,
  };

  console.log(data);

  const redirect = () => {
    history.push({ pathname: "/pizza", state: { data } });
  };

  return (
    <div className={styles.box} id={props.id}>
      <div className={styles.img}>
        <img
          src={props.image}
          style={{
            top: "0",
            left: "0",
            borderRadius: "1em",
            width: "100%",
            height: "100%",
          }}
        />
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
        <div className={styles.add} onClick={redirect}>
          Add+
        </div>
      </div>
    </div>
  );
};

export default Pizzabox;
