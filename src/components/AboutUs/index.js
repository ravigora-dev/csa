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
          Career Sure Academy trainers believe in nurturing your talent and
          transforming it into a successful career.<br/>
          They are industry experts having 8+ years of development experience in the tech world themselves. So, who better than them to teach you?
        </p>
      </div>
      <div className="about-us-description-container">
        <BsHeartArrow className="aboutus-arrow-icon" />
        <p className="about-us-description">
          Career Sure Academy courses are not limited to the freshers only.
          It's true that they need a headstart more than anyone in this fast-paced world.
          Our course is for every learner -
          <ul>
            <li>the graduates</li>
            <li>the ones stuck in bad job conditions</li>
            <li>professionals working with low packages</li>
            <li>the ones trying to make their switch from non-IT professions to an IT career</li>
          </ul>
          <br />
          Come join us, and we'll help you discover the skills you're capable of.
        </p>
      </div>
      <h4>
      <strong>It's not us saying, it's <em>them</em>.</strong>
      <p>
        Our recently placed candidates shared their reasons why they chose Career Sure Academy over other Full Stack Development courses:
      </p>
      </h4>
    </div>
  );
};

export default AboutUs;
