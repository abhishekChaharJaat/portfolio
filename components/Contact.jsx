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
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FBFFFE] to-[#F4FFFC] text-[#2A3B4F] px-6 py-16 scroll-mt-20"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#394045]">
          Get in Touch
        </h2>
        <p className="text-center mb-12 text-lg text-[#496D75]">
          I&apos;d love to hear from you! Whether you have a project, a
          question, or just want to say hi, feel free to reach out using the
          form below or via my social links.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#3CA68D] text-xl" />
              <a
                href="tel:+917895048246"
                className="text-lg font-medium hover:underline"
                aria-label="Call phone number"
              >
                +91 78950 48246
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#3CA68D] text-xl" />
              <a
                href="mailto:abhishekchahar200@gmail.com"
                className="text-lg font-medium hover:underline"
                aria-label="Send email"
              >
                abhishekchahar200@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#3CA68D] text-xl" />
              <span className="text-lg font-medium">Mathura, U.P., India</span>
            </div>

            <div className="flex space-x-6 mt-8 text-2xl text-[#3CA68D]">
              <a
                href="https://github.com/abhishekChaharJaat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2B6652] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/abhishek-chahar-jaat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2B6652] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2B6652] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-[#FAFEFD] rounded-lg p-8 shadow-lg"
            noValidate
          >
            {submitted && (
              <p className="mb-6 text-green-600 font-semibold">
                Thank you! Your message has been sent.
              </p>
            )}

            <label className="block mb-4">
              <span className="text-[#394045] font-medium mb-1 block">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CA68D]"
                placeholder="Your name"
              />
            </label>

            <label className="block mb-4">
              <span className="text-[#394045] font-medium mb-1 block">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CA68D]"
                placeholder="Your email address"
              />
            </label>

            <label className="block mb-6">
              <span className="text-[#394045] font-medium mb-1 block">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#3CA68D]"
                placeholder="Write your message here..."
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full bg-[#3CA68D] hover:bg-[#2B6652] text-white font-semibold py-3 rounded-md transition-colors duration-300"
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
