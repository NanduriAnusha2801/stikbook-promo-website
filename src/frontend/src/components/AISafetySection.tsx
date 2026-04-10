import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─── Animated Shield SVG ───────────────────────────────────────────────────────

function AnimatedShield({ pulse }: { pulse: boolean }) {
  return (
    <div
      style={{
        position: "relative",
        width: "260px",
        height: "260px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer pulse rings — vivid purple + indigo + hot pink */}
      {([1, 2, 3] as const).map((ring) => (
        <div
          key={ring}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: `-${ring * 22}px`,
            borderRadius: "50%",
            border: `2px solid ${ring === 1 ? "oklch(0.55 0.30 305 / 0.50)" : ring === 2 ? "oklch(0.50 0.28 270 / 0.30)" : "oklch(0.62 0.28 345 / 0.20)"}`,
            animation: pulse
              ? `glow ${1.4 + ring * 0.5}s ease-in-out infinite`
              : "none",
            animationDelay: `${ring * 0.28}s`,
          }}
        />
      ))}

      {/* Teal outer ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-12px",
          borderRadius: "50%",
          border: "1.5px solid oklch(0.65 0.25 195 / 0.38)",
          animation: pulse ? "glow 3s ease-in-out infinite" : "none",
          animationDelay: "0.6s",
        }}
      />

      {/* Main circle */}
      <div
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 35% 35%, oklch(0.55 0.30 305 / 0.32), oklch(0.50 0.28 270 / 0.22))",
          border: "2px solid oklch(0.55 0.30 305 / 0.58)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "float 4s ease-in-out infinite",
          boxShadow:
            "0 0 90px oklch(0.55 0.30 305 / 0.40), 0 0 40px oklch(0.62 0.28 345 / 0.18), inset 0 0 40px oklch(0.65 0.25 195 / 0.10)",
          position: "relative",
        }}
      >
        {/* Shield SVG */}
        <svg
          width="110"
          height="110"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          {/* Shield body */}
          <path
            d="M32 4L8 14v18c0 14.3 10.2 27.7 24 31.2C45.8 59.7 56 46.3 56 32V14L32 4z"
            fill="oklch(0.55 0.30 305 / 0.30)"
            stroke="oklch(0.80 0.26 305)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Inner shield highlight */}
          <path
            d="M32 10L14 18v14c0 9.8 6.8 18.8 18 22 11.2-3.2 18-12.2 18-22V18L32 10z"
            fill="oklch(0.50 0.28 270 / 0.18)"
            stroke="oklch(0.65 0.25 195 / 0.55)"
            strokeWidth="1"
          />
          {/* Lock body */}
          <rect
            x="24"
            y="32"
            width="16"
            height="12"
            rx="3"
            fill="oklch(0.90 0.20 305)"
            fillOpacity="0.95"
          />
          {/* Lock shackle */}
          <path
            d="M26 32v-4a6 6 0 0 1 12 0v4"
            stroke="oklch(0.90 0.20 305)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lock keyhole */}
          <circle cx="32" cy="37" r="2" fill="oklch(0.25 0.18 305)" />
          {/* Star sparkles */}
          <path
            d="M48 8l1.2 3.6H53l-3 2.2 1.2 3.6L48 15.2l-3.2 2.2 1.2-3.6-3-2.2h3.8z"
            fill="oklch(0.90 0.18 85)"
            fillOpacity="0.95"
          />
          <path
            d="M13 46l.8 2.4H16l-2 1.5.8 2.4-2.1-1.5-2.1 1.5.8-2.4-2-1.5h2.4z"
            fill="oklch(0.78 0.26 345)"
            fillOpacity="0.9"
          />
        </svg>

        {/* Checkmark overlay — animated in */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "28px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "oklch(0.62 0.20 150)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: pulse ? "scale-bounce 2s ease-in-out infinite" : "none",
            boxShadow: "0 4px 16px oklch(0.62 0.20 150 / 0.65)",
          }}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Checklist Item ────────────────────────────────────────────────────────────

const SAFETY_ITEMS = [
  {
    id: "si-1",
    label: "Blocks violent content",
    icon: "🚫",
    color: "oklch(0.68 0.22 25)",
  },
  {
    id: "si-2",
    label: "Blocks adult content",
    icon: "🔒",
    color: "oklch(0.78 0.28 305)",
  },
  {
    id: "si-3",
    label: "Real-time filtering",
    icon: "⚡",
    color: "oklch(0.85 0.18 85)",
  },
  {
    id: "si-4",
    label: "Safe for kids 6+",
    icon: "👶",
    color: "oklch(0.68 0.22 150)",
  },
  {
    id: "si-5",
    label: "24/7 monitoring",
    icon: "👁️",
    color: "oklch(0.72 0.26 195)",
  },
];

function SafetyCheckItem({
  item,
  index,
  visible,
}: {
  item: (typeof SAFETY_ITEMS)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`safety-item-${item.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "14px 18px",
        borderRadius: "14px",
        background: hovered ? "oklch(1 0 0 / 0.12)" : "oklch(1 0 0 / 0.07)",
        border: hovered
          ? `1px solid ${item.color.replace(")", " / 0.55)")}`
          : "1px solid oklch(1 0 0 / 0.12)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(40px)",
        transition: `opacity 0.55s ease ${index * 90 + 300}ms, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 90 + 300}ms, background 0.25s ease, border-color 0.25s ease`,
        cursor: "default",
        boxShadow: hovered
          ? `0 4px 20px ${item.color.replace(")", " / 0.20)")}`
          : "none",
      }}
    >
      {/* Animated checkmark */}
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: item.color.replace(")", " / 0.22)"),
          border: `1.5px solid ${item.color.replace(")", " / 0.50)")}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 0.3s ease, background 0.3s ease",
          transform: hovered ? "scale(1.15) rotate(8deg)" : "scale(1)",
        }}
        aria-hidden="true"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke={item.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Label */}
      <span
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: hovered ? "oklch(0.97 0.01 280)" : "oklch(0.85 0.01 280)",
          transition: "color 0.25s ease",
          flex: 1,
        }}
      >
        {item.label}
      </span>

      {/* Emoji accent */}
      <span
        style={{
          fontSize: "18px",
          opacity: hovered ? 1 : 0.75,
          transition: "opacity 0.25s ease",
        }}
      >
        {item.icon}
      </span>
    </div>
  );
}

// ─── Decorative Lock SVGs ──────────────────────────────────────────────────────

function DecorativeLock({
  size,
  opacity,
  style: extraStyle,
}: {
  size: number;
  opacity: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        opacity,
        ...extraStyle,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="11"
          width="14"
          height="10"
          rx="2.5"
          fill="oklch(0.55 0.30 305 / 0.35)"
          stroke="oklch(0.78 0.26 305 / 0.65)"
          strokeWidth="1.5"
        />
        <path
          d="M8 11V7a4 4 0 0 1 8 0v4"
          stroke="oklch(0.78 0.26 305 / 0.65)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="12" cy="16" r="1.5" fill="oklch(0.90 0.22 305 / 0.75)" />
      </svg>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────

export function AISafetySection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setPulseActive(true), 500);
      return () => clearTimeout(t);
    }
  }, [isVisible]);

  return (
    <section
      id="safety"
      style={{
        padding: "110px 24px",
        background:
          "linear-gradient(140deg, oklch(0.12 0.05 280) 0%, oklch(0.16 0.08 305) 50%, oklch(0.13 0.06 240) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.55 0.30 305 / 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          right: "15%",
          width: "400px",
          height: "400px",
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
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, oklch(0.65 0.25 195 / 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative lock shapes */}
      <DecorativeLock
        size={56}
        opacity={0.28}
        style={{ top: "8%", left: "4%" }}
      />
      <DecorativeLock
        size={40}
        opacity={0.2}
        style={{ top: "20%", right: "6%" }}
      />
      <DecorativeLock
        size={48}
        opacity={0.16}
        style={{ bottom: "12%", left: "8%" }}
      />
      <DecorativeLock
        size={32}
        opacity={0.22}
        style={{ bottom: "20%", right: "12%" }}
      />

      {/* Shield shape top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          right: "8%",
          opacity: 0.1,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 4L8 14v18c0 14.3 10.2 27.7 24 31.2C45.8 59.7 56 46.3 56 32V14L32 4z"
            fill="oklch(0.78 0.28 305)"
          />
        </svg>
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(36px)",
          transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          position: "relative",
          zIndex: 1,
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left — Shield animation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatedShield pulse={pulseActive} />
        </div>

        {/* Right — Text + checklist */}
        <div>
          <span
            style={{
              display: "inline-block",
              background: "oklch(0.55 0.30 305 / 0.25)",
              color: "oklch(0.90 0.22 305)",
              borderRadius: "100px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "18px",
              border: "1px solid oklch(0.55 0.30 305 / 0.42)",
            }}
          >
            AI Safety Shield
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(30px, 3.8vw, 48px)",
              letterSpacing: "-1px",
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            AI-Powered{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Content Safety
            </span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "oklch(0.68 0.012 280)",
              marginBottom: "32px",
              maxWidth: "460px",
            }}
          >
            Our multi-layer AI content moderation system analyzes every post,
            image, and video in real time — instantly blocking anything harmful
            before it reaches young users. Kids can explore freely, parents can
            breathe easily.
          </p>

          {/* Checklist with staggered animation */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            data-ocid="ai-safety-checklist"
          >
            {SAFETY_ITEMS.map((item, i) => (
              <SafetyCheckItem
                key={item.id}
                item={item}
                index={i}
                visible={isVisible}
              />
            ))}
          </div>

          {/* Trust badge row */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { id: "tb-1", label: "99.7% Accuracy", icon: "🎯" },
              { id: "tb-2", label: "COPPA Compliant", icon: "✅" },
              { id: "tb-3", label: "GDPR Safe", icon: "🛡️" },
            ].map((badge) => (
              <div
                key={badge.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.30 305 / 0.20), oklch(0.50 0.28 270 / 0.14))",
                  border: "1px solid oklch(0.55 0.30 305 / 0.35)",
                  borderRadius: "10px",
                  padding: "8px 14px",
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.6s ease 0.9s",
                }}
              >
                <span style={{ fontSize: "14px" }}>{badge.icon}</span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "oklch(0.88 0.01 280)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
