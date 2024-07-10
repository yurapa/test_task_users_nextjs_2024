import React from 'react';
import Nav from '@/components/Nav';
import MainForm from '@/components/MainForm';

export default function LoginPage() {
  return (
    <div>
      <Nav />
      <main>
        <MainForm title="Sign in to your account" />
      </main>
    </div>
  );
}
