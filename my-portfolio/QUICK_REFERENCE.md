# 🎯 Quick Reference Guide

## Project Structure Overview

### Components (`/src/components`)
- **Navbar.jsx** - Fixed navigation bar with smooth scroll
- **Footer.jsx** - Site footer with social links
- **ProjectCard.jsx** - Reusable card for displaying projects

### Pages (`/src/pages`)
- **Home.jsx** - Hero section with CTA buttons
- **About.jsx** - About me section with skills grid
- **Projects.jsx** - Projects showcase using ProjectCard
- **Contact.jsx** - Contact form and information

## Common Tasks

### 1. Updating Your Name
**File:** `src/pages/Home.jsx`
```jsx
<h1 className="home-title">
  Hi, I'm <span className="highlight">Your Name</span>
</h1>
```

### 2. Changing Navigation Logo
**File:** `src/components/Navbar.jsx`
```jsx
<div className="nav-logo">
  <h2>My Portfolio</h2>  {/* Change this */}
</div>
```

### 3. Adding a New Project
**File:** `src/pages/Projects.jsx`
```jsx
const projectsData = [
  {
    title: 'Your Project Name',
    description: 'Brief description...',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoLink: 'https://your-demo.com',
    codeLink: 'https://github.com/you/project'
  },
  // Add more projects here
];
```

### 4. Updating Skills
**File:** `src/pages/About.jsx`
```jsx
const skills = [
  'JavaScript', 'React', 'HTML/CSS', 'Node.js',
  // Add your skills here
];
```

### 5. Customizing Colors
**File:** Any CSS file (search for these values)
- Primary color: `#646cff`
- Dark background: `#1a1a1a`
- Card background: `#242424`
- Text colors: `#fff`, `#ccc`, `#aaa`

### 6. Connecting Contact Form to Backend
**File:** `src/pages/Contact.jsx`
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Replace with your backend API
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

### 7. Adding Social Media Links
**File:** `src/components/Footer.jsx`
```jsx
<div className="social-links">
  <a href="https://github.com/YOUR_USERNAME">GitHub</a>
  <a href="https://linkedin.com/in/YOUR_USERNAME">LinkedIn</a>
  <a href="https://twitter.com/YOUR_USERNAME">Twitter</a>
</div>
```

## Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Install new package
npm install package-name

# Deploy to Vercel
vercel
```

## File Naming Conventions

- Components: PascalCase (`Navbar.jsx`, `ProjectCard.jsx`)
- CSS files: Match component name (`Navbar.css`)
- Pages: PascalCase (`Home.jsx`, `About.jsx`)

## CSS Class Naming

- Use kebab-case: `project-card`, `nav-menu`, `home-title`
- BEM-style for related elements: `nav-item`, `nav-link`

## React Best Practices Used

✅ Functional components (no classes)
✅ Arrow functions for components
✅ Props destructuring in components
✅ Key props in lists (map)
✅ Separate CSS files per component
✅ Single responsibility per component

## Smooth Scrolling Implementation

Navigation uses JavaScript scroll instead of anchor links:

```jsx
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

Each section has an id: `id="home"`, `id="about"`, etc.

## Responsive Breakpoint

Mobile styles kick in at: `@media (max-width: 768px)`

## Browser Dev Tools

- **React DevTools** - Install browser extension for debugging
- Check component hierarchy and props
- View state changes in real-time

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Styles not updating
- Hard refresh: `Ctrl + Shift + R`
- Check if CSS file is imported
- Clear browser cache

## Next Steps to Consider

1. Add React Router for multi-page navigation
2. Implement a theme toggle (light/dark mode)
3. Add animations with Framer Motion
4. Include a blog section
5. Add Google Analytics
6. Optimize images (lazy loading)
7. Add a resume/CV download button
8. Include testimonials section
9. Add loading states
10. Implement SEO optimizations

---

Happy coding! 🚀
