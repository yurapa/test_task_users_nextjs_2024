'use client';

import Link from 'next/link';
import Logout from '@/components/Logout';

export default function Nav() {
  return (
    <header>
      <div className="m-8 flex items-center justify-around rounded-3xl bg-blue-700/70 p-4">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/register">Sign Up</Link>
        <Link href="/login">Sign In</Link>
        <Logout />
      </div>
    </header>
  );
}
