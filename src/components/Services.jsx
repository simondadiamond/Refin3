import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiComputerLine, RiSettings4Line, RiTimeLine, RiBarChartLine } from 'react-icons/ri';

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const ServiceCard = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: #ecfdf5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  color: #4ade80;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: #6b7280;
  line-height: 1.6;
`

const Services = () => {
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

  return (
    <Section id="services">
      <Container>
        <Title>Empower Your Business with AI</Title>
        <Subtitle>
          Discover how our AI-powered automation solutions can transform your business operations.
        </Subtitle>
        <Grid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <Description>{service.description}</Description>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
