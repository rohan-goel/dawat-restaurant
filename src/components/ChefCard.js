import React from "react";

function ChefCard(props) {
  const photo = props.photo;
  const name = props.name;
  return (
    <div className="chef_parent">
      <div className="chef_img">
        <img src={photo} alt="" />
        <div className="social_media">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-behance"></i>
          <i class="fab fa-instagram"></i>
          <i class="fas fa-basketball-ball"></i>
        </div>
      </div>
      <div className="chef_name">{name}</div>
      <div className="chef_description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
        temporibus?
      </div>
    </div>
  );
}

export default ChefCard;
