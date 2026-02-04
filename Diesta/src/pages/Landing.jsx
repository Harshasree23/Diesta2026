import Triangle from '../assets/triangle.png';
// import ProfileCard from '../ui/Card';
import backGif from '../assets/back.gif';
import civil from '../assets/civ.png';
import chemical from '../assets/chemical.png';
import cse from '../assets/cse.png';
import bme from '../assets/bme.png';
import mae from '../assets/mae.png';
import Scroll from '../ui/Scroll';

const Landing = () => {
return (
    <div className='bg-diesta-dots w-full flex flex-col relative' >

        <div className='relative bg-black'>
        {/* back vid */}
        <div className="absolute inset-0 z-0 top-0 h-fit">
            <img src={backGif} alt="Background" className="w-screen h-screen object-cover opacity-20" />
        </div>

        {/* Main thing */}
        <div className='relative h-screen flex justify-center items-center w-fit ml-[1%] sm:ml-[5%]' >

            <div className='z-2 text-[#FFD700] text-5xl md:text-8xl sm:text-7xl sm:border-r border-[#FFD700] px-20 sm:px-30' > 
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
        </div>

        {/* Slogan */}
        <div className="py-7 sm:px-5 mx-auto mt-30
            rounded-xl
            backdrop-blur-lg
            shadow-lg shadow-black/20
            text-[#FFD700]
            text-2xl sm:text-4xl md:text-5xl
            font-light
            text-center
            relative
            ">
            <div className='z-10' >“Six pools. One fest.</div>
            <div className='z-10' >Sport and culture in motion.”</div>

            <div className="absolute top-1/2 left-[20%] -z-10 w-8 h-8 bg-[#FFD700]/60 animate-float blur-sm rounded-full"></div>
            <div className="absolute top-1/4 right-[20%] -z-10 w-8 h-8 bg-[#FFD700]/60 animate-float blur-sm rounded-full"></div>
        </div>

        {/* Location and time */}


        {/* Cards */}
        <div className='my-30' >
            <Scroll images={[civil, chemical, cse, bme, mae]} />
            {/* <ProfileCard image={civil} title="Civil / MSME / EM / Interdisciplinary" width='w-55' />
            <ProfileCard image={chemical} title="Chemical / Chemistry / IC / Design"  />
            <ProfileCard image={cse} title="CSE / MnC / Mathematics / Physics"  />
            <ProfileCard image={bme} title="BME / BTE / ES / EP" />
            <ProfileCard image={mae} title="MAE / LA / Climate Change / Heritage Science" /> */}
        </div>
        
        {/* contact - footer */}
        

    </div>
)
}

export default Landing;