import { Link } from 'react-router'
export default function TopNavbar() {
    return (
        <nav className="hidden sm:flex gap-2 justify-center bg-zinc-700 text-zinc-100 px-2 py-3">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="products">Products</Link>
            <Link to="users">Users</Link>
            <Link to="contacts">Contacts</Link>
        </nav>
    )
}