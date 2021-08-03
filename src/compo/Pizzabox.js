import { React, useState } from "react";
import styles from "../pizza.module.css";
import { useHistory, useParams } from "react-router-dom";
import {
  Redirect,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import PizzaEdit from "../PizzaEditFolder/PizzaEdit";

const Pizzabox = (props) => {
  const data = {
    id: props.id,
    image: props.image,
    name: props.name,
    ingredients: props.ingredients,
    price: props.price,
  };
  let history = useHistory();
  const redirect = () => {
    if (props.id == "1") {
      history.push("/pizzaedit/1");
    }
    if (props.id == "2") {
      history.push("/pizzaedit/2");
    }
    if (props.id == "3") {
      history.push("/pizzaedit/3");
    }
    if (props.id == "4") {
      history.push("/pizzaedit/4");
    }
    if (props.id == "5") {
      history.push("/pizzaedit/5");
    }
    if (props.id == "6") {
      history.push("/pizzaedit/6");
    }
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
          <button
            className={styles.add}
            onClick={() => props.redirectFunction(props.id)}
          >
            {/* <Link to="/{props.id}" /> */}
            Add+
          </button>
        </div>
      </div>
      {/* <Link to="/pizzaedit"></Link>
      <Link to="/1"></Link>
      <Link to="/2"></Link>
      <Link to="/3"></Link>
      <Link to="/4"></Link>
      <Link to="/5"></Link>
      <Link to="/6"></Link> */}
      {/*     
        <Route path="/pizzaedit/:id" exact>
          <PizzaEdit />
        </Route> */}
    </>
  );
};

export default Pizzabox;
