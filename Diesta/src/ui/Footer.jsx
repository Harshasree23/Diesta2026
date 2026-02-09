
import DiestaLogo from '../assets/diesta-logo.png';
import { Link } from "react-router-dom";
import Instalogo from "../assets/insta.png";

const Footer = () => {
    return(
        <div className='text-white mt-5 bg-diesta-pattern bg-diesta-pattern' >

        <footer className='flex flex-col items-center justify-center sm:flex-row md:justify-between justify-center flex-wrap pt-4 pb-3 px-3' >

            <div className='hidden sm:block text-[#FFD700] w-[25%] text-xl mb-4 flex flex-wrap justify-center items-end gap-4 sm:p-6 sm:border-r-2 border-[#FFD700]/30' > 
                <div className='text-center'>
                    <img src={DiestaLogo} alt="Diesta logo" className='h-32 mx-auto mb-2 drop-shadow-lg' />
                    <p className='text-xs font-light opacity-80'>Diesta 2026</p>
                </div>
            </div>
            

            <div className='flex-1 flex flex-col sm:flex-row justify-around items-start sm:items-center bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-lg rounded-xl m-2 p-3 sm:p-4 shadow-xl shadow-black/50 border border-[#FFD700]/20' >
                <div className='flex flex-col text-white gap-2 w-full sm:w-auto p-2' >
                    <h3 className='text-[#FFD700] text-base font-semibold mb-2 text-center sm:text-left'>Quick Links</h3>
                    <div className='grid grid-cols-2 gap-2 sm:flex sm:flex-col'>
                        <Link className='hover:bg-yellow-400/40 px-3 py-1.5 rounded-md transition-all duration-300 hover:translate-x-1 text-sm text-center' to='/'>Home</Link>
                        <Link className='hover:bg-yellow-400/40 px-3 py-1.5 rounded-md transition-all duration-300 hover:translate-x-1 text-sm text-center' to='/about'>About</Link>
                        <Link className='hover:bg-yellow-400/40 px-3 py-1.5 rounded-md transition-all duration-300 hover:translate-x-1 text-sm text-center' to='/schedule'>Schedule</Link>
                        <Link className='hover:bg-yellow-400/40 px-3 py-1.5 rounded-md transition-all duration-300 hover:translate-x-1 text-sm text-center' to='/rules'>Rules</Link>
                        <Link className='hover:bg-yellow-400/40 px-3 py-1.5 rounded-md transition-all duration-300 hover:translate-x-1 text-sm text-center' to='/leaderboard'>LeaderBoard</Link>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-3 mt-4 sm:mt-0 w-full sm:w-auto'>
                    <h3 className='text-[#FFD700] text-base font-semibold text-center'>Follow Us</h3>
                    <a href="https://www.instagram.com/diesta_iith/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-[#FFD700]/30">
                        <img src={Instalogo} alt="Instagram logo" className="h-6 w-6 filter brightness-0 invert" />
                        <span className="font-medium">@diesta_iith</span>
                    </a>
                    <p className='text-xs text-gray-400 text-center'>Stay connected!</p>
                </div>

            </div>
        </footer>
        
        </div>
    );
}

export default Footer;
