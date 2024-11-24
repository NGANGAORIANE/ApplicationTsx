// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { coursesApi } from '../api/coursesApi';  // Importer le service API des cours
import authReducer from './slices/authSlice';  // Importer le reducer pour l'authentification

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath]: coursesApi.reducer,  // Ajouter le reducer généré par RTK Query
        auth: authReducer,  // Reducer pour gérer l'authentification
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coursesApi.middleware),  // Ajout du middleware RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
