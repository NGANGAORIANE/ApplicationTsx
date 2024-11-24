import React from 'react';
import CourseCard from '../atoms/CourseCard'; // Assure-toi que le composant est bien importé

// Définition du type Course
interface Course {
    id: number;
    name: string;
    description: string;
}

interface CourseListProps {
    courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
                <CourseCard key={course.id} name={course.name} description={course.description} />
            ))}
        </div>
    );
};

export default CourseList;
