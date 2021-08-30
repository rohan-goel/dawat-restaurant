import React from "react";
import ChefCard from "./ChefCard";

function Chef() {
  return (
    <div className="chefs">
      <div className="heading">
        <h2>Our Chefs</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>
      <div className="chef-list">
        <ChefCard name="Mark Angelila" photo="./dawat-images/team-1.jpg" />
        <ChefCard name="Angel Meskat" photo="./dawat-images/team-2.jpg" />
        <ChefCard name="Jon doe" photo="./dawat-images/team-3.jpg" />
        <ChefCard name="Angel Di Maria" photo="./dawat-images/team-4.jpg" />
        <ChefCard name="Park Ji Sung" photo="./dawat-images/team-5.jpg" />
      </div>
    </div>
  );
}

export default Chef;
