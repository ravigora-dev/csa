import { Link } from "react-router-dom";
import accentureLogo from "../../Images/company_Logos/Accenture-logo.png";
import amazonLogo from "../../Images/company_Logos/amazon-logo-1.png";
import apolloLogo from "../../Images/company_Logos/APOLLO-HOSPITALS-LOGO.jpg";
import capgeminiLogo from "../../Images/company_Logos/capgemini_logo.png";
import congnizantLogo from "../../Images/company_Logos/Cognizant-Logo.png";
import googleLogo from "../../Images/company_Logos/google_logo.webp";
import hclLogo from "../../Images/company_Logos/hcl_logo.png";
import peopleTechLogo from "../../Images/company_Logos/People_Tech_Group_logo.png";
// import relianceLogo from "../../Images/company_Logos/Reliance_Jio.svg";
import tcsLogo from "../../Images/company_Logos/tcs_logo.png";
import techMahindraLogo from "../../Images/company_Logos/Tech_Mahindra-Logo.svg";
import wiproLogo from "../../Images/company_Logos/wipro-logo.jpg";
import { IoIosCall } from "react-icons/io";
import "./index.css";

const HiredCompanies = () => {
  return (
    <div className="hired-companies-container">
      <h2 className="hired-company-heading">
        <span className="company-count">15+</span> Companies have hired <br />
        <span className="company-name">Career Sure Academy</span> learners
      </h2>
      <div className="company-logos-container">
        <img src={googleLogo} alt={googleLogo} className="company-logo" />
        <img
          src={techMahindraLogo}
          alt={techMahindraLogo}
          className="company-logo"
        />
        <img src={accentureLogo} alt={accentureLogo} className="company-logo" />
        <img src={capgeminiLogo} alt={capgeminiLogo} className="company-logo" />
        <img
          src={congnizantLogo}
          alt={congnizantLogo}
          className="company-logo"
        />
        <img
          src={peopleTechLogo}
          alt={peopleTechLogo}
          className="company-logo"
        />
        <img src={amazonLogo} alt={amazonLogo} className="company-logo" />
        <img src={tcsLogo} alt={tcsLogo} className="company-logo" />
        <img src={apolloLogo} alt={apolloLogo} className="company-logo" />
        <img src={wiproLogo} alt={wiproLogo} className="company-logo" />
        <img src={hclLogo} alt={hclLogo} className="company-logo" />
      </div>
      <div className="callback-btn">
        <button type="button" className="hired-request-btn">
          <Link
            to="https://wa.me/+916301046346"
            className="whatsapp-btn"
            target="_blank"
          >
            <IoIosCall className="calling-icon" />
            Schedule a demo
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HiredCompanies;
