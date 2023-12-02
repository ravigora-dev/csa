import ProgramHeader from "../ProgramHeader";
import companyLogo from "../../../Images/csa.png";
import "./index.css";

const ProgramHome = () => {
  return (
    <div className="">
      <div className="top">
        <ProgramHeader />
        <div className="top-context-container">
          <div>
            <h1 className="program-heading">
              Learn like top IITians and <br /> achieve high-paid <br />
              software jobs
            </h1>
            <div className="top-larger-device-request-btn">
              <button type="button" className="program-home-request-btn">
                Request a Call
              </button>
            </div>
          </div>
          <div className="top-image-container">
            <img
              src={companyLogo}
              alt="companyLogo"
              className="program-company-logo"
            />
          </div>
          <div className="top-mobile-device-request-btn">
            <button type="button" className="program-home-request-btn">
              Request a Call
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProgramHome;
