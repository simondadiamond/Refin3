import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  
  span {
    color: #1e40af;
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
  color: #1f2937;
  text-decoration: none;
  padding: 0.5rem;
  
  &:hover {
    color: var(--primary);
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        Refin<span>3</span>
      </Logo>
      <NavLinks>
        <NavLink 
          href="#services"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Services
        </NavLink>
        <NavLink 
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
