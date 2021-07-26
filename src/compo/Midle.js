import React from "react";
import Twit from "./Twit";
import style from "../pizza.module.css";
import Pizzabox from "./Pizzabox";
import * as Al from "../assets/images";
import PizzaArray from "../global/PizzaArray";

const Midle = () => {
  const pizza = PizzaArray;

  return (
    <div className={style.midleflex}>
      <div className={style.Midle}>
        {pizza.map((e) => {
          return (
            <Pizzabox
              ingredients={e.ingredients}
              price={e.price}
              name={e.name}
              id={e.id}
              image={e.image}
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
