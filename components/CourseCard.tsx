
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onAction: () => void;
  isLoggedIn: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onAction, isLoggedIn }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group">
      {course.badge && (
        <span className="absolute -top-3 left-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {course.badge}
        </span>
      )}
      
      <div className="mb-6 flex items-center justify-between">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
          course.category === 'LAW' ? 'bg-amber-50 text-amber-600' :
          course.category === 'BTECH' ? 'bg-blue-50 text-blue-600' :
          course.category === 'CODING' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          <i className={course.icon}></i>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm font-medium">Starts at</p>
          <p className="text-2xl font-black text-gray-900">₹{course.price}</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{course.description}</p>

      <ul className="space-y-3 mb-8">
        {course.points.map((point, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <i className="fas fa-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <a 
        href={isLoggedIn ? course.link : '#'}
        onClick={(e) => {
          if (!isLoggedIn) {
            e.preventDefault();
            onAction();
          }
        }}
        target={isLoggedIn ? "_blank" : "_self"}
        className="w-full py-4 bg-gray-900 text-white text-center rounded-2xl font-bold group-hover:bg-blue-600 transition-colors flex items-center justify-center"
      >
        {isLoggedIn ? (
          <>Join via Telegram <i className="fab fa-telegram ml-2 text-lg"></i></>
        ) : (
          <>Sign In to Buy <i className="fas fa-lock ml-2 text-xs"></i></>
        )}
      </a>
    </div>
  );
};

export default CourseCard;
