import React from "react";

function Dish({name,price}) {
  return (
    <div className="dish-container">
      <div className="pic-container">
        <img src="./dawat-images/menu_1.jpg" alt="" className="pic" />
      </div>
      <div className="dish_details">
      <div className="ingredients">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
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
