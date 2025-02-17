import React from 'react';
    import { motion } from 'framer-motion';
    import { RiMailLine, RiMapPinLine } from 'react-icons/ri';
    import { Section, Container, Title, Subtitle, Button, Form, FormRow, FormGroup, Label, Input, TextArea, ContactInfo, ContactItem, ContactIconWrapper, ContactText } from '../styles/components';
    import styled from 'styled-components';

    // Create a styled section specifically for Contact
    const ContactSection = styled(Section)`
		  background: ${({ theme }) => theme.isDark ? theme.background : theme.cardBg}; /* Conditional background */
		  padding: 60px 20px; /* Default padding for mobile */
		
		  @media (min-width: 768px) {
		    padding: 60px 160px; /* Increased horizontal padding for desktop */
		  }
		`;

    const StyledButton = styled(Button)`
      width: auto; /* Set width to auto for appropriate sizing */
      padding: 12px 24px; /* Add padding for better touch target */
      margin: 20px auto; /* Center the button with margin */
      display: block; /* Ensure it behaves as a block element for centering */
    `;

    const Contact = () => {
      const handleSubmit = (e) => {
        e.preventDefault();
      };

      return (
        <ContactSection id="contact">
          <Container center>
            <Title>Get in Touch</Title>
            <Subtitle>
              We’d love to hear about your project or answer any questions.
            </Subtitle>

            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label>Name</Label>
                  <Input type="text" placeholder="Your name" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <Label>Message</Label>
                <TextArea placeholder="How can we help you?" />
              </FormGroup>
              <StyledButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </StyledButton>
            </Form>

            <ContactInfo>
              <ContactItem>
                <ContactIconWrapper>
                  <RiMailLine />
                </ContactIconWrapper>
                <ContactText>
                  <h3>Email</h3>
                  <p>contact@techn9.com</p>
                </ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIconWrapper>
                  <RiMapPinLine />
                </ContactIconWrapper>
                <ContactText>
                  <h3>Location</h3>
                  <p>Quebec City, QC</p>
                </ContactText>
              </ContactItem>
            </ContactInfo>
          </Container>
        </ContactSection>
      );
    };

    export default Contact;
