import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Profile Types", href: "#profiles" },
  { label: "Safety", href: "#safety" },
  { label: "Stikcoins", href: "#stikcoins" },
  { label: "Stikdeals", href: "#stikdeals" },
  { label: "Download", href: "#download" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-ocid="nav"
      style={{
        position: "fixed",
        top: scrolled ? "12px" : "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: scrolled ? "calc(100% - 40px)" : "calc(100% - 64px)",
        maxWidth: "1200px",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "100px",
        background: scrolled
          ? "oklch(0.12 0.05 280 / 0.92)"
          : "oklch(0.15 0.06 280 / 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: scrolled
          ? "1.5px solid oklch(0.55 0.30 305 / 0.25)"
          : "1.5px solid oklch(1 0 0 / 0.12)",
        boxShadow: scrolled
          ? "0 8px 40px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(0.55 0.30 305 / 0.08)"
          : "0 4px 20px oklch(0 0 0 / 0.35)",
        padding: "0 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          aria-label="Stikbook - go to top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          data-ocid="nav-logo"
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 14px oklch(0.55 0.30 305 / 0.45)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "18px",
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.3px",
            }}
          >
            Stikbook
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "4px" }}
        >
          {NAV_LINKS.slice(1, -1).map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={`nav-link-${id}`}
                style={{
                  background: isActive ? "oklch(0.55 0.30 305 / 0.18)" : "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  fontFamily: "var(--font-body)",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: "14px",
                  color: isActive
                    ? "oklch(0.85 0.22 305)"
                    : "oklch(0.72 0.01 280)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.target as HTMLButtonElement).style.color =
                      "oklch(0.82 0.18 305)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.target as HTMLButtonElement).style.color =
                      "oklch(0.72 0.01 280)";
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={() => handleNavClick("#download")}
            data-ocid="nav-cta"
            style={{
              padding: "8px 20px",
              borderRadius: "100px",
              background: "var(--gradient-primary)",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 16px oklch(0.55 0.30 305 / 0.45)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 10px 28px oklch(0.55 0.30 305 / 0.60)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 16px oklch(0.55 0.30 305 / 0.45)";
            }}
          >
            Download
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav-hamburger"
            aria-label="Toggle navigation menu"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: menuOpen
                ? "oklch(0.55 0.30 305 / 0.18)"
                : "oklch(1 0 0 / 0.08)",
              border: "1.5px solid oklch(1 0 0 / 0.15)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "4px",
              transition: "all 0.2s ease",
            }}
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                background: "oklch(0.90 0.01 280)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                background: "oklch(0.90 0.01 280)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                background: "oklch(0.90 0.01 280)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-3px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "400px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderTop: menuOpen ? "1px solid oklch(1 0 0 / 0.10)" : "none",
        }}
      >
        <div style={{ padding: "12px 16px 16px" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              data-ocid={`nav-mobile-${link.href.replace("#", "")}`}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                borderRadius: "12px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "15px",
                color: "oklch(0.72 0.01 280)",
                transition: "all 0.2s ease",
                marginBottom: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.55 0.30 305 / 0.14)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(0.82 0.22 305)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "none";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(0.72 0.01 280)";
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
