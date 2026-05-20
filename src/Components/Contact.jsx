import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Please fill this field";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill this field";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter '@' sign";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please fill this field";
    }

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#020617] border-t border-gray-900 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2A8FEA]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-[0.25em] text-[#2A8FEA] uppercase mb-3">
            Get In Touch
          </h2>
          <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Contact Me
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-[#2A8FEA] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's build something{" "}
              <span className="text-[#2A8FEA]">great.</span>
            </h3>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg">
              Have a question, a project proposal, or looking for a dedicated
              developer to join your team? Send me a message. I'm always excited
              to tackle new challenges and would love to hear from you.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#2A8FEA] group-hover:scale-110 group-hover:bg-[#2A8FEA]/10 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:princechavada897@gmail.com"
                    className="text-lg text-white hover:text-[#2A8FEA] transition-colors font-medium"
                  >
                    princechavada897@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#2A8FEA] group-hover:scale-110 group-hover:bg-[#2A8FEA]/10 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-lg text-white font-medium">
                    Rajkot, Gujarat
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/PrinceChavda09"
                target="_blank"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2A8FEA] hover:bg-[#2A8FEA]/10 hover:shadow-[0_0_20px_rgba(42,143,234,0.3)] transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-chavda-829219318/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2A8FEA] hover:bg-[#2A8FEA]/10 hover:shadow-[0_0_20px_rgba(42,143,234,0.3)] transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-[2rem] p-8 md:p-10 relative">
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold tracking-wide text-gray-300 ml-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold tracking-wide text-gray-300 ml-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email}
                  </p>
                )}
                {!errors.email &&
                  formData.email.trim() &&
                  !formData.email.includes("@") && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      Suggestion: Please enter '@' sign
                    </p>
                  )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold tracking-wide text-gray-300 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#2A8FEA] hover:bg-[#1f78c9] text-white font-bold tracking-wider uppercase py-4 px-8 rounded-2xl transition-all duration-300 group/btn mt-4"
              >
                Send Message
                <Send className="w-5 h-5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
