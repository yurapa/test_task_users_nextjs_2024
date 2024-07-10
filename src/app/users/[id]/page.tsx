import React from 'react';
import Nav from '@/components/Nav';
import UserProfile from '@/components/UserProfile';

export default function UserProfilePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Nav />
      <main>{params.id && <UserProfile userId={Number(params.id)} />}</main>
    </div>
  );
}
