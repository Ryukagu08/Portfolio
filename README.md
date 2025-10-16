# 🚀 Personal Portfolio - React + Vite

A modern, responsive personal portfolio website built with React and Vite. Features a clean single-page design with smooth scrolling navigation.

## 📋 Project Structure

```
my-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCard.css
│   ├── pages/               # Main sections
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx              # Main layout
│   ├── App.css
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html
└── package.json
```

## 🛠️ Tech Stack

- **React** - UI library (functional components)
- **Vite** - Build tool & dev server
- **Plain CSS** - Styling (no frameworks)
- **JavaScript** - No TypeScript

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server with hot module replacement:

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

## 📦 Deployment (Vercel)

### Option 1: Deploy via GitHub
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Click Deploy

### Option 2: Deploy via CLI
```bash
npm install -g vercel
vercel
```

### Build Settings (auto-configured)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## ✨ Features

- **Responsive Design** - Works on all devices
- **Smooth Scrolling** - Anchor-based navigation
- **Modern UI** - Clean, professional design
- **Component-Based** - Reusable React components
- **Easy to Customize** - Well-organized file structure
- **Fast Performance** - Optimized with Vite

## 🎨 Customization

### Update Personal Information

1. **Home Section** (`src/pages/Home.jsx`)
   - Change your name in the title
   - Update subtitle and description

2. **About Section** (`src/pages/About.jsx`)
   - Edit the about text
   - Update skills array

3. **Projects Section** (`src/pages/Projects.jsx`)
   - Modify `projectsData` array with your projects
   - Add project images if needed

4. **Contact Section** (`src/pages/Contact.jsx`)
   - Update email and location
   - Connect form to backend service (optional)

5. **Footer** (`src/components/Footer.jsx`)
   - Update social media links

### Styling

Each component has its own CSS file for easy styling adjustments:
- Colors, fonts, spacing can be modified in component CSS files
- Global styles are in `src/index.css`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

---

Built with ❤️ using React + Vite

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
