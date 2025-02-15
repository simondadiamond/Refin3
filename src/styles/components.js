import styled from 'styled-components';
import { motion } from 'framer-motion';

// Common Components
export const Section = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.dark ? props.theme.colors.darkGray : props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: ${props => props.center ? 'center' : 'left'};
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, ${props => props.theme.colors.neonGreen} 45%, ${props => props.theme.colors.crimsonRed} 125%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: ${props => props.mb || '4rem'};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: ${props => props.secondary ? 'transparent' : props.theme.colors.neonGreen};
  color: ${props => props.secondary ? props.theme.colors.text : props.theme.colors.darkGray};
  border: ${props => props.secondary ? `2px solid ${props.theme.colors.neonGreen}` : 'none'};
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: ${props => props.secondary ? 'none' : '0 0 15px rgba(0, 255, 153, 0.3)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.secondary ? '0 0 15px rgba(0, 255, 153, 0.3)' : '0 0 20px rgba(0, 255, 153, 0.5)'};
    background: ${props => props.secondary ? props.theme.colors.neonGreen : props.theme.colors.neonGreen};
    color: ${props => props.theme.colors.darkGray};
  }
`

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: ${props => props.theme.colors.darkGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.center ? '0 auto 1.5rem' : '0 0 1.5rem'};
  font-size: 1.75rem;
  color: ${props => props.theme.colors.neonGreen};
  box-shadow: 0 0 15px rgba(0, 255, 153, 0.2);
`

export const Card = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.darkGray};
  border-radius: 1rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 255, 153, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 153, 0.1);
  }
`
