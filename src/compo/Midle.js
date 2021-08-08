import React from "react";
import Twit from "./Twit";
import style from "../pizza.module.css";
import Pizzabox from "./Pizzabox";
import * as Al from "../assets/images";
import PizzaArray from "../global/PizzaArray";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Midle = () => {
  const history = useHistory();
  const location = useLocation();

  // const pizza = PizzaArray;
  const redirectFunction = (id) => {
    history.push(`${location.pathname}/pizzaedit/${id}`);
  };

  return (
    <div className={style.midleflex}>
      <div className={style.Midle}>
        {PizzaArray.map((e) => {
          return (
            <Pizzabox
              ingredients={e.ingredients}
              price={e.price}
              name={e.name}
              id={e.id}
              image={e.image}
              redirectFunction={redirectFunction}
            />
          );
        })}
      </div>
      <div className={style.twit}>
        <Twit />
      </div>
    </div>
  );
};

export default Midle;
