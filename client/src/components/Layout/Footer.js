import React from "react";
import playStore from "../../images/playstore.png";
import appstore from "../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className='leftFooter'>
        <h4>Hãy xem sản phẩm của chúng tôi</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt='playstore'/>
        <img src={appstore} alt='appstore'/>
      </div>

      <div className='midFooter'>
        <h1>Tấu Hài Hải Sản</h1>
        <p>High quality is our first priority</p>

        <p>Copyrights 2023 &copy;TauHaiTime</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow Us</h4>
        <a href='https://www.facebook.com/profile.php?id=100072159468594'>Facebook</a>
        <a href='https://www.facebook.com/profile.php?id=100072159468594'>Instagram</a>
        <a href='https://www.facebook.com/profile.php?id=100072159468594'>Github</a>
      </div>
    </footer>
  );
};

export default Footer;
