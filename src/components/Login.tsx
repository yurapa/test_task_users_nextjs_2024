'use client';

import { AxiosResponse} from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { authService } from '@/services/api';
import { setCookie } from '@/utils/setCookie';
import FormAuth from '@/components/FormAuth';
import { Auth, LoginResponse } from '@/types/auth';

export default function Login() {
  const router = useRouter();

  const handleLogin = async (authData: Auth) => {
    try {
      const response: AxiosResponse<LoginResponse> = await authService.login(authData);

      if (response.status === 200 && response.data.token) {
        toast.success('Login successful');
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
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormAuth submitTitle="Login" handleSubmit={handleLogin} />
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
