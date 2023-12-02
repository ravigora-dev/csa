import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vinayImage from "../../../Images/students_photos/vinay.png";
import dasthigiriImage from "../../../Images/students_photos/dasthigiri1.png";
import nikhilImage from "../../../Images/students_photos/nikhil.png";
import navneethImage from "../../../Images/students_photos/navneeth.png";
// import companyLogo from "../../../Images/company_Logos/capgemini_logo.png";
import quoteLogo from "../../../Images/quote.svg";
import unifyLogo from "../../../Images/students_photos/unifytech_logo.jpg";
import savenTechLogo from "../../../Images/students_photos/saven_tech.jpg";
import msysLogo from "../../../Images/students_photos/MSys-Standard-Logo-1.png";
import tcsLogo from "../../../Images/students_photos/tcs_logo.png";
import "./index.css";

export default class LargeDeviceSlider extends Component {
  render() {
    let settings = {
      dots: true,
      dotsClass: "slick-dots",
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="testinominal-container">
        <Slider {...settings}>
          <div className="each-testinominal">
            <div className="quote-and-review">
              <img src={quoteLogo} alt="quote" className="quote-logo" />
              <p className="stundent-review">
                CS Academy's '100% Job Assurance' program transformed me from a
                non-coder to a successful software developer. Their guidance and
                hands-on coaching made all the difference. Highly recommend for
                anyone looking to switch to tech without prior coding
                experience.{" "}
              </p>
            </div>
            <div className="name-and-comapany-logo">
              <p className="student-name">
                Navneeth <br />
              </p>
              <img src={unifyLogo} alt="companyLogo" className="company-logo" />
            </div>
            <h3 className="package-text">7.5 LPA</h3>
            <img
              src={navneethImage}
              alt="navneeth"
              className="stundent-image"
            />
          </div>
          <div className="each-testinominal">
            <div className="quote-and-review">
              <img src={quoteLogo} alt="quote" className="quote-logo" />
              <p className="stundent-review">
                I am delighted to announce that I have been appointed as an
                Front end Developer at TCS.All thanks to CS Academy (100% Job
                Assurance) program for all the guidance. They trained me from
                scratch with Live-classes, mocks, communication classes which
                helped me crack interview.
              </p>
            </div>
            <div className="name-and-comapany-logo">
              <p className="student-name">
                Nikhil <br />
              </p>
              <img src={tcsLogo} alt="companyLogo" className="company-logo" />
            </div>
            <h3 className="package-text">7.5 LPA</h3>
            <img src={nikhilImage} alt="nikhil" className="stundent-image" />
          </div>
          <div className="each-testinominal">
            <div className="quote-and-review">
              <img src={quoteLogo} alt="quote" className="quote-logo" />
              <p className="stundent-review">
                The CS Academy's '100% Job Assurance' program is to much credit
                for my recent success. With its in-person instruction and
                professional guidance, this program was essential in assisting
                me in moving from a non-technical position to this fascinating
                tech post. I appreciate this life-changing encounter.
              </p>
            </div>
            <div className="name-and-comapany-logo">
              <p className="student-name">
                Dasthagiri <br />
              </p>
              <img
                src={savenTechLogo}
                alt="companyLogo"
                className="company-logo"
              />
            </div>
            <h3 className="package-text">8 LPA</h3>
            <img
              src={dasthigiriImage}
              alt="dasthagiri"
              className="stundent-image"
            />
          </div>
          <div className="each-testinominal">
            <div className="quote-and-review">
              <img src={quoteLogo} alt="quote" className="quote-logo" />
              <p className="stundent-review">
                My recent achievement owes a huge debt to the '100% Job
                Assurance' program at CS Academy. This program, with its
                hands-on coaching and expert guidance, was the key to my
                transition from a non-technical BPO role to an exciting career
                as a developer. I can't express enough how life-changing this
                experience has been.
              </p>
            </div>
            <div className="name-and-comapany-logo">
              <p className="student-name">
                Vinay <br />
              </p>
              <img src={msysLogo} alt="companyLogo" className="company-logo" />
            </div>
            <h3 className="package-text">7 LPA</h3>
            <img src={vinayImage} alt="vinay" className="stundent-image" />
          </div>
        </Slider>
      </div>
    );
  }
}
