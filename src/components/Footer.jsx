import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';
import { Section, Container } from '../styles/components';

const FooterSection = styled(Section)`
  background: ${props => props.theme.colors.darkGray};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 255, 153, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Link = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${props => props.theme.colors.neonGreen};
    opacity: 1;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.neonGreen};
  font-size: 1.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.text};
  }
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(0, 255, 153, 0.2);
  border-radius: 2rem;
  font-size: 1rem;
  outline: none;
  color: ${props => props.theme.colors.text};
  
  &:focus {
    border-color: ${props => props.theme.colors.neonGreen};
    box-shadow: 0 0 10px rgba(0, 255, 153, 0.1);
  }
`

const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.neonGreen};
  color: ${props => props.theme.colors.darkGray};
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
  }
`

const BottomBar = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const Copyright = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  font-size: 0.875rem;
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

const LegalLink = styled.a`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.neonGreen};
    opacity: 1;
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Grid>
          <Column>
            <Title>Keep Exploring</Title>
            <LinkList>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#blog">Blog</Link></li>
            </LinkList>
          </Column>
          
          <Column>
            <Title>Connect</Title>
            <LinkList>
              <li><Link href="#contact">Contact Us</Link></li>
            </LinkList>
            <SocialLinks>
              <SocialLink 
                href="https://instagram.com"
                target="_blank"
                whileHover={{ y: -2 }}
              >
                <RiMailLine />
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ y: -2 }}
              >
                <RiMapPinLine />
              </SocialLink>
            </SocialLinks>
          </Column>
          
          <Column>
            <Title>Stay in the Know</Title>
            <p style={{ color: 'white', opacity: 0.8 }}>
              Subscribe to our newsletter for the latest AI automation trends and updates.
            </p>
            <NewsletterForm>
              <Input 
                type="email" 
                placeholder="Enter your email"
                aria-label="Email Address"
              />
              <Button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
              >
                Sign Up
              </Button>
            </NewsletterForm>
          </Column>
        </Grid>
        
        <BottomBar>
          <Copyright>© 2024 Techn9. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink href="/terms">Terms & Conditions</LegalLink>
            <LegalLink href="/privacy">Privacy Policy</LegalLink>
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterSection>
  );
};

export default Footer;
