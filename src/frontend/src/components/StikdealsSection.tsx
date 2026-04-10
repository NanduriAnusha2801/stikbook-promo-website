import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─── Deal data ────────────────────────────────────────────────────────────────
const DEALS = [
  {
    id: "javajam",
    brand: "JavaJam",
    category: "Coffee & Café",
    tagline: "Your daily brew, on the house",
    discount: "20% OFF",
    coins: 50,
    color: "oklch(0.68 0.22 25)",
    bg: "oklch(0.55 0.22 25 / 0.18)",
    gradientFrom: "oklch(0.55 0.22 25)",
    gradientTo: "oklch(0.65 0.20 35)",
    emoji: "☕",
    code: "STIK20",
  },
  {
    id: "freshbites",
    brand: "FreshBites",
    category: "Food & Dining",
    tagline: "Juicy, fresh, and totally free",
    discount: "FREE BURGER",
    coins: 100,
    color: "oklch(0.75 0.28 305)",
    bg: "oklch(0.55 0.30 305 / 0.18)",
    gradientFrom: "oklch(0.55 0.30 305)",
    gradientTo: "oklch(0.65 0.25 195)",
    emoji: "🍔",
    code: "FRESHFREE",
  },
  {
    id: "cinefun",
    brand: "CineFun",
    category: "Movies & Entertainment",
    tagline: "Big screen fun at a small price",
    discount: "$8 OFF TICKET",
    coins: 75,
    color: "oklch(0.72 0.26 345)",
    bg: "oklch(0.62 0.28 345 / 0.18)",
    gradientFrom: "oklch(0.62 0.28 345)",
    gradientTo: "oklch(0.55 0.30 305)",
    emoji: "🎬",
    code: "CINE8",
  },
];

// ─── Coin SVG (mini) ──────────────────────────────────────────────────────────
function CoinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="url(#dealCoinGrad)" />
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
        y="41"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="oklch(0.52 0.2 70)"
      >
        S
      </text>
      <defs>
        <radialGradient id="dealCoinGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="oklch(0.9 0.17 88)" />
          <stop offset="100%" stopColor="oklch(0.62 0.2 72)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── Perforated edge decoration ───────────────────────────────────────────────
function PerforatedEdge({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        height: "0px",
        overflow: "visible",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4px",
        marginTop: "-1px",
        marginBottom: "-1px",
        zIndex: 2,
      }}
    >
      {/* Left notch */}
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "oklch(0.14 0.06 280)",
          marginLeft: "-10px",
          flexShrink: 0,
          border: `1px solid ${color.replace(")", " / 0.30)")}`,
        }}
      />
      {/* Dashed line */}
      <div
        style={{
          flex: 1,
          borderTop: `2px dashed ${color.replace(")", " / 0.45)")}`,
          margin: "0 4px",
        }}
      />
      {/* Right notch */}
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "oklch(0.14 0.06 280)",
          marginRight: "-10px",
          flexShrink: 0,
          border: `1px solid ${color.replace(")", " / 0.30)")}`,
        }}
      />
    </div>
  );
}

// ─── Deal Card ────────────────────────────────────────────────────────────────
function DealCard({
  deal,
  index,
}: {
  deal: (typeof DEALS)[0];
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid={`deal-card-${deal.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "oklch(0.18 0.06 280)",
        borderRadius: "24px",
        overflow: "hidden",
        border: hovered
          ? `2px solid ${deal.color}`
          : "2px solid oklch(0.26 0.06 280)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-8px) scale(1.01)"
            : "translateY(0)"
          : "translateY(40px)",
        transition: `opacity 0.65s ease ${index * 120}ms, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 120}ms, border-color 0.2s ease, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? `0 24px 56px ${deal.color.replace(")", " / 0.30)")}, 0 0 0 4px ${deal.color.replace(")", " / 0.08)")}`
          : "0 4px 20px oklch(0 0 0 / 0.40)",
        cursor: "pointer",
      }}
    >
      {/* Coupon header */}
      <div
        style={{
          padding: "24px 28px 20px",
          background: deal.bg,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-24px",
            top: "-24px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: deal.color.replace(")", " / 0.18)"),
          }}
        />

        {/* Category label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: deal.color,
            marginBottom: "10px",
          }}
        >
          <span>{deal.emoji}</span>
          <span>{deal.category}</span>
        </div>

        {/* Brand + discount row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "22px",
                color: "oklch(0.94 0.01 280)",
                lineHeight: 1.1,
                marginBottom: "4px",
              }}
            >
              {deal.brand}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "oklch(0.65 0.01 280)",
                margin: 0,
              }}
            >
              {deal.tagline}
            </p>
          </div>

          {/* Bouncing discount badge */}
          <div
            style={{
              background: `linear-gradient(135deg, ${deal.gradientFrom}, ${deal.gradientTo})`,
              borderRadius: "14px",
              padding: "10px 14px",
              textAlign: "center",
              flexShrink: 0,
              animation: isVisible
                ? "scale-bounce 2.5s ease-in-out infinite"
                : "none",
              animationDelay: `${index * 0.25}s`,
              boxShadow: `0 8px 24px ${deal.color.replace(")", " / 0.50)")}`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "16px",
                color: "white",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {deal.discount}
            </div>
          </div>
        </div>
      </div>

      {/* Perforated tear edge */}
      <PerforatedEdge color={deal.color} />

      {/* Coupon body */}
      <div
        style={{
          padding: "18px 28px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* Coin cost */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background:
              "linear-gradient(135deg, oklch(0.78 0.20 85 / 0.15), oklch(0.62 0.20 65 / 0.10))",
            border: "1.5px solid oklch(0.78 0.18 85 / 0.35)",
            borderRadius: "100px",
            padding: "5px 12px",
          }}
        >
          <CoinIcon size={18} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "14px",
              color: "oklch(0.88 0.18 82)",
            }}
          >
            {deal.coins} Stikcoins
          </span>
        </div>

        {/* Code */}
        <div
          style={{
            background: "oklch(0.24 0.06 280)",
            borderRadius: "8px",
            padding: "6px 12px",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            fontWeight: 700,
            color: "oklch(0.80 0.01 280)",
            letterSpacing: "0.06em",
            border: "1.5px dashed oklch(0.36 0.07 280)",
          }}
        >
          {deal.code}
        </div>

        {/* Redeem button */}
        <button
          type="button"
          data-ocid={`deal-redeem-${deal.id}`}
          style={{
            padding: "9px 20px",
            borderRadius: "100px",
            background: hovered
              ? `linear-gradient(135deg, ${deal.gradientFrom}, ${deal.gradientTo})`
              : "transparent",
            color: hovered ? "white" : deal.color,
            border: `2px solid ${deal.color}`,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "13px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: hovered
              ? `0 8px 24px ${deal.color.replace(")", " / 0.45)")}`
              : "none",
            whiteSpace: "nowrap",
          }}
        >
          Redeem with Stikcoins
        </button>
      </div>
    </div>
  );
}

// ─── How it works steps ───────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    id: "step-earn",
    step: "1",
    label: "Earn Stikcoins",
    desc: "Through daily activities on the app",
    icon: "🪙",
  },
  {
    id: "step-browse",
    step: "2",
    label: "Browse Stikdeals",
    desc: "Find exclusive offers from top brands",
    icon: "🛍️",
  },
  {
    id: "step-redeem",
    step: "3",
    label: "Redeem & Save",
    desc: "Unlock real discounts instantly",
    icon: "✅",
  },
];

// ─── StikdealsSection ─────────────────────────────────────────────────────────
export function StikdealsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { ref: stepsRef, isVisible: stepsVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="stikdeals"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(160deg, oklch(0.14 0.06 195) 0%, oklch(0.18 0.10 270) 50%, oklch(0.16 0.08 305) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.62 0.28 345 / 0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.65 0.25 195 / 0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, oklch(0.62 0.28 345), oklch(0.55 0.30 305))",
              fontSize: "34px",
              marginBottom: "20px",
              boxShadow: "0 10px 32px oklch(0.62 0.28 345 / 0.55)",
              animation: "scale-bounce 3s ease-in-out infinite",
            }}
          >
            🏷️
          </div>

          <div
            style={{
              display: "inline-block",
              background: "oklch(0.55 0.30 305 / 0.18)",
              color: "oklch(0.85 0.22 305)",
              borderRadius: "100px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "16px",
              border: "1px solid oklch(0.55 0.30 305 / 0.30)",
            }}
          >
            ✦ Real Rewards
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
            Exclusive{" "}
            <span
              style={{
                background: "var(--gradient-accent)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stikdeals
            </span>
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
            Turn your Stikcoins into real savings. Partner businesses post
            exclusive discounts you can only unlock right here on Stikbook.
          </p>
        </div>

        {/* How it works steps */}
        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0",
            marginBottom: "56px",
            flexWrap: "wrap",
            opacity: stepsVisible ? 1 : 0,
            transform: stepsVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={step.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 24px",
                  background: "oklch(0.20 0.07 280)",
                  borderRadius: "20px",
                  border: "2px solid oklch(0.28 0.07 280)",
                  minWidth: "140px",
                  textAlign: "center",
                  boxShadow: "0 4px 16px oklch(0 0 0 / 0.35)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "var(--gradient-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    boxShadow: "0 6px 18px oklch(0.62 0.28 345 / 0.45)",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "oklch(0.92 0.01 280)",
                  }}
                >
                  {step.label}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "oklch(0.58 0.01 280)",
                    lineHeight: 1.4,
                  }}
                >
                  {step.desc}
                </span>
              </div>
              {i < HOW_IT_WORKS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    width: "32px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, oklch(0.62 0.28 345 / 0.6), oklch(0.55 0.30 305 / 0.6))",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Deal cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {DEALS.map((deal, i) => (
            <DealCard key={deal.id} deal={deal} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "oklch(0.55 0.015 280)",
            }}
          >
            New deals added every week. More brands joining soon!{" "}
            <button
              type="button"
              data-ocid="stikdeals-notify"
              onClick={() =>
                document
                  .getElementById("download")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                color: "oklch(0.78 0.26 345)",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                padding: 0,
                fontFamily: "inherit",
              }}
            >
              Get notified →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
