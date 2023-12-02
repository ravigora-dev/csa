import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClear } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import logo from "../../Images/csa.png";

import "./index.css";

const Header = () => {
  const [homeBtn, updateHomeBtnStatus] = useState(false);

  const chnageHomeBtnStatus = () => {
    updateHomeBtnStatus(!homeBtn);
  };
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <div>
            <Link to="/">
              <img className="website-logo" src={logo} alt="website logo" />
            </Link>
          </div>
          <div className="mobile-nav-bar-btn-container">
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={chnageHomeBtnStatus}
            >
              {homeBtn ? <MdClear /> : <RxHamburgerMenu />}
            </button>
            <button type="button" className="join-now-btn">
              <NavLink to="https://wa.me/+918919734391" target="_blank">
                <FaArrowRightToBracket />
              </NavLink>
            </button>
          </div>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/">
            <img className="website-logo" src={logo} alt="website logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-link home-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-menu-item">
              <Link
                to="companies"
                smooth={true}
                duration={2000}
                className="nav-link"
                activeClass="active"
              >
                Companies
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="trainers"
                smooth={true}
                duration={2000}
                className="nav-link"
                activeClass="active"
              >
                Trainers
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="whyus"
                smooth={true}
                duration={2000}
                className="nav-link"
                activeClass="active"
              >
                Why Us
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="review"
                smooth={true}
                duration={2000}
                className="nav-link"
                activeClass="active"
              >
                Reviews
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="about"
                smooth={true}
                duration={2000}
                activeclassname="active"
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <NavLink
                to="https://wa.me/+918919734391"
                target="_blank"
                className="nav-link"
                activeclassname="active"
              >
                Join now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {homeBtn && (
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <Link to="/" className="nav-link home-link" activeClass="active">
                Home
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="trainers" className="nav-link" activeClass="active">
                Trainers
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="whyus" className="nav-link" activeClass="active">
                Why Us
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="review" className="nav-link" activeClass="active">
                Reviews
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="about" className="nav-link" activeClass="active">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
