"use client";

import React, { useState, useEffect } from 'react';
import {User as UserType} from '../types/user';
import Link from "next/link";
import {apiService} from "@/services/api";

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

    return (
        <div>
            <h1 className="text-3xl text-center my-12">The list of Users:</h1>
            {users.length > 0 ? (
                <table cellPadding={10} cellSpacing={10}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name & Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:border hover:border-b-fuchsia-600">
                            <td>{user.id}</td>
                            <td>
                                <Link href={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link>
                            </td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} alt={`Avatar of ${user.first_name}`}/></td>
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