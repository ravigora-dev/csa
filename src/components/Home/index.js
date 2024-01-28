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
                Career Sure Academy Full Stack & Mobile App Development Course
              </h1>
              <h2>Internship in Hyderabad with 100% Job Placements in IT</h2>
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
                    Get trained from Industry experts having 8+ years of development experience
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
                      to="https://wa.me/+916301046346"
                      className="whatsapp-btn"
                      target="_blank"
                    >
                      <IoIosCall className="calling-icon" />
                      Schedule a free demo
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
                      to="https://wa.me/+916301046346"
                      className="whatsapp-btn"
                      target="_blank"
                    >
                      <IoIosCall className="calling-icon" />
                      Schedule a free demo
                    </Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="cards-container">
            <div>
              <h2>
                Let's get your IT career built for confidence at <strong>Career Sure Academy</strong>, the #1 CS Placement Portal in Hyderabad.
              </h2>
              <p>
                Are you a fresher or graduate looking to upskill yourself in Computer science and IT, and crack the job you've always dreamed of?
                <br />
                The truth is, job placements in full stack development / mobile app development don't come easy.
                Definitely not with:
                <ul>
                  <li>Basic college training</li>
                  <li>Reading programming books</li>
                  <li>Mindlessly grinding DSA on LeetCode</li>
                </ul>
              </p>
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