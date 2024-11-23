import React from 'react';

interface CourseCardProps {
    name: string;
    description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">{name}</h3>
            <p className="text-gray-600">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Voir le cours
            </button>
        </div>
    );
};

export default CourseCard;
