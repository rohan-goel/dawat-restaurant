import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="about">
        <img src="./dawat-images/main_logo.png" alt="" />
        <p>
          {" "}
          cumque est voluptatibus consequuntur, quisquam obcaecati esse in
          officiis ipsum ipsa fugiat!
        </p>
        <div>hello@dawat.com</div>
        <div>+8800000001111</div>
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
        <div className="left">
          <span>Teerms of use</span>
          <span>Privacy Policy</span>
          <span>Site Map</span>
          <span>Contact</span>
        </div>
        <div className="right">
          <i class="far fa-copyright" />
          2017 Dawat Restaurant All right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
