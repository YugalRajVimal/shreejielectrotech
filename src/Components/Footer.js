import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationArrow
} from "react-icons/fa6";

import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";

export default function Footer() {
  // Scroll to top helper
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1c232b] text-gray-300">

      {/* TOP CONTACT STRIP */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 z-20 -top-16 sm:-top-12 md:-top-[2.5rem] lg:-top-[2.5rem]">
        <div className="bg-orange-500 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-orange-300">
          <ContactItem
            icon={<FaPhone />}
            title="Phone"
            text="+91 9990900041"
          />
          <ContactItem
            icon={<FaEnvelope />}
            title="E-mail"
            text="info@shreejielectrotech.com"
          />
          <ContactItem
            icon={<FaLocationArrow />}
            title="Location"
            text={
              <>
                G/F, B-32, Kh. No 45/2, Gali No.2<br />
                Near Karan public School, Sadatpur Extn.<br />
                Karawal Nagar. DeIhi-110094
              </>
            }
          />
        </div>
      </div>

      {/* MAIN FOOTER */}
  {/* MAIN FOOTER */}
<div className="pt-32 pb-16 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

{/* OUR SERVICES */}
<FooterColumn
  title="Our Services"
  links={[
    "Technical Audits & Quality Inspection",
    "Consultancy (Project Management, RE 100, Net Zero)",
    "Engineering Design & Development",
    "Carbon Audit & Energy Transition",
  ]}
/>

{/* OUR EXPERTISE */}
<FooterColumn
  title="Our Expertise"
  links={[
    "Solar PV Power Projects",
    "Wind Power Projects",
    "Energy Storage Solutions",
    "Power Transmission Infrastructure",
    "Hydro Power Projects",
    "E-mobility",
    "Green Hydrogen Projects",
    "Bio-fuels Projects",
    "Green Building/Energy Efficiency",
  ]}
/>

{/* ABOUT US */}
<FooterColumn
  title="Quick Links"
  links={[
    "Home",
    "About",
    "Contact"
  ]}
/>



{/* CONTACT US */}
<div>
  <h4 className="text-white font-semibold text-xl mb-6">
    Contact Us
  </h4>

  <div className="space-y-4 text-gray-400 text-sm">

    <div className="flex gap-3 items-start">
      <FaLocationArrow className="mt-1 text-orange-500 shrink-0" />
      <p>
        G/F, B-32, Kh. No 45/2, Gali No.2<br />
        Near Karan public School, Sadatpur Extn.<br />
        Karawal Nagar. DeIhi-110094
      </p>
    </div>

    <div className="flex gap-3 items-center">
      <FaEnvelope className="text-orange-500" />
      <span>info@shreejielectrotech.com</span>
    </div>

    <div className="flex gap-3 items-center">
      <FaPhone className="text-orange-500" />
      <span>+91 9990900041</span>
    </div>

  </div>
</div>

</div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4 sm:gap-0">
          <p className="text-center md:text-left flex-1">
            © 2025 All Rights Reserved By{" "}
            <span className="text-orange-500 font-semibold font-serif">
              SHREEJI ELECTROTECH SOLUTIONS Badals
            </span>
            <br />
            <span className="flex flex-col sm:flex-row items-center gap-1 text-xs md:text-sm justify-center md:justify-start">
              Tech Partner:
              <a
                href="https://gowappily.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
                onClick={handleScrollTop}
              >
                GoWappily Infotech
              </a>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-3 md:mt-0 items-center justify-center">
            <span className="hover:text-white cursor-pointer transition font-serif">
              Privacy & Policy
            </span>
            <span className="hover:text-white cursor-pointer transition font-serif">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* CONTACT BOX */
function ContactItem({ icon, title, text }) {
  return (
    <div className="flex flex-row sm:flex-col items-center text-center p-6 sm:p-8 border-none sm:border-b-0 sm:border-r-0 w-full">
      <div className="w-12 h-12 bg-white rounded-full shrink-0 flex items-center justify-center text-orange-500 mb-0 sm:mb-4 mr-3 sm:mr-0 text-lg">
        {icon}
      </div>
      <div className="text-center w-full">
        <h5 className="font-semibold text-white mb-1 sm:mb-2 uppercase text-xs sm:text-sm font-serif">
          {title}
        </h5>
        <p className="text-xs sm:text-sm text-white/90 break-words">
          {text}
        </p>
      </div>
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ children, href }) {
  // When user clicks a social link, scroll to top
  const handleClick = (e) => {
    // Open as usual, just scroll to top for smoother UX
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-[#232b34] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
  return (
    <div className="w-9 h-9 bg-[#232b34] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
      {children}
    </div>
  );
}

/* FOOTER LINK */
function FooterLink({ text, to }) {
  // If a route is provided, make sure that scrolls to top
  const navigate = useNavigate();
  const location = useLocation();

  if (to) {
    const handleLinkClick = (e) => {
      // If already on page, just scroll to top.
      if (location.pathname === to) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // Let Link handle navigation, but move to top immediately after
      else {
        // Give navigation time to occur before scrolling
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }
    };
    return (
      <li className="hover:text-white cursor-pointer transition font-serif">
        <Link to={to} className="hover:text-white transition" onClick={handleLinkClick}>{text}</Link>
      </li>
    );
  }
  return (
    <li className="hover:text-white cursor-pointer transition font-serif">
      {text}
    </li>
  );
}


function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-xl mb-6">
        {title}
      </h4>

      <ul className="space-y-3 text-gray-400 text-sm">
        {links.map((link, i) => (
          <li
            key={i}
            className="hover:text-white transition cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}