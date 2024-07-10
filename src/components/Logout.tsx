import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Logout() {
  const router = useRouter();

  const handleLogOut = () => {
    document.cookie = 'isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    toast.info('See you soon!');
    router.push('/');
  };

  return <button onClick={handleLogOut}>Logout</button>;
}
