
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle, logout } from './firebase';
import { UserProfile } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      setShowAuthModal(false);
    } catch (error) {
      alert("Failed to sign in. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar user={user} onLoginClick={() => setShowAuthModal(true)} onLogout={logout} />
      
      <main>
        <Hero onCtaClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })} />
        <Stats />
        
        <div id="courses" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Our Premium <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of students who have leveled up their careers with our expertly crafted notes and practice materials.
              </p>
            </div>
            <CourseList onCourseClick={() => user ? null : setShowAuthModal(true)} isLoggedIn={!!user} />
          </div>
        </div>
      </main>

      <Footer />

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onLogin={handleLogin} 
        />
      )}
    </div>
  );
};

export default App;
