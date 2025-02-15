import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiMailLine, RiMapPinLine } from 'react-icons/ri';

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #111827;
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 3rem;
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
  font-weight: 500;
  color: #374151;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4ade80;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4ade80;
  }
`

const Button = styled(motion.button)`
  padding: 1rem;
  background: #4ade80;
  color: white;
  border: none;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #22c55e;
  }
`

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
`

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #4ade80;
`

const ContactText = styled.div`
  h3 {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.95rem;
  }
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Section id="contact">
      <Container>
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
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Send Message
          </Button>
        </Form>

        <ContactInfo>
          <ContactItem>
            <IconWrapper>
              <RiMailLine />
            </IconWrapper>
            <ContactText>
              <h3>Email</h3>
              <p>contact@refin3.com</p>
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
      </Container>
    </Section>
  );
};

export default Contact;
