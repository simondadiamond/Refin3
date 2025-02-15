import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiRobot2Fill, RiFlowChart, RiBarChartFill } from 'react-icons/ri';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f8fafc;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const Service = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Icon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`

const Description = styled.p`
  color: #64748b;
  line-height: 1.6;
`

const services = [
  {
    icon: <RiRobot2Fill />,
    title: 'AI Workflow Automation',
    description: 'Automate repetitive tasks and streamline your business processes with advanced AI solutions.'
  },
  {
    icon: <RiFlowChart />,
    title: 'Process Optimization',
    description: 'Analyze and optimize your workflows for maximum efficiency and cost reduction.'
  },
  {
    icon: <RiBarChartFill />,
    title: 'Performance Analytics',
    description: 'Get detailed insights and analytics to measure and improve your automation results.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Section id="services">
      <Container ref={ref}>
        <Title>Our Services</Title>
        <Grid>
          {services.map((service, index) => (
            <Service
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Icon>{service.icon}</Icon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <Description>{service.description}</Description>
            </Service>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
