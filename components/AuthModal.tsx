
import React from 'react';

interface AuthModalProps {
  onClose: () => void;
  onLogin: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
            <i className="fas fa-lock"></i>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Join Ace Prep</h2>
          <p className="text-gray-600">Unlock premium courses and save your progress by signing in with Google.</p>
        </div>

        <button 
          onClick={onLogin}
          className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-100 py-4 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 hover:border-blue-100 transition-all shadow-sm"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
          <span>Continue with Google</span>
        </button>

        <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed">
          By continuing, you agree to our Terms of Service and Privacy Policy. Your data is securely stored on Firebase.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
