import React,{useState} from "react";

function Home() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="first_page" id="home_screen">
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
          <i class="fas fa-basketball-ball"></i>

          <i class="fas fa-wifi fa-rotate-45"></i>

          <button>BOOK A TICKET</button>
        </div>
      </header>
      <hr />
      <header className={colorChange ? 'header2  makefixed' : 'header2'}>
        <div>
          <img src={colorChange ? './dawat-images/main_logo_black.png' : './dawat-images/main_logo.png'} alt="" />
        </div>
        <div className="nav_links">
          <a href="#home_screen">HOME</a>
          <a href="#story_screen">ABOUT US</a>
          <a href="#special_offer_screen">OFFER</a>
          <a href="#menu_screen">MENU</a>
          <a href="#chef_screen">TEAM</a>
          <a href="#news_screen">BLOG</a>
          <a href="#gallery_screen">GALLERY</a>
          <a href="#footer_screen">CONTACT</a>
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
