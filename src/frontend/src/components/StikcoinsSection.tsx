import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─── Animated Coin SVG ─────────────────────────────────────────────────────────
function CoinSVG({
  size = 64,
  style,
}: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      style={style}
    >
      <circle cx="32" cy="32" r="30" fill="url(#coinGold)" />
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="oklch(0.82 0.18 80 / 0.6)"
        strokeWidth="2"
      />
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="oklch(0.62 0.18 70)"
        strokeWidth="2.5"
      />
      {/* Shine highlight */}
      <ellipse
        cx="24"
        cy="22"
        rx="7"
        ry="4"
        fill="white"
        opacity="0.25"
        transform="rotate(-30 24 22)"
      />
      {/* Letter S */}
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="900"
        fontSize="22"
        fill="oklch(0.55 0.2 70)"
      >
        S
      </text>
      <defs>
        <radialGradient id="coinGold" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="oklch(0.9 0.17 88)" />
          <stop offset="55%" stopColor="oklch(0.78 0.19 82)" />
          <stop offset="100%" stopColor="oklch(0.62 0.2 72)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── Mini Coin for cards ───────────────────────────────────────────────────────
function MiniCoin({ animated = false }: { animated?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      style={
        animated ? { animation: "spin-slow 4s linear infinite" } : undefined
      }
    >
      <circle cx="32" cy="32" r="30" fill="url(#miniCoinGold)" />
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="oklch(0.82 0.18 80 / 0.5)"
        strokeWidth="2"
      />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="oklch(0.55 0.2 70)"
      >
        S
      </text>
      <defs>
        <radialGradient id="miniCoinGold" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="oklch(0.9 0.17 88)" />
          <stop offset="100%" stopColor="oklch(0.62 0.2 72)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── Activity Cards Data ───────────────────────────────────────────────────────
const EARN_ACTIVITIES = [
  {
    id: "daily-login",
    icon: "🌅",
    activity: "Daily Login",
    coins: "+5",
    detail: "Simply open the app each day to claim your reward",
    color: "oklch(0.70 0.25 195)",
    bg: "oklch(0.65 0.25 195 / 0.18)",
  },
  {
    id: "create-post",
    icon: "✏️",
    activity: "Create a Post",
    coins: "+10",
    detail: "Share your art, photos, and creative work",
    color: "oklch(0.75 0.28 305)",
    bg: "oklch(0.55 0.30 305 / 0.18)",
  },
  {
    id: "post-quik",
    icon: "🎬",
    activity: "Post a Quik",
    coins: "+15",
    detail: "Upload a short video or Quik to your profile",
    color: "oklch(0.68 0.22 25)",
    bg: "oklch(0.55 0.22 25 / 0.18)",
  },
  {
    id: "refer-friend",
    icon: "👥",
    activity: "Refer a Friend",
    coins: "+50",
    detail: "Invite friends to join Stikbook and both earn bonus coins",
    color: "oklch(0.68 0.22 150)",
    bg: "oklch(0.60 0.20 150 / 0.18)",
  },
];

// ─── Floating Coin Shapes ──────────────────────────────────────────────────────
const BG_COINS = [
  {
    id: "bg-coin-1",
    top: "8%",
    left: "4%",
    size: 56,
    delay: "0s",
    dur: "6s",
    opacity: 0.22,
  },
  {
    id: "bg-coin-2",
    top: "20%",
    right: "6%",
    size: 40,
    delay: "1.2s",
    dur: "5s",
    opacity: 0.18,
  },
  {
    id: "bg-coin-3",
    bottom: "15%",
    left: "8%",
    size: 72,
    delay: "0.6s",
    dur: "7s",
    opacity: 0.16,
  },
  {
    id: "bg-coin-4",
    bottom: "25%",
    right: "4%",
    size: 48,
    delay: "2s",
    dur: "5.5s",
    opacity: 0.2,
  },
  {
    id: "bg-coin-5",
    top: "55%",
    left: "2%",
    size: 32,
    delay: "1.5s",
    dur: "4.5s",
    opacity: 0.25,
  },
  {
    id: "bg-coin-6",
    top: "40%",
    right: "3%",
    size: 60,
    delay: "3s",
    dur: "6.5s",
    opacity: 0.16,
  },
];

// ─── Activity Card ─────────────────────────────────────────────────────────────
function ActivityCard({
  item,
  index,
}: {
  item: (typeof EARN_ACTIVITIES)[0];
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid={`earn-activity-${item.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "oklch(0.22 0.07 280)" : "oklch(0.18 0.05 280)",
        borderRadius: "24px",
        padding: "28px 24px",
        border: hovered
          ? `2px solid ${item.color}`
          : "2px solid oklch(0.26 0.06 280)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.2s ease, box-shadow 0.3s ease, background 0.2s ease`,
        boxShadow: hovered
          ? `0 20px 48px ${item.color.replace(")", " / 0.30)")}, 0 0 0 1px ${item.color.replace(")", " / 0.15)")}`
          : "0 4px 16px oklch(0 0 0 / 0.35)",
        cursor: "default",
      }}
    >
      {/* Icon badge */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "18px",
          background: item.bg,
          border: `1.5px solid ${item.color.replace(")", " / 0.30)")}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          marginBottom: "16px",
          transition: "transform 0.35s ease",
          transform: hovered ? "scale(1.12) rotate(6deg)" : "scale(1)",
        }}
      >
        {item.icon}
      </div>

      {/* Activity name */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "18px",
          color: "oklch(0.94 0.01 280)",
          marginBottom: "8px",
        }}
      >
        {item.activity}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.6,
          color: "oklch(0.60 0.01 280)",
          marginBottom: "16px",
          minHeight: "40px",
        }}
      >
        {item.detail}
      </p>

      {/* Coin reward badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background:
            "linear-gradient(135deg, oklch(0.78 0.20 85 / 0.18), oklch(0.62 0.20 65 / 0.14))",
          border: "1.5px solid oklch(0.78 0.18 85 / 0.40)",
          borderRadius: "100px",
          padding: "6px 14px",
        }}
      >
        <MiniCoin animated={hovered} />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "16px",
            color: "oklch(0.88 0.18 82)",
          }}
        >
          {item.coins} coins
        </span>
      </div>
    </div>
  );
}

// ─── StikcoinsSection ──────────────────────────────────────────────────────────
export function StikcoinsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="stikcoins"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, oklch(0.16 0.07 305) 0%, oklch(0.20 0.09 270) 40%, oklch(0.18 0.08 280) 100%)",
      }}
    >
      {/* Floating background coin shapes */}
      <div aria-hidden="true">
        {BG_COINS.map((coin) => (
          <div
            key={coin.id}
            style={{
              position: "absolute",
              top: (coin as { top?: string }).top,
              left: (coin as { left?: string }).left,
              right: (coin as { right?: string }).right,
              bottom: (coin as { bottom?: string }).bottom,
              opacity: coin.opacity,
              animation: `float ${coin.dur} ease-in-out infinite`,
              animationDelay: coin.delay,
              pointerEvents: "none",
            }}
          >
            <CoinSVG size={coin.size} />
          </div>
        ))}
        {/* Glowing gold radial */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, oklch(0.78 0.20 85 / 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Purple glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, oklch(0.55 0.30 305 / 0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
          }}
        >
          {/* Hero coin with combined float + spin-slow */}
          <div
            style={{
              display: "inline-block",
              marginBottom: "24px",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <div
              style={{
                animation: "spin-slow 8s linear infinite",
                display: "inline-block",
                filter: "drop-shadow(0 16px 32px oklch(0.78 0.20 85 / 0.65))",
              }}
            >
              <CoinSVG size={88} />
            </div>
          </div>

          <div
            style={{
              display: "block",
              background: "oklch(0.78 0.20 85 / 0.18)",
              color: "oklch(0.92 0.18 82)",
              borderRadius: "100px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "16px",
              border: "1px solid oklch(0.78 0.20 85 / 0.30)",
            }}
          >
            ✦ In-App Currency
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              letterSpacing: "-1.5px",
              color: "oklch(0.95 0.01 280)",
              marginBottom: "16px",
              lineHeight: 1.05,
            }}
          >
            Earn{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.18 85), oklch(0.75 0.22 65))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stikcoins
            </span>{" "}
            Every Day
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "oklch(0.62 0.01 280)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Stikbook's in-app currency rewards you for simply being yourself.
            Create content, engage with friends, and watch your coin balance
            grow.
          </p>
        </div>

        {/* Activity cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {EARN_ACTIVITIES.map((item, i) => (
            <ActivityCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          style={{
            marginTop: "56px",
            padding: "40px 48px",
            background:
              "linear-gradient(135deg, oklch(0.62 0.28 345 / 0.20), oklch(0.78 0.20 85 / 0.15))",
            borderRadius: "28px",
            border: "2px solid oklch(0.62 0.28 345 / 0.30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxShadow: "0 8px 32px oklch(0 0 0 / 0.3)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "8px",
              }}
            >
              <CoinSVG size={40} />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "oklch(0.95 0.01 280)",
                  margin: 0,
                }}
              >
                New users get 100 Stikcoins free!
              </p>
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "oklch(0.62 0.01 280)",
                margin: 0,
                paddingLeft: "52px",
              }}
            >
              Sign up today and start spending on Stikdeals instantly.
            </p>
          </div>
          <button
            type="button"
            data-ocid="stikcoins-cta"
            onClick={() =>
              document
                .getElementById("download")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "14px 32px",
              borderRadius: "100px",
              background: "var(--gradient-accent)",
              color: "white",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 28px oklch(0.62 0.28 345 / 0.50)",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-3px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 16px 40px oklch(0.62 0.28 345 / 0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "none";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 28px oklch(0.62 0.28 345 / 0.50)";
            }}
          >
            Claim Free Coins 🎁
          </button>
        </div>
      </div>
    </section>
  );
}
