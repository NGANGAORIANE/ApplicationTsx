import React from 'react';
import LoginPage from '../templates/LoginTemplate'; // Importe le template de login

const LoginSection: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <LoginPage />
            </div>
        </div>
    );
};

export default LoginSection;
