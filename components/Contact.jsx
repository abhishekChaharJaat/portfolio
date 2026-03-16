"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FFFE] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">Get in Touch</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
          <p className="mt-4 text-[#5a7a82] text-base max-w-lg mx-auto">
            Whether you have a project, a question, or just want to say hi —
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-[#13866F]" size={16} />
              </div>
              <a
                href="tel:+917895048246"
                className="text-[#1B2B48] font-medium hover:text-[#13866F] transition"
              >
                +91 78950 48246
              </a>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                <FaEnvelope className="text-[#13866F]" size={16} />
              </div>
              <a
                href="mailto:abhishekchahar200@gmail.com"
                className="text-[#1B2B48] font-medium hover:text-[#13866F] transition break-all"
              >
                abhishekchahar200@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-[#13866F]" size={16} />
              </div>
              <span className="text-[#1B2B48] font-medium">
                Mathura, U.P., India
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  href: "https://github.com/abhishekChaharJaat",
                  icon: FaGithub,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/abhishek-chahar-jaat",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://twitter.com/yourusername",
                  icon: FaTwitter,
                  label: "Twitter",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-[#394045] hover:bg-[#13866F] hover:text-white hover:border-[#13866F] transition-all duration-200 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            noValidate
            data-aos="fade-left"
          >
            {submitted && (
              <div className="mb-5 p-3 bg-[#E0F5EF] text-[#13866F] rounded-lg text-sm font-medium border border-[#B3E5D8]">
                Thank you! Your message has been sent.
              </div>
            )}

            <div className="space-y-4">
              <label className="block">
                <span className="text-[#1B2B48] text-sm font-semibold mb-1.5 block">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#13866F]/40 focus:border-[#13866F] transition"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-[#1B2B48] text-sm font-semibold mb-1.5 block">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#13866F]/40 focus:border-[#13866F] transition"
                  placeholder="Your email address"
                />
              </label>

              <label className="block">
                <span className="text-[#1B2B48] text-sm font-semibold mb-1.5 block">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#13866F]/40 focus:border-[#13866F] transition"
                  placeholder="Write your message here..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-[#13866F] hover:bg-[#0f5a4c] text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-sm text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
