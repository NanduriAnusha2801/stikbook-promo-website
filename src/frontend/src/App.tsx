import { useState } from "react";
import { AISafetySection } from "./components/AISafetySection";
import { AboutSection } from "./components/AboutSection";
import { DownloadSection } from "./components/DownloadSection";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { ProfileTypesSection } from "./components/ProfileTypesSection";
import { StikcoinsSection } from "./components/StikcoinsSection";
import { StikdealsSection } from "./components/StikdealsSection";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

// ─── Features Section ──────────────────────────────────────────────────────────
const FEATURES = [
  {
    id: "feat-creative",
    icon: "🎨",
    title: "Creative Showcase",
    desc: "Share your art, music, videos, and talents with a supportive community that celebrates creativity.",
    color: "oklch(0.75 0.28 305)",
    bg: "oklch(0.55 0.30 305 / 0.14)",
  },
  {
    id: "feat-social",
    icon: "🤝",
    title: "Social Connections",
    desc: "Build meaningful friendships, follow inspiring creators, and grow your personal brand safely.",
    color: "oklch(0.70 0.25 195)",
    bg: "oklch(0.65 0.25 195 / 0.14)",
  },
  {
    id: "feat-coins",
    icon: "💰",
    title: "Earn Stikcoins",
    desc: "Get rewarded just for being active — log in daily, post content, and share Quiks to earn coins.",
    color: "oklch(0.88 0.18 85)",
    bg: "oklch(0.78 0.20 85 / 0.16)",
  },
  {
    id: "feat-deals",
    icon: "🛍️",
    title: "Exclusive Stikdeals",
    desc: "Unlock real-world discounts from brands and local businesses using your earned Stikcoins.",
    color: "oklch(0.72 0.28 345)",
    bg: "oklch(0.62 0.28 345 / 0.14)",
  },
  {
    id: "feat-quiks",
    icon: "🎬",
    title: "Quiks Videos",
    desc: "Create and share short-form video content. Express yourself in seconds and go viral safely.",
    color: "oklch(0.72 0.22 25)",
    bg: "oklch(0.55 0.22 25 / 0.14)",
  },
  {
    id: "feat-talent",
    icon: "🏆",
    title: "Talent Recognition",
    desc: "Get discovered by businesses and brands. Showcase skills that matter for your future career.",
    color: "oklch(0.65 0.26 270)",
    bg: "oklch(0.50 0.28 270 / 0.14)",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid={`feature-card-${feature.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "oklch(0.22 0.07 280)" : "oklch(0.17 0.05 280)",
        border: hovered
          ? `2px solid ${feature.color}`
          : "2px solid oklch(0.26 0.06 280)",
        borderRadius: "20px",
        padding: "28px",
        cursor: "default",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease, border-color 0.2s ease, background 0.2s ease`,
        boxShadow: hovered
          ? `0 20px 48px oklch(0 0 0 / 0.4), 0 0 0 1px ${feature.color}`
          : "0 4px 16px oklch(0 0 0 / 0.35)",
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "16px",
          background: feature.bg,
          border: `1px solid ${feature.color.replace(")", " / 0.3)")}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          marginBottom: "16px",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
        }}
      >
        {feature.icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "18px",
          color: "oklch(0.94 0.01 280)",
          marginBottom: "10px",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "oklch(0.62 0.01 280)",
        }}
      >
        {feature.desc}
      </p>
    </div>
  );
}

function FeaturesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(160deg, oklch(0.12 0.04 270) 0%, oklch(0.15 0.06 305) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, oklch(0.55 0.30 305 / 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      {/* Glow top-right */}
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
            "radial-gradient(ellipse, oklch(0.55 0.30 305 / 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
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
          <span
            style={{
              display: "inline-block",
              background: "oklch(0.55 0.30 305 / 0.18)",
              color: "oklch(0.82 0.22 305)",
              borderRadius: "100px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "16px",
              border: "1px solid oklch(0.55 0.30 305 / 0.30)",
            }}
          >
            Everything you need
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-1px",
              color: "oklch(0.95 0.01 280)",
              lineHeight: 1.1,
            }}
          >
            Features built for{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gen Z creators
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProfileTypesSection />
      <AISafetySection />
      <StikcoinsSection />
      <StikdealsSection />
      <DownloadSection />
    </Layout>
  );
}
