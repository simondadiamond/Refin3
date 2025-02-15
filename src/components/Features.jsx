import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiRobot2Line, RiTimeLine, RiLineChartLine } from 'react-icons/ri'

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.lightGray};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const Feature = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Icon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`

const features = [
  {
    icon: <RiRobot2Line />,
    title: 'AI-Powered Automation',
    description: 'Leverage advanced AI algorithms to automate repetitive tasks and workflows.'
  },
  {
    icon: <RiTimeLine />,
    title: 'Time Savings',
    description: 'Reduce manual work hours by up to 80% with intelligent process automation.'
  },
  {
    icon: <RiLineChartLine />,
    title: 'Enhanced Efficiency',
    description: 'Optimize business operations with data-driven insights and automated decision-making.'
  }
]

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <Section>
      <Container ref={ref}>
        <Grid>
          {features.map((feature, index) => (
            <Feature
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Icon>{feature.icon}</Icon>
              <Title>{feature.title}</Title>
              <Description>{feature.description}</Description>
            </Feature>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Features
