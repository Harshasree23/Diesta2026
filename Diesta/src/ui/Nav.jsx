import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import IITHLogo from '../assets/IITH_logo.png';

const Nav = () => {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-black/80 px-5 py-2 fixed w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* College logo */}
        <Link to="/">
            <img src={IITHLogo} alt="IITH Logo" className="h-12 sm:h-14" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-yellow-400 font-semibold">
            <Link to="/about">About</Link> 
            <Link to="/schedule">Schedule</Link> 
            <Link to="/shop">Shop</Link> 
            <Link to="/people">People</Link> 
            <Link to="/rules">Rules</Link> 
            <Link to="/leaderboard">LeaderBoard</Link>
        </nav>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
            <button onClick={toggleMenu}>
            {isOpen ? <HiX className="w-8 h-8 text-yellow-400" /> 
                    : <HiMenu className="w-8 h-8 text-yellow-400" />}
            </button>
        </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-2 text-yellow-400 font-semibold bg-black/90 p-4 rounded shadow-lg">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link> 
            <Link to="/schedule" onClick={() => setIsOpen(false)}>Schedule</Link> 
            <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link> 
            <Link to="/people" onClick={() => setIsOpen(false)}>People</Link> 
            <Link to="/rules" onClick={() => setIsOpen(false)}>Rules</Link> 
            <Link to="/leaderboard" onClick={() => setIsOpen(false)}>LeaderBoard</Link>
        </nav>
    )}
    </div>
);
}

export default Nav;
