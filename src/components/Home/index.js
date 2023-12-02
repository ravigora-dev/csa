import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "../Header";
import academyPersonPhoto from "../../Images/students_photos/dasthigiri2.png";
import intensivePersonPhoto from "../../Images/students_photos/navneeth.png";
import companyLogo from "../../Images/csa.png";
import { IoIosCall } from "react-icons/io";
import HiredCompanies from "../HiredCompanies";
import Alumni from "../Alumni";
import WhyUs from "../WhyUs";
import Trainers from "../Trainers";
import AboutUs from "../AboutUs";
import LargeDeviceSlider from "../Testinominals/LargeDevicesSlider";
import MobileDeviceSlider from "../Testinominals/MobileDevicesSlider";
import WhatsAppButton from "../WhatsappButton";
import Footer from "../Footer";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Element name="home">
        <div>
          <div className="main-home-container">
            <div className="caption-container">
              <h1 className="home-heading">
                "Empowering and Upskilling Unemployed Youth – <br />
                <span className="home-heading-academy-name">
                  Career Sure Academy -<br />
                </span>
                <span className="quatestion">Where Success Begins!"</span>
              </h1>
              <img
                src={companyLogo}
                alt="companyPhoto"
                className="company-image"
              />
            </div>
            <div className="cards-container">
              <div className="course-detailed-box">
                <div className="course-details-image-container">
                  <h2 className="academy-heading">
                    {/* <span className="card-lpa-text">8 LPA</span> <br />{" "} */}
                    8 LPA
                  </h2>

                  <img
                    src={academyPersonPhoto}
                    alt="academyPersonPhoto"
                    className="academy-person-image"
                  />
                </div>
                <div className="academy-description-container">
                  <h3 className="academy-description">
                    Get trained from Industry experts having more 8+ years
                    development experience
                  </h3>
                </div>
                <div className="eligibility-creteria-container">
                  <p className="academy-type">Graduates From 2017 - 2026</p>
                  <p className="academy-year">NON-IT, IT backgrounds</p>
                </div>
                <div className="batches-seats-container">
                  <div>
                    <p className="batch">BATCH STARTS</p>
                    <p className="day-name">Today</p>
                  </div>
                  <div>
                    <p className="seats">🔥 Limited Seats</p>
                    <p className="availability">Available</p>
                  </div>
                </div>
                <div className="callback-btn-container">
                  <button type="button" className="request-btn">
                    <Link
                      to="https://wa.me/+918919734391"
                      className="whatsapp-btn"
                      target="_blank"
                    >
                      <IoIosCall className="calling-icon" />
                      Schedule a demo
                    </Link>
                  </button>
                </div>
              </div>
              <div className="course-detailed-box">
                <div className="course-details-image-container">
                  <h2 className="academy-heading">7.5 LPA</h2>
                  <img
                    src={intensivePersonPhoto}
                    alt="academyPersonPhoto"
                    className="academy-person-image"
                  />
                </div>
                <div className="academy-description-container">
                  <h3 className="academy-description">
                    Daily live classes,
                    <br /> Monitoring sessions, Internships
                  </h3>
                </div>
                <div className="eligibility-creteria-container">
                  <div className="intensive-eligibility-type">
                    <p className="academy-type graduates">STUDENTS</p>
                    <p className="academy-type final-year">DROPOUTS</p>
                  </div>
                  <p className="academy-year any-batch">DEGREE, CAREER GAPS</p>
                </div>
                <div className="batches-seats-container">
                  <div>
                    <p className="batch">BATCH STARTS</p>
                    <p className="day-name">Today</p>
                  </div>
                  <div>
                    <p className="seats">🔥 Limited Seats</p>
                    <p className="availability">Available</p>
                  </div>
                </div>
                <div className="callback-btn-container">
                  <button type="button" className="request-btn">
                    <Link
                      to="https://wa.me/+918919734391"
                      className="whatsapp-btn"
                      target="_blank"
                    >
                      <IoIosCall className="calling-icon" />
                      Schedule a demo
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Alumni />
          <Element name="companies">
            <HiredCompanies />
          </Element>
          <Element name="whyus">
            <WhyUs />
          </Element>
          <Element name="trainers">
            <Trainers />
          </Element>
          <Element name="about">
            <AboutUs />
          </Element>
          <Element name="review">
            <div className="large-device-slider">
              <LargeDeviceSlider />
            </div>
            <div className="mobile-device-slider">
              <MobileDeviceSlider />
            </div>
          </Element>
          <Footer />
          <WhatsAppButton />
        </div>
      </Element>
    </div>
  );
};

export default Home;
