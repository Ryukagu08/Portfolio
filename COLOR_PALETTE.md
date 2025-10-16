# 🎨 Color Palette Reference

This document shows all available CSS custom properties (variables) for consistent theming across the portfolio.

## 🎯 How to Use

All colors are defined in `src/index.css` under the `:root` selector and can be used anywhere in your CSS files:

```css
/* Instead of hardcoded colors */
.my-element {
  background-color: #646cff; /* ❌ Don't do this */
}

/* Use CSS variables */
.my-element {
  background-color: var(--color-primary); /* ✅ Do this */
}
```

## 🎨 Primary Brand Colors

```css
--color-primary: #646cff;          /* Main brand color - buttons, links, accents */
--color-primary-dark: #535bf2;     /* Hover states, active elements */
--color-primary-light: #7c83ff;    /* Light variants, subtle accents */
```

**Usage Examples:**
- Primary buttons: `var(--color-primary)`
- Hover effects: `var(--color-primary-dark)`
- Subtle highlights: `var(--color-primary-light)`

## 🌙 Background Colors

```css
--color-bg-primary: #1a1a1a;       /* Main page background */
--color-bg-secondary: #242424;     /* Cards, modals, secondary sections */
--color-bg-tertiary: #333333;      /* Borders, dividers, subtle elements */
```

**Usage Examples:**
- Page background: `var(--color-bg-primary)`
- Card backgrounds: `var(--color-bg-secondary)`
- Border colors: `var(--color-bg-tertiary)`

## 📝 Text Colors

```css
--color-text-primary: #ffffff;     /* Main headings, important text */
--color-text-secondary: #cccccc;   /* Body text, descriptions */
--color-text-tertiary: #aaaaaa;    /* Muted text, labels, captions */
--color-text-quaternary: #888888;  /* Very subtle text, timestamps */
```

**Usage Examples:**
- Headings: `var(--color-text-primary)`
- Paragraph text: `var(--color-text-secondary)`
- Labels/captions: `var(--color-text-tertiary)`
- Subtle info: `var(--color-text-quaternary)`

## 🎯 Interactive States

```css
--color-hover: var(--color-primary-dark);   /* Hover state color */
--color-focus: var(--color-primary);        /* Focus state color */
--color-active: var(--color-primary-dark);  /* Active/pressed state */
```

**Usage Examples:**
```css
.button:hover {
  background-color: var(--color-hover);
}

.input:focus {
  border-color: var(--color-focus);
}
```

## 🚦 Status Colors

```css
--color-success: #22c55e;          /* Success messages, valid states */
--color-warning: #f59e0b;          /* Warning messages, caution */
--color-error: #ef4444;            /* Error messages, invalid states */
--color-info: var(--color-primary); /* Info messages, neutral alerts */
```

**Usage Examples:**
- Form validation: `var(--color-success)` or `var(--color-error)`
- Alert banners: `var(--color-warning)` or `var(--color-info)`

## 🌈 Gradients

```css
--gradient-primary: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
--gradient-background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
```

**Usage Examples:**
```css
.hero-section {
  background: var(--gradient-background);
}

.highlight-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🌫️ Shadow Colors

```css
--shadow-primary: rgba(100, 108, 255, 0.3);    /* Primary colored shadows */
--shadow-secondary: rgba(100, 108, 255, 0.2);  /* Lighter primary shadows */
--shadow-tertiary: rgba(100, 108, 255, 0.4);   /* Stronger primary shadows */
--shadow-dark: rgba(0, 0, 0, 0.1);             /* Neutral dark shadows */
```

**Usage Examples:**
```css
.card:hover {
  box-shadow: 0 5px 20px var(--shadow-primary);
}

.navbar {
  box-shadow: 0 2px 10px var(--shadow-dark);
}
```

## 🔲 Border Colors

```css
--color-border-primary: var(--color-bg-tertiary);     /* Standard borders */
--color-border-secondary: var(--color-primary);       /* Accent borders */
--color-border-tertiary: rgba(255, 255, 255, 0.1);   /* Subtle borders */
```

**Usage Examples:**
```css
.card {
  border: 1px solid var(--color-border-primary);
}

.input:focus {
  border-color: var(--color-border-secondary);
}
```

## 💡 Best Practices

### ✅ Do:
- Always use CSS variables for colors
- Use semantic naming (primary, secondary, etc.)
- Test color combinations for accessibility
- Use the predefined color hierarchy

### ❌ Don't:
- Hardcode hex values in component files
- Create new colors without adding them to the palette
- Use colors that don't fit the theme
- Override colors inline without reason

## 🎨 Customizing the Palette

To change the entire theme, edit the values in `src/index.css`:

```css
:root {
  /* Change primary color */
  --color-primary: #your-new-color;
  --color-primary-dark: #your-darker-shade;
  
  /* All components will automatically update! */
}
```

## 🔧 Adding New Colors

When adding new colors to the palette:

1. Add them to `:root` in `src/index.css`
2. Follow the naming convention: `--color-[category]-[variant]`
3. Update this documentation
4. Use semantic names, not descriptive ones

```css
/* ✅ Good - semantic */
--color-accent: #ff6b6b;
--color-accent-dark: #ff5252;

/* ❌ Bad - descriptive */
--color-red: #ff6b6b;
--color-light-red: #ff8a80;
```

---

This color system ensures consistency, maintainability, and easy theming across your entire portfolio! 🚀
