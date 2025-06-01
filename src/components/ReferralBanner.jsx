import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const ReferralBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = 10;
      
      // Only show when at the top of the page
      if (currentScrollPos < scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleClose = () => {
    setIsVisible(false);
    // Dispatch event to notify other components
    window.dispatchEvent(new Event('referralBannerClosed'));
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-gray-600/90 via-gray-700 to-gray-800/95 text-white py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <FaUserFriends className="hidden sm:block text-xl" />
            <p className="font-medium text-center">
              <span className="hidden sm:inline">Limited Time Offer! </span>
              Get <span className="font-bold">25% off</span> on all courses!
              <a
                href="/enroll"
                className="ml-2 font-bold underline hover:no-underline inline-flex items-center group"
              >
                Enroll Now
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </p>
            <button
              onClick={handleClose}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <IoClose className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner; 