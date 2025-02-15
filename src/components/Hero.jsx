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
  text-align: center;
  background: white;
`

const Content = styled.div`
  max-width: 1000px;
  position: relative;
  z-index: 1;
`

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111827;

  span {
    color: var(--accent);
    display: inline;
  }
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  margin-bottom: 3rem;
  color: #6b7280;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--accent);
  color: white;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: #22c55e;
  }
`

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: #f3f4f6;
  color: #111827;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: #e5e7eb;
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
          Automate Your Business<br />with <span>AI-Powered</span><br />Workflows
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your business operations with cutting-edge AI automation. Save time, reduce costs, and scale efficiently with Refin3.
        </Subtitle>
        <ButtonGroup>
          <PrimaryButton
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started →
          </PrimaryButton>
          <SecondaryButton
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </SecondaryButton>
        </ButtonGroup>
      </Content>
    </HeroSection>
  );
};

export default Hero;
