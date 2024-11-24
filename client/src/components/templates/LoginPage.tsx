import React from 'react';
import LoginForm from '../molecules/LoginForm';


const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-black text-white py-4 text-center">
                <h1 className="text-2xl font-bold">Tree Learning</h1>
            </header>
            <div className="flex-grow bg-gray-100 flex justify-center items-center">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl flex">
                    <div className="w-1/2">
                        <LoginForm />
                    </div>
                    <div className="w-1/2 text-center px-8">
                        <h2 className="font-bold text-lg">Company Logo</h2>
                        <p className="text-gray-600 mt-2">
                            Here you can include additional information about the company or any relevant content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
