'use client';

import React, { useState, useEffect } from 'react';
import { User as UserType } from '../types/user';
import Link from 'next/link';
import { apiService } from '@/services/api';

export default function _UsersList() {
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
      <h1 className="my-12 text-center text-3xl">The list of Users:</h1>
      {users.length > 0 ? (
        <table cellPadding={10} cellSpacing={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name & Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:border hover:border-b-fuchsia-600">
                <td>{user.id}</td>
                <td>
                  <Link href={`/users/${user.id}`}>
                    {user.first_name} {user.last_name}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
                </td>
                <td>
                  <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
