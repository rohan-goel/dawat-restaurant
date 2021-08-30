import React from "react";

function Home() {
  return (
    <div className="first_page">
      <header className="header1">
        <div>
          <span>
            <i class="far fa-envelope"></i>Email: Info@Restaurant.com
          </span>
          <span>
            <i class="fas fa-phone-alt"></i>Telephone: +18002345678
          </span>
        </div>
        <div>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-behance"></i>
          <i class="fas fa-wifi fa-rotate-45"></i>

          <button>BOOK A TICKET</button>
        </div>
      </header>
      <hr />
      <header className="header2">
        <div>
          <img src="./dawat-images/main_logo.png" alt="" />
        </div>
        <div className="nav_links">
          <a href="Home">Home</a>
          <a href="Home">About Us</a>
          <a href="Home">Offer</a>
          <a href="Home">Menu</a>
          <a href="Home">Team</a>
          <a href="Home">Blog</a>
          <a href="Home">Gallery</a>
          <a href="Home">Contact</a>
          <a href="Home">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </header>
      <div className="slides">
        <span>Our Menu</span>
        <span>SEE WHAT'S NEW TODAY</span>
        <button>TODAY'S MENU</button>
      </div>
    </div>
  );
}

export default Home;
