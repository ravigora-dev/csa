import React from "react";
import QuoteForm from "../components/QuoteForm";
import { useLocation } from "react-router-dom";

const EnrollPage = () => {
  const location = useLocation();
  const { downloadType, courseToDownload, postSubmitDownloadType } =
    location.state || {};

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 pt-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-tr from-orange-300 to-orange-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/3 right-12 w-6 h-6 bg-orange-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 border-4 border-orange-200 rounded-full opacity-20"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title - Above Grid */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Begin Your Tech Journey With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              Expert Guidance
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Transform your career with personalized mentorship and
            industry-focused training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            {/* Content Section */}
            <div className="bg-white backdrop-blur-lg rounded-2xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-orange-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                Why Choose Our Program?
              </h2>
              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Personalized Career Roadmap
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get a customized learning path tailored to your skills,
                      experience, and career goals
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Expert Career Counseling
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      One-on-one sessions with industry experts to guide your
                      career decisions
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Dedicated Placement Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get connected with top companies and receive interview
                      preparation support
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/80 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      Job Assistance And Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive job assistance including resume building,
                      mock interviews, career guidance, and placement support to
                      help you land your dream role.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Container */}
          <div className="flex flex-col justify-start h-full">
            <div className="sticky top-8 w-full">
              <div className="relative">
                {/* Form background decoration */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-orange-300 to-orange-200 rounded-full opacity-30 blur-xl"></div>

                {/* Form Card */}
                <div className="relative bg-white backdrop-blur-lg rounded-2xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-orange-100">
                  <QuoteForm
                    downloadType={downloadType}
                    courseToDownload={courseToDownload}
                    postSubmitDownloadType={postSubmitDownloadType}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
