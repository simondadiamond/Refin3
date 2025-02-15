import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 2rem;
  border-radius: 8px;
  position: relative;
`

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
`

const Author = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const Company = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 0.9rem;
`

const testimonials = [
  {
    quote: "Refin3's AI automation solutions have transformed our workflow. We've seen a 60% increase in productivity.",
    author: "Sarah Johnson",
    company: "Tech Innovators Inc."
  },
  {
    quote: "The implementation was seamless, and the results were immediate. Highly recommended for any business looking to scale.",
    author: "Michael Chen",
    company: "Global Solutions Ltd."
  },
  {
    quote: "Outstanding results! Our team can now focus on strategic tasks while AI handles the routine operations.",
    author: "Emma Williams",
    company: "Future Dynamics"
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <Section>
      <Container ref={ref}>
        <Grid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Quote>"{testimonial.quote}"</Quote>
              <Author>{testimonial.author}</Author>
              <Company>{testimonial.company}</Company>
            </TestimonialCard>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Testimonials
