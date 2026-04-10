import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup({ visible }: { visible: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) rotate(-3deg)"
          : "translateX(80px) rotate(5deg)",
        transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
      }}
    >
      {/* Glow behind phone */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "440px",
          borderRadius: "48px",
          background:
            "radial-gradient(ellipse, oklch(1 0 0 / 0.25) 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Phone frame */}
      <div
        style={{
          position: "relative",
          width: "240px",
          height: "480px",
          borderRadius: "44px",
          background:
            "linear-gradient(160deg, oklch(0.2 0.01 280) 0%, oklch(0.12 0.01 280) 100%)",
          border: "3px solid oklch(1 0 0 / 0.2)",
          boxShadow:
            "0 32px 64px oklch(0 0 0 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.1)",
          zIndex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Notch */}
        <div
          style={{
            width: "90px",
            height: "26px",
            background: "oklch(0.12 0.01 280)",
            borderRadius: "0 0 18px 18px",
            margin: "0 auto",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "oklch(0.3 0.02 280)",
            }}
          />
          <div
            style={{
              width: "36px",
              height: "5px",
              borderRadius: "3px",
              background: "oklch(0.25 0.02 280)",
            }}
          />
        </div>

        {/* Screen content */}
        <div
          style={{
            flex: 1,
            background:
              "linear-gradient(180deg, oklch(0.98 0.005 280) 0%, oklch(0.96 0.01 305) 100%)",
            margin: "0 4px 4px",
            borderRadius: "0 0 40px 40px",
            padding: "14px 12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* App header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {/* S logo */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.24 305), oklch(0.7 0.18 195))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "14px",
                  fontFamily: "var(--font-display)",
                }}
              >
                S
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "oklch(0.18 0.02 280)",
                }}
              >
                Stikbook
              </span>
            </div>
            {/* Notification bell */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                stroke="oklch(0.55 0.24 305)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Story row */}
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { color: "oklch(0.55 0.24 305)", label: "You" },
              { color: "oklch(0.7 0.18 195)", label: "Alex" },
              { color: "oklch(0.72 0.15 85)", label: "Mia" },
              { color: "oklch(0.6 0.18 150)", label: "Sam" },
            ].map((story) => (
              <div
                key={story.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${story.color}, oklch(0.7 0.18 195))`,
                    border: "2px solid white",
                    boxShadow: `0 0 0 1.5px ${story.color}`,
                  }}
                />
                <span
                  style={{
                    fontSize: "8px",
                    color: "oklch(0.45 0.01 280)",
                  }}
                >
                  {story.label}
                </span>
              </div>
            ))}
          </div>

          {/* Post card */}
          <div
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              background: "white",
              boxShadow: "0 2px 8px oklch(0 0 0 / 0.07)",
            }}
          >
            {/* Post image area */}
            <div
              style={{
                height: "110px",
                background:
                  "linear-gradient(135deg, oklch(0.55 0.24 305), oklch(0.7 0.18 195))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span style={{ fontSize: "32px" }}>🎨</span>
              {/* Coin badge */}
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "oklch(0.72 0.15 85)",
                  borderRadius: "100px",
                  padding: "2px 8px",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                🪙 +10
              </div>
            </div>
            {/* Post meta */}
            <div style={{ padding: "8px 10px" }}>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "oklch(0.2 0.02 280)",
                  marginBottom: "3px",
                }}
              >
                New artwork drop! 🔥
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                {["❤️ 284", "💬 42", "🔄 19"].map((item) => (
                  <span
                    key={item}
                    style={{ fontSize: "9px", color: "oklch(0.55 0.01 280)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coin balance chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background:
                "linear-gradient(135deg, oklch(0.72 0.15 85 / 0.12), oklch(0.6 0.18 55 / 0.08))",
              borderRadius: "12px",
              padding: "8px 12px",
              border: "1px solid oklch(0.72 0.15 85 / 0.2)",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "oklch(0.45 0.1 85)",
              }}
            >
              🪙 Your Balance
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "oklch(0.45 0.18 75)",
              }}
            >
              1,240 coins
            </span>
          </div>

          {/* Deals strip */}
          <div style={{ display: "flex", gap: "6px" }}>
            {[
              {
                brand: "TasteHub",
                disc: "25% OFF",
                color: "oklch(0.55 0.22 25)",
              },
              {
                brand: "StyleZone",
                disc: "30% OFF",
                color: "oklch(0.55 0.24 305)",
              },
            ].map((d) => (
              <div
                key={d.brand}
                style={{
                  flex: 1,
                  borderRadius: "10px",
                  background: "white",
                  border: `1.5px solid ${d.color.replace(")", " / 0.3)")}`,
                  padding: "6px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: d.color,
                  }}
                >
                  {d.disc}
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    color: "oklch(0.5 0.01 280)",
                  }}
                >
                  {d.brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side button details */}
      <div
        style={{
          position: "absolute",
          right: "-6px",
          top: "100px",
          width: "4px",
          height: "40px",
          borderRadius: "0 3px 3px 0",
          background: "oklch(0.25 0.02 280)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-6px",
          top: "110px",
          width: "4px",
          height: "28px",
          borderRadius: "3px 0 0 3px",
          background: "oklch(0.25 0.02 280)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-6px",
          top: "150px",
          width: "4px",
          height: "28px",
          borderRadius: "3px 0 0 3px",
          background: "oklch(0.25 0.02 280)",
          zIndex: 2,
        }}
      />
    </div>
  );
}

// ─── Store Button ─────────────────────────────────────────────────────────────
function StoreButton({
  store,
  index,
  visible,
}: {
  store: {
    label: string;
    sublabel: string;
    icon: React.ReactNode;
    bg: string;
    glow: string;
  };
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      data-ocid={`store-btn-${index}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 24px",
        borderRadius: "16px",
        background: store.bg,
        border: `1.5px solid oklch(1 0 0 / ${hovered ? "0.25" : "0.15"})`,
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: visible
          ? hovered
            ? "translateY(-4px) scale(1.03)"
            : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${0.5 + index * 0.12}s`,
        boxShadow: hovered
          ? `0 12px 32px ${store.glow}, 0 0 0 2px oklch(1 0 0 / 0.08)`
          : "0 4px 16px oklch(0 0 0 / 0.2)",
        minWidth: "200px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {store.icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "11px",
            color: "oklch(1 0 0 / 0.7)",
            fontWeight: 500,
            marginBottom: "2px",
          }}
        >
          {store.sublabel}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "17px",
            color: "white",
            lineHeight: 1,
          }}
        >
          {store.label}
        </div>
      </div>
    </button>
  );
}

// ─── Apple Logo SVG ───────────────────────────────────────────────────────────
const AppleSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="white"
    aria-hidden="true"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.31.07 2.22.74 2.98.8 1.14-.23 2.23-.91 3.44-.81 1.46.14 2.56.72 3.28 1.83-3.03 1.81-2.32 5.82.36 6.94-.54 1.43-1.25 2.84-2.06 4.1M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// ─── Google Play Logo SVG ─────────────────────────────────────────────────────
const GooglePlaySVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.5 2.5L13.5 12 3.5 21.5C3.19 21.32 3 21 3 20.5v-17c0-.5.19-.82.5-1z"
      fill="white"
      opacity="0.9"
    />
    <path d="M16.5 9L3.5 2.5 13.5 12l3-3z" fill="white" />
    <path d="M16.5 15L13.5 12l-10 9.5 13-6.5z" fill="white" opacity="0.8" />
    <path
      d="M20 12c0 .6-.3 1.1-.8 1.4L16.5 15 13.5 12l3-3 2.7 1.6c.5.3.8.8.8 1.4z"
      fill="white"
      opacity="0.95"
    />
  </svg>
);

// ─── Download Section ─────────────────────────────────────────────────────────
export function DownloadSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver({
    threshold: 0.15,
  });

  const stores = [
    {
      label: "App Store",
      sublabel: "Download on the",
      icon: AppleSVG,
      bg: "linear-gradient(135deg, oklch(0.2 0.01 280), oklch(0.15 0.01 280))",
      glow: "oklch(0.5 0.1 280 / 0.5)",
    },
    {
      label: "Google Play",
      sublabel: "Get it on",
      icon: GooglePlaySVG,
      bg: "linear-gradient(135deg, oklch(0.28 0.08 150), oklch(0.2 0.05 195))",
      glow: "oklch(0.5 0.12 150 / 0.5)",
    },
  ];

  return (
    <section
      id="download"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, oklch(0.38 0.26 305) 0%, oklch(0.32 0.22 270) 35%, oklch(0.36 0.24 195) 100%)",
      }}
    >
      {/* Animated BG blobs */}
      <div aria-hidden="true">
        {[
          {
            id: "dl-blob-1",
            size: 500,
            top: "-20%",
            left: "-10%",
            color: "oklch(1 0 0 / 0.04)",
            dur: "8s",
            delay: "0s",
          },
          {
            id: "dl-blob-2",
            size: 400,
            bottom: "-15%",
            right: "-8%",
            color: "oklch(1 0 0 / 0.06)",
            dur: "6s",
            delay: "1s",
          },
          {
            id: "dl-blob-3",
            size: 200,
            top: "30%",
            left: "30%",
            color: "oklch(0.7 0.18 195 / 0.15)",
            dur: "5s",
            delay: "2s",
          },
        ].map((blob) => (
          <div
            key={blob.id}
            style={{
              position: "absolute",
              width: blob.size,
              height: blob.size,
              borderRadius: "50%",
              background: blob.color,
              top: (blob as { top?: string }).top,
              bottom: (blob as { bottom?: string }).bottom,
              left: (blob as { left?: string }).left,
              right: (blob as { right?: string }).right,
              animation: `float ${blob.dur} ease-in-out infinite`,
              animationDelay: blob.delay,
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* Dot grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left: text + buttons */}
        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "oklch(1 0 0 / 0.12)",
              border: "1.5px solid oklch(1 0 0 / 0.2)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "16px" }}>📲</span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "13px",
                color: "oklch(0.95 0.01 280)",
                letterSpacing: "0.04em",
              }}
            >
              Available Now
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 62px)",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              color: "white",
              marginBottom: "16px",
            }}
            data-ocid="download-headline"
          >
            Download Stikbook
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.9 0.12 85), oklch(0.85 0.18 60))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Today
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.65,
              color: "oklch(0.9 0.01 280)",
              maxWidth: "500px",
              marginBottom: "40px",
            }}
            data-ocid="download-subheadline"
          >
            Join 50,000+ young creators already sharing, earning, and connecting
            on the world's safest social platform. Free to download. Safe by
            design.
          </p>

          {/* Store buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "40px",
            }}
            data-ocid="store-buttons"
          >
            {stores.map((store, i) => (
              <StoreButton
                key={store.label}
                store={store}
                index={i}
                visible={textVisible}
              />
            ))}
          </div>

          {/* Trust pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.7s ease 0.8s",
            }}
          >
            {[
              { icon: "⭐", text: "4.9 Rating" },
              { icon: "🛡️", text: "Child-Safe Certified" },
              { icon: "🆓", text: "Free Forever" },
              { icon: "🌍", text: "42 Countries" },
            ].map((pill) => (
              <div
                key={pill.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "oklch(1 0 0 / 0.1)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                  borderRadius: "100px",
                  padding: "5px 14px",
                }}
              >
                <span style={{ fontSize: "13px" }}>{pill.icon}</span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "oklch(0.92 0.01 280)",
                  }}
                >
                  {pill.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone mockup */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-ocid="phone-mockup"
        >
          <PhoneMockup visible={isVisible} />
        </div>
      </div>
    </section>
  );
}
