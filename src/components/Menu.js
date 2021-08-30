import React from "react";
import Dish from "./Dish";
function Menu() {
  return (
    <div className="menu">
      <div className="heading">
        <h2>Today's Menu</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>

      <div className="category">
        <button>ALL</button>
        <button>BREAKFAST</button>
        <button>LUNCH</button>
        <button>DINNER</button>
        <button>COFFEE</button>
        <button>SNACKS</button>
      </div>

      <div className="dishes">
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
        <Dish />
      </div>
    </div>
  );
}

export default Menu;
