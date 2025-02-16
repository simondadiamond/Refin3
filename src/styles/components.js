import styled from 'styled-components';
import { motion } from 'framer-motion';

// Common Components
export const Section = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.dark ? props.theme.colors.background : props.theme.colors.cardBg};
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
    background: ${props => props.theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.mb || '4rem'};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

// Button Component
const ButtonBase = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${props => props.secondary ? 'transparent' : props.theme.colors.neonGreen};
  color: ${props => props.secondary ? props.theme.colors.text : props.theme.colors.background};
  border: ${props => props.secondary ? `2px solid ${props.theme.colors.primary}` : 'none'};
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: ${props => props.secondary ? 'none' : props.theme.colors.glowGreen};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.secondary ? props.theme.colors.glowBlue : props.theme.colors.glowGreen};
    background: ${props => props.secondary ? props.theme.colors.neonCyan : props.theme.colors.neonGreen};
		border: ${props => props.secondary ? `2px solid ${props.theme.colors.neonCyan}` : 'none'};
    color: ${props => props.theme.colors.background};
  }
`

export const Button = styled(ButtonBase).attrs(props => ({
  as: props.href ? 'a' : 'button',
}))``;

// Card Components
export const Card = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 1rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.borderColor};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.colors.glowBlue};
  }
`

// Form Components
export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`

export const Label = styled.label`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  text-align: left;
  display: block;
`

export const Input = styled.input`
  padding: 0.75rem;
  background: ${props => props.theme.colors.darkGray};
  border: 1px solid rgba(0, 231, 255, 0.2);
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${props => props.theme.colors.neonCyan};
    box-shadow: ${props => props.theme.colors.glowCyan};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0.5;
  }
`

export const TextArea = styled.textarea`
  padding: 0.75rem;
  background: ${props => props.theme.colors.darkGray};
  border: 1px solid rgba(0, 231, 255, 0.2);
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
  outline: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${props => props.theme.colors.neonCyan};
    box-shadow: ${props => props.theme.colors.glowCyan};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0.5;
  }
`

// Icon Components
export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: ${props => props.theme.colors.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.center ? '0 auto 1.5rem' : '0 0 1.5rem'};
  font-size: 1.75rem;
  color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.colors.glowBlue};
  border: 2px solid ${props => props.theme.colors.primary};
`

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  box-shadow: ${props => props.theme.colors.glowBlue};
`

// Footer Components
export const FooterSection = styled(Section)`
  background: ${props => props.theme.colors.darkGray};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 231, 255, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FooterLink = styled(motion.a)`
  color: ${props => props.theme.colors.primary};
  opacity: 0.8;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${props => props.theme.colors.neonCyan};
    opacity: 1;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.neonCyan};
    text-shadow: ${props => props.theme.colors.glowCyan};
  }
`

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BottomBar = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Copyright = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  font-size: 0.875rem;
`

export const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const LegalLink = styled.a`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.neonCyan};
    opacity: 1;
  }
`

// Contact Components
export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 231, 255, 0.1);
  flex-wrap: wrap;
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.text};
`

export const ContactIconWrapper = styled(IconWrapper)`
  width: auto;
  height: auto;
  background: none;
  border: none;
  box-shadow: none;
  margin: 0;
  color: ${props => props.theme.colors.primary};
`

export const ContactText = styled.div`
  h3 {
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.95rem;
    opacity: 0.8;
  }
`
