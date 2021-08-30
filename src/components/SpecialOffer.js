import React from "react";

function SpecialOffer() {
  return (
    <div className="special_offer">
      <div className="heading">
        <h2>Special Package</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>
      <div className="parent_package_screen">
        <img src="./dawat-images/promo_slide_1.jpg" alt="" className="promo1" />
        <div className="card">
          <h3> $40% off for 9'-12' pizza-Wed, Thu,Friday only</h3>
          <p>Pizza 12 inch + Side Dish 1.5L Coke Bottle Only from 209,000</p>
          <button className="order-now">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
