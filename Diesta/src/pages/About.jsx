import Diestalogo from '../assets/diesta-logo.png';

const About = () => {
return (
    <div className="bg-black min-h-screen text-white pt-15 sm:pt-25">

        <div className="text-[#FFD700] text-3xl sm:text-5xl flex justify-end items-end pr-10" >
            <div>
                <div>Diesta</div>
                <div>2026</div>
            </div>
            <div>
                <img src={Diestalogo} alt="Diesta Logo" className="h-20 sm:h-28 mt-2" />
            </div>
        </div>

        {/* Basic information */}
        <div className="px-8 sm:px-15 my-8" >
            <div className="text-[#FFD700] text-2xl sm:text-3xl" >The Inter-Departmental Sports and Cultural Fest</div>
            <div>
                Diesta is the annual inter-departmental sports and cultural festival of the Indian Institute of Technology Hyderabad (IIT Hyderabad), where students from all academic departments are grouped into several teams and compete across a variety of sports competitions, cultural performances, quizzes, and team events to win overall glory and the championship title. The event is designed to foster teamwork, creativity, energy, and healthy competition among students, making it one of the major highlights of student life on campus alongside other key events like Elan & nVision and Milan. For 2026, Diesta is scheduled to take place from 6 th to 15 th February 2026, and while the full schedule of specific competitions and activities is yet to be published, it promises a vibrant mix of athletic and cultural challenges, bringing together the institute community for memorable experiences
            </div>
        </div>

        {/* Pools participating */}
        <div className="px-8 sm:px-15 my-8" >
            <div className="text-[#FFD700] text-2xl sm:text-3xl " > Pools Participating </div>
            <div>
                <div>
                    Civil / MSME / EM / Interdisciplinary
                </div>

                <div>
                    Chemical / Chemistry / IC / Design
                </div>

                <div>
                    CSE / MnC / Mathematics / Physics
                </div>

                <div>
                    BME / BTE / ES / EP
                </div>

                <div>
                    EE / AI / IC Design / CoE
                </div>

                <div>
                    MAE / LA / Climate Change / Heritage Science
                </div>

                <div>
                    Faculty / Staff
                </div>

            </div>

        </div>

    </div>

)
}

export default About;