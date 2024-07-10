import UsersList from '@/components/UsersList';
import Nav from '@/components/Nav';
import React from 'react';

export default function UsersPage() {
  return (
    <>
      <Nav />
        <main className="w-full max-w-96 mx-auto">
            <h1 className="my-20 text-center text-3xl font-bold leading-9 tracking-tight text-gray-300">The list of Users:</h1>
            <UsersList />
        </main>
    </>
  );
}
