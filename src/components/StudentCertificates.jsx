import React, { useState, useEffect } from "react";
import {
  Gurucharan,
  Archana,
  Udhay,
  Teja,
} from "../assets/student_Certificate";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const StudentCertificates = () => {
  const certificates = [
    {
      id: 1,
      studentName: "Gurucharan",
      imagePath: Gurucharan,
    },
    {
      id: 2,
      studentName: "Archana",
      imagePath: Archana,
    },
    {
      id: 3,
      studentName: "Udhay",
      imagePath: Udhay,
    },
    {
      id: 4,
      studentName: "Teja",
      imagePath: Teja,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer =
      !isHovered &&
      setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 3000);
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
    <section className="relative pb-12 bg-[#002B1D] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Main dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
        </div>
        
        {/* Large sparse dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:48px_48px]" />
        </div>

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_8px)]" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002B1D] via-transparent to-[#002B1D]/80" />
        
        {/* Radial gradient for vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,43,29,0.8)_100%)]" />

        {/* Glowing orbs in background */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent blur-sm" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Student <span className="text-primary relative inline-block">
                Success
                <span className="absolute inset-0 bg-orange-500/20 blur-xl"></span>
              </span> Stories
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 rounded-full shadow-orange-500/50 shadow-sm" />
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Celebrating achievements with industry-recognized certifications
            </p>
          </motion.div>
        </div>

        {/* Main Display */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Certificate Display */}
          <div className="relative bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3)] before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:-z-10 hover:before:from-white/30 before:transition-colors">
            {/* Glow effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-transparent to-emerald-500/20 rounded-2xl blur-xl opacity-50" />
            
            {/* Inner pattern for certificate container */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px]" />
            </div>

            <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-gradient-to-br from-black/60 to-black/40 p-0.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <img
                      src={certificates[currentIndex].imagePath}
                      alt={`${certificates[currentIndex].studentName}'s Certificate`}
                      className="max-h-full w-auto object-contain shadow-lg rounded-lg ring-1 ring-white/10 hover:ring-white/20 transition-all"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("prev")}
                className="pointer-events-auto p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/20"
              >
                <BsArrowLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("next")}
                className="pointer-events-auto p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/20"
              >
                <BsArrowRight size={18} />
              </motion.button>
            </div>

            {/* Student Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={currentIndex}
              className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-b-xl"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">
                  {certificates[currentIndex].studentName}
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-4">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className={`w-12 h-1.5 rounded-full transition-all duration-300 shadow-sm relative ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-orange-400 to-orange-600 shadow-orange-500/50"
                      : "bg-white/20 group-hover:bg-white/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertificates;
