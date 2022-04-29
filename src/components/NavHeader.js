import { NavLink } from "react-router-dom";
import '../App.css';

const NavHeader = () => {
    return (
        <header className="container flex items-center justify-end max-w-full h-16 bg-slate-300 opacity-70">
            <nav>
                <ul className="flex gap-16 lg:gap-40 pr-16 lg:pr-60 text-sky-600">
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