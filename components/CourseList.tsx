
import React, { useState } from 'react';
import { COURSES } from '../constants';
import CourseCard from './CourseCard';

interface CourseListProps {
  onCourseClick: () => void;
  isLoggedIn: boolean;
}

const CourseList: React.FC<CourseListProps> = ({ onCourseClick, isLoggedIn }) => {
  const [filter, setFilter] = useState<'ALL' | 'LAW' | 'BTECH' | 'CODING' | 'ENTRANCE'>('ALL');

  const filteredCourses = filter === 'ALL' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['ALL', 'LAW', 'BTECH', 'CODING', 'ENTRANCE'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              filter === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onAction={onCourseClick} 
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
