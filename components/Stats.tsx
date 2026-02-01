
import React, { useState, useEffect } from 'react';

const Stats: React.FC = () => {
  // Static bases
  const INITIAL_VISITORS = 3453;
  const INITIAL_STUDENTS = 2343;

  const [visitors, setVisitors] = useState(INITIAL_VISITORS);
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  useEffect(() => {
    // Visitor increase logic: +23 every 10 mins
    // For demo purposes, we'll increment based on actual time elapsed since some fixed start
    const updateStats = () => {
      const startTime = new Date('2024-01-01').getTime();
      const now = Date.now();
      
      const tenMinIntervals = Math.floor((now - startTime) / 600000);
      const thirtyMinIntervals = Math.floor((now - startTime) / 1800000);

      // We add modulo to keep numbers within a "realistic" range but always growing
      setVisitors(INITIAL_VISITORS + (tenMinIntervals % 1000) * 23);
      setStudents(INITIAL_STUDENTS + (thirtyMinIntervals % 500) * 3);
    };

    updateStats();
    const timer = setInterval(updateStats, 1000); // Check frequently for UI updates
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <p className="text-4xl font-extrabold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
              {visitors.toLocaleString()}+
            </p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Total Visits</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl font-extrabold text-indigo-600 mb-1 group-hover:scale-110 transition-transform">
              {students.toLocaleString()}+
            </p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Active Students</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl font-extrabold text-purple-600 mb-1 group-hover:scale-110 transition-transform">
              99%
            </p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Success Rate</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl font-extrabold text-pink-600 mb-1 group-hover:scale-110 transition-transform">
              15+
            </p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Expert Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
