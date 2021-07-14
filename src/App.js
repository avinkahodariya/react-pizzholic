import React from "react";
import pizza from "./p1.png";
import Header from "./Header";
import Midle from "./Midle";
import Footer from "./Footer";
import style from "./pizza.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Midle />
      <Footer />
    </div>
  );
}

export default App;
