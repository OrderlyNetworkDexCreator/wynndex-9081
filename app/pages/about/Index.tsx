import { Helmet } from "react-helmet-async";
import { useCallback } from "react";
import { useWalletConnector } from "@orderly.network/hooks";
import { Activity, Binary, Cpu, ShieldAlert, TrendingUp } from "lucide-react";
import "@/styles/about.css";

const milestones = [
  {
    value: "$600K",
    label: "$PEPE discovery market cap",
  },
  {
    value: "$25M+",
    label: "Reported meme coin profits",
  },
  {
    value: "$87M",
    label: "Two-month leveraged run",
  },
  {
    value: "$1.26B",
    label: "Largest BTC long notional",
  },
];

export default function AboutIndex() {
  const { connect, connecting, wallet } = useWalletConnector();

  const handleJoinNow = useCallback(() => {
    connect().catch((error) => {
      console.warn("Wallet connection failed:", error);
    });
  }, [connect]);

  return (
    <>
      <Helmet>
        <title>About WynnDEX</title>
        <meta
          name="description"
          content="About WynnDEX and James Wynn's high-stakes crypto trading story."
        />
      </Helmet>

      <main className="about-wynn">
        <div className="about-wynn__matrix" aria-hidden="true" />
        <section className="about-wynn__hero">
          <div className="about-wynn__kicker">
            <Binary size={16} />
            <span>High leverage signal</span>
          </div>
          <h1>About WYNN DEX</h1>
          <p className="about-wynn__lede">
            James Wynn is a high-stakes crypto trader known for turning
            conviction, timing, and calculated aggression into some of the most
            talked-about trades in the digital asset space.
          </p>
        </section>

        <section className="about-wynn__stats" aria-label="Trading milestones">
          {milestones.map((item) => (
            <div className="about-wynn__stat" key={item.value}>
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </section>

        <section className="about-wynn__story">
          <article>
            <div className="about-wynn__icon">
              <TrendingUp size={20} />
            </div>
            <p>
              He first gained widespread recognition after discovering $PEPE at
              a mere $600,000 market cap and publicly calling for it to reach
              multi-billion-dollar valuations long before the broader market
              caught on. That conviction ultimately translated into profits
              exceeding $25,000,000 and cemented his reputation as one of the
              sharpest meme coin traders in crypto.
            </p>
          </article>

          <article>
            <div className="about-wynn__icon">
              <Cpu size={20} />
            </div>
            <p>
              Rather than slowing down after that success, James channeled his
              relentless energy into leveraged trading, embracing both the
              extraordinary upside and brutal downside that comes with it. By
              utilizing the power of leverage to amplify profits or losses, he
              managed to turn a relatively small amount of capital into an
              astonishing $87,000,000 in just two months.
            </p>
          </article>

          <article>
            <div className="about-wynn__icon">
              <Activity size={20} />
            </div>
            <p>
              Known for his fearless approach to risk, James Wynn also holds the
              record for the largest $BTC long position in history, reaching a
              jaw-dropping notional size of $1.26 BILLION.
            </p>
          </article>

          <article>
            <div className="about-wynn__icon">
              <ShieldAlert size={20} />
            </div>
            <p>
              To some, he is a once-in-a-generation trader. To others, a symbol
              of the extreme volatility and psychological warfare that defines
              modern crypto markets.
            </p>
          </article>
        </section>

        <section className="about-wynn__closing">
          <p>
            Regardless of perspective, James Wynn has become one of the most
            recognizable and controversial figures in high-leverage crypto
            trading.
          </p>
          <button
            className="about-wynn__join"
            type="button"
            onClick={handleJoinNow}
            disabled={connecting || Boolean(wallet)}
          >
            {wallet ? "WALLET CONNECTED" : connecting ? "CONNECTING" : "JOIN NOW"}
          </button>
        </section>
      </main>
    </>
  );
}
