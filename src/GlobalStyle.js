import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.main};
    }
    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
    }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.6;
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;
