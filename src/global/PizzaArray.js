import React from "react";
import * as Al from "../assets/images";

const PizzaArray = [
  {
    name: "Italian Pizza",
    ingredients: [
      ["Tomato", Al.Tomato],
      ["Brokoli", Al.Brokoli],
      ["Onion", Al.Onion],
      ["Olive", Al.Olive],
      ["Mozzarella", Al.Mozzarella],
    ],
    price: "300",
    id: "1",
    image: Al.italian,
  },

  {
    name: "Pasta Pizza",
    ingredients: [
      ["Capsicum", Al.Capsicum],
      ["Onion", Al.Onion],
      ["Corn", Al.Corn],
      ["Tomato", Al.Tomato],
      ["Mozzarella", Al.Mozzarella],
    ],
    price: "400",
    id: "2",
    image: Al.pasta,
  },

  {
    name: "Mushroom Pizza",
    ingredients: [
      ["Capsicum", Al.Capsicum],
      ["Onion", Al.Onion],
      ["Mushroom", Al.Mushroom],
      ["Mozzarella", Al.Mozzarella],
    ],
    price: "500",
    id: "3",
    image: Al.masroom,
  },

  {
    name: "Pataka Paneer",
    ingredients: [
      ["Capsicum", Al.Capsicum],
      ["Olive", Al.Olive],
      ["Tomato", Al.Tomato],
      ["Corn", Al.Corn],
    ],
    price: "350",
    id: "4",
    image: Al.paneer,
  },

  {
    name: "Veg Mexican",
    ingredients: [
      ["Capsicum", Al.Capsicum],
      ["Onion", Al.Onion],
      ["Tomato", Al.Tomato],
      ["Mozzarella", Al.Mozzarella],
    ],
    price: "380",
    id: "5",
    image: Al.mexican,
  },

  {
    name: "Veggie Delight",
    ingredients: [
      ["Capsicum", Al.Capsicum],
      ["Onion", Al.Onion],
      ["Tomato", Al.Tomato],
      ["Mozzarella", Al.Mozzarella],
    ],
    price: "280",
    id: "6",
    image: Al.veg,
  },
];

export default PizzaArray;
