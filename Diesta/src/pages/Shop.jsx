import React, { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    const el = document.getElementById("poolsContainer");
    if (!el) return;

    el.addEventListener("mouseenter", () => el.style.animationPlayState = "paused");
    el.addEventListener("mouseleave", () => el.style.animationPlayState = "running");
  }, []);

    const pools = [
    {
      id: 1,
      name: 'CE/MSME/ID/EM',
      logo: 'images/CE_MSME_ID_EM_LOGO.png',
      motto: 'Engineering Excellence',
      jersey: 'images/CE_MSME_ID_EM_JERSEY.png',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdSAaYUicBRGgcZd0MqNjZXxJq7VXkekHollFxXjn0_zGOL6A/viewform?usp=publish-editor'
    },
    {
      id: 2,
      name: 'MAE/LA/HS/CC',
      logo: 'images/MAE_LA_HS_CC_LOGO.png',
      motto: 'Creative Minds, Bold Spirits',
      jersey: 'images/MAE_LA_HS_CC_JERSEY.png',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfWsA_-1gE60KiQCmEX4MzIFyCBFNnHPLj6TXeMNvaOXF16Cw/viewform?usp=publish-editor'
    },
    {
      id: 3,
      name: 'CH/CY/IC/DESIGN',
      logo: 'images/CH_CY_IC_DESIGN_LOGO.png',
      motto: 'Innovation Through Design',
      jersey: 'images/CH_CY_IC_DESIGN_JERSEY.png',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScrPSumfUtn5xVETdqbXxDB8X00z4PrkBGP4Q7bkPJzkmp8Zw/viewform?usp=publish-editor'
    },
    {
      id: 4,
      name: 'CSE/MNC/MA/PHY',
      logo: 'images/CSE_MNC_MA_PHY_LOGO.png',
      motto: 'Logic, Code, Precision',
      jersey: 'images/CSE_MNC_MA_PHY_JERSEY.png',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdqRATfbCUnCiki_J5Zy28Awf5EdrRZ2c4JkH87YsLXnKRXeA/viewform?usp=publish-editor'
    },
    {
      id: 5,
      name: 'EP/ES/BT/BM',
      logo: 'images/EP_ES_BT_BM_LOGO.png',
      motto: 'Science of Life & Energy',
      jersey: 'images/EP_ES_BT_BM_JERSEY.png',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeEn_2MpzJgjjoTC1DoVrn_AHZXzaLZ2Ze0iQFNngzynlHDGw/viewform?usp=publish-editor'
    },
    {
      id: 6,
      name: 'EE/AI/ICDT/COE',
      logo: 'images/EE_AI_ICDT_COE_LOGO.png',
      motto: 'Wired to Win',
      jersey: 'images/EE_AI_ICDT_COE_JERSEY.png',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfmtH7q5lI4IYiYr-zrCO5WGfkIonPnbzUMVZRDe0tWF5W43A/viewform?usp=publish-editor'
    }
  ];

  return (
    <main className="pt-24">

      {/* POOLS */}
    <section className="relative py-16 bg-gradient-to-b from-black via-black-light to-black overflow-hidden">
      {/* Edge fade */}
      <div className="relative py-10 before:absolute before:left-0 before:top-0 before:h-full before:w-28 before:z-10
                      before:bg-gradient-to-r before:from-black-light before:to-transparent
                      after:absolute after:right-0 after:top-0 after:h-full after:w-28 after:z-10
                      after:bg-gradient-to-l after:from-black-light after:to-transparent">

        <div
          id="poolsContainer"
          className="flex gap-6 w-max animate-scroll px-10"
        >
          {[...pools, ...pools].map((p, i) => (
            <div
              key={i}
              className="group relative min-w-[190px] h-[340px] rounded-xl overflow-hidden
                          flex items-center justify-center
                          border border-white/10
                          transition-all duration-500 ease-out
                          hover:scale-105 hover:-translate-y-2
                          hover:border-[#FFD700] hover:shadow-[#FFD700]"
              style={{
                background: [
                // Silver
                "linear-gradient(160deg,#E6E6E6,#BDBDBD,#8A8A8A)",

                // Rich Gold
                "linear-gradient(160deg,#FFE27A,#E0B83A,#B88A1E)",

                // Graphite (not black)
                "linear-gradient(160deg,#6A6A6A,#4A4A4A,#2E2E2E)",

                // Royal Gold
                "linear-gradient(160deg,#FFD966,#D4AF37,#9C7C1A)",

                // Platinum
                "linear-gradient(160deg,#F5F5F5,#D0D0D0,#9E9E9E)",

                // Bronze Gold
                "linear-gradient(160deg,#E2B873,#C89A2E,#8C6A1E)",
              ][i % 6],

              }}
            >
              {/* Vertical title */}
              <span className="absolute text-black text-2xl font-bebas tracking-[0.3em]
                                rotate-180 [writing-mode:vertical-rl]
                                transition-all duration-300
                                group-hover:opacity-0 group-hover:blur-sm">
                {p.name}
              </span>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center
                              bg-white/10 backdrop-blur-sm
                              opacity-0 group-hover:opacity-100
                              transition-all duration-300">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-20 h-20 mb-4 drop-shadow-2xl"
                />

                <p className="font-bebas text-black text-lg tracking-wider">
                  {p.name}
                </p>

                <div className="w-12 h-[2px] bg-black/60 my-2" />

                <p className="text-xs italic text-black/80 px-4">
                  “{p.motto}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* DROPS */}
      <section className="px-12 py-16">
        <h2 className="font-bebas text-[#FFD700] text-5xl tracking-widest mb-12 relative after:block after:w-16 after:h-1 after:bg-[#FFD700] after:mt-2">
          Official Drops
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-6xl">
          {pools.map(p => (
            <div key={p.id} className="bg-black-light border border-black-lighter rounded-xl overflow-hidden hover:-translate-y-2 transition hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]">
              <div className="h-72 bg-gradient-to-br from-black-lighter to-black-light overflow-hidden">
                <img src={p.jersey} className="w-full h-full object-cover hover:scale-110 transition" />
              </div>

              <div className="p-6">
                <h3 className="font-light text-xl text-[#FFD700] ">{p.name} Jersey</h3>
                <p className="font-bebas text-2xl text-[#FFD700]">₹499</p>

              <a
                href={p.formLink}
                target="_blank"
                className="relative inline-block mt-4 px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] font-semibold uppercase tracking-wider rounded-md overflow-hidden transition-all duration-300
                          before:absolute before:inset-0 before:bg-[#FFD700] before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                          hover:before:scale-x-100 hover:text-black hover:shadow-[#FFD700] hover:-translate-y-1"
              >
                <span className="relative z-10">Purchase Now</span>
              </a>


              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Shop;
