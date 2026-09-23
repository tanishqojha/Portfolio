---
name: Kinetic Neo-Brutalist Developer System
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444933'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#747a60'
  outline-variant: '#c4c9ac'
  surface-tint: '#506600'
  primary: '#506600'
  on-primary: '#ffffff'
  primary-container: '#ccff00'
  on-primary-container: '#5b7300'
  inverse-primary: '#abd600'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5e5f5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#eeede8'
  on-tertiary-container: '#6a6b67'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c7c7c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#464744'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a bold, razor-sharp visual narrative engineered for an elite developer portfolio. It converges refined Neo-Brutalism with high-density engineering aesthetics: ultra-deliberate structural grid layouts, industrial hardware cues, tactile interactive surfaces, and stark architectural hierarchy.

Targeting tech founders, engineering leaders, and cutting-edge collaborators, the interface rejects sanitized corporate minimalism in favor of visceral competence and unapologetic distinctiveness. It evokes calculated rebellion, mechanical precision, and immediate authority. Heavy dark strokes and raw structural wireframes ground the canvas, while electric chartreuse highlights inject instant energetic focus. Every interaction behaves like physical micro-hardware—elements compress, translate along a rigid 45-degree axis, and snap into state without squishy easing.

## Colors
The color architecture uses a high-contrast physical substrate. The foundation relies on a warm, archival cream `#fcfbf7` for primary canvas surfaces, paired with secondary structural container fills in concrete light gray `#f4f3ee`. Pitch black `#0a0a0a` provides absolute framing via uniform stroke work, typographic hierarchy, and hard shadow projections.

- **Primary (`#ccff00`)**: Electric Acid Lime. Reserved for decisive interactive signals, active status beacons, focused highlights, terminal callouts, and cursor targets. It must never be diluted with transparency.
- **Secondary (`#0a0a0a`)**: Void Black. Used for text ink, structural outlines (2.5px–3px), rigid drop shadows, and inverted dark-mode modules (such as terminal consoles).
- **Tertiary (`#f4f3ee`)**: Concrete Neutral. Used for sub-level surface cards, inline code blocks, inactive pill badge fills, and modular structural panel backings.
- **Neutral (`#fcfbf7`)**: Archival Cream. The foundational backdrop canvas providing warmth and depth behind high-contrast strokes, eliminating the clinical sterility of pure digital white.

## Typography
Typographic expression is calibrated through three distinct functional families:
1. **Space Grotesk (Headlines & Display)**: Provides brutal geometric character, idiosyncratic alternate cuts, and intentional structural mass. Letter spacing is pulled tight to generate poster-like typographic density.
2. **Inter (Body)**: Handles documentation, long-form project case studies, and descriptive context with neutral, uncompromised legibility that balances the expressive display elements.
3. **JetBrains Mono (Technical Metadata & System Labels)**: Acts as the voice of execution. Applied across code blocks, commit hashes, technical parameter tags, navigation coordinates, timestamps, and micro-metrics. All label-level components enforce upper-case transformations with tracked spacing for mechanical clarity.

## Layout & Spacing
The layout adheres to an unapologetic structural grid system. The canvas breaks down into:
- **Desktop (1024px+)**: 12-column modular grid with thick architectural separator lines. Outer margin is locked at `3rem` (`48px`) with `1.5rem` (`24px`) gutters. Grid borders can be rendered explicitly using `2.5px` solid `#0a0a0a` ruling lines to expose the underlying scaffolding.
- **Tablet (768px – 1023px)**: 8-column layout with `2rem` (`32px`) margins and `1.25rem` (`20px`) gutters. Side-by-side technical metrics collapse to double-column units.
- **Mobile (< 768px)**: 4-column layout with `1.25rem` (`20px`) margins and `1rem` (`16px`) gutters. Visual panels stack vertically; horizontal scroll regions with snap points are utilized for continuous tag collections or tool stacks.

Internal card and container paddings leverage standard scale tiers: `space-xs` (4px) for inline status chips, `space-sm` (8px) for badge framing, `space-md` (16px) for standard interactive triggers, `space-lg` (24px) for container padding, and `space-xl` (40px) for prominent section separation.

## Elevation & Depth
This design system rejects blurred ambient shadows and skeuomorphic light sources. Elevation is communicated purely through structural projection using **hard-offset occlusion geometry**:

- **Ground Level (Flat)**: Baseline canvas surface (`#fcfbf7`). Zero offset. Outlines remain 2.5px solid pitch black.
- **Elevation Tier 1 (Cards, Badges, Secondary Controls)**: Outlined with `2.5px solid #0a0a0a`, cast with a directional hard shadow `box-shadow: 4px 4px 0px 0px #0a0a0a`. No blur radius.
- **Elevation Tier 2 (Featured Projects, Main Modals, Hero Panels)**: Outlined with `3px solid #0a0a0a`, cast with `box-shadow: 6px 6px 0px 0px #0a0a0a` or high-intensity accent shadows `box-shadow: 6px 6px 0px 0px #ccff00`.
- **Active Physical Displacement**: On interactive hover or click events, elements physically translate across the 45-degree axis (`transform: translate(-2px, -2px)`), expanding the hard shadow proportionally. On active press, the element translates down (`transform: translate(4px, 4px)`), collapsing the drop shadow to `0px 0px 0px 0px` to emulate a micro-switch bottoming out.

## Shapes
The structural language is strictly **Sharp (`0`)**.

All primary structural primitives—including action buttons, content cards, image bounding frames, navigation rails, and modal containers—must have `border-radius: 0px`. Chamfered cuts, soft corners, and organic curves are excluded from structural elements to maintain an architectural, blueprint-like foundation.

The single exception is reserved for **Sticker Pills** and **Status Beacons**: inline status indicators, technology version badges, and tag chips may adopt fully rounded pill geometry (`border-radius: 9999px`) to create an intentional visual counterpoint against the rigid, sharp grid framing.

## Components

### Buttons
- **Primary Action**: Sharp rect (`border-radius: 0`), filled in `#ccff00`, wrapped in `2.5px solid #0a0a0a` border with a `4px 4px 0 #0a0a0a` hard shadow. Typography: `JetBrains Mono`, 13px bold, uppercase. On hover: translate `-2px, -2px` with `6px 6px 0 #0a0a0a` shadow. On active click: translate `4px, 4px` with zero shadow.
- **Secondary / Ghost**: Sharp rect, canvas cream fill (`#fcfbf7`), `2.5px solid #0a0a0a`, `4px 4px 0 #0a0a0a` shadow. Inverts to void black background with cream text on hover.
- **Icon Controls**: Square 1:1 aspect containers (`44x44px`), sharp corners, solid black border, containing sharp geometric icons with 2.5px stroke weight.

### Cards & Project Showcases
- **Base Project Card**: Bounded by `2.5px solid #0a0a0a`, cream background, with `6px 6px 0 #0a0a0a` shadow. Top header section features a simulated industrial title bar containing a monospaced terminal path (`e.g., ~/projects/neural-indexer`), a raw grid divider line, and content below.
- **Terminal Console Card**: Void black canvas (`#0a0a0a`), text in `#ccff00` and `#f4f3ee`, featuring simulated macOS/Unix control dots stripped of color (raw stroked circles: 8px diameter with 1.5px solid white border).

### Chips, Pills & Tags
- **Sticker Pill**: Pill shape (`border-radius: 9999px`), `2px solid #0a0a0a`, padding `4px 12px`. Light gray fill (`#f4f3ee`) or `#ccff00`. Shadow: `2px 2px 0 #0a0a0a`. Text: `JetBrains Mono` 11px uppercase bold.
- **Raw Code Chip**: Square shape (`border-radius: 0px`), light gray fill (`#f4f3ee`), 1.5px solid black border, `code-sm` font.

### Checkboxes, Radios & Switches
- **Checkbox**: 20x20px sharp square, `2.5px solid #0a0a0a`, `2px 2px 0 #0a0a0a` shadow. Checked state fills with `#ccff00` and displays a bold black checkmark (`stroke-width: 3`).
- **Radio Button**: 20x20px sharp square rotated 45 degrees (diamond geometry), `2.5px solid #0a0a0a`. Selected state features an interior solid black diamond.
- **Toggle Switch**: Heavy industrial slide track. Sharp rect `48x24px`, `#f4f3ee` fill, `2.5px solid #0a0a0a`. Thumb is a sharp square block `18x18px` in `#0a0a0a` that translates horizontally without spring physics. Active track fills with `#ccff00`.

### Form Input Fields
- **Text Inputs**: Flat cream background (`#fcfbf7`), `2.5px solid #0a0a0a`, zero border radius, inner padding `12px 16px`. Typography: `JetBrains Mono` 14px. Focus state triggers a solid `#ccff00` drop shadow (`4px 4px 0 #ccff00`) while maintaining the `2.5px solid #0a0a0a` border. Placeholder text styled in muted ink `#737373`.

### Interactive Micro-Elements
- **Terminal Window Header**: 32px height, horizontal rule bottom border `2.5px solid #0a0a0a`, monospaced breadcrumb metadata anchored left, live latency indicator (blinking 6px green square) anchored right.
- **Live Status Indicator**: Sharp 8x8px square beacon filled with `#ccff00` with a 1.5px solid black border, accompanied by `AVAILABLE FOR CONTRACT` in `label-caps`.
