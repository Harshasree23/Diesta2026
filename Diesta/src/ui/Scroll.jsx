export default function Scroll({images}) {
    return (
        <div className="w-full overflow-hidden bg-black py-6">
        <div className="flex w-max animate-scroll">
            {[...images, ...images].map((img, i) => (
            <img
                key={i}
                src={img}
                alt=""
                className="h-40 w-auto mx-4 rounded-xl object-cover"
            />
            ))}
        </div>
        </div>
    );
}