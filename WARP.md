# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
npm start
```
Starts the development server at http://localhost:3000 with hot reloading enabled.

### Testing
```bash
npm test
```
Runs tests in interactive watch mode using Jest and React Testing Library.

```bash
npm test -- --coverage
```
Run tests with coverage report.

```bash
npm test -- --watchAll=false
```
Run tests once without watch mode (useful for CI).

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Deployment
```bash
npm run deploy
```
Builds and deploys the application to GitHub Pages (configured for https://codeasnoise.github.io/korkutenterprises).

### Dependency Management
```bash
npm install
```
Install all dependencies.

```bash
npm audit
```
Check for security vulnerabilities in dependencies.

## Project Architecture

This is a React 19 single-page application built with Create React App, featuring a multi-sector business website with Turkish content.

### Key Technology Stack
- **React 19.1.1** with React Router DOM for routing
- **Styled Components 6.1.19** for CSS-in-JS styling with theming
- **React Helmet** for SEO and meta tag management
- **React Icons** for consistent iconography
- **Testing Library** suite for component testing

### Application Structure

#### Theme System (`src/theme.js` + `src/GlobalStyle.js`)
- Centralized theme configuration with dark color scheme
- Global styles applied via `ThemeProvider` wrapper in `src/index.js`
- Colors: Dark theme with black/gray backgrounds and light text
- Typography: Helvetica Neue for body, Montserrat for headings

#### Routing Architecture (`src/App.js`)
- **Layout**: Fixed Header + dynamic main content + Footer
- **Routes**:
  - `/` - HomePage (sector cards grid)
  - `/sector/:id` - SectorPage (dynamic sector details)
  - `/contact` - ContactPage
- Router wraps the entire application with persistent Header/Footer

#### Data Management (`src/data/sectorData.js`)
- Static data structure for 4 business sectors (Technology, Health, Education, Finance)
- Each sector has: `id`, `name`, `description`, `imageUrl`
- Used by both HomePage (grid display) and SectorPage (detail view)

#### Component Architecture

**Layout Components:**
- `Header.js`: Responsive navigation with hamburger menu, gradient background, mobile-first design
- `Footer.js`: Three-column layout (company info, contact details, social media)

**Page Components:**
- `HomePage.js`: Hero section + responsive card grid linking to sectors
- `SectorPage.js`: Hero banner + content section, uses URL params for sector ID
- `ContactPage.js`: Contact form and information

### Key Architectural Patterns

1. **Styled Components with Theme**: All styling uses styled-components with consistent theme access
2. **Mobile-First Responsive Design**: Components include responsive breakpoints (768px)
3. **Component-Based Architecture**: Clear separation between layout, pages, and data
4. **SEO Optimization**: React Helmet used for dynamic page titles and meta tags
5. **Route-Based Code Organization**: Pages handle routing logic, components handle UI

### Development Guidelines

- **Styling**: Use styled-components with theme variables, follow mobile-first responsive approach
- **Routing**: New pages should be added to both `/pages` directory and `App.js` routes
- **Data**: Static data lives in `/data` directory, follow existing data structure patterns
- **Components**: Keep layout components (Header/Footer) separate from page-specific components
- **Testing**: Component tests use React Testing Library, located alongside components with `.test.js` suffix

### Public Assets
- Images for sectors should be placed in `public/images/` directory
- Static assets are served from `public/` folder
- Favicon and PWA assets already configured in `public/`

### Deployment Configuration
- Configured for GitHub Pages deployment via `gh-pages` package
- Homepage URL set to GitHub Pages URL in package.json
- Build files are deployed from the `build/` directory