import React from "react";
import { useNavigate } from "react-router-dom";
import { placedStudents } from "../constant";
import {
  Udhay,
  Teja,
  Rambabu,
  Dileep,
  Jagadeesh,
  Rushikesh,
  Shahil,
  Vinay,
  Nikhil,
  Navneeth,
  Sachin,
  Dasthagiri,
  Archana,
} from "../assets/placements";
import { Nova } from "../assets/company_Logos";

function Placements() {
  const navigate = useNavigate();

  return (
    <div className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="text-primary">
              Success Stories
            </span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "90%", label: "Placement Rate" },
            { value: "₹4LPA", label: "Average Package" },
            { value: "1000+", label: "Students Placed" },
            { value: "500+", label: "Partner Companies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placed Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placedStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 hover:border-primary/30"
            >
              {/* Student Image and Company Logo */}
              <div className="relative h-52 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 border-b border-gray-100">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-xl transform group-hover:scale-110 transition-transform duration-500 border border-gray-100 flex items-center justify-center">
                      <img
                        src={student.companyLogo}
                        alt={student.company}
                        className="w-full h-full object-contain"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-xl drop-shadow-lg tracking-wide">
                      {student.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                  {student.name}
                </h3>
                <p className="text-primary font-semibold text-base mb-3">
                  {student.role}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full text-xl font-extrabold shadow-lg transform hover:scale-105 transition-transform duration-300">
                    {student.package}
                  </span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                    {student.course}
                  </span>
                </div>
                <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-gray-600 text-xs leading-relaxed">
                    "{student.testimonial}"
                  </p>
                  <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">
                    "
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of successful professionals and take the first
            step towards your dream career
          </p>
          <button
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-primary hover:border-primary/80"
            onClick={() => navigate("/enroll")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Placements;
