import React from 'react';
import { RiComputerLine, RiSettings4Line, RiTimeLine, RiBarChartLine } from 'react-icons/ri';
import { Section, Container, Title, Subtitle, Card, IconWrapper, Grid, ServiceTitle, Description } from '../styles/components';
import styled from 'styled-components';

// Create a styled section specifically for Services/Features
const ServicesSection = styled(Section)`
  background: ${({ theme }) => theme.isDark ? '#1A1F36' : theme.cardBg}; /* Conditional background */
`

const services = [
  {
    icon: <RiComputerLine />,
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge AI technology to automate complex business processes with precision and efficiency.'
  },
  {
    icon: <RiSettings4Line />,
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing tools and workflows, including Make.com and other popular platforms.'
  },
  {
    icon: <RiTimeLine />,
    title: 'Time-Saving Solutions',
    description: 'Reduce manual tasks and save countless hours with intelligent automation that works around the clock.'
  },
  {
    icon: <RiBarChartLine />,
    title: 'Cost-Effective',
    description: 'Minimize operational costs while maximizing productivity through smart, efficient automation solutions.'
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container center>
        <Title>Empower Your Business with AI</Title>
        <Subtitle>
          Discover how our AI-powered automation solutions can transform your business operations.
        </Subtitle>
        <Grid>
          {services.map((service, index) => (
            <Card
              key={index}
              center
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ background: '#2D2D3A', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} // Updated styles
            >
              <IconWrapper center>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <Description>{service.description}</Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
