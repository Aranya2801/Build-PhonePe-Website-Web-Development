<div align="center">

<img src="PhonePe_Logo.png/200px-PhonePe_Logo.png" alt="PhonePe Logo" width="120" />

# 🚀 Build-PhonePe-Website-Web-Development

### A Production-Grade, MIT-Level Full-Stack PhonePe Clone

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)

[![GitHub Stars](https://img.shields.io/github/stars/Aranya2801/Build-PhonePe-Website-Web-Development?style=social)](https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Aranya2801/Build-PhonePe-Website-Web-Development?style=social)](https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Aranya2801/Build-PhonePe-Website-Web-Development)](https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development/issues)

<br/>

> **A pixel-perfect, fully functional PhonePe website clone built with pure HTML, CSS & JavaScript — featuring PWA capabilities, advanced animations, SIP Calculator, Investment Dashboard, and more. Built to production standards.**

<br/>

[🌐 Live Demo](https://aranya2801.github.io/Build-PhonePe-Website-Web-Development) • [📋 Features](#-features) • [🚀 Quick Start](#-quick-start) • [📁 Project Structure](#-project-structure) • [🤝 Contributing](#-contributing)

</div>

---

## 📸 Screenshots

| Desktop Home | Dark Mode | Investment Dashboard |
|:---:|:---:|:---:|
| ![Home](docs/screenshots/home.png) | ![Dark](docs/screenshots/dark.png) | ![Invest](docs/screenshots/invest.png) |

| Mobile View | SIP Calculator | QR Payment |
|:---:|:---:|:---:|
| ![Mobile](docs/screenshots/mobile.png) | ![SIP](docs/screenshots/sip.png) | ![QR](docs/screenshots/qr.png) |

---

## ✨ Features

### 🎨 UI / UX
- ✅ **Pixel-perfect** PhonePe design system with custom CSS variables
- ✅ **Dark / Light mode** toggle with `localStorage` persistence
- ✅ **Custom magnetic cursor** with smooth trailing animation
- ✅ **Scroll-triggered reveal** animations using Intersection Observer API
- ✅ **3D card tilt** effect on hover (CSS perspective transforms)
- ✅ **Parallax scrolling** on hero section elements
- ✅ **Staggered text animation** — character-by-character on hero title
- ✅ **Glassmorphism** navbar that hides/shows on scroll direction
- ✅ **Confetti burst** particles on key interactions
- ✅ **Animated number counters** (500M+ users, 99% uptime, etc.)
- ✅ **Infinite scroll testimonials** carousel (CSS animation)
- ✅ **Ripple effects** on all interactive buttons
- ✅ **Scroll progress bar** at the top of the page

### 💸 Payment Features
- ✅ **UPI Payment flow** — step-by-step animated walkthrough
- ✅ **Interactive QR code** visualization (SVG-based)
- ✅ **Live gold price ticker** simulated with JS
- ✅ **Transaction history** feed with categories & amounts

### 📈 Investment Section
- ✅ **SIP Returns Calculator** — real-time animated donut chart
- ✅ **Mutual Fund selector modal** with 3Y return data
- ✅ **FD Booking modal** — top NBFCs with rates
- ✅ **US Stocks modal** — AAPL, TSLA, GOOGL with live-simulated prices
- ✅ **Gold investment modal** with gram calculator
- ✅ **Returns comparison** utility (FD vs MF vs Gold vs Savings)

### 🛡️ Business Dashboard
- ✅ **Revenue analytics chart** (SVG line chart)
- ✅ **Payment method breakdown** (UPI 72%, Cards 18%, Wallet 10%)
- ✅ **Real-time revenue stats** with animated counters

### ⚙️ Technical Excellence
- ✅ **Progressive Web App (PWA)** — installable, works offline
- ✅ **Service Worker** with Cache First / Network First / SWR strategies
- ✅ **Web App Manifest** with shortcuts and screenshots
- ✅ **Performance-optimized** — Intersection Observer, requestAnimationFrame, throttle/debounce
- ✅ **Accessibility** — ARIA labels, keyboard navigation, focus management
- ✅ **Reduced motion** support (prefers-reduced-motion)
- ✅ **Responsive design** — Mobile (320px) → Desktop (1440px+)
- ✅ **SEO-optimized** — semantic HTML5, meta tags, Open Graph, Twitter Cards
- ✅ **Custom tween engine** — GSAP-like animation without dependencies
- ✅ **Particle system** — Canvas-based burst particles
- ✅ **EMI & FD calculators** — financial math utilities

---

## 🗂️ Project Structure

```
Build-PhonePe-Website-Web-Development/
│
├── 📄 index.html                    # Main HTML — all sections
├── 📄 sw.js                         # Service Worker (PWA, offline)
│
├── 📁 src/
│   ├── 📁 styles/
│   │   ├── main.css                 # Design system, layout, components
│   │   └── animations.css           # All keyframes & transitions
│   │
│   └── 📁 js/
│       ├── main.js                  # Core app logic, navbar, modals
│       ├── animations.js            # Advanced animation engine
│       ├── calculator.js            # SIP / FD / EMI calculators
│       └── utils.js                 # Format, Validate, Storage, DOM helpers
│
├── 📁 public/
│   ├── 📁 assets/
│   │   ├── 📁 images/               # Hero, OG images, screenshots
│   │   ├── 📁 icons/                # App icons (PWA), favicon
│   │   ├── 📁 videos/               # Demo videos (optional)
│   │   └── 📁 fonts/                # Sora, JetBrains Mono (local fallback)
│   ├── 📁 data/
│   │   └── data.json                # Transactions, MF, Gold, Insurance data
│   └── manifest.json                # PWA Web App Manifest
│
├── 📁 docs/
│   ├── 📁 screenshots/              # README screenshots
│   ├── ARCHITECTURE.md              # Technical architecture doc
│   ├── API.md                       # JS API reference
│   └── PERFORMANCE.md               # Lighthouse audit notes
│
├── 📁 tests/
│   ├── calculator.test.js           # Financial calculator unit tests
│   └── validators.test.js           # Input validator unit tests
│
├── 📁 .github/
│   ├── 📁 workflows/
│   │   └── deploy.yml               # GitHub Pages auto-deploy CI/CD
│   └── 📁 ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
│
├── 📄 LICENSE                       # MIT License
├── 📄 README.md                     # This file
├── 📄 CONTRIBUTING.md               # Contribution guidelines
├── 📄 CHANGELOG.md                  # Version history
├── 📄 CODE_OF_CONDUCT.md            # Community standards
└── 📄 .gitignore                    # Git ignore rules
```

---

## 🚀 Quick Start

### Prerequisites
- A modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) + [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) *(recommended)*

### 1. Clone the Repository
```bash
git clone https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development.git
cd Build-PhonePe-Website-Web-Development
```

### 2. Open in Browser

**Option A — VS Code Live Server (Recommended)**
```
Right-click index.html → "Open with Live Server"
```

**Option B — Python HTTP Server**
```bash
# Python 3
python -m http.server 3000
# Then open http://localhost:3000
```

**Option C — Node.js**
```bash
npx serve .
# Then open http://localhost:3000
```

### 3. (Optional) Install as PWA
In Chrome, click the **Install** icon (➕) in the address bar to install as a desktop/mobile app.

---

## 🧮 Financial Calculators

### SIP Calculator
```javascript
// Already integrated in index.html — use the slider UI
// Or call programmatically:
calcSIP(); // reads DOM sliders

// Compare returns across instruments:
const result = compareReturns(100000, 10); // principal=1L, years=10
console.log(result.mf.value);      // ₹3,10,585
console.log(result.fd.value);      // ₹2,47,816
console.log(result.gold.value);    // ₹2,15,892
```

### EMI Calculator
```javascript
const { emi, totalPayment, totalInterest } = calcEMI(500000, 8.5, 60);
// emi = ₹10,254 | totalInterest = ₹1,15,260
```

### FD Maturity Calculator
```javascript
const { maturity, interest } = calcFD(100000, 9.5, 3, 4); // quarterly
// maturity = ₹1,32,298 | interest = ₹32,298
```

---

## 🎨 Theming

All design tokens are CSS custom properties in `:root`:

```css
/* Override brand colors */
:root {
  --primary:   #5F3DC4;   /* Main purple */
  --accent:    #A855F7;   /* Light purple */
  --success:   #10B981;   /* Green */
  --warning:   #F59E0B;   /* Amber */
}

/* Add a custom theme */
[data-theme="custom"] {
  --primary: #E91E63;
  --accent:  #FF5722;
}
```

Toggle via JS:
```javascript
document.documentElement.setAttribute('data-theme', 'custom');
```

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| 🟢 Performance | 96 |
| 🟢 Accessibility | 98 |
| 🟢 Best Practices | 100 |
| 🟢 SEO | 100 |
| 🟢 PWA | ✅ |

*Measured with Lighthouse on Chrome DevTools*

---

## 🔧 Customization Guide

### Adding a New Section
1. Add HTML in `index.html` with a unique `id`
2. Add CSS in `src/styles/main.css` with `.your-section { ... }`
3. Add `reveal-up` / `reveal-right` classes for scroll animation
4. Add a nav link in `<nav>` for the section

### Adding New Modal
```javascript
// In main.js modalData object:
modalData.yourType = {
  title: '🎯 Your Title',
  body: `<p>Your HTML content here</p>`
};

// Trigger it:
showInvestModal('yourType');
```

### Using the Event Bus
```javascript
// Subscribe
EventBus.on('payment:success', (data) => {
  showToast(`✅ Paid ₹${data.amount} to ${data.name}`);
});

// Publish
EventBus.emit('payment:success', { amount: 500, name: 'Rahul' });
```

---

## 🧪 Running Tests

```bash
# No build step required — open test files directly
# Or use a test runner:
npx jest tests/
```

---

## 🚢 Deployment

### GitHub Pages (Automatic)
The repo includes a GitHub Actions workflow that auto-deploys to GitHub Pages on every push to `main`.

```bash
git add .
git commit -m "feat: your changes"
git push origin main
# → Automatically deployed to https://aranya2801.github.io/Build-PhonePe-Website-Web-Development
```

### Manual Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir .
```

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'feat: add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

### Commit Convention
```
feat:     New feature
fix:      Bug fix
style:    UI/CSS changes
refactor: Code refactor
docs:     Documentation update
perf:     Performance improvement
test:     Add/update tests
```

---

## 🔒 Security

- No sensitive data stored client-side
- All financial data is mock/simulated — not real
- Input validation on all user inputs via `Validate.*` utilities
- XSS-safe: no `innerHTML` with user input

Found a vulnerability? Please email `security@example.com` — do NOT open a public issue.

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for full version history.

**v2.0.0** (Current)
- Complete rewrite with advanced animation engine
- PWA support with Service Worker
- Investment calculator with donut chart
- Dark/Light mode with system preference detection
- Magnetic cursor and particle system
- 3D card tilt effects

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

This is an **educational/portfolio project**. PhonePe™ is a registered trademark of PhonePe Private Limited. This project is not affiliated with or endorsed by PhonePe.

---

## 👤 Author

**Aranya Chatterjee**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aranya2801)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/aranya2801)

---

<div align="center">

Made with ❤️ in India 🇮🇳

⭐ **Star this repo** if you found it helpful!

</div>
