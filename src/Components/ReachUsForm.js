import { useState } from "react";

export default function ReachUsForm() {
  const [form, setForm] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const Input = ({ name, placeholder }) => (
    <input
      name={name}
      placeholder={placeholder}
      value={form[name]}
      onChange={handleChange}
      className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-white placeholder-gray-400 transition"
    />
  );

  const Select = ({ name, placeholder }) => (
    <select
      name={name}
      value={form[name]}
      onChange={handleChange}
      className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-white appearance-none"
    >
      <option value="" className="text-black">
        {placeholder}
      </option>
      <option className="text-black">India</option>
      <option className="text-black">USA</option>
      <option className="text-black">Singapore</option>
    </select>
  );

  return (
    <section className="bg-black text-white px-6 md:px-12 pt-16 pb-52 min-h-screen flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        REACH US <br />
        TO KNOW MORE ABOUT <br />
        OUR OFFERINGS
      </h2>

      {/* Form Grid */}
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

        <Input name="fullName" placeholder="Full Name *" />
        <Input name="company" placeholder="Company Name *" />

        <Input name="jobTitle" placeholder="Job Title *" />
        <Select name="country" placeholder="Country *" />

        <Input name="email" placeholder="Business Email *" />
        <Input name="phone" placeholder="Phone Number *" />

        <div className="md:col-span-2">
          <Select name="inquiry" placeholder="Inquiry Type *" />
        </div>

        <div className="md:col-span-2">
          <textarea
            name="requirements"
            placeholder="Requirements *"
            value={form.requirements}
            onChange={handleChange}
            rows={3}
            className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-white placeholder-gray-400 resize-none"
          />
        </div>

      </div>

      {/* Consent */}
      <div className="max-w-4xl mt-10 space-y-6 text-sm text-gray-300">

        <label className="flex gap-3 items-start">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={form.marketingConsent}
            onChange={handleChange}
            className="mt-1"
          />
          <span>
            I consent to receive marketing text messages at the phone number provided.
            Message & data rates may apply.
          </span>
        </label>

        <label className="flex gap-3 items-start">
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



    </section>
  );
}