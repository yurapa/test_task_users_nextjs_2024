'use client';

import React, { useState, useEffect } from 'react';
import { User as UserType } from '../types/user';
import Link from 'next/link';
import { apiService } from '@/services/api';

export default function UsersList() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    let fetchedData = null;
    let error = null;
    try {
      const response = await apiService.fetchUsers();
      fetchedData = response.data;
    } catch (err) {
      error = 'Failed to fetch users';
      console.error(err);
    }
    return { fetchedData, error };
  };

  const updateUsers = async () => {
    const { fetchedData, error } = await fetchUsers();
    if (error) {
      setError(error);
    } else {
      setUsers(fetchedData.data);
      console.log('Fetch users successful', fetchedData);
    }
  };

  useEffect(() => {
    updateUsers();
  }, []);

  const handleRemoveUser = async (userId: number) => {
    try {
      await apiService.deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
      console.log(`User with ID ${userId} removed successfully.`);
    } catch (error) {
      console.error(`Failed to remove user with ID ${userId}.`, error);
      setError(`Failed to remove user with ID ${userId}.`);
    }
  };

  return (
    <div>
      {users.length > 0 ? (
        <ul role="list" className="divide-y divide-gray-500">
          {users.map((user) => (
              <li key={user.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <Link href={`/users/${user.id}`}>
                    <img alt="" src={user.avatar} className="h-12 w-12 flex-none rounded-full bg-gray-50"/>
                  </Link>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-100">
                      <Link href={`/users/${user.id}`}>
                        {user.first_name} {user.last_name}
                      </Link>
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-300">{user.email}</p>
                  </div>
                </div>
                <div className="sm:flex sm:flex-col sm:items-end">
                  <Link href={`/users/edit/${user.id}`}>Edit</Link>
                </div>
                <div className="sm:flex sm:flex-col sm:items-end">
                  <button onClick={() => handleRemoveUser(user.id)}>Delete</button>
                </div>
              </li>
          ))}
        </ul>
      ) : (
          <p>No users found.</p>
      )}
    </div>
  );
}
