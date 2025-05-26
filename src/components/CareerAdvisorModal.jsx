import React from "react";
import whatsappIcon from "../assets/whatsApp-Icon.png";
import { useNavigate } from "react-router-dom";
import { Checked } from "../assets/icons";
import { Pasha } from "../assets/related_Pics";

const CareerAdvisorModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-poppins p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl z-10 rounded-xl overflow-hidden shadow-xl bg-white animate-slideUp">
        <div className="card flex flex-col sm:flex-row">
          {/* Grid container for two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0">
            {/* Content */}
            <div className="flex flex-col justify-center relative min-h-[220px] px-4 py-4 md:px-6 md:py-6 pt-12 md:pt-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight text-center">
                <span className="text-gray-800">Talk to Our Advisor &</span>
                <br />
                <span className="text-[#FF6B00]">
                  Unlock Your Career Potential!
                </span>
              </h2>

              <ul className="text-gray-700 space-y-2 md:space-y-3 mb-4 md:mb-6 mt-2 md:mt-3">
                <li className="flex items-start gap-2 md:gap-3">
                  <img
                    src={Checked}
                    className="w-4 h-4 flex-shrink-0 mt-1"
                    alt="Checked"
                  />
                  <span className="text-sm md:text-base text-gray-800 group-hover:text-gray-900 transition-colors">
                    Personalized Career Roadmap tailored to your skills & goals
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <img
                    src={Checked}
                    className="w-4 h-4 flex-shrink-0 mt-1"
                    alt="Checked"
                  />
                  <span className="text-sm md:text-base text-gray-800 group-hover:text-gray-900 transition-colors">
                    Free Career Counseling to help you make informed decisions
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <img
                    src={Checked}
                    className="w-4 h-4 flex-shrink-0 mt-1"
                    alt="Checked"
                  />
                  <span className="text-sm md:text-base text-gray-800 group-hover:text-gray-900 transition-colors">
                    Dedicated Placement Support to ensure you land the right
                    opportunity
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto">
                <a
                  href="https://api.whatsapp.com/send/?phone=916301046346&text=Hi%21+I%E2%80%99m+very+interested+%E2%80%94+can+you+send+me+more+info+as+soon+as+possible%3F&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gradient-to-r from-[#25D366] to-[#1DBA7E] hover:from-[#1DBA7E] hover:to-[#25D366] text-white flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-50"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                  />
                  WhatsApp Us
                </a>
                <button
                  className="btn bg-gradient-to-r from-[#FF6B00] to-[#E65C00] hover:from-[#E65C00] hover:to-[#FF6B00] text-white flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-opacity-50"
                  onClick={() => navigate("/enroll")}
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1Z" />
                  </svg>
                  Request a Call Back
                </button>
              </div>
            </div>

            {/* Advisor Image Section */}
            <div className="sm:block w-full relative overflow-hidden flex flex-col justify-end items-center">
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="absolute inset-6  bg-[#FF6B00] opacity-20 rounded-full filter blur-xl w-3/4 h-3/4 md:w-full md:h-full mx-auto my-auto"></div>
                <img
                  src={Pasha}
                  alt="Advisor Image"
                  className="w-auto h-[180px] md:w-full md:h-full object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-600 hover:text-gray-800 transition-colors bg-white/80 hover:bg-white p-2 md:p-2.5 rounded-full z-20 shadow-sm hover:shadow-md backdrop-blur-sm"
          aria-label="Close"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CareerAdvisorModal;
