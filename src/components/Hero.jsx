import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, Title, Subtitle, Button } from '../styles/components';

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 255, 153, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Automate Your Business<br />with <span>AI-Powered</span><br />Workflows
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your business operations with cutting-edge AI automation. Save time, reduce costs, and scale efficiently with Techn9.
        </Subtitle>
        <ButtonGroup>
          <Button
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started →
          </Button>
          <Button
            href="#services"
            secondary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </Button>
        </ButtonGroup>
      </Container>
    </HeroSection>
  );
};

export default Hero;
