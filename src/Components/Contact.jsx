import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-[#020617] border-t border-gray-900 overflow-hidden">
      
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
            <h3 className="text-3xl font-bold text-white mb-6">Let's work together.</h3>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg">
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that needs some creative touch or just want to say hi, 
              my inbox is always open.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#2A8FEA] group-hover:scale-110 group-hover:bg-[#2A8FEA]/10 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Email</p>
                  <a href="mailto:hello@example.com" className="text-lg text-white hover:text-[#2A8FEA] transition-colors font-medium">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#2A8FEA] group-hover:scale-110 group-hover:bg-[#2A8FEA]/10 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Location</p>
                  <p className="text-lg text-white font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2A8FEA] hover:bg-[#2A8FEA]/10 hover:shadow-[0_0_20px_rgba(42,143,234,0.3)] transition-all duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2A8FEA] hover:bg-[#2A8FEA]/10 hover:shadow-[0_0_20px_rgba(42,143,234,0.3)] transition-all duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2A8FEA] hover:bg-[#2A8FEA]/10 hover:shadow-[0_0_20px_rgba(42,143,234,0.3)] transition-all duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-[2rem] p-8 md:p-10 relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold tracking-wide text-gray-300 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold tracking-wide text-gray-300 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold tracking-wide text-gray-300 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold tracking-wide text-gray-300 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#2A8FEA]/50 focus:bg-gray-900 focus:ring-1 focus:ring-[#2A8FEA]/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-[#2A8FEA] hover:bg-[#1f78c9] text-white font-bold tracking-wider uppercase py-4 px-8 rounded-2xl transition-all duration-300 group/btn shadow-[0_0_20px_rgba(42,143,234,0.4)] mt-4"
              >
                Send Message
                <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
