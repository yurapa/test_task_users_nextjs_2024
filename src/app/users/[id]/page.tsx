import React from 'react';
import Nav from "@/components/Nav";
import UserProfile from "@/components/UserProfile";

export default function UserProfilePage({ params }: { params: { id: string } }) {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                {params.id && <UserProfile userId={Number(params.id)} />}
            </main>
        </div>
    );
}

