// import { MdArrowRightAlt } from "react-icons/md";
import { BsHeartArrow } from "react-icons/bs";
import "./index.css";

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <h3 className="why-us-main-heading">Why Us</h3>
      <h4 className="why-us-content">
        Choosing
        <span className="why-us-company-name"> Career Sure Academy</span> :-
        Your Path to Success
      </h4>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
          IndustryRelevant Curriculum: Our courses are designed in collaboration
          with industry experts, ensuring you acquire skills that match industry
          demands.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
          Practical Learning: Experience handson, projectbased learning to
          bridge the gap between theory and application.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
          Career Guidance: Benefit from our career counseling services, helping
          you make informed decisions and carve a successful professional path.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
