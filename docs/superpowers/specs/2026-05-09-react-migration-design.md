# Design Spec: Migrating Bahai Website to React + Vite

## 1. Objective
To unify the shared elements (Header, Footer) of the Bahai Website and improve the developer experience by migrating the current static HTML/CSS project to a modern React + Vite architecture. This will also enable smoother page transitions and easier content management.

## 2. Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router Dom v6
- **Styling**: Vanilla CSS (migrating existing `style.css`)
- **Deployment**: GitHub Pages via GitHub Actions

## 3. Component Architecture

### 3.1 Layout & Navigation
- **`App.jsx`**: Root component containing the `BrowserRouter` and `Routes`.
- **`Layout.jsx`**: A wrapper component that includes:
    - `<Header />` (Shared Navigation)
    - `<main>` (Dynamic content via `<Outlet />`)
    - `<Footer />` (Shared Footer)

### 3.2 Page Components
- **`Home.jsx`**: Migrated content from `index.html`.
- **`History.jsx`**: Migrated content from `bahai-in-egypt.html`.

### 3.3 UI Components (Atomic)
- **`Section.jsx`**: A reusable wrapper for consistent section spacing and reveal animations.
- **`Hero.jsx`**: The full-bleed hero section with quote and background image.
- **`QuoteBox.jsx`**: Reusable component for the quotes (Hidden Words).

## 4. Features & Functionality
- **RTL Support**: Maintain `dir="rtl"` and Arabic typography (`Cairo`, `Amiri` fonts).
- **Smooth Navigation**: Using `Link` from React Router to prevent full page reloads.
- **Scroll to Top**: Ensure pages start at the top when navigating.
- **Responsive Menu**: Porting the existing hamburger menu logic into a React state hook.
- **Animations**: Porting the `IntersectionObserver` logic to trigger fade-in animations on sections.

## 5. Deployment Strategy
- **Base URL**: Configure Vite to use the repository name (e.g., `/bahai-website-design/`).
- **GitHub Action**: Create a `.github/workflows/deploy.yml` to:
    1. Install dependencies.
    2. Build the project (`npm run build`).
    3. Deploy the `dist` folder to the `gh-pages` branch.

## 6. Migration Steps
1. Initialize Vite project in the current directory.
2. Install `react-router-dom`.
3. Set up the directory structure (`src/components`, `src/pages`, `src/assets`).
4. Move `style.css` to `src/App.css` and `assets/*` to `public/assets`.
5. Implement the `Layout`, `Header`, and `Footer` components.
6. Convert `index.html` sections into React components/pages.
7. Convert `bahai-in-egypt.html` content into the History page.
8. Set up routing and test locally.
9. Configure GitHub Actions for deployment.
