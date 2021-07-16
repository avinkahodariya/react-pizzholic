import React from "react";
import Twit from "./Twit";
import style from "./pizza.module.css";
import Pizzabox from "./Pizzabox";
import italian from "./italian.jpg";
import veg from "./veg.jpg";
import paneer from "./paneer.jpg";
import masroom from "./masroom.jpg";
import pasta from "./pasta.jpg";
import mexican from "./mexican.jpg";

const Midle = () => {
  const pizza = [
    {
      name: "Italian Pizza",
      ingredients: ["Tomato", "Brokli", "Onion", "Olive", "Mozzarella"],
      price: "300",
      id: "1",
      image: italian,
    },

    {
      name: "Pasta Pizza",
      ingredients: ["Capsicum", , "Onion", "Corn", "Tomato", "Mozzarella"],
      price: "400",
      id: "2",
      image: pasta,
    },

    {
      name: "Mushroom Pizza",
      ingredients: ["Capsicum", "Onion", "Mushroom", "Mozzarella"],
      price: "500",
      id: "3",
      image: masroom,
    },

    {
      name: "Pataka Paneer",
      ingredients: ["Capsicum", "Olive", "Tometo", "Corn"],
      price: "350",
      id: "4",
      image: paneer,
    },

    {
      name: "Veg Mexican",
      ingredients: ["Capsicum", "Onion", "Tomato", "Mozzarella"],
      price: "380",
      id: "5",
      image: mexican,
    },

    {
      name: "Veggie Delight",
      ingredients: ["Capsicum", "Onion", "Tomato", "Mozzarella"],
      price: "280",
      id: "6",
      image: veg,
    },
  ];

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
