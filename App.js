import React, { useEffect, useState, useRef } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// =============================IMPORT COMPONENTS===============================================
import Header from "./components/common/Header.js";
import Home from "./components/Home";
import "./styles/App.css";
import Services from "./components/Services";
import TheData from "./components/TheData";
import Customers from "./components/Customers";
import Posts from "./components/Posts";
import Footer from "./components/common/Footer.js";
import TempControll from "./components/TempControll";
import Agreement from "./components/Agreement.js";
import useScrollAnimation from "./components/common/useScrollAnimation.js";
import MriChillers from "./components/MriChillers";
import OurTechnology from "./components/technology/OurTechnology.js";
import Contact from "./components/Contact";
import EquipmentBrand from "./components/EquipmentBrand.js";
import ReqServices from "./components/ReqServices.js";
import About from "./components/about/About.js";
import BioSafety from "./components/BioSafety";
import BioMedComponent from "./components/BioMed.js";


// Keep using your original HashRouter to avoid breaking existing styles
// Just add this simple scroll restoration function
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return null;
};

function MainLayout() {
  useScrollAnimation({ duration: 200, easing: "easeInOutQuad", offset: -80 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-fade-in").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // !!!!!!!!!!!!!!!!!! SCROLLING SMOOTH ANIMATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! COMPOMNENTS CALLING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <div id="main" className="section-fade-in">
        <Home />
      </div>
      {/* <div ref={homeRef} className="section-fade-in" dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
      <div id="services" className="section-fade-in">
        <Services />
      </div>
      <TheData />
      <div id="customers" className="section-fade-in">
        <Customers />
      </div>
      {/* <div id="agreement" className="section-fade-in">
        <Agreement />
      </div> */}
      <div id="posts" className="section-fade-in">
        <Posts />
      </div>
      <br />
      <Footer />
    </div>
  );
}
// =================================ROUTING BETWEENS COMPONENTS==============================================
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route
          path="/temp-control"
          element={
            <>
              <ScrollToTop />
              <Header />
              <TempControll />
              <Footer />
            </>
          }
        />
        <Route
          path="/mri-chillers"
          element={
            <>
              <ScrollToTop />
              <Header />
              <MriChillers />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ScrollToTop />
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ScrollToTop />
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/equipment-brands"
          element={
            <>
              <ScrollToTop />
              <Header />
              <EquipmentBrand />
              <Footer />
            </>
          }
        />
        <Route
          path="/request-service"
          element={
            <>
              <ScrollToTop />
              <Header />
              <ReqServices />
              <Footer />
            </>
          }
        />
        <Route
          path="/bio-safety"
          element={
            <>
              <ScrollToTop />
              <Header />
              <BioSafety />
              <Footer />
            </>
          }
        />
        <Route
          path="/agreements"
          element={
            <>
              <ScrollToTop />
              <Header />
              <Agreement />
              <Footer />
            </>
          }
        />
        <Route
          path="/bio-med"
          element={
            <>
              <ScrollToTop />
              <Header />
              <BioMedComponent />
              <Footer />
            </>
          }
        />
        <Route
          path="/our-technology"
          element={
            <>
              <ScrollToTop />
              <Header />
              <OurTechnology />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
