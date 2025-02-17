import React, { useState } from 'react';
    import { Section, Container, Title, Subtitle, Card, Avatar, Quote, Author, AuthorInfo } from '../styles/components';
    import styled from 'styled-components';
    import { motion, AnimatePresence } from 'framer-motion';
    import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

    // Create a styled section specifically for Testimonials
    const TestimonialsSection = styled(Section)`
      background: ${({ theme }) => theme.isDark ? '#1A1F36' : theme.cardBg}; /* Conditional background */
    `;

    const TestimonialsContainer = styled(Container)`
      // Remove max-width restriction to maintain original wide layout
    `;

    const CarouselContainer = styled.div`
      display: none;
      position: relative;
      width: 100%;
      max-width: 500px; // Limit width of carousel for better mobile experience
      margin: 0 auto;
      padding: 0 1rem;

      @media (max-width: 768px) {
        display: block; // Show carousel on mobile
      }
    `;

    const CarouselButton = styled.button`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: ${({ theme }) => theme.darkGray};
      border: 1px solid ${({ theme }) => theme.neonCyan};
      color: ${({ theme }) => theme.neonCyan};
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
        background: ${({ theme }) => theme.neonCyan};
        color: ${({ theme }) => theme.darkGray};
        box-shadow: ${({ theme }) => theme.glowCyan};
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
    `;

    const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;

      @media (max-width: 768px) {
        display: none; // Hide grid on mobile
      }
    `;

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
        <TestimonialsSection id="testimonials">
          <TestimonialsContainer center>
            <Title>What Our Clients Say</Title>
            <Subtitle>
              Discover how businesses are transforming their operations with our AI automation solutions.
            </Subtitle>
            
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
                  <Card style={{ background: '#2D2D3A', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
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

            {/* Desktop Grid View */}
            <Grid>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ background: '#2D2D3A', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} // Updated styles
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
          </TestimonialsContainer>
        </TestimonialsSection>
      );
    };

    export default Testimonials;
