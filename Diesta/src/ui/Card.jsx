export default function ProfileCard({
image = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
title = "George Johnson",
}) {
return (
    <div>
        <div className="flex justify-center items-center gap-2" > 
            <img src={image} alt={title} className="w-28 h-28 rounded-full border-4 border-black" /> 
            <div className="text-[#FFD700] text-xl sm:text-3xl" > {title} </div>
        </div>
    </div>
);
}
