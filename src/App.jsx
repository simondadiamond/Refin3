import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials'; // Importing Testimonials
import Contact from './components/Contact'; // Importing Contact
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Services />
      <Testimonials /> {/* Adding Testimonials Section */}
      <Contact /> {/* Adding Contact Section */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
