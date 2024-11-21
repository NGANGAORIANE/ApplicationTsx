import React, { useState } from 'react';
import Button from '../atoms/Button';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Ajouter la logique de connexion ici
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="keepLoggedIn"
                    checked={keepLoggedIn}
                    onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                    className="mr-2"
                />
                <label htmlFor="keepLoggedIn" className="text-gray-700">
                    Keep me logged in
                </label>
            </div>
            <Button label="Se connecter" onClick={() => { }} className="w-full" />
            <div className="text-center">
                <a href="#" className="text-blue-500 hover:underline">Mot de passe oublié? Réinitialiser</a>
            </div>
        </form>
    );
};

export default LoginForm;
