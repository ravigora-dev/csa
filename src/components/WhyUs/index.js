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
        Full Stack Course for MERN Web Developer / Mobile App Developer (Job Oriented)
      </h4>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
          <strong>Industry-relevant curriculum:</strong> Our courses make you industry-ready by covering a wide range of skillsets, from programming languages like NodeJS and ReactJS for MERN web development, to a prime focus on React Native for Mobile App Development.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>Expert instructors:</strong> Our instructors don't leave after the course is over. They are passionate about teaching and resolve to helping you succeed till the day you get placed.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>100% job guarantee:</strong> We said this before, and we'll say it again. Yes, we are so confident in our programs that we guarantee you'll get a job in the IT industry upon successful completion of a Career Sure Academy course.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>Practical Learning:</strong> IT industry demands real work experience, not just website clone projects from YouTube tutorial hell. With us, you'll get your hands dirty with live hands-on challenges in our internship, and follow project-based learning to bridge the gap between theory and application.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>Daily Task Monitoring & Doubt Clearance:</strong> Unlike self-paced courses, live class mentors at Career Sure Academy school you through daily tasks to keep you accountable on your learning journey. Stuck with doubts while you're working on your projects? They'll resolve it for you. 
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>Flexible learning options:</strong> You will be offered live cohorts (online classroom sessions) to fit your busy schedule. College classes or 9-5 jobs? No more excuses towards learning and transitioning your IT career.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>Small Batch Size (15-20):</strong> We could take on more students on a Zoom call, but we don't. To ensure your doubts get our mentors' undivided attention, we keep Career Sure Academy's batch size limited to just 15 or 20.
        </p>
      </div>
      <div className="why-us-description-container">
        <BsHeartArrow className="arrow-icon" />
        <p className="why-us-description">
        <strong>24/7 Career Counseling:</strong> The Career Sure Academy team will help you take regular mock tests, identify your strengths and weaknesses, develop your resume building skills and cover letter, and prepare you for job interview success. Real mentorship is hard to find, but it's not impossible.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
