import IITBombayLogo from "../../Images/alumni_logos/IIT_bombay_logo.png";
import IITDelhiLogo from "../../Images/alumni_logos/IIT-Delhi.avif";
import microsoftLogo from "../../Images/alumni_logos/microsoft_logo.png";
import capgeminiLogo from "../../Images/alumni_logos/capgemini_logo.png";
import tcsLogo from "../../Images/alumni_logos/tcs_logo.png";
import accentureLogo from "../../Images/alumni_logos/Accenture-logo.png";

import "./index.css";

const Alumni = () => {
  return (
    <div className="learn-alumni-container">
      <h4 className="alumni-heading">LEARN THE BEST FROM THE ALUMNI OF</h4>
      <div className="alumni-logos-container">
        <img src={capgeminiLogo} alt="capgemini" className="alumni-image" />
        <img src={microsoftLogo} alt="microsoftLogo" className="alumni-image" />
        <img src={accentureLogo} alt="accenture" className="alumni-image" />
        <img src={tcsLogo} alt="tcsLogo" className="alumni-image" />
        <img src={IITBombayLogo} alt="IITBombayLogo" className="alumni-image" />
        <img src={IITDelhiLogo} alt="IITDelhiLogo" className="alumni-image" />
      </div>
      <p className="and-many-more">and many more...</p>
    </div>
  );
};

export default Alumni;
