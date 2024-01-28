import { Link } from "react-router-dom";
import pranaviImage from "../../Images/trainers_images/Sylender.png";
import revanthImage from "../../Images/trainers_images/Uday_Bosch.png";
import sriramImage from "../../Images/trainers_images/Ravi_accenture.png";
import rahulImage from "../../Images/trainers_images/rahul_trainer.jpg";
import trivikramImage from "../../Images/trainers_images/Chandu_accenture.png";
import studentImage from "../../Images/trainers_images/Vamsi_infosys.png";
import { IoIosCall } from "react-icons/io";

import "./index.css";

const Trainers = () => {
  return (
    <div className="trainers-container">
      <h1 className="trainers-heading">
        "Our elite teams are dedicated to guide you in programming, and secure
        you a developer job"
      </h1>
      <div className="tainers-image-container">
        <div>
          <div className="traine-category-container">
            <h4 className="traine-category-heading">
              <span className="trainee-type">Trainers</span> are alumni of IITs
              and Top MNCs
            </h4>
            <div className="divid-two-traines-wise">
              {/* <div className="each-tainee-container">
                <img src={rahulImage} alt="rahul" className="traine-image" />
                <p className="traine-name">Rahul</p>
                <p className="traine-company">Ex. Amazon</p>
              </div>
              <div className="each-tainee-container">
                <img
                  src={avinashImage}
                  alt="avinash"
                  className="traine-image"
                />
                <p className="traine-name">Avinash Dara</p>
                <p className="traine-company">Ex. Nvidia</p>
              </div> */}
              <div className="each-tainee-container">
                <img src={rahulImage} alt="sriram" className="traine-image" />
                <p className="traine-name">Rahul</p>
                <p className="traine-company">Senior DevOps Analyst
                  | Infosys</p>
              </div>
              <div className="each-tainee-container">
                <img src={sriramImage} alt="sriram" className="traine-image" />
                <p className="traine-name">Ravi</p>
                <p className="traine-company">Frontend Engineer | Accenture</p>
              </div>
            </div>
            <p className="and-more">and more...</p>
          </div>
          <div className="traine-category-container">
            <h4 className="traine-category-heading">
              Get doubts resolved by
              <span className="trainee-type"> Product Developers</span>
            </h4>
            <div className="divid-two-traines-wise">
              <div className="each-tainee-container">
                <img
                  src={revanthImage}
                  alt="revanth"
                  className="traine-image"
                />
                <p className="traine-name">Revanth</p>
                <p className="traine-company">Backend Architect</p>
              </div>
              {/* <div className="each-tainee-container">
                <img src={pavanImage} alt="pavan" className="traine-image" />
                <p className="traine-name">Pavan</p>
                <p className="traine-company">
                  Software Development Lead BIT Mesra
                </p>
              </div> */}
            </div>
            <p className="and-more">and more...</p>
          </div>
        </div>
        <div className="taine-student-container">
          <img
            src={studentImage}
            alt="studentImage"
            className="traine-student-image"
          />
          <div>
            <p className="student-at">Vamshi</p>
            <p className="student-at-career-sure-academy">
              Lead Engineer
              Infosys
            </p>
          </div>
        </div>
        <div>
          <div className="traine-category-container">
            <h4 className="traine-category-heading">
              <span className="trainee-type">Career Coaches</span> help you land
              your first job
            </h4>
            <div className="divid-two-traines-wise">
              <div className="each-tainee-container">
                <img
                  src={trivikramImage}
                  alt="trivikram"
                  className="traine-image"
                />
                <p className="traine-name">Trivikram</p>
                <p className="traine-company">Backend Architect </p>
              </div>
            </div>
            <p className="and-more">and more...</p>
          </div>
          <div className="traine-category-container">
            <h4 className="traine-category-heading">
              Gain expert tech insights from{" "}
              <span className="trainee-type">Masterclasses</span>
            </h4>
            <div className="divid-two-traines-wise">
              {/* <div className="each-tainee-container">
                <img
                  src={rakeshMisraImage}
                  alt="rakesh"
                  className="traine-image"
                />
                <p className="traine-name">Rakesh Misra</p>
                <p className="traine-company">
                  Cofounder, Uhana Stanford Alumnus
                </p>
              </div> */}
              <div className="each-tainee-container">
                <img
                  src={pranaviImage}
                  alt="pranavi"
                  className="traine-image"
                />
                <p className="traine-name">Sylender</p>
                <p className="traine-company">
                  Full Stack Developer | Wipro
                </p>
              </div>
            </div>
            <p className="and-more">and more...</p>
          </div>
        </div>
      </div>
      <div className="traine-callback-btn">
        <button type="button" className="traine-request-btn">
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
  );
};

export default Trainers;
