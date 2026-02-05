import { useEffect, useState } from "react";

/* ========= POOL NAME MAP ========= */
const POOL_NAMES = {
  CE: "Civil / MSME / EM / Interdisciplinary",
  CH: "Chemical / Chemistry / IC / Design",
  CSE: "CSE / MnC / Mathematics / Physics",
  BTBM: "BME / BTE / ES / EP",
  EE: "EE / AI / IC Design / CoE",
  MAE: "MAE / LA / Climate Change / Heritage Science"
};

export default function LeaderBoard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbz30ZpMBp4VMCWyQ_uGqOcC8rkcK86SlOtj2L_6x8U6zxkAVCNvUH0TXhvmkiIavA8T/exec";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400 text-xl">
        Loading leaderboard…
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-400 text-lg">
        No data available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-25">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-14 tracking-wide">
          Leaderboard
        </h1>

        {/* TOTAL POINTS */}
        <Section title="🔥 Total Points">
          <PointsList items={data.totalPoints} />
        </Section>

        {/* SPORTS */}
        <Section title="🏆 Sports Points">
          <PointsList items={data.sports.points} />
        </Section>

        {/* CULTURALS */}
        <Section title="🎭 Culturals Points">
          <PointsList items={data.culturals.points} />
        </Section>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold text-yellow-300 mb-5 border-b border-yellow-500/40 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function PointsList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={item.pool}
          className={`
            flex justify-between items-center px-5 py-4 rounded-lg transition
            ${getRankBg(index)}
          `}
        >
          <span className="text-sm sm:text-base">
            <span className="text-yellow-400 font-semibold mr-2">
              #{index + 1}
            </span>
            {POOL_NAMES[item.pool] || item.pool}
          </span>

          <span className="text-yellow-300 font-bold">
            {item.points} pts
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ================= HELPERS ================= */

function getRankBg(index) {
  switch (index) {
    case 0:
      return "bg-yellow-500/20 border border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.35)]";
    case 1:
      return "bg-amber-400/15 border border-gray-300/40";
    case 2:
      return "bg-orange-400/15 border border-orange-300/40";
    default:
      return "bg-neutral-900 hover:bg-neutral-800 border border-transparent";
  }
}
