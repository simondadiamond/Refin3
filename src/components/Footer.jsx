import React from 'react';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';
import { 
  FooterSection,
  Container,
  Grid,
  Column,
  FooterTitle,
  LinkList,
  FooterLink,
  SocialLinks,
  SocialLink,
  NewsletterForm,
  Input,
  Button,
  BottomBar,
  Copyright,
  LegalLinks,
  LegalLink
} from '../styles/components';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FooterSection>
      <Container>
        <Grid>
          <Column>
            <FooterTitle>Keep Exploring</FooterTitle>
            <LinkList>
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="#about">About</FooterLink></li>
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#blog">Blog</FooterLink></li>
            </LinkList>
          </Column>
          
          <Column>
            <FooterTitle>Connect</FooterTitle>
            <LinkList>
              <li><FooterLink href="#contact">Contact Us</FooterLink></li>
            </LinkList>
            <SocialLinks>
              <SocialLink 
                href="mailto:contact@techn9.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiMailLine />
              </SocialLink>
              <SocialLink 
                href="https://maps.google.com"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiMapPinLine />
              </SocialLink>
            </SocialLinks>
          </Column>
          
          <Column>
            <FooterTitle>Stay in the Know</FooterTitle>
            <p style={{ color: 'white', opacity: 0.8 }}>
              Subscribe to our newsletter for the latest AI automation trends and updates.
            </p>
            <NewsletterForm onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="Enter your email"
                aria-label="Email Address"
              />
              <Button
                type="submit"
								secondary
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
