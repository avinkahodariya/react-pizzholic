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

function App() {
  return (
    <>
      <Header />
      <Midle />
      <Footer />
    </>
  );
}

export default App;
