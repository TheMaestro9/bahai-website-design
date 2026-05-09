# React + Vite Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the static Bahai Website to a React + Vite project to unify the header/footer and automate deployment.

**Architecture:** Use a component-based approach with a shared Layout. React Router will handle page navigation. Existing CSS will be ported to maintain the premium design.

**Tech Stack:** React 18, Vite, React Router v6, Vanilla CSS.

---

### Task 1: Project Initialization
**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html` (Vite entry)

- [ ] **Step 1: Initialize project with Vite**
```bash
npx -y create-vite ./ --template react
```
- [ ] **Step 2: Install dependencies**
```bash
npm install react-router-dom
```
- [ ] **Step 3: Update `vite.config.js` for GitHub Pages**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'
})
```
- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "chore: initialize vite project"
```

### Task 2: Assets & Global CSS
**Files:**
- Create: `src/App.css` (from `style.css`)
- Move: `assets/*` to `public/assets/`

- [ ] **Step 1: Copy global styles**
Copy content of `style.css` to `src/App.css`. Ensure font imports are correct.
- [ ] **Step 2: Relocate assets**
Move all images from the current `assets/` folder to `public/assets/`.
- [ ] **Step 3: Update `src/index.css`**
Clear default Vite styles and import `App.css`.
- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "feat: migrate styles and assets"
```

### Task 3: Header Component
**Files:**
- Create: `src/components/Header.jsx`

- [ ] **Step 1: Port Header HTML and Logic**
Implement the header with `useState` for the mobile menu.
```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header">
      {/* Ported HTML here with Link instead of <a> */}
    </header>
  );
}
```
- [ ] **Step 2: Commit**
```bash
git add src/components/Header.jsx
git commit -m "feat: add Header component"
```

### Task 4: Footer Component
**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Port Footer HTML**
```jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Ported HTML here */}
    </footer>
  );
}
```
- [ ] **Step 2: Commit**
```bash
git add src/components/Footer.jsx
git commit -m "feat: add Footer component"
```

### Task 5: Layout Component
**Files:**
- Create: `src/components/Layout.jsx`

- [ ] **Step 1: Implement Layout with Outlet**
```jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div dir="rtl">
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```
- [ ] **Step 2: Commit**
```bash
git add src/components/Layout.jsx
git commit -m "feat: add Layout component"
```

### Task 6: Home Page Page
**Files:**
- Create: `src/pages/Home.jsx`

- [ ] **Step 1: Port `index.html` content**
Move all sections from `index.html` (inside `<main>`) into this component.
- [ ] **Step 2: Commit**
```bash
git add src/pages/Home.jsx
git commit -m "feat: add Home page"
```

### Task 7: History Page
**Files:**
- Create: `src/pages/History.jsx`

- [ ] **Step 1: Port `bahai-in-egypt.html` content**
Move all sections from `bahai-in-egypt.html` (inside `<main>`) into this component.
- [ ] **Step 2: Commit**
```bash
git add src/pages/History.jsx
git commit -m "feat: add History page"
```

### Task 8: Routing Setup
**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Configure Routes**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
- [ ] **Step 2: Commit**
```bash
git add src/App.jsx
git commit -m "feat: setup routing"
```

### Task 9: GitHub Actions Deployment
**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Add Deployment Workflow**
Use the standard Vite-React GitHub Pages action.
- [ ] **Step 2: Commit**
```bash
git add .github/workflows/deploy.yml
git commit -m "chore: add deployment workflow"
```
