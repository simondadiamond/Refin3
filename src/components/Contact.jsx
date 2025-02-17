import React from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';
import { Section, Container, Title, Subtitle, Button, Form, FormRow, FormGroup, Label, Input, TextArea, ContactInfo, ContactItem, ContactIconWrapper, ContactText } from '../styles/components';
import styled from 'styled-components';

// Create a styled section specifically for Contact
const ContactSection = styled(Section)`
  background: ${({ theme }) => theme.isDark ? '#1A1F36' : theme.cardBg}; /* Conditional background */
  padding: 60px 0; /* Add vertical spacing */
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactSection id="contact">
      <Container center>
        <Title>Get in Touch</Title>
        <Subtitle>
          Ready to transform your business with AI automation? Contact us to learn more.
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
          <Button
            type="submit"
            style={{ margin: '0 auto', display: 'block' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </Button>
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
