import React from 'react';
import CourseList from '../molecules/CourseList';
const CoursesSection: React.FC = () => {
    // Appel de l'API avec useGetCoursesQuery
    //const { data: courses, error, isLoading }

    // Affichage si les cours sont en train de charger
    //if (isLoading) {
    return <div>Chargement des cours...</div>;
}

// Affichage en cas d'erreur
//if (error) {
//return (
//< div >
//< p > Erreur lors de la récupération des cours.</p >
{/* Affiche l'erreur si elle existe */ }
//< p > {JSON.stringify(error)}</p >
//</div >
//);
//}

// Affichage de la liste des cours lorsque les données sont disponibles
//return (
// <div className="max-w-6xl mx-auto p-6">
<h2 className="text-2xl font-bold text-center text-blue-500 mb-8">Nos Cours</h2>
//     <CourseList courses={courses || []} /> {/* Passer les cours récupérés à CourseList */}
// </div>
// );
//};

export default CoursesSection;
