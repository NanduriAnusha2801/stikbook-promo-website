import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─── SVG Icons ─────────────────────────────────────────────────────────────────

function BriefcaseIcon({ color }: { color: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="16"
        width="36"
        height="26"
        rx="5"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M17 16V13a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="26"
        width="36"
        height="4"
        rx="0"
        fill={color}
        fillOpacity="0.15"
      />
      <line
        x1="24"
        y1="26"
        x2="24"
        y2="30"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="28" r="2.5" fill={color} />
    </svg>
  );
}

function StarPersonIcon({ color }: { color: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="16"
        r="8"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.12"
      />
      <path
        d="M36 7l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z"
        fill={color}
        fillOpacity="0.9"
      />
    </svg>
  );
}

// ─── Profile Feature List ───────────────────────────────────────────────────────

function ProfileFeatureItem({
  feat,
  index,
  color,
  visible,
}: {
  feat: string;
  index: number;
  color: string;
  visible: boolean;
}) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 0",
        borderBottom: index < 5 ? "1px solid oklch(1 0 0 / 0.08)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-18px)",
        transition: `opacity 0.5s ease ${index * 70 + 200}ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${index * 70 + 200}ms`,
      }}
    >
      <div
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: color.replace(")", " / 0.18)"),
          border: `1px solid ${color.replace(")", " / 0.38)")}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        style={{
          fontSize: "15px",
          color: "oklch(0.82 0.01 280)",
          fontWeight: 500,
        }}
      >
        {feat}
      </span>
    </li>
  );
}

// ─── Profile Card ──────────────────────────────────────────────────────────────

const PROFILE_DATA = {
  business: {
    type: "business" as const,
    title: "Business Profile",
    subtitle: "Grow your brand with young audiences",
    color: "oklch(0.65 0.28 270)",
    gradient:
      "linear-gradient(135deg, oklch(0.50 0.28 270), oklch(0.55 0.30 305))",
    accentGlow: "oklch(0.55 0.30 305 / 0.45)",
    borderActive: "oklch(0.65 0.28 270)",
    features: [
      "Post exclusive Stikdeals for users",
      "Attract young customers to your brand",
      "Analytics dashboard for engagement",
      "Verified business badge",
      "Promoted posts to boost visibility",
      "Direct messaging with customers",
    ],
  },
  personal: {
    type: "personal" as const,
    title: "Personal Profile",
    subtitle: "Showcase your talent to the world",
    color: "oklch(0.72 0.28 345)",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.28 345), oklch(0.55 0.30 305))",
    accentGlow: "oklch(0.62 0.28 345 / 0.45)",
    borderActive: "oklch(0.72 0.28 345)",
    features: [
      "Share art, music, videos & more",
      "Earn Stikcoins through daily activity",
      "Redeem deals from local businesses",
      "Build a portfolio of your work",
      "Connect with like-minded creators",
      "Get discovered by brands",
    ],
  },
};

type ProfileType = keyof typeof PROFILE_DATA;

function SelectableCard({
  profileKey,
  active,
  onClick,
  visible,
  slideDir,
}: {
  profileKey: ProfileType;
  active: boolean;
  onClick: () => void;
  visible: boolean;
  slideDir: "left" | "right";
}) {
  const [hovered, setHovered] = useState(false);
  const data = PROFILE_DATA[profileKey];
  const isBusiness = profileKey === "business";

  const isElevated = active || hovered;

  return (
    <button
      type="button"
      data-ocid={`profile-card-${profileKey}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? "oklch(0.20 0.07 280)" : "oklch(0.17 0.05 280)",
        border: active
          ? `2.5px solid ${data.color}`
          : "2.5px solid oklch(0.26 0.06 280)",
        borderRadius: "28px",
        padding: "36px 32px",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? active
            ? "scale(1.03)"
            : isElevated
              ? "scale(1.01)"
              : "scale(1)"
          : `translateX(${slideDir === "left" ? "-40px" : "40px"})`,
        transition: `opacity 0.6s ease ${slideDir === "left" ? "0.1s" : "0.2s"}, transform 0.45s cubic-bezier(0.34,1.3,0.64,1), border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: active
          ? `0 24px 60px ${data.accentGlow}`
          : isElevated
            ? "0 12px 32px oklch(0 0 0 / 0.4)"
            : "0 4px 16px oklch(0 0 0 / 0.3)",
      }}
    >
      {/* Gradient glow overlay when active */}
      {active && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "26px",
            background: data.gradient,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Top decorative circle */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-32px",
          right: "-32px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: active
            ? data.color.replace(")", " / 0.20)")
            : "oklch(0.26 0.06 280 / 0.7)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Icon + Active badge row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "20px",
            background: active
              ? data.color.replace(")", " / 0.20)")
              : "oklch(0.24 0.05 280)",
            border: active
              ? `1px solid ${data.color.replace(")", " / 0.35)")}`
              : "1px solid oklch(0.30 0.05 280)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.35s ease",
            transform: active ? "scale(1.08)" : "scale(1)",
          }}
        >
          {isBusiness ? (
            <BriefcaseIcon
              color={active ? data.color : "oklch(0.50 0.02 280)"}
            />
          ) : (
            <StarPersonIcon
              color={active ? data.color : "oklch(0.50 0.02 280)"}
            />
          )}
        </div>
        {active && (
          <span
            style={{
              background: data.gradient,
              color: "white",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: "100px",
              padding: "4px 12px",
              animation: "fade-in 0.3s ease",
              position: "relative",
              zIndex: 1,
            }}
          >
            Selected ✓
          </span>
        )}
      </div>

      {/* Title + subtitle */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "22px",
          color: active ? data.color : "oklch(0.88 0.01 280)",
          marginBottom: "6px",
          lineHeight: 1.15,
          transition: "color 0.3s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {data.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: active ? "oklch(0.68 0.015 280)" : "oklch(0.58 0.015 280)",
          marginBottom: "24px",
          transition: "color 0.3s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {data.subtitle}
      </p>

      {/* Feature pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {data.features.slice(0, 3).map((feat) => (
          <span
            key={feat}
            style={{
              fontSize: "12px",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "100px",
              background: active
                ? data.color.replace(")", " / 0.16)")
                : "oklch(0.24 0.05 280)",
              color: active ? data.color : "oklch(0.58 0.01 280)",
              transition: "all 0.35s ease",
              border: active
                ? `1px solid ${data.color.replace(")", " / 0.28)")}`
                : "1px solid oklch(0.30 0.04 280)",
            }}
          >
            {feat}
          </span>
        ))}
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: "100px",
            background: "oklch(0.24 0.05 280)",
            color: "oklch(0.52 0.01 280)",
            border: "1px solid oklch(0.30 0.04 280)",
          }}
        >
          +{data.features.length - 3} more
        </span>
      </div>
    </button>
  );
}

// ─── Detail Panel ──────────────────────────────────────────────────────────────

function DetailPanel({
  profileKey,
  visible,
}: {
  profileKey: ProfileType;
  visible: boolean;
}) {
  const data = PROFILE_DATA[profileKey];
  return (
    <div
      style={{
        background: "oklch(0.17 0.05 280)",
        borderRadius: "28px",
        padding: "40px",
        boxShadow: "0 8px 32px oklch(0 0 0 / 0.4)",
        border: `2px solid ${data.color.replace(")", " / 0.30)")}`,
      }}
    >
      {/* Gradient bar top */}
      <div
        style={{
          height: "4px",
          borderRadius: "100px",
          background: data.gradient,
          marginBottom: "28px",
        }}
        aria-hidden="true"
      />

      <h4
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "18px",
          color: "oklch(0.92 0.01 280)",
          marginBottom: "20px",
        }}
      >
        What you get with{" "}
        <span
          style={{
            background: data.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {data.title}
        </span>
        :
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data.features.map((feat, i) => (
          <ProfileFeatureItem
            key={feat}
            feat={feat}
            index={i}
            color={data.color}
            visible={visible}
          />
        ))}
      </ul>

      <button
        type="button"
        data-ocid={`profile-detail-cta-${profileKey}`}
        onClick={() =>
          document
            .getElementById("download")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          marginTop: "28px",
          width: "100%",
          padding: "14px 24px",
          borderRadius: "14px",
          background: data.gradient,
          color: "white",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "15px",
          border: "none",
          cursor: "pointer",
          boxShadow: `0 8px 28px ${data.accentGlow}`,
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-2px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            `0 16px 40px ${data.accentGlow}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "none";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            `0 8px 28px ${data.accentGlow}`;
        }}
      >
        Create {data.title} →
      </button>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────

export function ProfileTypesSection() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("business");
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({
    threshold: 0.08,
  });

  return (
    <section
      id="profiles"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(140deg, oklch(0.12 0.05 270) 0%, oklch(0.16 0.08 305) 50%, oklch(0.13 0.06 240) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true">
        {[
          {
            id: "ps-1",
            top: "10%",
            left: "2%",
            size: 220,
            color: "oklch(0.55 0.30 305 / 0.10)",
            delay: "0s",
          },
          {
            id: "ps-2",
            bottom: "15%",
            right: "3%",
            size: 180,
            color: "oklch(0.62 0.28 345 / 0.10)",
            delay: "1.5s",
          },
          {
            id: "ps-3",
            top: "55%",
            left: "0%",
            size: 100,
            color: "oklch(0.65 0.25 195 / 0.10)",
            delay: "3s",
          },
        ].map((shape) => (
          <div
            key={shape.id}
            style={{
              position: "absolute",
              width: shape.size,
              height: shape.size,
              borderRadius: "50%",
              background: shape.color,
              top: shape.top,
              bottom: (shape as { bottom?: string }).bottom,
              left: (shape as { left?: string }).left,
              right: (shape as { right?: string }).right,
              animation: "float 7s ease-in-out infinite",
              animationDelay: shape.delay,
              pointerEvents: "none",
              filter: "blur(3px)",
            }}
          />
        ))}
      </div>

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
            marginBottom: "56px",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "oklch(0.55 0.30 305 / 0.20)",
              color: "oklch(0.85 0.22 305)",
              borderRadius: "100px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "16px",
              border: "1px solid oklch(0.55 0.30 305 / 0.35)",
            }}
          >
            For Creators & Businesses
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-1px",
              color: "oklch(0.95 0.01 280)",
              marginBottom: "14px",
              lineHeight: 1.1,
            }}
          >
            Choose your{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              profile type
            </span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "oklch(0.62 0.01 280)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Whether you're a young creator showcasing talent or a business
            connecting with a fresh audience — Stikbook has you covered.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            alignItems: "start",
          }}
          className="max-lg:grid-cols-1"
        >
          {/* Business selector card */}
          <SelectableCard
            profileKey="business"
            active={activeProfile === "business"}
            onClick={() => setActiveProfile("business")}
            visible={cardsVisible}
            slideDir="left"
          />

          {/* Personal selector card */}
          <SelectableCard
            profileKey="personal"
            active={activeProfile === "personal"}
            onClick={() => setActiveProfile("personal")}
            visible={cardsVisible}
            slideDir="right"
          />

          {/* Detail panel — right column */}
          <div
            style={{
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            <DetailPanel profileKey={activeProfile} visible={cardsVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
