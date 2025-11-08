# Qubox Styles

This folder contains all the CSS styles for the Qubox website, organized in a modular structure for better maintainability and scalability.

## 📁 File Structure

```
src/styles/
├── index.css          # Main styles import file
├── base.css           # Base styles, CSS variables, and common utilities
├── Header.css         # Header component styles
├── Hero.css           # Hero section styles
├── Services.css       # Services section and carousel styles
├── Footer.css         # Footer component styles
└── README.md          # This documentation file
```

## 🎨 Style Organization

### Base Styles (`base.css`)
- CSS variables for consistent theming
- Global reset and base styles
- Common utility classes
- Typography definitions
- Animation keyframes

### Component Styles
Each component has its own dedicated CSS file:
- **Header.css** - Navigation and header styling
- **Hero.css** - Hero section with glassmorphism effects
- **Services.css** - Service cards and carousel functionality
- **Footer.css** - Footer layout and social links

## 🚀 Benefits of Modular Structure

1. **Maintainability** - Easy to locate and modify component-specific styles
2. **Scalability** - Simple to add new components without affecting existing styles
3. **Performance** - Only load styles for components that are used
4. **Collaboration** - Multiple developers can work on different components
5. **Debugging** - Easier to identify and fix style issues

## 📝 Usage

Each component imports its own styles:

```tsx
import React from 'react';
import '../styles/ComponentName.css';

const ComponentName = () => {
  // Component logic
};
```

## 🎯 CSS Variables

All components use consistent CSS variables defined in `base.css`:

- `--accent-color`: #D9006C (Magenta)
- `--text-color`: #FFFFFF (White)
- `--subtle-text`: #A9A9A9 (Light Gray)
- `--background-color`: #000000 (Pure Black)
- `--card-background`: rgba(255, 255, 255, 0.05)
- `--card-border`: rgba(255, 255, 255, 0.1)

## 🔧 Adding New Components

1. Create a new CSS file in the `styles` folder
2. Import the styles in your component
3. Add the import to `index.css` if needed
4. Follow the existing naming conventions

## 📱 Responsive Design

All component styles include responsive breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

