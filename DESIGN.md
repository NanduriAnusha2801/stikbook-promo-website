# Design Brief: Stikbook

## Direction

**Stikbook Promotional Website** — vibrant, youth-centric landing platform celebrating child-safe social media with premium animations and interactive storytelling.

## Tone

Playful Pop maximalism with premium restraint — bold magenta/purple primary, teal accents, yellow highlights, energetic but refined motion choreography that feels premium, not cheap.

## Differentiation

Micro-interactive scroll animations + floating decorative elements + gradient text accents create a "living" interface that feels designed specifically for Gen Z, not generic.

## Color Palette

| Token      | OKLCH           | Role                                          |
| ---------- | --------------- | --------------------------------------------- |
| background | 0.98 0.005 280  | Cream off-white, light and airy              |
| foreground | 0.18 0.02 280   | Deep purple, strong contrast for text        |
| card       | 1.0 0.0 0       | Pure white, floating surfaces                |
| primary    | 0.55 0.24 305   | Vivid magenta/purple, hero CTAs              |
| accent     | 0.7 0.18 195    | Teal, secondary actions, highlights          |
| muted      | 0.94 0.02 280   | Pale lavender, subtle backgrounds            |

## Typography

- **Display:** Plus Jakarta Sans — warm, rounded, friendly for Gen Z youth audience
- **Body:** DM Sans — clean, legible, modern professional
- **Scale:** Hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Subtle layered cards with soft shadows (`shadow-elevated` 0 12px 24px at -4px offset) create depth without heaviness; content zones alternate background tints for rhythm.

## Structural Zones

| Zone    | Background              | Border              | Notes                                        |
| ------- | ----------------------- | ------------------- | -------------------------------------------- |
| Header  | `bg-background`         | `border-b border-border/30` | Fixed/sticky, transparent on hero, opaque below |
| Hero    | `gradient-primary`      | —                   | Full-screen, animated tagline, dual CTAs    |
| Content | `bg-background`         | —                   | Section alternation: `bg-muted/20` every odd section |
| Cards   | `bg-card`               | `border border-border/40` | Rounded `rounded-lg` (12px), `hover-lift` effect |
| Footer  | `bg-muted/30`           | `border-t border-border/30` | Dark text, social links                     |

## Spacing & Rhythm

Section gaps 6rem (lg) / 4rem (md) create breathing room; within sections, card groups use 2rem horizontal/1.5rem vertical gaps; 1rem padding inside cards for density balance.

## Component Patterns

- **Buttons:** Rounded-full pill shape, gradient fill on primary, outline on secondary, 200ms scale-up on hover with color shift
- **Cards:** `rounded-lg` with `shadow-subtle`, fade-in on scroll, `hover-lift` (translateY -4px + enhanced shadow)
- **Badges:** Pill shape, gradient text or teal/yellow background, `font-semibold text-sm`

## Motion

- **Entrance:** Scroll-triggered fade-in + slide-up (300ms cubic-bezier) via Intersection Observer, staggered card delays (50–100ms increments)
- **Hover:** Scale-bounce (100% → 105% center) on cards, color transition on text (200ms smooth)
- **Decorative:** Floating orbs/shapes (3–4s sine waves), spinning stikcoins (3s linear), faint glow pulses on accents (2s ease-in-out)

## Constraints

- All color tokens via CSS variables, no arbitrary colors (`bg-[#123]`)
- Animations via Tailwind utility classes or CSS keyframes, no Framer Motion
- SVG illustrations + CSS mockups only, zero external images
- Rounded corners intentional: pills on buttons, 12-16px on cards, 0-4px on subtle UI elements
- Dark mode color palette: backgrounds 0.12–0.16L, primaries bumped to 0.7L for luminosity

## Signature Detail

Animated gradient text on the hero tagline (magenta → teal → yellow cycling) combined with floating decorative shapes behind, creating visual dynamism that telegraphs "young, energetic, alive" on first load.
