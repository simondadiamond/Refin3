import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';

const FooterSection = styled.footer`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  color: #111827;
  margin-bottom: 0.5rem;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Link = styled(motion.a)`
  color: #4b5563;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  
  &:hover {
    color: #4ade80;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled(motion.a)`
  color: #4b5563;
  font-size: 1.5rem;
  
  &:hover {
    color: #4ade80;
  }
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const NewsletterInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 2rem;
  font-size: 1rem;
  outline: none;
  width: 100%;
  
  &:focus {
    border-color: #4ade80;
  }
`

const NewsletterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: #4ade80;
  color: white;
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  
  &:hover {
    background: #22c55e;
  }
`

const BottomBar = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Copyright = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

const LegalLink = styled.a`
  color: #6b7280;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: #4ade80;
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <Container>
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
          <p style={{ color: '#6b7280' }}>
            Subscribe to our newsletter for the latest AI automation trends, industry insights, and updates on cutting-edge workflow solutions.
          </p>
          <NewsletterForm>
            <NewsletterInput 
              type="email" 
              placeholder="Enter your email"
              aria-label="Email Address"
            />
            <NewsletterButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              Sign Up
            </NewsletterButton>
          </NewsletterForm>
        </Column>
      </Container>
      
      <BottomBar>
        <Copyright>© 2024 Refin3. All rights reserved.</Copyright>
        <LegalLinks>
          <LegalLink href="/terms">Terms & Conditions</LegalLink>
          <LegalLink href="/privacy">Privacy Policy</LegalLink>
        </LegalLinks>
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;
