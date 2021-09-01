import React,{useState} from "react";
import Dish from "./Dish";
import menuDishes from "../menuDshes";
function Menu() {
  const [menu, setMenu] = useState(menuDishes);
  const filterItem = (filter) => {
    const filteredMenu = menuDishes.filter((element) => {
      return element.category === filter;
    })

    setMenu(filteredMenu);
  }

  return (
    <div className="menu" id="menu_screen">
      <div className="heading">
        <h2>Today's Menu</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>

      <div className="category">
        <button onClick={()=>setMenu(menuDishes)}  >ALL</button>
        <button onClick={()=>filterItem("Breakfast")}>BREAKFAST</button>
        <button onClick={()=>filterItem("Lunch")}>LUNCH</button>
        <button onClick={()=>filterItem("Dinner")}>DINNER</button>
        <button onClick={()=>filterItem("Coffee")}>COFFEE</button>
        <button onClick={()=>filterItem("Snacks")}>SNACKS</button>
      </div>

      <div className="dishes">
       
        {menu.map((element) => {
          return <Dish name={element.name} price={ element.price}/>
       })}
      </div>
    </div>
  );
}

export default Menu;
