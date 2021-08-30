import React from "react";

function Home() {
  return (
    <div className="first_page">
      <header className="header1">
        <div className="front">
          <span>
            <i class="far fa-envelope"></i>Email
          </span>
          <span>
            <i class="fas fa-phone-alt"></i>Telephone
          </span>
        </div>
        <div className="back">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-behance"></i>
          <i class="fas fa-wifi fa-rotate-45"></i>

          <button>Book A Ticket</button>
        </div>
      </header>
      <hr />
      <header className="header2">
        <div className="front">
          <img src="./dawat-images/main_logo.png" alt="" />
        </div>
        <div className="back">
          <a href="Home">Home</a>
          <a href="Home">About Us</a>
          <a href="Home">Offer</a>
          <a href="Home">Menu</a>
          <a href="Home">Team</a>
          <a href="Home">Blog</a>
          <a href="Home">Gallery</a>
          <a href="Home">Contact</a>
          <i class="fas fa-search"></i>
        </div>
      </header>
      <div className="slides">Our Menu See What's new today</div>
    </div>
  );
}

export default Home;
