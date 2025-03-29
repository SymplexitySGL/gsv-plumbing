# GSV Plumbing Website

A modern, responsive website for GSV Plumbing built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with responsive layouts for all devices
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Responsive Images**: Optimized image loading with Next.js Image component
- **Contact Form**: Interactive contact form with validation
- **Google Maps Integration**: Location map for easy navigation

## Pages

- **Home**: Showcase of services, testimonials, and recent projects
- **About**: Company history, values, and team information
- **Services**: Detailed information about plumbing services offered
- **Contact**: Contact form and location information
- **Blog**: Articles and updates (coming soon)

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SymplexitySGL/gsv-plumbing.git
   cd gsv-plumbing
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
gsv-plumbing/
├── app/                  # Next.js App Router
│   ├── components/       # Reusable UI components
│   │   ├── home/         # Home page components
│   │   ├── about/        # About page components
│   │   ├── layout/       # Layout components (Header, Footer)
│   ├── styles/           # Global styles and variables
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── services/         # Services page
│   ├── page.tsx          # Home page
│   └── layout.tsx        # Root layout
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
└── package.json          # Project dependencies
```

## Deployment

This site is configured for easy deployment on Vercel or any other Next.js-compatible hosting platform.

## License

This project is licensed under the MIT License - see the LICENSE file for details.