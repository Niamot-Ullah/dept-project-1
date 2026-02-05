
import React from 'react';
import { Course } from '../types';

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="p-6 border border-academic-accent rounded-xl hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold text-academic-secondary uppercase tracking-widest">{course.code}</span>
          <h3 className="text-xl font-serif font-bold text-academic-primary mt-1">{course.title}</h3>
        </div>
        <span className="px-2 py-1 bg-academic-accent text-[10px] font-bold rounded uppercase tracking-tighter text-academic-muted">
          {course.level}
        </span>
      </div>
      <p className="text-academic-text text-sm mb-4 leading-relaxed italic">
        {course.description}
      </p>
      <div className="flex justify-between items-center text-xs font-medium text-academic-muted pt-4 border-t border-slate-50">
        <span>{course.term}</span>
        <span className="bg-slate-100 px-2 py-1 rounded">{course.role}</span>
      </div>
    </div>
  );
};

export default CourseCard;
