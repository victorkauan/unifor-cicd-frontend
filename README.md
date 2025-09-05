# UNIFOR - CI/CD (Front-end)

A React + TypeScript web application for product management, designed to work with the UNIFOR CI/CD backend API. Includes a modern UI, dashboard, and CI/CD workflow.

## Features
- Product listing and status display
- Dashboard with statistics
- Responsive design using Tailwind CSS
- API integration with backend
- CI/CD workflow for main and develop branches
- TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
npm install
```

### Running the Application
```bash
npm run dev
```
The app runs on `http://localhost:5173` by default (Vite).

### Project Structure
```
src/
  App.tsx
  main.tsx
  components/
    header/
    subheading/
    table/
  pages/
    home/
  services/
    find-all-products.service.ts
  helpers/
    index.ts
  @types/
public/
  vite.svg
index.html
vite.config.ts
```

### API Integration
- Connects to the backend API for product data and dashboard stats.
- Update API URLs in `src/services/` as needed.

### Testing
- Add tests as needed (e.g., with Vitest or Jest).

## CI/CD
- GitHub Actions workflow runs build and tests on `main` and `develop` branches.
