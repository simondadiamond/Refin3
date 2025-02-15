import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2563eb;
    --secondary: #1e40af;
    --text: #1f2937;
    --background: #ffffff;
    --accent: #4ade80;
    --font-family: 'Inter', sans-serif; /* Modern font */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    color: var(--text);
    line-height: 1.6;
    background: var(--background);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
