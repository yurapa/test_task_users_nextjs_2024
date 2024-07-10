import UsersList from '@/components/UsersList';
import Nav from '@/components/Nav';
import React from 'react';
import Link from 'next/link';

export default function UsersPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-96">
        <h1 className="my-20 text-center text-3xl font-bold leading-9 tracking-tight text-gray-300">
          The list of Users:
        </h1>
        <UsersList />
        <Link href="/users/add" className="fixed left-10 bottom-10 w-24 h-24 text-center content-center bg-blue-700 text-3xl rounded-full">+</Link>
      </main>
    </>
  );
}
