'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from "react-toastify";
import { apiService } from '@/services/api';
import { setCookie } from '@/utils/setCookie';
import FormDefault from '@/components/FormDefault';

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await apiService.login(email, password);
      toast.success('Login successful');

      if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          setCookie('isAuthenticated', '1', 7);
          router.push('/users');
      } else {
        toast.error('No token received');
      }
    } catch (err) {
      toast.error(`Failed to login: ${err}`);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="logo" src="/logo.png" className="mx-auto h-40 w-auto" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">Sign in to your account</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormDefault submitTitle="Login" onSubmit={handleLogin} />
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
