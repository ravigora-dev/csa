import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vinayImage from "../../../Images/students_photos/vinay.png";
import dasthigiriImage from "../../../Images/students_photos/dasthigiri1.png";
import nikhilImage from "../../../Images/students_photos/nikhil.png";
import navneethImage from "../../../Images/students_photos/navneeth.png";
// import companyLogo from "../../../Images/company_Logos/capgemini_logo.png";
import tcsLogo from "../../../Images/students_photos/tcs_logo.png";
import quoteLogo from "../../../Images//quote.svg";
import unifyLogo from "../../../Images/students_photos/unifytech_logo.jpg";
import savenTechLogo from "../../../Images/students_photos/saven_tech.jpg";
import msysLogo from "../../../Images/students_photos/MSys-Standard-Logo-1.png";
import "./index.css";

export default class MobileDeviceSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="mobile-device-testinominal-container">
        <Slider {...settings}>
          <div className="mobile-device-each-testinominal">
            <div className="mobile-device-quote-and-review">
              <img
                src={quoteLogo}
                alt="quote"
                className="mobile-device-quote-logo"
              />
              <p className="mobile-device-stundent-review">
                CS Academy's '100% Job Assurance' program transformed me from a
                non-coder to a successful software developer. Their guidance and
                hands-on coaching made all the difference. Highly recommend for
                anyone looking to switch to tech without prior coding
                experience.{" "}
              </p>
            </div>
            <div className="mobile-device-name-and-comapany-logo">
              <p className="mobile-device-student-name">
                Navneeth <br /> <span className="lpa-text">7.5 LPA</span>
              </p>
              <img
                src={unifyLogo}
                alt="companyLogo"
                className="mobile-device-company-logo"
              />
            </div>
            <img
              src={navneethImage}
              alt="navneeth"
              className="mobile-device-stundent-image"
            />
          </div>
          <div className="mobile-device-each-testinominal">
            <div className="mobile-device-quote-and-review">
              <img
                src={quoteLogo}
                alt="quote"
                className="mobile-device-quote-logo"
              />
              <p className="mobile-device-stundent-review">
                I am delighted to announce that I have been appointed as an
                Front end Developer at TCS.All thanks to CS Academy (100% Job
                Assurance) program for all the guidance. They trained me from
                scratch with Live-classes, mocks, communication classes which
                helped me crack interview.
              </p>
            </div>
            <div className="mobile-device-name-and-comapany-logo">
              <p className="mobile-device-student-name">
                Nikhil <br /> <span className="lpa-text">7 LPA</span>
              </p>
              <img
                src={tcsLogo}
                alt="companyLogo"
                className="mobile-device-company-logo"
              />
            </div>
            <img
              src={nikhilImage}
              alt="nikhil"
              className="mobile-device-stundent-image"
            />
          </div>
          <div className="mobile-device-each-testinominal">
            <div className="mobile-device-quote-and-review">
              <img
                src={quoteLogo}
                alt="quote"
                className="mobile-device-quote-logo"
              />
              <p className="mobile-device-stundent-review">
                The CS Academy's '100% Job Assurance' program is to much credit
                for my recent success. With its in-person instruction and
                professional guidance, this program was essential in assisting
                me in moving from a non-technical position to this fascinating
                tech post. I appreciate this life-changing encounter.
              </p>
            </div>
            <div className="mobile-device-name-and-comapany-logo">
              <p className="mobile-device-student-name">
                Dasthagiri <br /> <span className="lpa-text">8 LPA</span>
              </p>
              <img
                src={savenTechLogo}
                alt="companyLogo"
                className="mobile-device-company-logo"
              />
            </div>
            <img
              src={dasthigiriImage}
              alt="dasthagiri"
              className="mobile-device-stundent-image"
            />
          </div>
          <div className="mobile-device-each-testinominal">
            <div className="mobile-device-quote-and-review">
              <img
                src={quoteLogo}
                alt="quote"
                className="mobile-device-quote-logo"
              />
              <p className="mobile-device-stundent-review">
                My recent achievement owes a huge debt to the '100% Job
                Assurance' program at CS Academy. This program, with its
                hands-on coaching and expert guidance, was the key to my
                transition from a non-technical BPO role to an exciting career
                as a developer. I can't express enough how life-changing this
                experience has been.
              </p>
            </div>
            <div className="mobile-device-name-and-comapany-logo">
              <p className="mobile-device-student-name">
                Vinay <br /> <span className="lpa-text">7 LPA</span>
              </p>
              <img
                src={msysLogo}
                alt="companyLogo"
                className="mobile-device-company-logo"
              />
            </div>
            <img
              src={vinayImage}
              alt="vinay"
              className="mobile-device-stundent-image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
