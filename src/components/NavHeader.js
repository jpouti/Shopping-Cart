import { NavLink } from "react-router-dom";
import '../App.css';

const NavHeader = () => {
    return (
        <header className="container flex justify-between items-center max-w-full h-16 bg-black opacity-40">
            <h3 className="text-white font-bold pl-32 lg:pl-60 text-2xl">Fishing Shop</h3>
            <nav className="flex justify-end">
                <ul className="flex gap-16 lg:gap-40 pr-16 lg:pr-60 text-white font-bold">
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Shop'>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavHeader;