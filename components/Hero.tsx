
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-bounce">
          <i className="fas fa-star text-xs"></i>
          <span>Trusted by 2,500+ Students</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Score 100% in Your <br />
          <span className="gradient-text">Dreams Exams</span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
          Premium study materials, unit-wise notes, and curated practice papers for Law, Engineering, NEET, and JEE. 
          Everything you need to level up and dominate your career goals.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Explore Courses <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <a 
            href="https://t.me/cetlaw_clat" 
            target="_blank" 
            className="px-10 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
          >
            <i className="fab fa-telegram text-blue-500 mr-2 text-xl"></i> Join Free Channel
          </a>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="https://picsum.photos/seed/education/1200/600" 
            alt="Dashboard Preview" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white text-left">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
              <span className="font-semibold text-sm">Live Updates Daily</span>
            </div>
            <p className="text-lg font-bold">New Notes Added for 2025 Semester Exams</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
