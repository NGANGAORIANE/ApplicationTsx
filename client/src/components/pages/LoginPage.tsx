import React, { useState } from 'react';
import { useLoginMutation } from '.../';
import { useDispatch } from 'react-redux';
import { setToken } from '../authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>(''); // Typage explicite
    const [password, setPassword] = useState<string>('');
    const [login, { isLoading, error }] = useLoginMutation(); // Hook RTK pour l'authentification
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ email, password }).unwrap(); // Appel de l'API login
            dispatch(setToken(response.token)); // Stocke le token JWT dans Redux
            navigate('/courses'); // Redirige vers la page des cours après connexion
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-8">Connexion</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Mot de passe</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

                {error && (
                    <p className="text-red-500">
                        Erreur: {`status` in error ? error.status : 'Problème de connexion'}
                    </p>
                )}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                    {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
