import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer_screen">
      <div className="about">
        <img src="./dawat-images/main_logo.png" alt="" />
        <p className="addmgbtm">
          20,floor, Queenslad Victoria Building. 60 california street USA
        </p>
        <div className="addmgbtm makered">hello@dawat.com</div>
        <div className="addmgbtm makered">+8800000001111</div>
        <div className="contact_links">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-behance"></i>
          <i class="fab fa-google-plus-g"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-skype"></i>
        </div>
      </div>
      <div className="others">
        <div className="left makered">
          <span className="addpdright" >Terms of use</span>
          <span className="addpdright" >Privacy Policy</span>
          <span className="addpdright" >SiteMap</span>
          <span className="addpdright" >Contact</span>
        </div>
        <div className="right">
          <i class="far fa-copyright" />
          2017 <span className="makered">Dawat Restaurant</span> All right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
