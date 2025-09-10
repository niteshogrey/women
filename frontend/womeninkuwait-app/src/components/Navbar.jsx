import React, { useEffect, useState, useRef } from "react";
import "../Nav.css";
import { Menu, X, ChevronDown } from "lucide-react";

import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isMobileJoinOpen, setIsMobileJoinOpen] = useState(false);
  const navRef = useRef(null);
  const joinDropdownRef = useRef(null);

  // Using a placeholder for the logo.
 


  // Effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (joinDropdownRef.current && !joinDropdownRef.current.contains(event.target)) {
        setIsJoinOpen(false);
      }
    };
    if (isJoinOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isJoinOpen]);

  const navHeight = navRef.current?.offsetHeight || 80;

  return (
    <>
      <div style={{ height: isSticky ? `${navHeight}px` : "auto" }} />
      <nav ref={navRef} className={isSticky ? "navbar sticky" : "navbar"}>
        <div className="nav-container">
          <a href="/" className="logo-link">
            <img src={logo} alt="Women in Kuwait Logo" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About </a></li>
            <li className="dropdown-container" ref={joinDropdownRef}>
              <div
                className="nav-link-dropdown"
                onClick={() => setIsJoinOpen(!isJoinOpen)}
              >
                Join
                <ChevronDown
                  size={16}
                  className={`chevron-icon ${isJoinOpen ? "open" : ""}`}
                />
              </div>
              {isJoinOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/join">Join</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              )}
            </li>
            <li><a href="/events">Events</a></li>
          </ul>
          <div className="menu-icon" onClick={() => setIsOpen(true)}>
            <Menu size={26} />
          </div>
        </div>
        {/* Mobile Side Menu */}
        {isOpen && (
          <div
            className="mobile-side-menu-overlay"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="mobile-side-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="side-menu-header">
                <a href="/" className="logo-link">
                  <img src={logo} alt="Women in Kuwait Logo" className="logo-img" />
                </a>
                <span className="close-menu" onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </span>
              </div>
              <ul>
                <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="/about-us" onClick={() => setIsOpen(false)}>About</a></li>
                <li className="mobile-dropdown-container">
                  <div
                    className="mobile-dropdown-toggle"
                    onClick={() => setIsMobileJoinOpen(!isMobileJoinOpen)}
                  >
                    <span>Join</span>
                    <ChevronDown
                      size={20}
                      className={`chevron-icon ${isMobileJoinOpen ? "open" : ""}`}
                    />
                  </div>
                  {isMobileJoinOpen && (
                    <ul className="mobile-dropdown-menu">
                      <li><a href="/join" onClick={() => setIsOpen(false)}>Join</a></li>
                      <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/events" onClick={() => setIsOpen(false)}>Events</a></li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

