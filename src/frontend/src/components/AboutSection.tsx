import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface MissionCard {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconGlow: string;
  accentColor: string;
  title: string;
  description: string;
  tag: string;
  tagBg: string;
  tagColor: string;
}

function ShieldIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"
        fill="oklch(0.55 0.30 305 / 0.28)"
        stroke="oklch(0.80 0.26 305)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="oklch(0.88 0.22 305)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke="oklch(0.72 0.25 195)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="oklch(0.65 0.25 195 / 0.38)"
        stroke="oklch(0.72 0.25 195)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4"
        stroke="oklch(0.88 0.18 85)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5v4a6 6 0 0 0 12 0V5H6z"
        fill="oklch(0.78 0.20 85 / 0.22)"
        stroke="oklch(0.88 0.18 85)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 21h6M12 17v4"
        stroke="oklch(0.88 0.18 85)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 21h8"
        stroke="oklch(0.88 0.18 85)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const MISSION_CARDS: MissionCard[] = [
  {
    id: "card-safety",
    icon: <ShieldIcon />,
    iconBg: "oklch(0.55 0.30 305 / 0.18)",
    iconGlow: "oklch(0.55 0.30 305 / 0.30)",
    accentColor: "oklch(0.55 0.30 305)",
    title: "Radically Safe Spaces",
    description:
      "Our AI content shield works 24/7, scanning every post, photo, and video before it's seen. We don't just filter — we actively protect, ensuring no harmful content ever reaches young eyes.",
    tag: "AI Safety",
    tagBg: "oklch(0.55 0.30 305 / 0.20)",
    tagColor: "oklch(0.85 0.22 305)",
  },
  {
    id: "card-creators",
    icon: <SparkleIcon />,
    iconBg: "oklch(0.65 0.25 195 / 0.18)",
    iconGlow: "oklch(0.65 0.25 195 / 0.28)",
    accentColor: "oklch(0.65 0.25 195)",
    title: "Built for Creators",
    description:
      "Share your art, music, dance, writing — whatever makes you shine. Stikbook is the stage, you're the star. From Quik videos to full posts, every format is designed for self-expression.",
    tag: "For Creators",
    tagBg: "oklch(0.65 0.25 195 / 0.18)",
    tagColor: "oklch(0.80 0.22 195)",
  },
  {
    id: "card-rewards",
    icon: <TrophyIcon />,
    iconBg: "oklch(0.78 0.20 85 / 0.18)",
    iconGlow: "oklch(0.78 0.20 85 / 0.32)",
    accentColor: "oklch(0.78 0.20 85)",
    title: "Earn as You Create",
    description:
      "Every login, post, and Quik earns you Stikcoins. Redeem them for exclusive deals and discounts from real brands. Being yourself literally pays off on Stikbook.",
    tag: "Stikcoins",
    tagBg: "oklch(0.78 0.20 85 / 0.18)",
    tagColor: "oklch(0.92 0.18 85)",
  },
];

function AboutCard({ card, index }: { card: MissionCard; index: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const [hovered, setHovered] = useState(false);

  const delay = index * 150;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid={`about-card-${card.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "oklch(0.22 0.07 280)" : "oklch(0.17 0.05 280)",
        borderRadius: "28px",
        padding: "36px 32px",
        border: hovered
          ? `2px solid ${card.accentColor.replace(")", " / 0.50)")}`
          : "2px solid oklch(0.26 0.06 280)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-8px) scale(1.01)"
            : "translateY(0) scale(1)"
          : "translateY(36px) scale(0.97)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.35s cubic-bezier(0.34, 1.1, 0.64, 1), background 0.2s ease, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? `0 24px 60px ${card.accentColor.replace(")", " / 0.25)")}, 0 4px 16px oklch(0 0 0 / 0.4)`
          : "0 4px 20px oklch(0 0 0 / 0.35)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover glow bg */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: card.iconGlow,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          filter: "blur(32px)",
        }}
      />

      {/* Tag */}
      <span
        style={{
          display: "inline-block",
          background: card.tagBg,
          color: card.tagColor,
          borderRadius: "100px",
          padding: "4px 14px",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: "20px",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          border: `1px solid ${card.accentColor.replace(")", " / 0.30)")}`,
        }}
      >
        {card.tag}
      </span>

      {/* Icon */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "20px",
          background: card.iconBg,
          border: `1px solid ${card.accentColor.replace(")", " / 0.22)")}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          transition: "transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1)",
          transform: hovered
            ? "scale(1.12) rotate(-4deg)"
            : "scale(1) rotate(0deg)",
          boxShadow: hovered ? `0 8px 24px ${card.iconGlow}` : "none",
        }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "22px",
          color: "oklch(0.94 0.01 280)",
          marginBottom: "12px",
          lineHeight: 1.2,
          letterSpacing: "-0.5px",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "oklch(0.62 0.01 280)",
          margin: 0,
        }}
      >
        {card.description}
      </p>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "32px",
          right: "32px",
          height: "3px",
          borderRadius: "100px",
          background: `linear-gradient(90deg, ${card.accentColor.replace(")", " / 0.9)")}, ${card.accentColor.replace(")", " / 0.2)")})`,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.34, 1.1, 0.64, 1)",
        }}
      />
    </div>
  );
}

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="about"
      style={{
        padding: "112px 24px",
        background:
          "linear-gradient(160deg, oklch(0.14 0.06 280) 0%, oklch(0.18 0.10 305) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, oklch(0.55 0.30 305 / 0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      {/* Glow accents */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.62 0.28 345 / 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.65 0.25 195 / 0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top edge accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--gradient-primary)",
          opacity: 0.6,
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
        {/* Section header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          style={{
            textAlign: "center",
            marginBottom: "72px",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(28px)",
            transition:
              "opacity 0.7s ease, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "2px",
                borderRadius: "2px",
                background: "var(--gradient-primary)",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "oklch(0.82 0.22 305)",
              }}
            >
              Our Mission
            </span>
            <div
              style={{
                width: "32px",
                height: "2px",
                borderRadius: "2px",
                background: "var(--gradient-primary)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px, 4.5vw, 56px)",
              letterSpacing: "-1.5px",
              color: "oklch(0.95 0.01 280)",
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            A platform{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              young people
            </span>
            <br />
            can actually trust
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "oklch(0.62 0.01 280)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            We built Stikbook from the ground up with safety and self-expression
            as equal priorities — not afterthoughts.
          </p>
        </div>

        {/* Mission cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {MISSION_CARDS.map((card, index) => (
            <AboutCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Bottom trust indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "64px",
          }}
        >
          {[
            { icon: "🏅", label: "COPPA Compliant" },
            { icon: "🔐", label: "End-to-End Encrypted" },
            { icon: "👨‍👩‍👧", label: "Parent Controls" },
            { icon: "🌍", label: "Available in 42 Countries" },
            { icon: "⚡", label: "Real-Time Moderation" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "oklch(0.22 0.06 280)",
                borderRadius: "100px",
                padding: "8px 18px",
                border: "1.5px solid oklch(0.30 0.07 280)",
                boxShadow: "0 2px 12px oklch(0 0 0 / 0.35)",
                transition: "all 0.2s ease",
              }}
              data-ocid={`about-badge-${badge.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span style={{ fontSize: "16px" }}>{badge.icon}</span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "oklch(0.80 0.01 280)",
                  whiteSpace: "nowrap",
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
