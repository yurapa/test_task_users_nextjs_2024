'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from '@/services/api';
import Nav from '@/components/Nav';
import FormUser from "@/components/FormUser"; // Adjust the import path as necessary

export default function EditUserPage({ params }: { params: { id: string } }) {
    const router = useRouter();

    console.log('params.id:', params.id);

    const handleEditUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const job = formData.get('job') as string;

        try {
            await apiService.updateUser({ name, job });
            router.push('/users');
        } catch (error) {
            console.error('Failed to add user', error);
        }
    };

    return (
        <>
            <Nav />
            <main className="mx-auto w-full max-w-96">
                <FormUser onSubmit={handleEditUser} />
            </main>
        </>
    );
}
