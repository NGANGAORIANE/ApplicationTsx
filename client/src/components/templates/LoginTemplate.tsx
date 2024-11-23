import React from 'react';

import LoginForm from '../molecules/LoginForm';
const LoginTemplate = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-500">Connexion</h2>
                <LoginForm /> { }
            </div>
        </div>
    );
};

export default LoginTemplate;
