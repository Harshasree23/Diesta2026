import { Link } from "react-router-dom";
import IITHLogo from '../assets/IITH_logo.png';

const Nav = () => {
    return (    
        <div className="flex justify-between items-center bg-black/80 px-5" >

            {/* COllege logo */}
            <div>
                <img src={IITHLogo} alt="IITH Logo" className="h-15" />
            </div>

            {/* Navigation bar */}
            <nav className="flex gap-5 text-yellow-600" >
                <Link to="/about">About</Link> 
                <Link to="/schedule">Schedule</Link> 
                <Link to="/shop">Shop</Link> 
                <Link to="/people">People</Link> 
                <Link to="/rules">Rules</Link> 
                <Link to="/leaderboard">LeaderBoard</Link>
            </nav>

        </div>
    );
}

export default Nav;