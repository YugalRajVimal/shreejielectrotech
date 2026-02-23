import { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

// Use the fields as in ReachUsForm.js
const initialFormState = {
  fullName: "",
  company: "",
  jobTitle: "",
  country: "",
  email: "",
  phone: "",
  inquiry: "",
  requirements: "",
  marketingConsent: true,
  nonMarketingConsent: true,
};

export default function ContactUs() {
  const [showTop, setShowTop] = useState(false);
  const [form, setForm] = useState({ ...initialFormState });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would post to your API or email service
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setForm({ ...initialFormState });
  }

  // Input utility
  const Input = ({ name, placeholder, type = "text", required = false }) => (
    <input
      required={required}
      type={type}
      name={name}
      value={form[name]}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:outline-none text-gray-900"
    />
  );

  const Select = ({ name, placeholder }) => (
    <select
      name={name}
      value={form[name]}
      onChange={handleChange}
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:outline-none text-gray-900 bg-white"
      required
    >
      <option value="">{placeholder}</option>
      <option>India</option>
      <option>USA</option>
      <option>Singapore</option>
    </select>
  );

  return (
    <div className="relative pt-28 sm:pt-32 bg-gray-100 min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative h-56 sm:h-[420px] bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231')",
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-md"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg font-serif">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="opacity-80">Home</span>
            <span className="text-orange-400">›</span>
            <span className="text-orange-400 font-medium">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <div className=" mx-auto my-6 sm:my-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {/* Phone */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-4 sm:p-4 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 mb-5">
              <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 rotate-90" />
            </div>
            <h4 className="text-lg font-bold text-orange-700 mb-2 tracking-wide uppercase font-serif">Phone</h4>
            <div className="space-y-1 text-gray-600 text-base font-medium">
              <a href="tel:+919990900041" className="hover:text-orange-600 transition">
                +91 9990900041
              </a>
            </div>
            <div className="mt-2 font-medium text-orange-700 text-sm">Contact: Mr. Badal Singh</div>
          </div>
          {/* Email */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-4 sm:p-4 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 mb-5">
              <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
            </div>
            <h4 className="text-lg font-bold text-orange-700 mb-2 tracking-wide uppercase font-serif">Email</h4>
            <div className="space-y-1 text-gray-600 text-base font-medium">
              <a href="mailto:info@shreejielectrotech.com" className="hover:text-orange-600 transition">
                info@shreejielectrotech.com
              </a>
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              <span className="font-semibold">Website:</span>{" "}
              <a href="http://www.shreejielectrotech.com" className="hover:text-orange-700 transition" target="_blank" rel="noopener noreferrer">
                www.shreejielectrotech.com
              </a>
            </div>
          </div>
          {/* Location */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-4 sm:p-4 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 mb-5">
              <FaMapMarkerAlt className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
            </div>
            <h4 className="text-lg font-bold text-orange-700 mb-2 tracking-wide uppercase font-serif">Location</h4>
            <div className="text-gray-600 text-base font-medium">
              Badals - G/F, B-32, Kh. No 45/2, Gali No.2<br />
              Near Karan Public School, Sadatpur Extn.<br />
              Karawal Nagar. DeIhi-110094
            </div>
          </div>
          {/* Hours */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-4 sm:p-4 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 mb-5">
              <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
            </div>
            <h4 className="text-lg font-bold text-orange-700 mb-2 tracking-wide uppercase font-serif">Hours</h4>
            <div className="text-gray-600 text-base font-medium">
              Mon – Sat: 09:00 AM – 06:00 PM<br />
              Sunday: Closed
            </div>
          </div>
        </div>
      </div>
      {/* ========== CONTACT SECTION (Form + Map) ========== */}
      <section className="pt-10 sm:pt-20 pb-64 sm:pb-48">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1  gap-10 sm:gap-14 items-stretch">
          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl shadow-lg border p-6 sm:p-10 flex flex-col justify-center min-h-[440px] sm:min-h-[500px] relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-2 h-8 rounded bg-orange-500"></span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-serif">
                Get In <span className="text-orange-600">Touch</span>
              </h2>
            </div>
            {formSubmitted && (
              <div className="mb-4 p-3 rounded bg-orange-100 text-orange-700 font-semibold text-center border border-orange-300">
                Thank you! We have received your message.
              </div>
            )}
            <form className="space-y-5 sm:space-y-6" autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input name="fullName" placeholder="Your Full Name" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input name="company" placeholder="Company Name" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <Input name="jobTitle" placeholder="Job Title" />
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <Select name="country" placeholder="Select Country" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input name="email" type="email" placeholder="Email Address" required />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input name="phone" placeholder="Phone Number" />
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <Select name="inquiry" placeholder="Select Inquiry Type" />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Requirements *
                </label>
                <textarea
                  required
                  name="requirements"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:outline-none text-gray-900 resize-none"
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Your requirements (brief detail)"
                />
              </div>
              <div className="space-y-3 pt-2 text-sm text-gray-600">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={form.marketingConsent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span>
                    I consent to receive marketing text messages at the phone number provided. Message & data rates may apply.
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="nonMarketingConsent"
                    checked={form.nonMarketingConsent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span>
                    I consent to receive non-marketing messages including updates and reminders.
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="inline-block w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition font-semibold text-lg shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Right side: Map and details */}
          <div className="flex flex-col gap-8 h-full">
            {/* Map Embed */}
            <div className="relative w-full h-64 sm:h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[320px]">
              <iframe
                loading="lazy"
                src="https://www.google.com/maps?q=Badals+-+G%2FF%2C+B-32%2C+Kh.+No+45%2F2%2C+Gali+No.2%2C+Sadatpur+Extn.%2C+Karawal+Nagar%2C+Delhi-110094&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                title="SHREEJI ELECTROTECH SOLUTIONS Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition h-full">
      <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-700 font-semibold mb-1 font-serif">
          {title}
        </h3>
        <div className="text-gray-800 font-normal leading-6 text-base">{content}</div>
      </div>
    </div>
  );
}

function SocialIcon({ children, bg }) {
  return (
    <div
      className={`${bg} w-9 h-9 rounded-md flex items-center justify-center shadow cursor-pointer hover:scale-105 transition`}
    >
      {children}
    </div>
  );
}

function FloatingButton({ children, bg }) {
  return (
    <div
      className={`${bg} w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition`}
    >
      {children}
    </div>
  );
}
