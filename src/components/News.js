import React from "react";
import NewsCard from "./NewsCard";

function News() {
  return (
    <div className="news">
      <div className="heading">
        <h2>Latest News</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>
      <div className="news-list">
        <NewsCard
          photo="./dawat-images/blog-1.jpg"
          title="Restaurant Welcome Day Meetup"
        />
        <NewsCard
          photo="./dawat-images/blog-2.jpg"
          title="Restaurant first Day first reservation"
        />
        <NewsCard
          photo="./dawat-images/blog-3.jpg"
          title="Home to get your home delivery?"
        />
      </div>
    </div>
  );
}

export default News;
