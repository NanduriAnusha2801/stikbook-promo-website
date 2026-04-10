import { useEffect, useState } from "react";

const FLOATING_ORBS = [
  {
    id: "orb-1",
    top: "8%",
    left: "6%",
    size: 150,
    color: "oklch(0.55 0.30 305 / 0.32)",
    delay: "0s",
    dur: "6s",
  },
  {
    id: "orb-2",
    top: "15%",
    right: "8%",
    size: 100,
    color: "oklch(0.65 0.25 195 / 0.28)",
    delay: "1s",
    dur: "5s",
  },
  {
    id: "orb-3",
    bottom: "20%",
    left: "5%",
    size: 70,
    color: "oklch(0.78 0.20 85 / 0.35)",
    delay: "2s",
    dur: "7s",
  },
  {
    id: "orb-4",
    bottom: "30%",
    right: "10%",
    size: 120,
    color: "oklch(0.62 0.28 345 / 0.22)",
    delay: "0.5s",
    dur: "4s",
  },
  {
    id: "orb-5",
    top: "45%",
    left: "2%",
    size: 50,
    color: "oklch(0.65 0.25 195 / 0.30)",
    delay: "1.5s",
    dur: "5.5s",
  },
  {
    id: "orb-6",
    top: "60%",
    right: "4%",
    size: 60,
    color: "oklch(0.78 0.20 85 / 0.28)",
    delay: "3s",
    dur: "6s",
  },
  {
    id: "orb-7",
    top: "30%",
    left: "18%",
    size: 38,
    color: "oklch(0.62 0.28 345 / 0.30)",
    delay: "1.8s",
    dur: "4.5s",
  },
  {
    id: "orb-8",
    bottom: "45%",
    right: "20%",
    size: 26,
    color: "oklch(0.50 0.28 270 / 0.34)",
    delay: "2.5s",
    dur: "5s",
  },
];

const STAR_SHAPES = [
  {
    id: "star-1",
    top: "12%",
    left: "20%",
    delay: "0.4s",
    size: 18,
    color: "oklch(0.82 0.22 305 / 0.9)",
  },
  {
    id: "star-2",
    top: "35%",
    right: "18%",
    delay: "1.1s",
    size: 12,
    color: "oklch(0.78 0.24 195 / 0.85)",
  },
  {
    id: "star-3",
    bottom: "38%",
    left: "15%",
    delay: "0.7s",
    size: 14,
    color: "oklch(0.88 0.18 85 / 0.9)",
  },
  {
    id: "star-4",
    top: "70%",
    right: "22%",
    delay: "2.2s",
    size: 10,
    color: "oklch(0.78 0.26 345 / 0.85)",
  },
  {
    id: "star-5",
    bottom: "15%",
    left: "28%",
    delay: "1.4s",
    size: 16,
    color: "oklch(0.72 0.26 270 / 0.8)",
  },
];

const EMOJI_FLOATERS = [
  { id: "emoji-1", emoji: "✨", top: "18%", left: "12%", delay: "0.3s" },
  { id: "emoji-2", emoji: "🎯", top: "25%", right: "15%", delay: "1.2s" },
  { id: "emoji-3", emoji: "🚀", bottom: "35%", left: "8%", delay: "0.8s" },
  { id: "emoji-4", emoji: "💜", bottom: "25%", right: "12%", delay: "2s" },
  { id: "emoji-5", emoji: "🌟", top: "55%", left: "3%", delay: "1.6s" },
  { id: "emoji-6", emoji: "🎨", top: "40%", right: "7%", delay: "2.8s" },
];

const HERO_WORDS = ["The", "Safe", "Space"];
const HERO_WORDS_2 = ["for", "Young", "Talent"];

const STATS = [
  { label: "Young Creators", value: "50K+" },
  { label: "Safe Posts Daily", value: "200K+" },
  { label: "AI Accuracy", value: "99.7%" },
  { label: "Countries", value: "42" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, oklch(0.18 0.08 305) 0%, oklch(0.22 0.12 270) 30%, oklch(0.20 0.10 195) 70%, oklch(0.15 0.06 220) 100%)",
        padding: "120px 24px 80px",
      }}
    >
      {/* Animated gradient mesh overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 20% 20%, oklch(0.55 0.30 305 / 0.20) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.65 0.25 195 / 0.16) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 60% 20%, oklch(0.62 0.28 345 / 0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating orbs */}
      <div aria-hidden="true">
        {FLOATING_ORBS.map((orb) => (
          <div
            key={orb.id}
            style={{
              position: "absolute",
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: orb.color,
              top: (orb as { top?: string }).top,
              left: (orb as { left?: string }).left,
              right: (orb as { right?: string }).right,
              bottom: (orb as { bottom?: string }).bottom,
              animation: `float ${orb.dur} ease-in-out infinite`,
              animationDelay: orb.delay,
              filter: "blur(1.5px)",
            }}
          />
        ))}

        {/* SVG star shapes */}
        {STAR_SHAPES.map((star) => (
          <svg
            key={star.id}
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill={star.color}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: (star as { top?: string }).top,
              left: (star as { left?: string }).left,
              right: (star as { right?: string }).right,
              bottom: (star as { bottom?: string }).bottom,
              animation:
                "float 5s ease-in-out infinite, spin-slow 12s linear infinite",
              animationDelay: star.delay,
            }}
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        ))}

        {/* Decorative emoji floaters */}
        {EMOJI_FLOATERS.map((item) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              fontSize: "28px",
              top: (item as { top?: string }).top,
              left: (item as { left?: string }).left,
              right: (item as { right?: string }).right,
              bottom: (item as { bottom?: string }).bottom,
              animation: "float 4s ease-in-out infinite",
              animationDelay: item.delay,
              opacity: 0.85,
            }}
          >
            {item.emoji}
          </div>
        ))}

        {/* Decorative blob shape */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          width="300"
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            opacity: 0.1,
            animation: "spin-slow 30s linear infinite",
          }}
        >
          <path
            fill="oklch(0.55 0.30 305)"
            d="M44.9,-61.5C58.2,-52.8,69.2,-40.2,73.5,-25.4C77.8,-10.6,75.4,6.4,69.3,21.4C63.2,36.3,53.4,49.1,40.7,58.5C28,67.9,12.3,73.9,-2.7,77.3C-17.7,80.7,-32.1,81.5,-43.7,74.5C-55.2,67.5,-64,52.7,-68.3,36.8C-72.7,20.9,-72.7,3.9,-69.7,-12.3C-66.6,-28.5,-60.3,-43.9,-49.2,-53.3C-38.2,-62.7,-22.3,-66.1,-5.8,-68.5C10.7,-70.9,31.6,-70.3,44.9,-61.5Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          width="250"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-40px",
            opacity: 0.08,
            animation: "spin-slow 40s linear infinite reverse",
          }}
        >
          <path
            fill="oklch(0.65 0.25 195)"
            d="M39.3,-53.3C50.8,-45.1,60,-32.6,65.5,-18.1C71,-3.5,72.8,13.1,67.3,27.4C61.8,41.7,49,53.7,34.8,60.6C20.7,67.5,5.2,69.3,-9.7,67.1C-24.6,64.9,-38.9,58.6,-51.2,48.1C-63.6,37.6,-74.1,22.9,-76.5,6.6C-78.9,-9.7,-73.3,-27.6,-62.3,-40.4C-51.3,-53.2,-34.8,-60.9,-19.6,-67.1C-4.4,-73.4,9.5,-78.1,22.5,-74.2C35.5,-70.3,47.5,-57.8,39.3,-53.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Hero content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "820px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "oklch(0.55 0.30 305 / 0.22)",
            border: "1.5px solid oklch(0.55 0.30 305 / 0.45)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "32px",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0) scale(1)"
              : "translateY(-20px) scale(0.95)",
            transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
          }}
          data-ocid="hero-badge"
        >
          <span style={{ fontSize: "14px" }}>🛡️</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "13px",
              color: "oklch(0.90 0.18 305)",
              letterSpacing: "0.02em",
            }}
          >
            AI-Powered Safety • Child-Safe Platform
          </span>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "oklch(0.68 0.20 150)",
              display: "inline-block",
              animation: "glow 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Headline with staggered word reveal */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(52px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-3px",
            marginBottom: "28px",
          }}
          data-ocid="hero-headline"
        >
          <span style={{ display: "block", marginBottom: "4px" }}>
            {HERO_WORDS.map((word, i) => (
              <span
                key={word}
                style={{
                  display: "inline-block",
                  color: "oklch(0.97 0.005 280)",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) ${0.2 + i * 0.1}s`,
                  marginRight: "0.25em",
                }}
              >
                {word}
              </span>
            ))}
          </span>
          <span style={{ display: "block" }}>
            {HERO_WORDS_2.map((word, i) => (
              <span
                key={word}
                style={{
                  display: "inline-block",
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.6s ease ${0.45 + i * 0.1}s, transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) ${0.45 + i * 0.1}s`,
                  marginRight: "0.25em",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "oklch(0.75 0.02 280)",
            maxWidth: "560px",
            margin: "0 auto 44px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.7s",
          }}
        >
          Stikbook is a child-safe social media platform where young creators
          share, grow, and connect — protected by intelligent AI content
          filtering.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.85s",
          }}
        >
          <button
            type="button"
            data-ocid="hero-cta-primary"
            onClick={() =>
              document
                .getElementById("download")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "16px 36px",
              borderRadius: "100px",
              background: "var(--gradient-primary)",
              color: "white",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0 8px 32px oklch(0.55 0.30 305 / 0.55), 0 2px 8px oklch(0.55 0.30 305 / 0.30)",
              transition: "all 0.25s cubic-bezier(0.34, 1.2, 0.64, 1)",
              letterSpacing: "-0.2px",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.transform = "translateY(-4px) scale(1.03)";
              btn.style.boxShadow =
                "0 20px 50px oklch(0.55 0.30 305 / 0.65), 0 4px 14px oklch(0.55 0.30 305 / 0.35)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.transform = "none";
              btn.style.boxShadow =
                "0 8px 32px oklch(0.55 0.30 305 / 0.55), 0 2px 8px oklch(0.55 0.30 305 / 0.30)";
            }}
          >
            Get the App ✨
          </button>
          <button
            type="button"
            data-ocid="hero-cta-secondary"
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "16px 36px",
              borderRadius: "100px",
              background: "oklch(1.0 0.0 0 / 0.12)",
              color: "oklch(0.92 0.01 280)",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "16px",
              border: "2px solid oklch(1 0 0 / 0.25)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              backdropFilter: "blur(8px)",
              letterSpacing: "-0.2px",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "oklch(0.65 0.25 195 / 0.8)";
              btn.style.color = "oklch(0.80 0.22 195)";
              btn.style.transform = "translateY(-2px)";
              btn.style.boxShadow = "0 8px 24px oklch(0.65 0.25 195 / 0.25)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "oklch(1 0 0 / 0.25)";
              btn.style.color = "oklch(0.92 0.01 280)";
              btn.style.transform = "none";
              btn.style.boxShadow = "none";
            }}
          >
            Explore Features →
          </button>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            background: "oklch(0.12 0.06 280 / 0.65)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "20px 32px",
            boxShadow:
              "0 4px 32px oklch(0 0 0 / 0.5), 0 1px 4px oklch(0 0 0 / 0.25)",
            border: "1.5px solid oklch(1 0 0 / 0.12)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 1.05s",
          }}
          data-ocid="hero-stats"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: "1 1 100px",
                textAlign: "center",
                padding: "8px 24px",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid oklch(1 0 0 / 0.12)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "28px",
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "oklch(0.60 0.01 280)",
                  marginTop: "4px",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: mounted ? 0.6 : 0,
          transition: "opacity 0.6s ease 1.4s",
          animation: mounted ? "float 2.5s ease-in-out infinite" : "none",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "oklch(0.62 0.01 280)",
          }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="oklch(0.65 0.25 195)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
