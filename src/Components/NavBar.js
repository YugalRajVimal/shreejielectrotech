import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaPhone, FaEnvelope, FaBars, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
            <img src="/logo.png" alt="Shree Ji Electrotech" className="h-11" />
           
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
            <SocialIcon href="https://www.facebook.com/shreejielectrotech"><FaFacebookF /></SocialIcon>
          
            <SocialIcon href="https://www.linkedin.com/company/shreejielectrotech"><FaLinkedinIn /></SocialIcon>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`bg-[#1e2329] transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center text-white font-medium font-serif">
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/about">ABOUT</NavItem>
            {/* <NavItem to="/products">PRODUCTS</NavItem>  */}
            <NavItem to="/contact">CONTACT</NavItem>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center justify-between w-full md:w-auto">


            {/* CTA */}
            <Link
              to="/contact"
              className="bg-orange-500 text-white p-2 rounded-md md:px-4 md:py-4 font-semibold hover:bg-orange-600 transition flex items-center justify-center font-serif"
            >
              GET IN TOUCH
            </Link>

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
            {[
              { label: "HOME", to: "/" },
              { label: "ABOUT", to: "/about" },
              // { label: "PRODUCTS", to: "/products" },
              { label: "CONTACT", to: "/contact" }
            ].map((item) => (

                <Link
                  key={item.label}
                  to={item.to}
                  className="block px-5 py-4 text-white hover:bg-orange-500 transition font-serif"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
           
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

/* Nav Item */
function NavItem({ children, to }) {
  if (to) {
    return (
      <li className="px-5 py-6 cursor-pointer hover:text-orange-400 transition font-serif">
        <Link to={to} className="block h-full w-full font-serif">
          {children}
        </Link>
      </li>
    );
  }
  return (
    <li className="px-5 py-6 cursor-pointer hover:text-orange-400 transition font-serif">
      {children}
    </li>
  );
}

/* Dropdown */
function Dropdown({ title }) {
  return (
    <li className="relative group px-5 py-6 cursor-pointer font-serif">
      <div className="flex items-center gap-1 hover:text-orange-400 transition font-serif">
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
    <div className="px-4 py-3 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition cursor-pointer font-serif">
      {children}
    </div>
  );
}

/* Social */
function SocialIcon({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition cursor-pointer"
    >
      {children}
    </a>
  );
}
