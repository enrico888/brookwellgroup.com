# Brookwell Design Guidelines

## Design Philosophy
**Restraint as Luxury**: Every element earns its place. Monochromatic palette with subtle gradients and sparing accent use. Visual silence signals expertise.

**Purposeful Motion**: Animations serve function - scroll-triggered fade-ins create discovery. Lottie animations provide interest without overwhelming.

**Tactile Depth**: Subtle noise textures (3% opacity), soft shadows, layered surfaces create materiality like high-quality paper stock.

**Spatial Harmony**: Generous margins/padding, 160-200px vertical spacing between major sections, invisible grid structure.

## Design System

### Colors (HSL)
- **Backgrounds**: Pure white (0 0% 100%) → Off-white (0 0% 98%) → Muted (0 0% 96%)
- **Text**: Near-black (0 0% 8%) → Muted (0 0% 45%) → Subtle (0 0% 65%)
- **Borders**: Subtle (0 0% 90%) → Very subtle (0 0% 94%)
- **Accent**: Dark (0 0% 12%) with off-white text (0 0% 98%)
- **Effects**: Noise opacity 3%, shadows at 4-8% black opacity

### Typography
- **Font**: Inter (Google Fonts) with system fallbacks
- **Scale**: 12px labels → 16px body → 24px section headers → 60-72px hero headline
- **Weights**: 400 normal, 500 medium, 600 semibold
- **Tracking**: -0.02em headlines, 0 body, 0.02em labels/buttons

### Spacing
- **Base unit**: 4px increments (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 160px, 192px)
- **Section gaps**: 160px standard, 200px hero-to-first-section
- **Container**: 1280px max-width, 64px desktop padding, 48px tablet, 24px mobile

### Components
- **Buttons**: Pill-shaped (9999px radius), 12px/24px padding, 14px medium text with wide tracking. Primary: dark background. Secondary: outline. Hover: scale 1.02 with shadow lift
- **Cards**: 16px radius, 32px padding, 1px subtle border, noise texture overlay, fade-in + 20px upward on scroll, staggered 100ms delays
- **Navigation**: 72px height, transparent→frosted glass on scroll, backdrop blur, center-aligned nav items

## Key Sections

### Hero (Full Viewport)
- Pure white base with 2% dot grid texture
- Eyebrow (13px uppercase, wide tracking) → Headline (60-72px semibold, tight tracking) → Subheadline (18px muted, max 480px width) → CTA buttons
- Staggered animation: eyebrow (0ms) → headline words (100ms) → subheadline (300ms) → CTAs (400ms)
- Bouncing chevron scroll indicator that fades on scroll

### Logo Carousel
- Continuous horizontal scroll (60s loop), grayscale logos at 40% opacity, 80px spacing
- Gradient fade on edges, pause on hover
- Logos: Albridge, RightBridge, Broadridge, Docupace, Pershing, NFS

### Service Toggle
- Two equal-width clickable cards with Lottie icons, titles, descriptions, arrow indicators
- Click scrolls to respective sections, hover lift animation

### AI Workflows Section
**Client Stories**: 3 tabbed cards with Problem (warning icon, challenge description) → Solution (lightbulb icon, approach with optional Lottie) → Results (chart icon, 2-3 large count-up metrics, testimonial quote)

**Who We Serve**: 2-column bento grid with tall cards for RIAs/Broker-Dealers (Lottie animations, 3-4 value props each) and small stat cards

**Testimonials**: Single-view carousel with large decorative quotation mark (120px, 5% opacity), 24-28px quote text, author/company, grayscale logo. Auto-advance 8s, slide transitions 400ms

### AI Transitions Section
**Pain Points**: Editorial-style alternating blocks with line icons, connecting lines between points, optional chaotic workflow Lottie

**Process Timeline**: 4 sequential steps (Analysis → Planning → Execution → Validation) with Lottie icons, connector lines with animated dots, staggered scroll-triggered reveals

**Results**: Full-width showcase with large outcome headline, 3 metric bento cards with count-up animations

### About Us
Two-column: company story/values text + abstract geometric Lottie or team visual

### Contact Form
Two-column: "Let's talk" headline with contact details + form (Name, Email, Company, Message fields with inline validation, minimal styling, generous padding). Success: form fades out, thank you message fades in

### Footer
Standard company information and links

## Images
No large hero image - use dot grid texture background instead. Lottie animations throughout for visual interest while maintaining monochromatic sophistication.