import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --neon-green: #00FF99;
    --crimson-red: #FF3B3F;
    --graphite-gray: #2E2E2E;
    --text: #FFFFFF;
    --background: #2E2E2E;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    color: var(--text);
    line-height: 1.5;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }

  a {
    color: var(--neon-green);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
    }
  }
`
