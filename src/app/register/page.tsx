'use client';

import React from 'react';
import Nav from '@/components/Nav';
import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
  return (
    <div>
      <Nav />
      <main>
        <h1>Registration Form:</h1>
        <RegistrationForm />
      </main>
    </div>
  );
}
