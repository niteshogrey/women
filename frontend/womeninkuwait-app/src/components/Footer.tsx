import React from "react";
import "../Footer.css"; // Corrected path to be relative to the component
import logo from "../assets/logo1.png"; // This path is correct based on your folder structure

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Group 1: Logo, email link, and social icons */}
        <div className="footer-info">
          <img
            src={logo}
            alt="Women in Kuwait Logo"
            className="footer-logo-img"
          />
          {/* --- UPDATED --- */}
          {/* Replaced tagline with the "Email Us" mailto link */}
          <a
            href="mailto:info@womeninkuwait.com"
            className="footer-email-link"
          >
            Email Us
          </a>
          {/* --- END UPDATE --- */}
          <div className="footer-social">
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Group 2: All navigation links, now grouped for better layout */}
        <div className="footer-navigation">
          <div className="footer-links-column">
            <h3>Get Involved</h3>
            <ul>
              <li>
                <a href="/join">Join the Network</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="/partner">Partner With Us</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Women in Kuwait. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
