import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClear } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import logo from "../../../Images/csa.png";

import "./index.css";

const ProgramHeader = () => {
  const [homeBtn, updateHomeBtnStatus] = useState(false);

  const chnageHomeBtnStatus = () => {
    updateHomeBtnStatus(!homeBtn);
  };
  return (
    <nav className="program-nav-header">
      <div className="program-nav-content">
        <div className="program-nav-bar-mobile-logo-container">
          <div>
            <Link to="/">
              <img
                className="program-website-logo"
                src={logo}
                alt="website logo"
              />
            </Link>
          </div>
          <div className="program-mobile-nav-bar-btn-container">
            <button
              type="button"
              className="program-nav-mobile-btn"
              onClick={chnageHomeBtnStatus}
            >
              {homeBtn ? <MdClear /> : <RxHamburgerMenu />}
            </button>
            <button type="button" className="program-join-now-btn">
              <FaArrowRightToBracket />
            </button>
          </div>
        </div>
        <div className="program-nav-bar-large-container">
          <Link to="/">
            <img
              className="program-website-logo"
              src={logo}
              alt="website logo"
            />
          </Link>
          <ul className="program-nav-menu">
            <li className="program-nav-menu-item">
              <Link to="/" className="program-nav-link home-link">
                Home
              </Link>
            </li>
            <li className="program-nav-menu-item">
              <Link to="/" className="program-nav-link">
                Program
              </Link>
            </li>
            <li className="program-nav-menu-item">
              <Link to="/" className="program-nav-link">
                Reviews
              </Link>
            </li>
            <li className="program-nav-menu-item">
              <Link to="/" className="program-nav-link">
                About
              </Link>
            </li>
            <li className="program-nav-menu-item">
              <Link to="/" className="program-nav-link">
                Join now
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {homeBtn && (
        <div className="program-nav-menu-mobile">
          <ul className="program-nav-menu-list-mobile">
            <li className="program-nav-menu-item-mobile">
              <Link to="/" className="program-nav-link home-link">
                Home
              </Link>
            </li>
            <li className="program-nav-menu-item-mobile">
              <Link to="/" className="program-nav-link">
                Program
              </Link>
            </li>
            <li className="program-nav-menu-item-mobile">
              <Link to="/" className="program-nav-link">
                Reviews
              </Link>
            </li>
            <li className="program-nav-menu-item-mobile">
              <Link to="/" className="program-nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ProgramHeader;
