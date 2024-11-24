import React, { useState } from 'react';
import Button from '../atoms/Button';

const LoginForm = () => {
    // Utilisation des hooks `useState` pour gérer les états du formulaire.
    const [email, setEmail] = useState(''); // État pour stocker l'email de l'utilisateur
    const [password, setPassword] = useState(''); // État pour stocker le mot de passe de l'utilisateur
    const [keepLoggedIn, setKeepLoggedIn] = useState(false); // État pour savoir si l'utilisateur veut rester connecté

    // Fonction appelée lors de la soumission du formulaire
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4">

            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Met à jour l'état de l'email lors de la saisie
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
                    onChange={(e) => setPassword(e.target.value)} // Met à jour l'état du mot de passe lors de la saisie
                    placeholder="Mot de passe"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>
            {/* Checkbox pour garder l'utilisateur connecté */}
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="keepLoggedIn"
                    checked={keepLoggedIn}
                    onChange={() => setKeepLoggedIn(!keepLoggedIn)} // Bascule l'état du checkbox
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
