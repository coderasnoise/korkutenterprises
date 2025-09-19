// src/theme.js
export const theme = {
    colors: {
        // Elegant dark palette with sophisticated gradients
        primary: '#0A0A0A',           // Deep charcoal
        secondary: '#1A1A1A',         // Rich dark gray
        accent: '#2D4A5B',            // Sophisticated blue-gray
        accentLight: '#4A6B7A',       // Lighter accent
        background: '#0F0F0F',        // Pure dark background
        backgroundLight: '#1C1C1C',   // Slightly lighter sections
        backgroundCard: '#262626',    // Card backgrounds
        text: '#FAFAFA',              // Pure white text
        textSecondary: '#B8B8B8',     // Muted text
        textMuted: '#888888',         // Very muted text
        border: '#333333',            // Subtle borders
        borderLight: '#444444',       // Lighter borders
        
        // Gradient colors for sophisticated effects
        gradientStart: '#0A0A0A',
        gradientMid: '#1A2F3A',
        gradientEnd: '#2D4A5B',
        
        // Glass morphism colors
        glassBackground: 'rgba(255, 255, 255, 0.05)',
        glassBorder: 'rgba(255, 255, 255, 0.1)',
        
        // Hover and interaction states
        hover: 'rgba(255, 255, 255, 0.08)',
        active: 'rgba(255, 255, 255, 0.12)',
    },
    
    fonts: {
        main: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        heading: '"Playfair Display", "Georgia Pro", Georgia, serif',
        mono: '"JetBrains Mono", "SF Mono", Consolas, monospace'
    },
    
    fontSizes: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
    },
    
    spacing: {
        xs: '0.5rem',      // 8px
        sm: '0.75rem',     // 12px
        md: '1rem',        // 16px
        lg: '1.5rem',      // 24px
        xl: '2rem',        // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
        '4xl': '6rem',     // 96px
    },
    
    shadows: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.4)',
        md: '0 4px 12px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.4)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.5)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    
    borderRadius: {
        sm: '0.375rem',    // 6px
        md: '0.5rem',      // 8px
        lg: '0.75rem',     // 12px
        xl: '1rem',        // 16px
        '2xl': '1.5rem',   // 24px
        full: '9999px',
    },
    
    transitions: {
        fast: '0.15s ease',
        normal: '0.3s ease',
        slow: '0.5s ease',
        bounce: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: '0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    }
};
