import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  color: white;
  text-align: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
`

const Content = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 1;
`

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  opacity: 0.9;
`

const Button = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #2563eb, #3b82f6);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: linear-gradient(to right, #1d4ed8, #2563eb);
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Business with AI Automation
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Streamline workflows, reduce costs, and boost efficiency with our cutting-edge AI solutions
        </Subtitle>
        <Button
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </Button>
      </Content>
    </HeroSection>
  );
};

export default Hero;
