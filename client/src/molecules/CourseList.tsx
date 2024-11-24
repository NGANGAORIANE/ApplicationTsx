import React from 'react';
import CourseCard from '../atoms/CourseCard';

// Définition du type Course pour représenter les informations d'un cours
interface Course {
    id: number; // Identifiant unique du cours
    name: string; // Nom du cours
    description: string; // Description du cours
}

// Définition des props attendues par le composant CourseList
interface CourseListProps {
    courses: Course[]; // Liste de cours à afficher
}

// Composant fonctionnel CourseList
const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {courses.map((course) => (
                <CourseCard
                    key={course.id} // Clé unique pour chaque carte (nécessaire pour React)
                    name={course.name} // Nom du cours à afficher dans la carte
                    description={course.description} // Description du cours à afficher dans la carte
                />
            ))}
        </div>
    );
};

export default CourseList;
