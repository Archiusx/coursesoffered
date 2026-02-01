
import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface NavbarProps {
  user: UserProfile | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLoginClick, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <i className="fas fa-graduation-cap text-white text-xl"></i>
            </div>
            <span className={`font-extrabold text-2xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              ACE<span className="text-blue-600">PREP</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#courses" className="hover:text-blue-600 transition-colors">Courses</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200" />
                  <span className="text-sm font-semibold">{user.displayName?.split(' ')[0]}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="md:hidden">
             {/* Mobile Menu Trigger would go here */}
             <button onClick={onLoginClick} className="text-blue-600 p-2">
                <i className="fas fa-user-circle text-2xl"></i>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
