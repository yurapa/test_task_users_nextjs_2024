import UsersList from '@/components/UsersList';
import Nav from '@/components/Nav';

export default function UsersPage() {
  return (
    <>
      <Nav />
      <main>
        <UsersList />
      </main>
    </>
  );
}
