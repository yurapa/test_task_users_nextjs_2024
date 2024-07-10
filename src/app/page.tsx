import Nav from '@/components/Nav';
import Login from '@/components/Login';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <h1 className="mt-20 text-center text-3xl font-bold leading-9 tracking-tight text-gray-300">Welcome!</h1>
        <Login />
      </main>
    </>
  );
}
