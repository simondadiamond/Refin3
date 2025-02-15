import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f9fafb;
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
  letter-spacing: -0.02em;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: left;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`

const Quote = styled.p`
  font-size: 1.1rem;
  color: #374151;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`

const AuthorInfo = styled.div`
  h4 {
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: #6b7280;
    font-size: 0.9rem;
  }
`

const testimonials = [
  {
    quote: "Refin3's AI automation has transformed our workflow efficiency. We've seen a 60% reduction in manual tasks since implementation.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "TechFlow Solutions"
  },
  {
    quote: "The seamless integration with our existing tools made the transition smooth. Our team productivity has increased significantly.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "InnovateX"
  },
  {
    quote: "The cost savings and efficiency gains have been remarkable. Refin3 has revolutionized how we handle our business processes.",
    author: "Emma Thompson",
    role: "CEO",
    company: "Digital Dynamics"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <Title>What Our Clients Say</Title>
        <Subtitle>
          Discover how businesses are transforming their operations with our AI automation solutions.
        </Subtitle>
        <Grid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote>"{testimonial.quote}"</Quote>
              <Author>
                <Avatar>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Testimonials;
