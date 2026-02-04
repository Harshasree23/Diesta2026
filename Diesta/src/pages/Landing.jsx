import Triangle from '../assets/triangle.png';
import ProfileCard from '../ui/Card';

const Landing = () => {
return (
    <div className='bg-black w-full flex flex-col' >

        {/* Main thing */}
        <div className='relative h-screen flex justify-center items-center w-fit ml-[1%] sm:ml-[5%]' >

            <div className='z-2 text-[#FFD700] text-5xl md:text-8xl sm:text-7xl sm:border-r border-[#FFD700] px-30' > 
                <div> Diesta </div>
                <div> 2026 </div>
            </div>
            <img
                src={Triangle}
                alt="Triangle"
                className="
                    absolute
                    w-50
                    md:w-80
                    sm:w-60
                    drop-shadow-[0_0_8px_rgba(255,215,0,1)]
                    drop-shadow-[0_0_18px_rgba(255,215,0,1)]
                    drop-shadow-[0_0_35px_rgba(255,215,0,0.8)]
                    animate-pulse
                    "/>

        </div>

        {/* Slogan */}
        <div className="py-7 sm:px-5 mx-auto my-2
            rounded-xl
            backdrop-blur-lg
            shadow-lg shadow-black/20
            text-[#FFD700]
            text-3xl sm:text-4xl md:text-5xl
            font-light
            text-center
            relative
            ">
            <div className='z-2' >“Six pools. One fest.</div>
            <div className='z-2' >Sport and culture in motion.”</div>

            <div className='absolute w-8 h-8 -z-1 bg-[#FFD700] animate-float blur-sm'>  </div>
        </div>

        {/* Location and time */}


        {/* Cards */}
        <div className='flex flex-wrap gap-5 justify-center my-10' >
            <ProfileCard  />
            <ProfileCard  />
            <ProfileCard  />
            <ProfileCard  />
            <ProfileCard  />
            <ProfileCard  />
        </div>
        
        {/* contact - footer */}
        <div className='text-white border-t-2 border-t-[#FFD700]' >
        <footer className='flex justify-between flex-wrap' >

            <div className='text-[#FFD700] text-2xl mb-5 flex-1' >  
                <div> Diesta 2026 </div>
                <div> logo </div>
            </div>

            <div className='flex flex-col text-black bg-[#FFD700] flex-1' >
                
                <div className='flex gap-5' >
                    <div>Insta logo</div>
                    <div>handle</div>
                </div>

                <div className='flex gap-5' >
                    <div>Insta logo</div>
                    <div>handle</div>
                </div>

                <div className='flex gap-5' >
                    <div>Insta logo</div>
                    <div>handle</div>
                </div>

                <div className='flex gap-5' >
                    <div>Insta logo</div>
                    <div>handle</div>
                </div>

            </div>

        </footer>
        </div>
    </div>
)
}

export default Landing;