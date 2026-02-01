
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <span className="font-extrabold text-2xl tracking-tight">
                ACE<span className="text-blue-500">PREP</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Empowering students across India with premium educational resources. From Law to Coding, we help you ace your future.
            </p>
            <div className="flex space-x-4">
              <a href={`https://t.me/${CONTACT_INFO.telegram.replace('@','')}`} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@','')}`} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-blue-500 transition-colors">All Courses</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Hubs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href={CONTACT_INFO.lawLink} className="hover:text-blue-500 transition-colors">Law CET Hub</a></li>
              <li><a href={CONTACT_INFO.btechCseLink} className="hover:text-blue-500 transition-colors">B.Tech Engineering</a></li>
              <li><a href={CONTACT_INFO.neetHubLink} className="hover:text-blue-500 transition-colors">NEET Prep Hub</a></li>
              <li><a href={CONTACT_INFO.gateLink} className="hover:text-blue-500 transition-colors">GATE Hub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ace Prep Hub. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Designed with <i className="fas fa-heart text-red-500 mx-1.5"></i> for Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
