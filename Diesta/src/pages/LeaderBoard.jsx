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

  const API_URL = "https://script.google.com/macros/s/AKfycbzZFrc_q2FqZ612KBdXO4RUO-VlZ1A9foLbx-YFh2w4JzVVahnEYS5RLuKBiMAQEKfBAg/exec";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h2 style={styles.center}>Loading leaderboard…</h2>;
  if (!data) return <h2 style={styles.center}>No data</h2>;

  return (
    <div style={styles.container}>
      <style>{`
        .leaderboard-selection ::selection {
          background-color: rgba(255, 215, 0, 0.6) !important;
          color: #ffffff !important;
        }
        .leaderboard-selection ::-moz-selection {
          background-color: rgba(255, 215, 0, 0.6) !important;
          color: #ffffff !important;
        }
      `}</style>
      <div className="leaderboard-selection">
        <h1 style={styles.title}>Leaderboard</h1>

      {/* ===== TOTAL POINTS ===== */}
      <Section title="🔥 Total Points">
        <PointsList items={data.totalPoints} />
      </Section>

      {/* ===== SPORTS ===== */}
      <Section title="🏆 Sports Points">
        <PointsList items={data.sports.points} />
      </Section>

      {/* ===== CULTURALS ===== */}
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
    <section style={{ marginBottom: 40, color: "#ffffff" }}>
      <h2 style={{ color: "#ffffff" }}>{title}</h2>
      {children}
    </section>
  );
}

function PointsList({ items }) {
  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={item.pool} style={styles.listItem}>
          <span>
            #{index + 1}{" "}
            <strong>{POOL_NAMES[item.pool] || item.pool}</strong>
          </span>
          <span>{item.points} pts</span>
        </li>
      ))}
    </ul>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    maxWidth: 900,
    margin: "0 auto",
    padding: 24,
    fontFamily: "sans-serif"
  },
  center: {
    textAlign: "center",
    marginTop: 40,
    color: "#ffffff"
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "#ffffff"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 14px",
    borderBottom: "1px solid #ddd",
    color: "#ffffff"
  }
};
