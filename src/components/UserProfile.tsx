'use client';

import React, { useState, useEffect } from 'react';
import { apiService } from '@/services/api';
import { User as UserType } from '@/types/user';
import { toast } from 'react-toastify';

interface UserProfileProps {
  userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiService.fetchUser(userId);
        setUser(response.data.data);
      } catch (err) {
        toast.error(`Failed to fetch user data: ${err}`);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {user.id}</p>
      <p>
        Name: {user.first_name} {user.last_name}
      </p>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
    </div>
  );
};

export default UserProfile;
