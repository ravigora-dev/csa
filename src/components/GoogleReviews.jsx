import React from "react";
import { FaGoogle } from "react-icons/fa";
import {
  Gurucharan,
  Lokesh,
  udhay,
  Shahil,
  Shravya,
  Teja,
} from "../assets/google-Reviews";
import StudentCertificates from "./StudentCertificates";

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      imagePath: Gurucharan,
      alt: "Review by Gurucharan",
    },
    {
      id: 2,
      imagePath: Lokesh,
      alt: "Review by Lokesh",
    },
    {
      id: 3,
      imagePath: udhay,
      alt: "Review by udhay",
    },
    {
      id: 4,
      imagePath: Shahil,
      alt: "Review by Shahil",
    },
    {
      id: 5,
      imagePath: Shravya,
      alt: "Review by Shravya",
    },
    {
      id: 6,
      imagePath: Teja,
      alt: "Review by Teja",
    },
  ];

  return (
    <>
      <div className="py-16 bg-[#002B1D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              You don't have to, but
            </h2>
            <h3 className="text-3xl font-semibold text-white mb-8">
              here's what you can <span className="text-primary">trust</span>,
              though
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto transform hover:-translate-y-1 border-2 border-gray-100 hover:border-orange-400"
              >
                <div className="p-2 bg-gradient-to-r from-gray-50 to-white">
                  <img
                    src={review.imagePath}
                    alt={review.alt}
                    className="w-72 h-72 object-contain rounded-lg shadow-sm mx-auto bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?sca_esv=9b9e500fc75b63b3&rlz=1C1CHZN_enIN1126IN1126&sxsrf=AE3TifOpj2V6l-S7pSLfq7RA8cDVmdtu5w:1748420085417&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6HT68ZT0gpYztx4HQ2_k5SFAou74OjzxqtC1RzovCxE948Fika29nWKlhAnNjqbldyPRGFM6iIMFA-kCxvp7AlXo5ZoROUl3CtaAnKaXW5mc5ulAg%3D%3D&q=Career+sure+academy+Reviews&sa=X&ved=2ahUKEwjp7u-w3MWNAxU4SmwGHU48G1kQ0bkNegQILxAE&biw=1366&bih=633&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4285F4] hover:bg-[#2D6FE0] transition-colors duration-300"
            >
              <FaGoogle className="mr-2" />
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
      <StudentCertificates />
    </>
  );
};

export default GoogleReviews;
