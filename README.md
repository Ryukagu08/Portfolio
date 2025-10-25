# 🚀 Roberto Ghita - Portfolio

A modern, responsive personal portfolio website showcasing web development projects and skills. Built with React and Vite, featuring a clean single-page design with smooth scrolling navigation and a professional dark theme.

**Live Site:** [https://ryukagu.vercel.app](https://ryukagu.vercel.app)

## 📋 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Fixed navigation with glassmorphism
│   │   ├── Navbar.css
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Footer.css
│   │   ├── ProjectCard.jsx  # Reusable project card
│   │   └── ProjectCard.css
│   ├── pages/               # Main page sections
│   │   ├── Home.jsx         # Hero section with CTA
│   │   ├── Home.css
│   │   ├── About.jsx        # Bio and skills grid
│   │   ├── About.css
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   └── Contact.css
│   ├── data/
│   │   └── skills.jsx       # Centralized skills data with SVG icons
│   ├── assets/
│   │   └── LogoSilver.webp  # Profile logo
│   ├── App.jsx              # Main layout component
│   ├── App.css              # Global app styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global CSS with design system
├── public/
│   └── vite.svg             # Favicon
├── index.html               # HTML template with meta tags
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies and scripts
```

## 🛠️ Tech Stack

- **React 19.1.1** - Modern UI library with functional components
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **EmailJS** - Contact form email service integration
- **Pure CSS** - Custom styling with CSS variables (no frameworks)
- **JavaScript** - ES6+ features, no TypeScript
- **Vercel** - Deployment platform

## ✨ Features

### Design System
- 🎨 **Professional Dark Theme** - Purple accent color (`#8951ff`)
- 🎯 **CSS Variables** - Centralized theming system for easy customization
- 📱 **Fully Responsive** - Mobile-first design, breakpoint at 768px
- ✨ **Glassmorphism Effects** - Modern UI with backdrop blur on navbar
- 🎭 **Custom Scrollbar** - Styled to match the theme
- 🌈 **Smooth Animations** - Hover effects, transitions, and scroll behavior

### Components & Sections
- 🧭 **Fixed Navigation** - Smooth scroll to sections, 65% width centered layout
- 🏠 **Hero Section** - Introduction with call-to-action buttons
- 👤 **About Section** - Bio with skills grid featuring 9 technologies (HTML/CSS, JavaScript, React, Node.js, Python, C#, Docker, Git, Firebase)
- 💼 **Projects Showcase** - 3 featured projects with technology tags and live demo links
- 📧 **Contact Form** - Fully functional with EmailJS integration, loading states, and validation
- 🔗 **Footer** - Copyright and social media links

### Technical Features
- ⚡ **Single Page Application** - No routing, all sections on one page
- 🔄 **Smooth Scrolling** - JavaScript-powered navigation
- 📦 **Component-Based Architecture** - Reusable, maintainable components
- 🎪 **SVG Icon Integration** - Custom skill icons embedded in JSX
- 🔌 **Environment Variables** - Secure EmailJS configuration
- 🚀 **Optimized Performance** - Vite bundling and code splitting

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ryukagu08/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```
This generates a `dist/` folder ready for deployment.

### Preview Production Build

Test the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📦 Deployment

This project is configured for Vercel deployment with automatic builds on push.

### Vercel (Recommended)
1. Push your code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Deploy automatically

**Current deployment:** [https://ryukagu.vercel.app](https://ryukagu.vercel.app)

### Manual Deployment
```bash
npm install -g vercel
vercel
```

## 🎨 Customization Guide

### Updating Personal Information

**Home Section** (`src/pages/Home.jsx`)
- Update name, tagline, and introduction text
- Modify CTA button text and scroll targets

**About Section** (`src/pages/About.jsx`)
- Edit biography paragraphs
- Skills are imported from `src/data/skills.jsx`

**Projects Section** (`src/pages/Projects.jsx`)
- Modify the `projectsData` array:
```jsx
const projectsData = [
  {
    title: 'Project Name',
    description: 'Brief description...',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoLink: 'https://demo-url.com',
    codeLink: 'https://github.com/username/repo' // Optional
  }
];
```

**Contact Section** (`src/pages/Contact.jsx`)
- Update email address and location
- EmailJS configuration uses environment variables

**Footer** (`src/components/Footer.jsx`)
- Update social media links (GitHub, LinkedIn, Twitter)

### Design System Customization

All colors are defined as CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #8951ff;         /* Main purple accent */
  --color-bg-primary: #0a0a1a;      /* Deep dark background */
  --color-bg-secondary: #121224;    /* Cards and sections */
  --color-text-primary: #ffffff;    /* Main text */
  /* ... more variables */
}
```

Modify these variables to change the entire theme instantly.

## 📧 Contact Form Setup

The contact form uses EmailJS. To set up your own:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Set environment variables (create `.env` file):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

## 🌐 Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

## 🏗️ Architecture Decisions

- **No Routing**: Single-page design with smooth scroll navigation
- **Component Scoping**: Each component has its own CSS file
- **Functional Components**: Modern React hooks, no class components
- **Props Destructuring**: Clean component APIs
- **Centralized Data**: Skills and projects defined in data files
- **CSS Variables**: Consistent theming across all components

## 📄 License

MIT License - Feel free to use this project as a template for your own portfolio.

## 🤝 Author

**Roberto Ghita (Ryu)**
- Portfolio: [https://ryukagu.vercel.app](https://ryukagu.vercel.app)
- Email: ryu.businesscontact@gmail.com
- GitHub: [@Ryukagu08](https://github.com/Ryukagu08)

---

Built with ❤️ using React + Vite | *"Probably Over-Engineering It"*
