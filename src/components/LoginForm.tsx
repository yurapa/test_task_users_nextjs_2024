"use client"

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

import {FormEvent, useState} from 'react';
import { useRouter } from 'next/navigation'
import {apiService} from '@/services/api';
import {setCookie} from "@/utils/setCookie";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await apiService.login(email, password);
            console.log('Login successful', response);

            if (response.status === 200) {
                const token = response.data.token;

                if (token) {
                    localStorage.setItem('token', token); // Store the token for later use
                    setCookie('isAuthenticated', '1', 7)
                    router.push('/users');
                } else {
                    setError('No token received');
                }
            }
        } catch (err) {
            setError('Failed to login');
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        className="text-black p-2"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-black p-2"
                        required
                    />
                </div>
                <button type="submit" className=" border border-amber-300 p-4">Login</button>
            </form>
        </div>
    );
}