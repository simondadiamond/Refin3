import React from 'react';
import { RiComputerLine, RiSettings4Line, RiTimeLine, RiBarChartLine } from 'react-icons/ri';
import { Section, Container, Title, Subtitle, Card, IconWrapper } from '../styles/components';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
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
    <Section id="services">
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
            >
              <IconWrapper center>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <Description>{service.description}</Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
