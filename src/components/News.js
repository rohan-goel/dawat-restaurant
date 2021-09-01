import React from "react";
import NewsCard from "./NewsCard";
import Carousel from 'react-elastic-carousel';

function News() {
  const breakPoints = [
  {width:500, itemToShow:3}
]


  return (
    <div className="news" id="news_screen">
      <div className="heading">
        <h2>Latest News</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>
      <div className="news-list">
        <Carousel breakPoints={breakPoints}>
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
        </Carousel>
      </div>
    </div>
  );
}

export default News;
