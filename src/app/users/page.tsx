import UsersList from "@/components/UsersList";
import Nav from "@/components/Nav";

export default function UsersPage() {
    return (
        <>
            <header>
                <Nav/>
            </header>
            <main>
                <UsersList/>
            </main>
        </>
    );
}
