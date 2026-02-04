export default function ProfileCard({
image = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
title = "George Johnson",
width = "w-40",
}) {
return (
    <div className="" >
        <div className="flex   justify-center items-center gap-20 " > 
            <img src={image} alt={title} className={`${width} rounded-full border-4 border-black`} /> 
            <div className="text-[#FFD700] text-xl sm:text-2xl w-[50%]" > {title} </div>
        </div>
    </div>
);
}
