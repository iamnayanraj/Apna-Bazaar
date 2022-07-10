import React from "react";
import {
  FaGooglePlay,
  FaAppStoreIos,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../footer/footer.css";
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h6>Download App</h6>
          <div className="footer-left-icons">
            <a className="footer-left-first-icon" href="#">
              <FaGooglePlay />
            </a>
            <a className="footer-left-second-icon" href="#">
              <FaAppStoreIos />
            </a>
          </div>
        </div>
        <div className="footer-mid">
          <h6>&copy; 2022 Apna Bazaar</h6>
        </div>
        <div className="footer-right">
          <h6>Connect with us</h6>
          <div className="footer-right-icons">
            <a className="footer-right-first-icon" href="#">
              <FaFacebook />
            </a>
            <a className="footer-right-second-icon" href="#">
              <FaInstagram />
            </a>
            <a className="footer-right-third-icon" href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="copyright-medium">
          <h6>&copy; 2022 Apna Bazaar</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
