import React from "react";
import styles from "./pizza.module.css";
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
      <img
        src={props.image}
        style={{
          top: "0",
          left: "0",
          borderRadius: "1em",
          width: "100%",
          height: "300px",
        }}
      />

      <div className={styles.info}>
        <p className={styles.name}> {props.name}</p>
        <p className={styles.ingredients}>
          Ingredients:
          <p className={styles.ingre}>
            {props.ingredients.map((ingre) => {
              return <span>{ingre[0]} </span>;
            })}
          </p>
        </p>
        <p className={styles.price}>
          <p className={styles.rupi}> {props.price}</p>
        </p>
        <button className={styles.add} onClick={redirect}>
          Add+
        </button>
      </div>
    </div>
  );
};

export default Pizzabox;
