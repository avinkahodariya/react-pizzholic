import React from "react";
import Header from "./compo/Header";
import Midle from "./compo/Midle";
import Footer from "./global/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PizzaArray from "./global/PizzaArray";

const App = () => {
  // var pizza = PizzaArray;
  // console.log(pizza);

  const localstorage = () => {
    console.log(PizzaArray);
    let pizzastore = JSON.parse(localStorage.getItem("pizzastore"));
    if (pizzastore == null || pizzastore == undefined) {
      let pizzastore = [];
      pizzastore.push(PizzaArray);
      localStorage.setItem("pizzastore", JSON.stringify(pizzastore));
    }
    console.log(JSON.parse(localStorage.getItem("pizzastore")));
  };
  return (
    <>
      {localstorage()}
      <Header />
      <Midle />
      <Footer />
    </>
  );
};

export default App;
