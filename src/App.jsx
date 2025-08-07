import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlacementsPage from "./pages/PlacementsPage";
import EnrollPage from "./pages/EnrollPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import MentorApply from "./components/MentorApply";
import BookDemoButton from "./components/BookDemoButton";
// import useFacebookPixel from "./hook/useFacebookPixel";
import RouteChangeTracker from "./RouteChangeTracker";
function App() {
  // useFacebookPixel();
  const [showBanner, setShowBanner] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = 10; // Small threshold to detect when near top

      // Only show banner when we're at the top of the page
      if (currentScrollPos < scrollThreshold) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    const handleBannerClose = () => {
      setShowBanner(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("referralBannerClosed", handleBannerClose);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("referralBannerClosed", handleBannerClose);
    };
  }, [prevScrollPos]);
  return (
    <Router>
      <RouteChangeTracker />
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main
          className={`transition-all duration-300 ${
            showBanner ? "pt-[106px]" : "pt-[64px]"
          }`}
        >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/mentor-apply" element={<MentorApply />} />
          </Routes>
        </main>
        <Footer />
        <BookDemoButton />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
