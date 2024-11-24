import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Définir le type Course pour l'API
interface Course {
    id: number;
    name: string;
    description: string;
}

// Création du service coursesApi avec RTK Query
export const coursesApi = createApi({
    reducerPath: 'coursesApi', // Nom du reducer pour l'API des cours
    baseQuery: fetchBaseQuery({
        baseUrl: 'https:',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).auth.token; // Récupère le token JWT du state Redux
            if (token) {
                headers.set('Authorization', `Bearer ${token}`); // Ajoute le token JWT dans l'en-tête
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Endpoint pour récupérer tous les cours
        getCourses: builder.query<Course[], void>({
            query: () => 'courses',
        }),
        // Endpoint pour récupérer un cours spécifique par ID
        getCourseById: builder.query<Course, number>({
            query: (id) => `courses/${id}`, // 'courses/:id' pour récupérer un cours par son ID
        }),
    }),
});

// Export des hooks générés automatiquement par RTK Query pour utiliser dans les composants
export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesApi;
