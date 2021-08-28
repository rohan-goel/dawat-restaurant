import React from "react";

function NewsCard(props) {
  const photo = props.photo;
  const title = props.title;

  return (
    <div className="news_parent">
      <div className="news_img">
        <img src={photo} alt="" />
      </div>
      <div className="chef_name">{title}</div>
      <div className="news_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam
        facere error nemo quae recusandae! Iure saepe, eos autem, fa
      </div>
      <div className="news_details">
        <span>24 Feb 2017</span>
        <span>5 comments</span>
      </div>
    </div>
  );
}

export default NewsCard;
