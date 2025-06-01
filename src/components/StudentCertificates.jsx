import React, { useState, useEffect } from "react";
import {
  Gurucharan,
  Archana,
  Udhay,
  Teja,
} from "../assets/student_Certificate";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const StudentCertificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timer =
      !isHovered &&
      setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 12000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const certificates = [
    {
      id: 1,
      studentName: "Gurucharan",
      imagePath: Gurucharan,
      role: "Software Tester",
      testimonial:
        "The hands-on projects and mentorship at Career Sure Academy were crucial for my success",
    },
    {
      id: 2,
      studentName: "Archana",
      imagePath: Archana,
      role: "Software Developer",
      testimonial:
        "The comprehensive training and mentorship at Career Sure Academy helped me secure my role at V&V Technologies.",
    },
    {
      id: 3,
      studentName: "Udhay",
      imagePath: Udhay,
      role: "Backend Developer",
      testimonial:
        "The comprehensive curriculum and hands-on projects at Career Sure Academy helped me secure my dream role at Multiplier AI!x",
    },
    {
      id: 4,
      studentName: "Teja",
      imagePath: Teja,
      role: "Software Developer",
      testimonial:
        "The industry-relevant curriculum and placement support at Career Sure Academy helped me land my first tech role.",
    },
  ];

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % certificates.length;
      }
      return prev === 0 ? certificates.length - 1 : prev - 1;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="relative py-10 flex items-center bg-gradient-to-b from-white to-gray-800/100">
      {/* Subtle Dot Pattern Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(#ff6b00 0.5px, transparent 0.5px), 
            radial-gradient(#ff6b00 0.5px, transparent 0.5px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
          opacity: "0.02",
        }}
      />

      {/* Professional Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.015]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 90,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, transparent 50%, #ff6b00 50.5%, #ff6b00 51%, transparent 51.5%),
            radial-gradient(circle at 100% 100%, transparent 50%, #ff6b00 50.5%, #ff6b00 51%, transparent 51.5%),
            linear-gradient(45deg, transparent 40%, #ff6b00 40.5%, #ff6b00 41%, transparent 41.5%),
            linear-gradient(-45deg, transparent 40%, #ff6b00 40.5%, #ff6b00 41%, transparent 41.5%)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0px 0px",
        }}
      />

      <motion.div
        className="relative w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Professional Header Section */}
        <motion.div
          variants={childVariants}
          className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Our{" "}
            <span className="text-primary relative inline-block">
              Graduates
              <span className="absolute left-0 -bottom-3 w-full h-4 pointer-events-none select-none">
                <svg
                  className="absolute left-1/2 -bottom-1 translate-x-[-50%] w-full h-6 z-0"
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 40 Q 50 0, 90 40"
                    stroke="#FF6B00"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </span>{" "}
            Making Impact
          </h2>
          <p className="text-gray-600 font-semibold text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Celebrating the achievements of our alumni who are transforming the
            tech industry
          </p>
        </motion.div>

        {/* Certificate Showcase Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("prev")}
              className="absolute left-0 sm:left-2 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-primary text-primary hover:text-white transition-all z-10 shadow-lg border border-gray-200 hover:border-primary/60 group -ml-2"
              aria-label="Previous"
            >
              <IoIosArrowBack className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </motion.button>

            <motion.div
              variants={childVariants}
              className="w-full bg-[#111111] backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-8 sm:p-10 relative overflow-hidden border border-gray-800"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                {certificates.map(
                  (certificate, index) =>
                    index === currentIndex && (
                      <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                          {/* Certificate Image */}
                          <div className="relative rounded-xl overflow-hidden shadow-2xl w-full bg-white aspect-[4/3] sm:aspect-[3/2] border border-gray-200 group">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-40"
                              whileHover={{ opacity: 0.6 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.img
                              src={certificate.imagePath}
                              alt={`${certificate.studentName}'s Certificate`}
                              className="w-full h-full object-contain rounded-xl p-4"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.4 }}
                            />
                          </div>

                          {/* Content Section */}
                          <div className="flex flex-col justify-center space-y-6 p-3">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="space-y-6"
                            >
                              <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2"></div>
                                <motion.h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                                  {certificate.studentName}
                                </motion.h3>
                                <motion.p className="text-xl text-primary font-medium tracking-wide">
                                  {certificate.role}
                                </motion.p>
                                <motion.p className="text-lg text-gray-300 leading-relaxed">
                                  "{certificate.testimonial}"
                                </motion.p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("next")}
              className="absolute right-0 sm:right-2 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-primary text-primary hover:text-white transition-all z-10 shadow-lg border border-gray-200 hover:border-primary/60 group -mr-2"
              aria-label="Next"
            >
              <IoIosArrowForward className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </div>

          {/* Professional Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-12 mb-4">
            {certificates.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-10 h-1.5 bg-primary shadow-[0_0_12px_rgba(255,107,0,0.3)] rounded-full"
                    : "w-2 h-2 bg-gray-300 hover:bg-primary/40 rounded-full"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentCertificates;
