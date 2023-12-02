// import { MdArrowRightAlt } from "react-icons/md";
// import { MdDoubleArrow } from "react-icons/md";
import { BsHeartArrow } from "react-icons/bs";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h3 className="about-us-main-heading">About Us</h3>
      <h4 className="about-us-content">
        Welcome to
        <span className="about-us-company-name"> Career Sure Academy</span> :
        Nurturing Talent, Building Careers
      </h4>
      <div className="about-us-description-container">
        <BsHeartArrow className="aboutus-arrow-icon" />
        <p className="about-us-description">
          At Career Sure Academy, we believe in nurturing talent and
          transforming it into successful careers. With a commitment to
          excellence, we provide an environment that fosters creativity,
          innovation, and skill development. Our experienced educators,
          industryaligned courses, and stateoftheart facilities make us a
          leading choice for those aspiring to thrive in their chosen fields.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
