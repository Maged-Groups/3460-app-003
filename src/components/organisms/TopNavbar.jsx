import { useState } from 'react'
import { FaCartArrowDown, FaCartShopping, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router'

export default function TopNavbar() {

    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [cartItems, setCartItems] = useState(10);

    const handleShowAccountMenu = () => setShowAccountMenu(!showAccountMenu);

    return (
        <nav className="hidden sm:flex gap-2 justify-between bg-zinc-700 text-zinc-100 px-2 py-3 sticky top-0">
            {/* Logo */}
            <div>
                LOGO
            </div>

            {/* Menu */}
            <div className='flex gap-3'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="products">Products</Link>
                <Link to="users">Users</Link>
                <Link to="contacts">Contacts</Link>
            </div>

            {/* Account and icons */}
            <div className='flex gap-8'>
                {/* Cart */}
                <div className='flex items-center relative'>
                    <FaCartShopping className='text-3xl' />
                    <span className='text-sm px-2 py-0 rounded-full bg-sky-700 text-white absolute -top-1 left-5'>{cartItems}</span>
                </div>

                {/* Messages */}
                <div className='flex items-center relative'>
                    <FaEnvelope className='text-3xl' />
                    <span className='text-sm px-2 py-0 rounded-full bg-red-700 text-white absolute -top-1 left-5'>3</span>
                </div>

                {/* Account */}
                <div>
                    <div onClick={handleShowAccountMenu} className='cursor-pointer w-8 h-8 text-sm rounded-full bg-gray-200 text-gray-900 flex items-center justify-center'>MY</div>

                    <ul className={`overflow-hidden ${showAccountMenu ? 'flex' : 'hidden'} flex-col gap-3 absolute bg-gray-400 min-w-40 right-2 shadow-md rounded-sm top-12`}>
                        <li className='px-2 py-1 cursor-pointer hover:bg-gray-500'>
                            <Link>Profile</Link>
                        </li>
                        <li className='px-2 py-1 cursor-pointer hover:bg-gray-500'>
                            <Link>Orders</Link>
                        </li>
                        <li className='px-2 py-1 cursor-pointer bg-red-800 hover:bg-red-900 group'>
                            <Link className='font-bold text-shadow-sky-50 text-white group-hover:text-red-200'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}