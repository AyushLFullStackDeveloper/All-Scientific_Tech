import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/Header.css";

const Header = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when toggling the menu
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Check if the current section is active
  const isSectionActive = (sectionId) => {
    return activeSection === sectionId;
  };

  useEffect(() => {
    // Handle clicks outside the menu to close it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
      
      // Only needed for mobile dropdown
      if (
        window.innerWidth <= 768 &&
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        !event.target.classList.contains('dropbtn')
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add scroll listener for header shrinking and active section detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Handle header shrinking
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detect active section by scroll position
      if (location.pathname === '/') {
        const sections = ['main', 'services', 'customers', 'posts'];
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop - 150;
            const bottom = top + element.offsetHeight;
            
            if (scrollPosition >= top && scrollPosition < bottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    // Set initial active section based on URL hash
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      setActiveSection(hash);
    } else if (location.pathname === '/') {
      setActiveSection('main');
    }
    
    // Add delay for dropdown hover (desktop only)
    const dropdownLinks = document.querySelectorAll('.dropdown');
    let hoverTimeout;
    
    dropdownLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          if (window.innerWidth > 768) {
            link.classList.add('hover-active');
          }
        }, 300); // 300ms delay before showing dropdown
      });
      
      link.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          link.classList.remove('hover-active');
        }, 200); // 200ms delay before hiding dropdown
      });
    });
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      
      // Clean up dropdown hover listeners
      dropdownLinks.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
      clearTimeout(hoverTimeout);
    };
  }, [location]);

  // Handle section navigation (Home page sections)
  const handleSectionNavigation = (sectionId) => {
    setActiveSection(sectionId);
    
    // Navigate to home page first if we're not already there
    if (location.pathname !== "/") {
      navigate("/");
      setIsMenuOpen(false);
      
      // Then scroll to section after a short delay
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjusted for larger header
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Adjusted for larger header
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false);
    }
    
    setIsDropdownOpen(false);
  };

  // Navigate to different routes
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo with home link */}
      <div className="logo">
        <a onClick={(e) => { e.preventDefault(); handleSectionNavigation('main'); }}>
          <img 
            src="/assets/images/header/all-logo.avif" 
            alt="Logo" 
            onError={(e) => {
              e.target.src = "/assets/images/header/fallback-logo.png";
              e.target.onerror = null;
            }}
          />
        </a>
      </div>
      
      {/* Navigation Menu */}
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <ul className={isMenuOpen ? "show" : ""}>
          <li className="home-link">
            <a 
              className={isActive("/") && (activeSection === 'main' || !activeSection) ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('main'); }}
            >
              Home
            </a>
          </li>
          <li className="services-link">
            <a 
              className={isSectionActive('services') ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleSectionNavigation('services'); }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              className={isActive("/about") ? "active" : ""}
              onClick={(e) => handleNavigate(e, "/about")}
            >
              About
            </a>
          </li>
          <li>
            <a 
              className={isActive("/request-service") ? "active" : ""}
              onClick={(e) => handleNavigate(e, "/request-service")}
            >
              Request Service
            </a>
          </li>
          <li>
            <a 
              className={isActive("/contact") ? "active" : ""}
              onClick={(e) => handleNavigate(e, "/contact")}
            >
              Contact
            </a>
          </li>
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`} ref={dropdownRef}>
            {/* Dropdown toggle button */}
            <a className="dropbtn" onMouseDown={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}>
              More
            </a>
            {/* Dropdown content - will show on hover for desktop */}
            <div className={`dropdown-content ${isDropdownOpen ? "show-dropdown" : ""}`}>
              <a
                className={isSectionActive('customers') ? "active" : ""}
                href="#customers"
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('customers'); }}
              >
                Customers
              </a>
              <a
                className={isActive("/agreements") ? "active" : ""}
                href="#agreements" 
                onClick={(e) => handleNavigate(e, "/agreements")}
              >
                Agreements
              </a>
              <a 
                className={isActive("/mri-chillers") ? "active" : ""}
                href="#mri-chillers" 
                onClick={(e) => handleNavigate(e, "/mri-chillers")}
              >
                MRI Chillers
              </a>
              <a 
                className={isActive("/equipment-brands") ? "active" : ""}
                href="#equipment-brands" 
                onClick={(e) => handleNavigate(e, "/equipment-brands")}
              >
                Equipment & Brands
              </a>
              <a
                className={isActive("/temp-control") ? "active" : ""}
                href="#temp-control"
                onClick={(e) => handleNavigate(e, "/temp-control")}
              >
                Temp Controlled
              </a>
              <a 
                className={isActive("/our-technology") ? "active" : ""}
                href="#our-technology" 
                onClick={(e) => handleNavigate(e, "/our-technology")}
              >
                Our Technology
              </a>
              <a 
                className={isActive("/bio-med") ? "active" : ""}
                href="#bio-med" 
                onClick={(e) => handleNavigate(e, "/bio-med")}
              >
                Biomedical  
              </a>
              <a 
                className={isActive("/bio-safety") ? "active" : ""}
                href="#bio-safety" 
                onClick={(e) => handleNavigate(e, "/bio-safety")}
              >
               Bio-Safety Cabinets
              </a>
              <a 
                className={isSectionActive('posts') ? "active" : ""} 
                href="#posts" 
                onClick={(e) => { e.preventDefault(); handleSectionNavigation('posts'); }}
              >
                Posts
              </a>
            </div>
          </li>
        </ul>
      </nav>
      
      {/* Hamburger Menu for mobile view */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;