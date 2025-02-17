import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiMoonLine, RiSunLine } from 'react-icons/ri'; // Importing the icons

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 2rem; /* Reduced padding for a less thick navbar */
  background: rgba(46, 46, 46, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff; 
  text-shadow: ${({ theme }) => theme.glowCyan};
  
  span {
    color: #00CC66; /* Fixed color for the "9" */
    text-shadow: ${({ theme }) => theme.glowCyan};
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const NavLink = styled(motion.a)`
  font-weight: 500;
  color: ${({ theme, isDarkMode }) => isDarkMode ? theme.text : 'white'}; /* Set color based on theme */
  text-decoration: none;
  padding: 0.5rem;
  font-size: 0.95rem;
  
  &:hover {
    color: ${({ theme }) => theme.neonCyan};
    text-shadow: ${({ theme }) => theme.glowCyan};
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: white; /* Set color to white for both modes */
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.neonCyan};
  }
`

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <Nav>
      <Logo>
        Techn<span>9</span>
      </Logo>
      <NavLinks>
        <NavLink 
          href="#services"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          isDarkMode={isDarkMode} // Pass the isDarkMode prop
        >
          Services
        </NavLink>
        <NavLink 
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          isDarkMode={isDarkMode} // Pass the isDarkMode prop
        >
          Contact
        </NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <RiSunLine /> : <RiMoonLine />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
