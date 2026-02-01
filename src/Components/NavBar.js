import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaPhone, FaEnvelope, FaBars, FaChevronDown } from "react-icons/fa6";


// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
//   FaPhone,
//   FaEnvelope,
//   FaChevronDown,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa6";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Alpha Sun" className="h-11" />
          </div>

          {/* Contact */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {/* <div className="flex items-center gap-2">
              <FaPhone className="text-orange-500" />
              <span>+91-9928655159 / 8988002000</span>
            </div> */}

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              <span> info@shreejielectrotech.com
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaXTwitter /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`bg-[#1e2329] transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center text-white font-medium">

            <NavItem>HOME</NavItem>

            <Dropdown title="ABOUT" />

            <Dropdown title="SERVICES" />

            <NavItem>PROJECTS</NavItem>

            <NavItem>CONTACT</NavItem>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center">

            {/* Grid Icon */}
            <button className="text-white px-4 hover:text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h4M10 6h4M16 6h4M4 12h4M10 12h4M16 12h4M4 18h4M10 18h4M16 18h4"
                />
              </svg>
            </button>

            {/* CTA */}
            <button className="hidden md:block bg-orange-500 text-white px-6 py-6 font-semibold hover:bg-orange-600 transition">
              GET IN TOUCH
            </button>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white ml-3"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#1e2329] border-t border-gray-700">
            {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map(
              (item) => (
                <div
                  key={item}
                  className="px-5 py-4 text-white hover:bg-orange-500 transition"
                >
                  {item}
                </div>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

/* Nav Item */
function NavItem({ children }) {
  return (
    <li className="px-5 py-6 cursor-pointer hover:text-orange-400 transition">
      {children}
    </li>
  );
}

/* Dropdown */
function Dropdown({ title }) {
  return (
    <li className="relative group px-5 py-6 cursor-pointer">
      <div className="flex items-center gap-1 hover:text-orange-400 transition">
        {title}
        <FaChevronDown size={12} />
      </div>

      <div className="absolute top-full left-0 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

        <DropdownItem>Overview</DropdownItem>
        <DropdownItem>Team</DropdownItem>
        <DropdownItem>Mission</DropdownItem>
      </div>
    </li>
  );
}

/* Dropdown Item */
function DropdownItem({ children }) {
  return (
    <div className="px-4 py-3 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}

/* Social */
function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}
