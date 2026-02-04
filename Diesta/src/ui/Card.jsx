export default function ProfileCard({
image = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
title = "George Johnson",
content1 = "Support Specialist",
content2 = "5+ Years Experience",
}) {
return (
    <div
    className="
        group relative w-70 h-60 sm:h-70
        bg-black
        rounded-2xl overflow-hidden
        flex flex-col items-center justify-center
        text-center
        border border-[#FFD700]/30
    "
    >
    {/* Gold gradient header */}
    <div
        className="
        absolute top-0 w-full h-24
        bg-gradient-to-br from-[#FFD700] via-[#ffcc33] to-[#b89600]
        transition-all duration-500
        group-hover:h-full
        "
    />

    {/* Profile Image */}
    <img
        src={image}
        alt={title}
        className="
        w-28 h-28
        object-cover
        rounded-full
        border-4 border-black
        z-10
        transition-all duration-500
        group-hover:scale-125
        group-hover:-translate-y-10
        "
    />

    {/* Default Content */}
    <div
        className="
        z-10 mt-3
        text-[#FFD700]
        transition-all duration-500
        group-hover:opacity-0 group-hover:-translate-y-5
        "
    >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{content1}</p>
    </div>

    {/* Hover Content */}
    <div
        className="
        absolute bottom-8
        opacity-0
        text-black
        z-10
        transition-all duration-500
        group-hover:opacity-100 group-hover:-translate-y-6
        "
    >
        <p className="font-semibold">{content2}</p>
        <p className="text-sm">View Profile →</p>
    </div>
    </div>
);
}
