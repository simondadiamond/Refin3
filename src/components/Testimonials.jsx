import React, { useState } from 'react';
import { Section, Container, Title, Subtitle, Card, Avatar } from '../styles/components';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const TestimonialsContainer = styled(Container)`
  // Remove max-width restriction to maintain original wide layout
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; // Hide grid view on mobile
  }
`

const CarouselContainer = styled.div`
  display: none;
  position: relative;
  width: 100%;
  max-width: 500px; // Limit width of carousel for better mobile experience
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.colors.darkGray};
  border: 1px solid ${props => props.theme.colors.neonCyan};
  color: ${props => props.theme.colors.neonCyan};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.neonCyan};
    color: ${props => props.theme.colors.darkGray};
    box-shadow: ${props => props.theme.colors.glowCyan};
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

const Quote = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const AuthorInfo = styled.div`
  h4 {
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.25rem;
  }
  
  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.7;
    font-size: 0.9rem;
  }
`

const testimonials = [
  {
    quote: "Techn9's AI automation has transformed our workflow efficiency. We've seen a 60% reduction in manual tasks since implementation.",
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
    quote: "The cost savings and efficiency gains have been remarkable. Techn9 has revolutionized how we handle our business processes.",
    author: "Emma Thompson",
    role: "CEO",
    company: "Digital Dynamics"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials">
      <TestimonialsContainer center>
        <Title>What Our Clients Say</Title>
        <Subtitle>
          Discover how businesses are transforming their operations with our AI automation solutions.
        </Subtitle>
        
        {/* Desktop Grid View */}
        <Grid>
          {testimonials.map((testimonial, index) => (
            <Card
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
            </Card>
          ))}
        </Grid>

        {/* Mobile Carousel View */}
        <CarouselContainer>
          <CarouselButton className="prev" onClick={prevTestimonial}>
            <RiArrowLeftSLine />
          </CarouselButton>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Quote>"{testimonials[currentIndex].quote}"</Quote>
                <Author>
                  <Avatar>
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <AuthorInfo>
                    <h4>{testimonials[currentIndex].author}</h4>
                    <p>{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
                  </AuthorInfo>
                </Author>
              </Card>
            </motion.div>
          </AnimatePresence>

          <CarouselButton className="next" onClick={nextTestimonial}>
            <RiArrowRightSLine />
          </CarouselButton>
        </CarouselContainer>
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;
