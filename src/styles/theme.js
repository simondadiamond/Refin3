const theme = {
  light: {
    // Primary Colors
    primary: '#007BFF', // Electric Blue
    background: '#F5F5F5', // Clean Neutral Background
    cardBg: '#FFFFFF', // White for cards
    darkGray: '#2E2E2E',
    isDark: false,

    // Accent Colors
    neonGreen: '#00CC66', // Cyber Green
    neonCyan: '#00E7FF', // Neon Cyan

    // Text Colors
    text: '#333333', // Dark text for readability
    textSecondary: '#555555', // Lighter text for secondary content

    // Additional UI Colors
    borderColor: 'rgba(0, 204, 102, 0.2)',

    // Gradient Definitions
    gradientPrimary: 'linear-gradient(135deg, #00CC66 0%, #00E7FF 100%)',

    // Glow Effects
    glowGreen: '0 0 15px rgba(0, 204, 102, 0.3)',
    glowCyan: '0 0 15px rgba(0, 231, 255, 0.3)',
    glowBlue: '0 0 15px rgba(0, 123, 255, 0.3)'
  },
  dark: {
    // Primary Colors
    primary: '#007BFF', // Electric Blue
    background: '#1A1F36', // Midnight Navy
    cardBg: '#2D2D3A', // Slightly lighter dark shade for cards
    darkGray: '#2E2E2E',
    isDark: true,

    // Accent Colors
    neonGreen: '#00FF99', // Cyber Green
    neonCyan: '#00E7FF', // Neon Cyan

    // Text Colors
    text: '#F0F0F0', // Near-white for text
    textSecondary: '#FFFFFF', // White for secondary text

    // Additional UI Colors
    borderColor: 'rgba(0, 255, 153, 0.2)',

    // Gradient Definitions
    gradientPrimary: 'linear-gradient(135deg, #00FF99 0%, #00E7FF 100%)',

    // Glow Effects
    glowGreen: '0 0 15px rgba(0, 255, 153, 0.3)',
    glowCyan: '0 0 15px rgba(0, 231, 255, 0.3)',
    glowBlue: '0 0 15px rgba(0, 123, 255, 0.3)'
  }
};

export default theme;
