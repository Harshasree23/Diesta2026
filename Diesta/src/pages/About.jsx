import Diestalogo from '../assets/diesta-logo.png';
import civil from '../assets/civ.png';
import chemical from '../assets/chemical.png';
import cse from '../assets/cse.png';
import bme from '../assets/bme.png';
import mae from '../assets/mae.png';

const diestaEvents = {
culturals: [
{ id: 1, name: "Solo Dance", points: 40, club: "Shuffle Crew" },
{ id: 2, name: "Duo / Trio Dance", points: 60, club: "Shuffle Crew" },
{ id: 3, name: "Group Dance", points: 100, club: "Shuffle Crew" },
{ id: 4, name: "Solo Singing", points: 40, club: "Vibes" },
{ id: 5, name: "Free Style Music", points: 60, club: "Vibes" },
{ id: 6, name: "Battle of Bands", points: 100, club: "Vibes" },
{ id: 7, name: "Cosplay", points: 100, club: "Otaku" },
{ id: 8, name: "Photo Story Competition", points: 100, club: "Infocus" },
{ id: 9, name: "Theme-based Photography", points: 100, club: "Infocus" },
{ id: 10, name: "Poetry Competition", points: 50, club: "Rang De Manch" },
{ id: 11, name: "Stage Play", points: 60, club: "Rang De Manch" },
{ id: 12, name: "Poetry Writing", points: 50, club: "Writing Club" },
{ id: 13, name: "Creative Writing", points: 60, club: "Writing Club" },
{ id: 14, name: "General Quiz", points: 70, club: "Quiz" },
{ id: 15, name: "Film Making Competition", points: 100, club: "BTL" },
{ id: 16, name: "Reel Making Competition", points: 100, club: "BTL" },
{ id: 17, name: "48Hr Animation Jam", points: 100, club: "Gesture" },
{ id: 18, name: "Expressive Letter Battle", points: 70, club: "Gesture" },
{ id: 19, name: "NoLogo Uprising", points: 100, club: "Gesture" }
],

sports: [
{ id: 20, name: "Squash", points: 100 },
{ id: 21, name: "Cricket", points: 100 },
{ id: 22, name: "Volleyball", points: 100 },
{ id: 23, name: "Football", points: 100 },
{ id: 24, name: "Table Tennis", points: 100 },
{ id: 25, name: "Basketball", points: 100 },
{ id: 26, name: "Hockey", points: 100 },
{ id: 27, name: "Lawn Tennis", points: 100 },
{ id: 28, name: "Badminton", points: 100 },
{ id: 29, name: "Chess", points: 100 },
{ id: 30, name: "Carroms", points: 100 },
{ id: 31, name: "Aquatics", points: 300 },
{ id: 32, name: "Weightlifting", points: 100 },
{ id: 33, name: "Powerlifting", points: 100 },
{ id: 34, name: "Athletics", points: 300 }
]
};

const About = () => {
return (
    <div className="bg-black min-h-screen text-white pt-15 sm:pt-25 pb-20">

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
            <div className="text-[#FFD700] text-2xl sm:text-3xl mb-4 border-b border-[#FFD700]" >The Inter-Departmental Sports and Cultural Fest</div>
            <div className='text-sm sm:text-xl'>
                Diesta is the annual inter-departmental sports and cultural festival of the Indian Institute of Technology Hyderabad (IIT Hyderabad), where students from all academic departments are grouped into several teams and compete across a variety of sports competitions, cultural performances, quizzes, and team events to win overall glory and the championship title. The event is designed to foster teamwork, creativity, energy, and healthy competition among students, making it one of the major highlights of student life on campus alongside other key events like Elan & nVision and Milan. For 2026, Diesta is scheduled to take place from 6 th to 15 th February 2026, and while the full schedule of specific competitions and activities is yet to be published, it promises a vibrant mix of athletic and cultural challenges, bringing together the institute community for memorable experiences
            </div>
        </div>

        {/* Pools participating */}
        <div className="px-8 sm:px-15 my-8">
            <div className="text-[#FFD700] text-2xl sm:text-3xl mb-4 border-b border-[#FFD700]">
                Pools Participating
            </div>

            <ul className="space-y-4 text-white w-[50%] text-lg flex flex-col  mx-auto">
                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    <img src={civil} alt="Civil" className="h-25 rounded-lg" />
                    Civil / MSME / EM / Interdisciplinary
                </li>

                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    <img src={chemical} alt="Chemical" className="h-25 rounded-lg" />
                    Chemical / Chemistry / IC / Design
                </li>

                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    <img src={cse} alt="CSE" className="h-25 rounded-lg" />
                    CSE / MnC / Mathematics / Physics
                </li>

                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    <img src={bme} alt="BME" className="h-25 rounded-lg" />
                    BME / BTE / ES / EP
                </li>

                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    EE / AI / IC Design / CoE
                </li>

                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    <img src={mae} alt="MAE" className="h-25 rounded-lg" />
                    MAE / LA / Climate Change / Heritage Science
                </li>

                <li className="flex flex-wrap justify-center text-sm sm:text-md sm:justify-between items-center gap-4">
                    Faculty / Staff
                </li>
            </ul>
        </div>



        {/* Culturals */}
            <div className='px-8 sm:px-15 my-8'>
                <h2 className="text-[#FFD700] text-2xl sm:text-3xl mb-4 border-b border-[#FFD700]">Culturals</h2>
                <ul className="list-disc list-inside space-y-1">
                {diestaEvents.culturals.map(event => (
                    <li key={event.id}>{event.name}</li>
                ))}
                </ul>
            </div>

            {/* Sports */}
            <div className='px-8 sm:px-15 my-8'>
                <h2 className="text-[#FFD700] text-2xl sm:text-3xl mb-4 border-b border-[#FFD700]">Sports</h2>
                <ul className="list-disc list-inside space-y-1">
                {diestaEvents.sports.map(event => (
                    <li key={event.id}>{event.name}</li>
                ))}
                </ul>
            </div>
    </div>

)
}

export default About;