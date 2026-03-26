# Konstantin Plakhotin — Portfolio

Personal portfolio website showcasing digital transformation expertise, project management experience, and professional achievements.

🔗 **Live:** [plaxotin.github.io/konstantin-portfolio](https://plaxotin.github.io/konstantin-portfolio/)

## Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **Build Tool**: Vite 7
- **UI Components**: Radix UI / shadcn-style
- **Hosting**: GitHub Pages

## Project Structure

```
├── index.html          # Main HTML entry point with SEO meta tags
├── src/                # Source code
│   ├── components/     # Reusable React components
│   │   ├── ui/         # UI primitives (shadcn/ui)
│   │   ├── Navigation.tsx
│   │   ├── PageOverlay.tsx
│   │   └── AnimatedButton.tsx
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
│   ├── images/         # Portfolio and asset images
│   └── 404.html        # SPA routing fallback
├── .github/workflows/  # GitHub Actions deployment
├── DEVELOPMENT_PLAN.md # Future development roadmap
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/Plaxotin/konstantin-portfolio.git
cd konstantin-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Deployment

The site automatically deploys to GitHub Pages on every push to `main` branch via GitHub Actions.

### Workflow Steps

1. Checkout code
2. Setup Node.js 20 with npm cache
3. Install dependencies (`npm ci`)
4. Build production bundle (`npm run build`)
5. Deploy `dist/` folder to GitHub Pages

### Manual Deployment

1. Make changes to the source code
2. Test locally with `npm run dev`
3. Build and verify with `npm run build && npm run preview`
4. Commit and push to `main` branch
5. GitHub Actions will automatically deploy

## Development Plan

See [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) for the complete roadmap including:

- ✅ ~~Immediate fixes and quick wins~~ (Completed)
- ✅ ~~Source code reconstruction~~ (Completed)
- Feature enhancements (In Progress)
- Performance optimization
- CI/CD improvements

## Features

- **Hero Section**: Full-viewport animated introduction with parallax effects
- **About Section**: Professional biography with animated statistics
- **Services Section**: Key competencies and expertise areas
- **Portfolio**: Project showcases with detailed case studies
- **Testimonials**: Client feedback carousel
- **CTA Section**: Call-to-action with contact options
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Open Graph, Twitter Cards, canonical URLs

## License

All rights reserved © Konstantin Plakhotin
