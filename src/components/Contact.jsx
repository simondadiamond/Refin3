import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';
import { Section, Container, Title, Subtitle, Button as BaseButton } from '../styles/components';

const ContactSection = styled(Section)`
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

const ContactContainer = styled(Container)`
  max-width: 600px; // More focused width for better form UX
`

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`

const Input = styled.input`
  padding: 0.75rem;
  background: ${props => props.theme.colors.darkGray};
  border: 1px solid rgba(0, 255, 153, 0.2);
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${props => props.theme.colors.neonGreen};
    box-shadow: 0 0 10px rgba(0, 255, 153, 0.1);
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  background: ${props => props.theme.colors.darkGray};
  border: 1px solid rgba(0, 255, 153, 0.2);
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
  outline: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${props => props.theme.colors.neonGreen};
    box-shadow: 0 0 10px rgba(0, 255, 153, 0.1);
  }
`

const SubmitButton = styled(BaseButton)`
  width: auto; // Allow button to size to content
  padding: 1rem 3rem; // Wider padding for better button proportions
  margin: 0 auto; // Center the button
  display: block; // Ensure margin auto works
  font-size: 1rem; // Consistent font size
  letter-spacing: 0.5px; // Improve text readability
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 255, 153, 0.1);
  flex-wrap: wrap;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.text};
`

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.neonGreen};
`

const ContactText = styled.div`
  h3 {
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.95rem;
    opacity: 0.8;
  }
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactSection id="contact">
      <ContactContainer center>
        <Title>Get Started Today</Title>
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
          <SubmitButton
            as={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Send Message
          </SubmitButton>
        </Form>

        <ContactInfo>
          <ContactItem>
            <IconWrapper>
              <RiMailLine />
            </IconWrapper>
            <ContactText>
              <h3>Email</h3>
              <p>contact@techn9.com</p>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <RiMapPinLine />
            </IconWrapper>
            <ContactText>
              <h3>Location</h3>
              <p>Quebec City, QC</p>
            </ContactText>
          </ContactItem>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
