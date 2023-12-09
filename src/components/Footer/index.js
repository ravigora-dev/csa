import { Link } from "react-scroll";
import companyLogo from "../../Images/csa.png";
import upiIcon from "../../Images/payment_logos/upi-icon.svg";
import rupayIcon from "../../Images/payment_logos/rupay-icon.svg";
import googlepayIcon from "../../Images/payment_logos/Google_Pay_Logo.svg.png";
import phonepeIcon from "../../Images/payment_logos/phonepe.png";
import { FaLocationDot } from "react-icons/fa6";
import whatsappIcon from "../../Images/social_media_icons/whatsapp-social-media.svg";
import emailIcon from "../../Images/social_media_icons/email.webp";
import linkedinIcon from "../../Images/social_media_icons/LinkedIn.png";
import instagramIcon from "../../Images/social_media_icons/instagram.jpg";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-first-part">
        <div>
          <img src={companyLogo} alt="companyLogo" className="company-logo" />
          <h4 className="footer-first-part-heading">Reach Us</h4>
          <div className="phone-number-section">
            <img
              src={whatsappIcon}
              alt="socialMediaIcon"
              className="social-media-icon"
            />
            <p className="whatsup-number">+91 6301046346</p>
          </div>
          <div className="email-section">
            <img
              src={emailIcon}
              alt="socialMediaIcon"
              className="social-media-icon"
            />
            <p className="company-eamil">contact@careersureacademy.com</p>
          </div>
        </div>
        <div>
          <h4 className="footer-first-part-heading">Quick Links</h4>
          <div className="quick-links-container">
            <ul className="links-container">
              <li className="footer-link-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Home
                </Link>
              </li>
              <li className="footer-link-item">
                <Link
                  to="companies"
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Companies
                </Link>
              </li>
              <li className="footer-link-item">
                <Link
                  to="trainers"
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Trainers
                </Link>
              </li>
              <li className="footer-link-item">
                <Link
                  to="whyus"
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Why us
                </Link>
              </li>
              <li className="footer-link-item">
                <Link
                  to="review"
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Reviews
                </Link>
              </li>
              <li className="footer-link-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>
            </ul>
            {/* <ul className="links-container">
              <li className="footer-link-item">
                <Link to="/" className="footer-link">
                  Reviews of Academy
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/" className="footer-link">
                  Community
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/" className="footer-link">
                  Tutorials
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/" className="footer-link">
                  Blog
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
        <div>
          <h4 className="footer-first-part-heading">Payment Methods</h4>
          <div className="payments-icons-container">
            <div className="payments-icons-container-one">
              <img src={upiIcon} alt="paymentIcon" className="payment-icon" />
              <img src={rupayIcon} alt="paymentIcon" className="payment-icon" />
            </div>
            <div className="payments-icons-container-two">
              <img
                src={googlepayIcon}
                alt="paymentIcon"
                className="payment-icon"
              />
              <img
                src={phonepeIcon}
                alt="paymentIcon"
                className="payment-icon"
              />
            </div>
          </div>
          <div className="location-container">
            <FaLocationDot className="location-icon" />
            <p className="address">
              1st floor, LIG - 61/8 4th Phase,
              <br /> KPHB JNTU - Hitec city road,
              <br /> Hyderabad, Telangana 500072
            </p>
          </div>
        </div>
      </div>
      <hr className="row" />
      <div className="footer-middle-part">
        <div className="social-media-container">
          <Link 
          to="https://www.instagram.com/careersure_academy/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" 
          target="_blank">
            <img
              src={instagramIcon}
              alt="socialMediaIcon"
              className="social-media-icon"
            />
          </Link>
          <img
            src={linkedinIcon}
            alt="socialMediaIcon"
            className="social-media-icon"
          />
        </div>
      </div>
      <div className="copy-rights-container">
        <p>&copy; 2019 - 2023 Career sure academy | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
