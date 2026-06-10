# 🤝 Contributing to PhonePe Web Clone

Thank you for your interest in contributing! This document provides guidelines to make the contribution process smooth and consistent.

---

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)

---

## Code of Conduct
By participating, you agree to our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful and constructive.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Build-PhonePe-Website-Web-Development.git
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/Aranya2801/Build-PhonePe-Website-Web-Development.git
   ```
4. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Development Setup

```bash
# Serve locally
python -m http.server 3000
# or
npx serve .
```

Open `http://localhost:3000` in your browser.

---

## Coding Standards

### HTML
- Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)
- Every interactive element must have an `aria-label` or visible label
- Use `data-*` attributes for JS hooks, not `class` or `id`
- Indent with 2 spaces

### CSS
- Follow BEM-lite naming: `.component`, `.component-element`, `.component--modifier`
- Use CSS custom properties (`var(--primary)`) — no hardcoded hex values
- Mobile-first media queries
- Group properties: Box Model → Typography → Visual → Animation
- No `!important` unless absolutely necessary

### JavaScript
- `'use strict'` at the top of every file
- Use `const`/`let`, never `var`
- Prefer `async/await` over `.then()` chains
- Use descriptive function names: `initScrollReveal()` not `init()`
- Add JSDoc comments for public functions:
  ```javascript
  /**
   * Animates a counter from 0 to target value
   * @param {HTMLElement} el - The element to update
   * @param {number} target - The final value
   */
  function animateCounter(el, target) { ... }
  ```
- No console.log in production code (use `console.warn` for warnings)

### Commits
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat(calculator): add EMI calculator section
fix(navbar): prevent flash of unstyled content on load
style(hero): adjust mobile hero padding
docs(readme): update screenshot links
perf(animations): use will-change for card hover
```

---

## Pull Request Process

1. **Update** your branch with latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test** your changes across:
   - Chrome, Firefox, Safari, Edge (latest)
   - Mobile: 375px, 768px
   - Desktop: 1280px, 1440px
   - Dark and Light mode
   - With reduced-motion preference enabled

3. **Check the checklist** before submitting:
   - [ ] No console errors
   - [ ] Responsive on all breakpoints
   - [ ] Dark mode works correctly
   - [ ] Animations respect `prefers-reduced-motion`
   - [ ] All interactive elements are keyboard accessible
   - [ ] No hardcoded colors (use CSS variables)
   - [ ] README updated if adding features

4. **Open a PR** with:
   - Clear title: `feat: Add expense tracker section`
   - Description of changes
   - Screenshots/GIF if UI changes
   - Issue number if applicable: `Closes #42`

---

## Issue Guidelines

### Bug Reports
Use the **Bug Report** template. Include:
- Browser + OS
- Steps to reproduce
- Expected vs actual behaviour
- Screenshot or screen recording

### Feature Requests
Use the **Feature Request** template. Include:
- Problem the feature solves
- Proposed solution
- Alternatives considered

---

## 🙏 Thank You!

Every contribution, no matter how small, makes this project better. We appreciate your time and effort!
