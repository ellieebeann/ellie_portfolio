import React from 'react';
import { Mail, Copy, Check } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Footer({ handleCopyEmail, copiedEmail }) {
  return (
    <footer id="contact" className="bg-[#F7BECA] pt-12 pb-16 relative border-t-4 border-[#670007]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-[#F9F6EA] rounded-3xl border-4 border-[#670007] p-8 md:p-12 shadow-retro-lg mb-12 relative overflow-hidden">
          <span className="inline-block px-4 py-1.5 bg-[#FDE0A5] border-2 border-[#670007] rounded-full text-xs font-bold text-[#670007] mb-4">
            OPEN FOR IT INTERNSHIP OPPORTUNITIES
          </span>

          <h2 className="text-4xl sm:text-6xl font-display text-[#670007] mb-4">
            LET'S WORK TOGETHER!
          </h2>

          <p className="text-sm sm:text-base text-[#670007] font-medium max-w-xl mx-auto mb-8">
            Feel free to reach out for internship screening, technical roles, or software projects!
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white p-2.5 rounded-2xl border-3 border-[#670007] shadow-retro">
            <span className="px-4 py-2 font-heading font-bold text-sm text-[#670007]">
              maellyssabiacar@gmail.com
            </span>
            <button onClick={handleCopyEmail} className="w-full sm:w-auto px-6 py-3 bg-[#670007] text-white rounded-xl font-heading font-bold text-xs uppercase hover:bg-[#850009] flex items-center justify-center gap-2">
              {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="https://github.com/ellieebeann" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-[#670007] border-2 border-[#670007] rounded-full flex items-center justify-center shadow-retro-sm hover:bg-[#670007] hover:text-white transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/maellyssabiancaregodon/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-[#670007] border-2 border-[#670007] rounded-full flex items-center justify-center shadow-retro-sm hover:bg-[#670007] hover:text-white transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="mailto:maellyssabiacar@gmail.com" className="w-12 h-12 bg-white text-[#670007] border-2 border-[#670007] rounded-full flex items-center justify-center shadow-retro-sm hover:bg-[#670007] hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs font-bold font-heading text-[#670007]/80">
          © {new Date().getFullYear()} MA. ELLYSSA BIANCA REGODON • BSIT •
        </p>
      </div>
    </footer>
  );
}