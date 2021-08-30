import React from "react";

function Dish() {
  return (
    <div className="dish-container">
      <div className="pic-container">
        <img src="./dawat-images/menu_1.jpg" alt="" className="pic" />
      </div>
      <div className="ingredients">
        <span className="name">Cupcake Recipe</span>
        <span className="price">$20.00</span>
      </div>
    </div>
  );
}

export default Dish;
