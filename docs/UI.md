**UI & Theme Design Document** for Snicker Doodle. This serves as your "Style Bible" for building the frontend.

# Snicker Doodle: UI/UX Design System

## 1. Core Aesthetic

**"The Neighborhood Zine"**
A visual identity that feels physical, handcrafted, and local. It rejects perfectly polished "corporate" web design in favor of texture, personality, and organized chaos.

- **Keywords**: Lo-fi, Tactile, Analog, Warm, Playful, Brutalist-Lite.
- **Inspiration**: Risograph prints, cafe menus, grid paper notebooks, collages.

---

## 2. Color System ("Earth & Ink")

The palette prioritizes warmth. We strictly avoid pure `#000000` black or `#FFFFFF` white to maintain a "printed paper" look.

### Primary Colors

- **Paper Beige** (`#F5F1E3`): **The Main Canvas.** Used for 80% of backgrounds. Replaces white.
- **Coffee Ink** (`#4A1215`): **The Main Text & Borders.** A deep, rich brown used for all typography, outlines, and primary icons. Replaces black.

### Secondary Accents (Contextual)

- **Marigold Mustard** (`#FBBC12`): High-visibility highlights, active states, "Sticker" backgrounds.
- **Sage Olive** (`#A8B575`): Organic sections, health/fitness events (Run-o-clock).
- **Festival Magenta** (`#D91172`): Creative events, "New Drop" alerts, hover interactions.

---

## 3. Typography System

A three-tier font hierarchy that mixes fun with function.

| Tier          | Role          | Font Style                       | Visual Trait                                                                                               |
| :------------ | :------------ | :------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **H1 - H2**   | **Headlines** | **Fredoka** (or Neue Augenblick) | **Round, Puffy, Bold.** Used for big statements ("coffee & culture"). lowercase preferred for casual vibe. |
| **Data / UI** | **Meta-Data** | **Space Mono** (or Stringer)     | **Typewriter, Technical.** Used for dates, prices (`₹220`), locations, and buttons. Adds a "receipt" feel. |
| **Body**      | **Reading**   | **DM Sans** (or Montserrat)      | **Geometric, Clean.** High legibility for long paragraphs.                                                 |

---

## 4. UI Physics & Components

### The "Hard" Shadow

We do not use soft, blurry drop shadows. We use **Hard Shadows** to create a cut-paper 3D effect.

- **CSS**: `box-shadow: 4px 4px 0px 0px #4A1215;`
- **Interaction**: On hover, the element moves _down_ and right, reducing the shadow to `0px` (pressing the button).

### Borders & Corners

- **Stroke Width**: All containers and inputs have a **2px solid border** in Coffee Ink (`#4A1215`).
- **Radius**:
  - **Buttons**: Full pill shape (`rounded-full`).
  - **Cards**: Slight rounding (`rounded-lg` or `12px`).
  - **Inputs**: Zero rounding or slight (`4px`) for a raw feel.

### "Wobbly" Micro-Interactions

Elements should never feel static. They should feel like they are pinned loosely to the page.

- **Hover Effect**: Slight rotation (`rotate-1` or `-rotate-1`) on buttons and cards.
- **Scroll**: Horizontal scroll areas (like "Recent Stories") should snap to center (`snap-x snap-center`).

---

## 5. Backgrounds & Textures

### The Grid Overlay

To sell the "notebook" vibe, colored backgrounds often have a subtle mathematical grid.

- **Implementation**: A 40px x 40px CSS gradient pattern.
- **Opacity**: 10% opacity of the Ink color (`rgba(74, 18, 21, 0.1)`).

### The "Sticker" Collage

Images should not sit in perfect squares.

- **Framing**: Images inside white borders with slight rotation.
- **Layering**: Elements overlapping slightly (e.g., a "New" sticker partially covering a photo).

---

## 6. Specific Layout Patterns

- **The Location Card**: Designed to look like a physical index card or a Google Maps embed cutout. Needs a "Get Directions" action prominent.
- **The Menu Board**: Modeled after a physical cafe wall menu. Dotted lines connecting items to prices (`Espresso ............ ₹220`).
- **Footer**: A dense, "Info-packed" area (like the back of a concert flyer) containing forms, links, and copyright info in the monospaced font.
