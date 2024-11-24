import React from 'react';

interface CourseCardProps {
    name: string;
    description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, description }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-blue-500 mb-2">{name}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default CourseCard;
