import React from 'react';
import Nav from "@/components/Nav";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <h1>Login Form:</h1>
                <LoginForm />
            </main>
        </div>
    );
}

