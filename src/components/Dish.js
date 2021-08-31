import React from "react";

function Dish() {
  return (
    <div className="dish-container">
      <div className="pic-container">
        <img src="./dawat-images/menu_1.jpg" alt="" className="pic" />
      </div>
      <div className="dish_details">
      <div className="ingredients">
        <span className="name">Cupcake Recipe</span>
        <span className="price">$20.00</span>
      </div>
      <div className="contents">
        <span>-Juice Fruit</span>
        <span>-Chicken</span>
        <span>-Cherry</span>
        <span>-Vegetable</span>
        <span>-Milk</span>
        <span>-Potato</span>
        <span>-Tomato</span>
        <span>-Chilli</span>
        <span>-Sesame</span>
        
      </div>
      </div>
    </div>
  );
}

export default Dish;
