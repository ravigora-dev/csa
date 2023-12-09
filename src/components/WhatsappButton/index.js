import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
// import { IoIosContact } from "react-icons/io";
// import { MdAddCall } from "react-icons/md";
import "./index.css";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <Link
        to="https://wa.me/+916301046346"
        className="whatsapp-btn"
        target="_blank"
      >
        <span className="contact-text">Contact Us </span>
        <IoLogoWhatsapp className="whatsapp-icon" />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
