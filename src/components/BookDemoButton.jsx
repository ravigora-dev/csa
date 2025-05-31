import React from "react";

const BookDemoButton = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=916301046346&text=Hi%21+I%E2%80%99m+interested+in+booking+a+demo.+Can+you+please+share+the+details%3F&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-4 top-1/2 z-50 -translate-y-1/2 bg-[#FF6B00] text-white font-bold px-3 py-2 rounded-full shadow-lg tracking-wide hover:bg-[#e65c00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 transition-all origin-right -rotate-90"
      aria-label="Book a Demo"
    >
      BOOK A DEMO
    </button>
  );
};

export default BookDemoButton; 