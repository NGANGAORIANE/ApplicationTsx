import React from 'react';
import CoursesSection from '../organism/CoursesSection';

const CoursesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
            <CoursesSection />
        </div>
    );
};

export default CoursesPage;
