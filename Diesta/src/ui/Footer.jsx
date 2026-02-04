
import DiestaLogo from '../assets/diesta-logo.png';
import { Link } from "react-router-dom";
import Instalogo from "../assets/insta.png";

const Footer = () => {
    return(
        <div className='text-white border-t-2 border-t-[#FFD700] my-5' >

        <footer className='flex flex-col items-center justify-center sm:flex-row md:justify-between justify-center flex-wrap pt-5' >

            <div className='hidden sm:block text-[#FFD700] w-[30%] text-2xl mb-5 flex flex-wrap justify-center items-end gap-5 sm:p-10 sm:border-r-2' > 
                <div> <img src={DiestaLogo} alt="Diesta logo" className='h-20' /> </div>
            </div>
            

            <div className='flex-1 flex flex-wrap justify-around items-center'>
                <div className='flex flex-col text-white gap-2 sm:p-10' >
                    <Link className='hover:bg-yellow-400/40 px-3' to='/'>Home</Link>
                    <Link className='hover:bg-yellow-400/40 px-3' to='/about'>About</Link>
                    <Link className='hover:bg-yellow-400/40 px-3' to='/schedule'>Schedule</Link>
                    <Link className='hover:bg-yellow-400/40 px-3' to='/shop'>Shop</Link>
                    <Link className='hover:bg-yellow-400/40 px-3' to='/rules'>Rules</Link>
                    <Link className='hover:bg-yellow-400/40 px-3' to='/leaderboard'>LeaderBoard</Link>
                </div>

                <div className="flex items-center gap-3 text-md">
                    <img src={Instalogo} alt="Instagram logo" className="h-10 w-10" />
                    <span>Insta handle</span>
                </div>

            </div>
        </footer>
        
        </div>
    );
}

export default Footer;