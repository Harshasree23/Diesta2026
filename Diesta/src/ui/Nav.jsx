import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Diestalogo from "../assets/diesta-logo.png";

const Nav = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);

const menuItems = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About" },
{ to: "/schedule", label: "Schedule" },
{ to: "/shop", label: "Shop" },
{ to: "/rules", label: "Rules" },
{ to: "/leaderboard", label: "LeaderBoard" },
];

return (
<div className="bg-black/80 px-5 py-2 fixed inset-x-0 z-50 shadow-gold">

    <div className="flex justify-between items-center max-w-7xl mx-auto">

    {/* Logo */}
    <NavLink to="/">
        <img
        src={Diestalogo}
        alt="Diesta Logo"
        className="h-12 sm:h-14"
        />
    </NavLink>

    {/* Desktop Menu */}
    <nav className="hidden md:flex gap-6 text-yellow-400 font-semibold">
        {menuItems.map((item) => (
        <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
            `relative pb-1 transition-all duration-200
            ${
                isActive
                ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400 after:shadow-[0_0_8px_rgba(212,175,55,0.9)]"
                : ""
            }`
            }
        >
            {item.label}
        </NavLink>
        ))}
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
        <button onClick={toggleMenu}>
        {isOpen ? (
            <HiX className="w-8 h-8 text-yellow-400" />
        ) : (
            <HiMenu className="w-8 h-8 text-yellow-400" />
        )}
        </button>
    </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
    <nav className="md:hidden flex flex-col gap-4 mt-2 text-yellow-400 font-semibold bg-black/90 p-4 rounded shadow-lg">
        {menuItems.map((item) => (
        <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
            `transition-all ${
                isActive ? "underline underline-offset-4" : ""
            }`
            }
        >
            {item.label}
        </NavLink>
        ))}
    </nav>
    )}
</div>
);
};

export default Nav;
