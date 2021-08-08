import { React, useState } from "react";
import styles from "../pizza.module.css";
import { useHistory, useParams } from "react-router-dom";
import {
  Redirect,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import PizzaEdit from "../PizzaEditFolder/PizzaEdit";
import Button from "../global/Button";

const Pizzabox = (props) => {
  const data = {
    id: props.id,
    image: props.image,
    name: props.name,
    ingredients: props.ingredients,
    price: props.price,
  };

  return (
    <>
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
          <Button
            className={styles.add}
            onClick={() => props.redirectFunction(props.id)}
            name="Add+"
          />
        </div>
      </div>
    </>
  );
};

export default Pizzabox;
