# 📋 Changelog

All notable changes to the PhonePe Web Clone are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.0.0] — 2024-12-15

### 🎉 Major Release

#### Added
- **Progressive Web App (PWA)** — Service Worker, Web App Manifest, offline support
- **Advanced animation engine** — custom Tween class, particle system, magnetic buttons
- **SIP Returns Calculator** — animated donut chart, real-time sliders
- **Investment modals** — Mutual Funds, Gold, FD, US Stocks with interactive UI
- **Dark/Light mode** — system preference detection + manual toggle + localStorage persistence
- **Custom cursor** — magnetic dot + trailing ring, disabled on touch devices
- **3D card tilt** effect on feature and investment cards
- **Confetti burst** particles on button interactions
- **Parallax scrolling** on hero section
- **Staggered character animation** on hero title
- **Scroll progress bar** at top of viewport
- **Testimonials auto-scroll** carousel (CSS animation, pauses on hover)
- **Analytics stub** — tracks page views, CTA clicks
- **Event Bus** — pub/sub pattern for component communication
- **Comprehensive data.json** — transactions, MF data, gold rates, insurance products
- **GitHub Actions CI/CD** — auto-deploy to GitHub Pages + Lighthouse audit
- **Detailed README** with badges, screenshots table, API docs
- **CONTRIBUTING.md** — full contribution guide
- **CODE_OF_CONDUCT.md** — community standards

#### Changed
- Complete CSS rewrite with 60+ custom properties design system
- JavaScript split into 4 modules: main, animations, calculator, utils
- Navbar now hides on scroll-down, shows on scroll-up (Netflix-style)
- Hero redesigned with phone mockup + live transaction feed
- All cards now have glassmorphism-ready surface styles
- Responsive breakpoints refined for 320px → 1440px+

#### Performance
- Intersection Observer replaces scroll event listeners for animations
- `requestAnimationFrame` for all smooth animations
- Throttle/debounce applied to all scroll/resize handlers
- Images use `loading="lazy"` and `data-src` pattern
- Service Worker caches all static assets

---

## [1.0.0] — 2024-11-01

### 🚀 Initial Release

#### Added
- Basic PhonePe homepage layout
- Hero section with CTA buttons
- Features grid (6 cards)
- Simple CSS animations
- Mobile responsive navigation
- Footer with links
- Basic dark mode

---

[2.0.0]: https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development/releases/tag/v2.0.0
[1.0.0]: https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development/releases/tag/v1.0.0
