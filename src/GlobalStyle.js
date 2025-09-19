import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Import elegant fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  
  /* CSS Reset with elegant defaults */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.background} 0%,
      ${({ theme }) => theme.colors.backgroundLight} 50%,
      ${({ theme }) => theme.colors.background} 100%);
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.7;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  
  /* Elegant typography hierarchy */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
    letter-spacing: -0.025em;
    color: ${({ theme }) => theme.colors.text};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    font-weight: 700;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
  }
  
  /* Elegant link styles */
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.normal};
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accentLight};
      transform: translateY(-1px);
    }
  }
  
  /* Elegant button base styles */
  button {
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.accent};
      outline-offset: 2px;
    }
  }
  
  /* Smooth scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    
    &:hover {
      background: ${({ theme }) => theme.colors.accentLight};
    }
  }
  
  /* Selection styling */
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
  }
  
  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
  
  /* Elegant transitions for all interactive elements */
  * {
    transition: color ${({ theme }) => theme.transitions.fast},
                background-color ${({ theme }) => theme.transitions.fast},
                border-color ${({ theme }) => theme.transitions.fast},
                transform ${({ theme }) => theme.transitions.normal},
                box-shadow ${({ theme }) => theme.transitions.normal},
                opacity ${({ theme }) => theme.transitions.normal};
  }
  
  /* Elegant animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  /* Utility classes for animations */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }
`;
