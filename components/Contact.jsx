"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa";

const contactInfo = [
  { icon: FaPhoneAlt,    label: "Phone",    value: "+91 78950 48246",                href: "tel:+917895048246" },
  { icon: FaEnvelope,    label: "Email",    value: "abhishekchahar200@gmail.com",     href: "mailto:abhishekchahar200@gmail.com" },
  { icon: FaMapMarkerAlt,label: "Location", value: "Mathura, U.P., India",           href: null },
];

const socials = [
  { href: "https://github.com/abhishekChaharJaat",         Icon: FaGithub,   label: "GitHub" },
  { href: "https://linkedin.com/in/abhishek-chahar-jaat",  Icon: FaLinkedin, label: "LinkedIn" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Get in Touch
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
          <p className="mt-4 text-slate-500 text-base max-w-md mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ── Contact Info ── */}
          <div className="space-y-4" data-aos="fade-right">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-200 hover:shadow-sm transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Icon className="text-[#2563EB]" size={15} />
                </div>
                {href ? (
                  <a href={href} className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB] transition break-all">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-[#0F172A]">{value}</span>
                )}
              </div>
            ))}

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all shadow-sm"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

          </div>

          {/* ── Form ── */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm"
            noValidate
            data-aos="fade-left"
          >
            {sent && (
              <div className="mb-5 flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563EB] rounded-xl px-4 py-3 text-sm font-semibold">
                <FaCheckCircle size={15} />
                Thank you! Your message has been sent.
              </div>
            )}

            <div className="space-y-4">
              {[
                { label: "Name",    name: "name",    type: "text",  placeholder: "Your full name" },
                { label: "Email",   name: "email",   type: "email", placeholder: "your@email.com" },
              ].map(({ label, name, type, placeholder }) => (
                <label key={name} className="block">
                  <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5 block">
                    {label}
                  </span>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#2563EB] transition bg-slate-50"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5 block">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#2563EB] transition bg-slate-50"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 rounded-xl transition shadow-sm shadow-blue-200 text-sm"
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
