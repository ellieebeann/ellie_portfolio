import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

// Custom SVG para sa GitHub Icon
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Custom SVG para sa LinkedIn Icon
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gingham-pink py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border-4 border-[#670007] shadow-[10px_10px_0px_0px_#670007]">
        <h1 className="font-display text-4xl text-[#670007] text-center mb-2">SAY HELLO! 💌</h1>
        <p className="text-center text-sm text-gray-600 mb-8">Have a project or opportunity? Send me a message!</p>

        {submitted ? (
          <div className="bg-[#D9E7FF] border-2 border-[#670007] p-6 rounded-2xl text-center">
            <h3 className="font-display text-2xl text-[#670007]">Thank You! 🎉</h3>
            <p className="text-sm text-gray-700 mt-2">Your message placeholder form was submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#670007] uppercase mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Ellie"
                className="w-full p-3 rounded-xl border-2 border-[#670007] focus:outline-none focus:ring-2 focus:ring-[#988130]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#670007] uppercase mb-1">Your Email</label>
              <input
                type="email"
                required
                placeholder="ellie@example.com"
                className="w-full p-3 rounded-xl border-2 border-[#670007] focus:outline-none focus:ring-2 focus:ring-[#988130]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#670007] uppercase mb-1">Message</label>
              <textarea
                rows="4"
                required
                placeholder="Hi! I saw your portfolio and would love to connect..."
                className="w-full p-3 rounded-xl border-2 border-[#670007] focus:outline-none focus:ring-2 focus:ring-[#988130]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#670007] text-white font-display text-lg rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#988130] transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t-2 border-dashed border-[#670007] flex justify-center gap-6">
          <a href="maellyssabiacar@gmail.com" className="flex items-center gap-1 text-sm font-bold text-[#670007] hover:underline">
            <Mail className="w-4 h-4" /> Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-bold text-[#670007] hover:underline">
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-bold text-[#670007] hover:underline">
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}