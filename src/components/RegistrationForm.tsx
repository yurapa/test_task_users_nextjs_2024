import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from '@/services/api';

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await apiService.signUp({ email, password });
      console.log('Registration successful', response);

      // Assuming the API response includes a token upon successful registration
      if (response.status === 200 && response.data.token) {
        // Redirect or perform additional actions here
        router.push('/login'); // Redirect to login page or dashboard as per requirement
      } else {
        setError('Registration failed');
      }
    } catch (err) {
      setError('Failed to register');
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
        <button type="submit" className="border border-amber-300 p-4">Register</button>
      </form>
    </div>
  );
}
