import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationArrow
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c232b] text-gray-300">

      {/* TOP CONTACT STRIP */}
      <div className="absolute -top-[1/2] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl mx-auto px-6 z-20">

        <div className="bg-orange-500 rounded-xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">

          <ContactItem
            icon={<FaPhone />}
            title="Help Center"
            text="+919990900041"
          />

          <ContactItem
            icon={<FaEnvelope />}
            title="Email Address"
            text="info@shreejielectrotech.com"
          />

          <ContactItem
            icon={<FaLocationArrow />}
            title="Location"
            text={
              <>
                G/F, B-32, Kh. No 45/2, Gali No.2<br />
                Near Karan public School, Sadatpur Extn.<br />
                Karawal Nagar. Delhi-110094
              </>
            }
          />

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="pt-40 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>

          <img
            src="/logo.png"
            alt="SHREEJI ELECTROTECH SOLUTIONS"
            className="h-12 mb-6"
          />

          <p className="text-sm leading-relaxed mb-6">
            SHREEJI ELECTROTECH SOLUTIONS provides comprehensive electrical and solar solutions. <br />
            G/F, B-32, Kh. No 45/2, Gali No.2,<br/>
            Near Karan public School, Sadatpur Extn.<br/>
            Karawal Nagar. Delhi-110094
            <br /><br />
            E-mail: <span className="break-all">info@shreejielectrotech.com</span><br />
            Website: <a href="https://www.shreejielectrotech.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-600 underline">www.shreejielectrotech.com</a>
          </p>

          {/* Social */}
          <div className="flex gap-3">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaXTwitter /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
          </div>

        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterLink text="About Us" />
            <FooterLink text="Blog" />
            <FooterLink text="Testimonials" />
            <FooterLink text="FAQs" />
            <FooterLink text="Contact Us" />
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">
            Our Products
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterLink text="Junction Box" />
            <FooterLink text="Switchgears (High/Medium/Low Voltage)" />
            <FooterLink text="Lighting Poles" />
            <FooterLink text="Cable Trays" />
            <FooterLink text="Cable Glands" />
            <FooterLink text="Solar Equipment" />
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">
            Subscribe
          </h4>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#232b34] px-4 py-3 text-sm outline-none"
            />
            <button className="bg-orange-500 px-4 flex items-center justify-center hover:bg-orange-600 transition">
              <FaEnvelope />
            </button>
          </div>
          <label className="flex items-center gap-2 text-xs">
            <input type="checkbox" />
            I agree with the terms and conditions
          </label>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © 2025 All Rights Reserved By{" "}
            <span className="text-orange-500 font-semibold">
              SHREEJI ELECTROTECH SOLUTIONS
            </span>
            <br/>
            <span className="flex items-center gap-1 text-xs md:text-sm ">
              Tech Partner:
              <a
                href="https://gowappily.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                GoWappily Infotech
              </a>
            </span>
          </p>
          <div className="flex gap-6 mt-3 md:mt-0 items-center">
            <span className="hover:text-white cursor-pointer">
              Privacy & Policy
            </span>
            <span className="hover:text-white cursor-pointer">
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
    <div className="flex flex-col items-center text-center p-8 border-b md:border-b-0 md:border-r border-orange-300 last:border-r-0">

      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 text-lg">
        {icon}
      </div>

      <h5 className="font-semibold text-white mb-2 uppercase text-sm">
        {title}
      </h5>

      <p className="text-sm text-white/90">
        {text}
      </p>

    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 bg-[#232b34] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
      {children}
    </div>
  );
}

/* FOOTER LINK */
function FooterLink({ text }) {
  return (
    <li className="hover:text-white cursor-pointer transition">
      {text}
    </li>
  );
}
