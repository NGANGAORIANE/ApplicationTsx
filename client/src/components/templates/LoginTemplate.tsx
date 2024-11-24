// src/components/templates/LoginTemplate.tsx
import React from 'react';
import LoginPage from './LoginPage'; // Le formulaire de connexion

const LoginTemplate: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Bienvenue, Connectez-vous</h1>
            <LoginPage />
        </div>
    );
};

export default LoginTemplate;

