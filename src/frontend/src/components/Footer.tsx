import { useState } from "react";

// ─── Social Icon Wrapper ───────────────────────────────────────────────────────
function SocialLink({
  href,
  label,
  hoverColor,
  children,
}: {
  href: string;
  label: string;
  hoverColor: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-ocid={`social-${label.toLowerCase()}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        background: hovered
          ? `${hoverColor.replace(")", " / 0.18)")}`
          : "oklch(1 0 0 / 0.06)",
        border: `1.5px solid ${hovered ? `${hoverColor.replace(")", " / 0.45)")}` : "oklch(1 0 0 / 0.10)"}`,
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 8px 24px ${hoverColor.replace(")", " / 0.30)")}`
          : "none",
        color: hovered ? hoverColor : "oklch(0.60 0.01 280)",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

// ─── Footer Link ──────────────────────────────────────────────────────────────
function FooterLink({
  href,
  children,
  ocid,
}: {
  href: string;
  children: React.ReactNode;
  ocid: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      data-ocid={ocid}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "oklch(0.85 0.22 305)" : "oklch(0.55 0.01 280)",
        fontSize: "14px",
        fontWeight: 500,
        textDecoration: "none",
        transition: "all 0.2s ease",
        borderBottom: hovered
          ? "1px solid oklch(0.85 0.22 305)"
          : "1px solid transparent",
        paddingBottom: "1px",
      }}
    >
      {children}
    </a>
  );
}

// ─── Twitter / X SVG ─────────────────────────────────────────────────────────
function TwitterIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─── Instagram SVG ────────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ─── TikTok SVG ───────────────────────────────────────────────────────────────
function TikTokIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-1.05-1.198-1.441-2.416-1.579-3.238h.007C16.094.655 16.18 0 16.18 0h-3.954v16.233c0 .213 0 .424-.01.632-.01.218-.034.434-.072.647a4.063 4.063 0 0 1-1.36 2.455 3.928 3.928 0 0 1-2.466.89 4 4 0 0 1-4-4 4 4 0 0 1 4-4c.39 0 .768.057 1.127.16V8.018a8.09 8.09 0 0 0-1.127-.08C4.686 7.938.5 12.124.5 17.312s4.186 9.374 9.374 9.374c5.189 0 9.375-4.186 9.375-9.374V9.186a10.015 10.015 0 0 0 5.818 1.84V7.068c-.001 0-1.139.059-5.746-1.506z" />
    </svg>
  );
}

// ─── YouTube SVG ─────────────────────────────────────────────────────────────
function YouTubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ─── Stikbook Logo Mark ───────────────────────────────────────────────────────
function StikbookLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, oklch(0.55 0.30 305), oklch(0.65 0.25 195))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px oklch(0.55 0.30 305 / 0.50)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6h16M4 10h10M4 14h12M4 18h8"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="19" cy="17" r="3" fill="white" opacity="0.9" />
        </svg>
      </div>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "22px",
          background:
            "linear-gradient(135deg, oklch(0.82 0.22 305), oklch(0.78 0.22 195))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Stikbook
      </span>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const socials = [
    {
      label: "Twitter",
      href: "https://twitter.com/stikbook",
      hoverColor: "oklch(0.65 0.20 220)",
      icon: <TwitterIcon />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/stikbook",
      hoverColor: "oklch(0.62 0.28 345)",
      icon: <InstagramIcon />,
    },
    {
      label: "TikTok",
      href: "https://tiktok.com/@stikbook",
      hoverColor: "oklch(0.72 0.26 345)",
      icon: <TikTokIcon />,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@stikbook",
      hoverColor: "oklch(0.60 0.24 25)",
      icon: <YouTubeIcon />,
    },
  ];

  const links = [
    { label: "Privacy Policy", href: "#", ocid: "footer-privacy" },
    { label: "Terms of Service", href: "#", ocid: "footer-terms" },
    { label: "Contact Us", href: "#", ocid: "footer-contact" },
  ];

  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, oklch(0.10 0.04 280) 0%, oklch(0.08 0.02 280) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      data-ocid="footer"
    >
      {/* Vivid top gradient accent — hot pink → electric teal */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, oklch(0.62 0.28 345 / 0.8), oklch(0.65 0.25 195 / 0.8), transparent)",
        }}
      />

      {/* Background dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      {/* Glow effect */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse, oklch(0.55 0.30 305 / 0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 24px 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row: logo + socials */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {/* Brand block */}
          <div style={{ maxWidth: "320px" }}>
            <StikbookLogo />
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "oklch(0.50 0.01 280)",
                marginTop: "14px",
              }}
            >
              The safe space for young talent. A child-safe social media
              platform where creativity meets community — powered by AI that
              keeps it real and keeps it safe.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "oklch(0.40 0.01 280)",
                marginBottom: "16px",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <SocialLink
                  key={s.label}
                  href={s.href}
                  label={s.label}
                  hoverColor={s.hoverColor}
                >
                  {s.icon}
                </SocialLink>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.08), transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Bottom row: links + copyright */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Legal links */}
          <nav
            aria-label="Footer navigation"
            style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}
          >
            {links.map((link) => (
              <FooterLink key={link.label} href={link.href} ocid={link.ocid}>
                {link.label}
              </FooterLink>
            ))}
          </nav>

          {/* Copyright */}
          <p
            style={{
              fontSize: "13px",
              color: "oklch(0.38 0.01 280)",
              margin: 0,
            }}
            data-ocid="footer-copyright"
          >
            © {year}. Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "oklch(0.68 0.20 305)",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.85 0.24 305)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.68 0.20 305)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
