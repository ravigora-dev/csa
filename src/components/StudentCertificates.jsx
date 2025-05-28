import React, { useState, useEffect } from "react";
import {
  Gurucharan,
  Archana,
  Udhay,
  Teja,
} from "../assets/student_Certificate";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaTrophy, FaMedal, FaAward, FaRibbon } from "react-icons/fa";
import Logo from "../assets/csa_FaviconRound.png";

const StudentCertificates = () => {
  const certificates = [
    {
      id: 1,
      studentName: "Gurucharan",
      imagePath: Gurucharan,
      role: "Full Stack Developer",
      achievement: "Top Performer",
    },
    {
      id: 2,
      studentName: "Archana",
      imagePath: Archana,
      role: "UI/UX Designer",
      achievement: "Best Design",
    },
    {
      id: 3,
      studentName: "Udhay",
      imagePath: Udhay,
      role: "Backend Developer",
      achievement: "Excellence Award",
    },
    {
      id: 4,
      studentName: "Teja",
      imagePath: Teja,
      role: "Frontend Developer",
      achievement: "Outstanding Project",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer =
      !isHovered &&
      setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, certificates.length]);

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % certificates.length;
      }
      return prev === 0 ? certificates.length - 1 : prev - 1;
    });
  };

  return (
    <section className="relative py-10 bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      {/* Additional subtle diagonal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-gray-600 font-semibold text-lg max-w-2xl mx-auto leading-relaxed">
            Celebrating the <span className="text-primary">achievements</span>{" "}
            of our exceptional graduates who are making their mark in the tech
            industry
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-xl mx-auto rounded-lg">
          <div className="relative flex items-center justify-center">
            {/* Left Navigation */}
            <motion.button
              onClick={() => navigate("prev")}
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute -left-7 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl text-primary hover:text-primary/80 transition-all border-2 border-primary/20 hover:border-primary"
              aria-label="Previous"
            >
              <BsArrowLeft size={24} className="transform translate-x-[-2px]" />
            </motion.button>

            {/* Certificate Card */}
            <div
              className="w-full max-w-sm mx-auto bg-black p-2 border border-gray-200 rounded-lg relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Large Trophy Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <FaTrophy className="w-48 h-48 text-primary" />
              </div>

              {/* Decorative Badge Elements */}
              <div className="absolute top-0 left-0 w-24 h-24">
                <FaRibbon className="absolute top-2 left-2 w-6 h-6 text-primary/30 transform -rotate-45" />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24">
                <FaRibbon className="absolute top-2 right-2 w-6 h-6 text-primary/30 transform rotate-45" />
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24">
                <FaRibbon className="absolute bottom-2 left-2 w-6 h-6 text-primary/30 transform rotate-[-135deg]" />
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <FaRibbon className="absolute bottom-2 right-2 w-6 h-6 text-primary/30 transform rotate-[135deg]" />
              </div>

              <AnimatePresence mode="wait">
                {certificates.map(
                  (certificate, index) =>
                    index === currentIndex && (
                      <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative"
                      >
                        <motion.div
                          className="aspect-square relative mb-6 rounded-lg overflow-hidden shadow-md"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={certificate.imagePath}
                            alt={`${certificate.studentName}'s Certificate`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                          {/* Award Icon */}
                          <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-full shadow-md">
                            <FaAward className="w-4 h-4 text-primary" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {certificate.studentName}
                          </h3>
                        </motion.div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            {/* Right Navigation */}
            <motion.button
              onClick={() => navigate("next")}
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute -right-7 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl text-primary hover:text-primary/80 transition-all border-2 border-primary/20 hover:border-primary"
              aria-label="Next"
            >
              <BsArrowRight size={24} className="transform translate-x-[2px]" />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {certificates.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`transition-all ${
                  idx === currentIndex
                    ? "w-8 h-1.5 bg-primary rounded-full"
                    : "w-1.5 h-1.5 bg-gray-400 hover:bg-gray-500 rounded-full"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertificates;
