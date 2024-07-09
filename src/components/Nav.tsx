"use client";

import Link from "next/link";
import Logout from "@/components/Logout";

export default function Nav() {
    return (
        <div className="flex items-center justify-around m-8 p-4 rounded-3xl bg-fuchsia-900/30">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            <Link href="/register">Sign Up</Link>
            <Link href="/login">Sign In</Link>
            <Logout />
        </div>
    );
}
