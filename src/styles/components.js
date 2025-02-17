import styled from 'styled-components';
    import { motion } from 'framer-motion';

    // Common Components
    export const Section = styled.section`
      padding: 6rem 2rem;
      background: ${({ theme }) => theme.isDark ? theme.background : theme.cardBg};
      color: ${({ theme }) => theme.text};
    `;

    export const Container = styled.div`
      max-width: 1200px;
      margin: 0 auto;
      text-align: ${({ center }) => center ? 'center' : 'left'};
    `;

    export const Title = styled.h2`
      font-size: 3rem;
      font-weight: 800;
      color: ${({ theme }) => theme.text};
      margin: 40px 0; /* Added vertical spacing */
      letter-spacing: -0.02em;

      span {
        background: ${({ theme }) => theme.gradientPrimary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline;
      }
    `;

    export const Subtitle = styled.p`
      font-size: 1.2rem;
      color: ${({ theme }) => theme.textSecondary};
      margin-bottom: 40px; /* Added vertical spacing */
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    `;

    // Button Component
    const ButtonBase = styled(motion.button)`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      background: ${({ theme, secondary }) => secondary ? 'transparent' : theme.neonGreen};
      color: ${({ theme, secondary }) => secondary ? theme.text : theme.background};
      border: ${({ theme, secondary }) => secondary ? `2px solid ${theme.primary}` : 'none'};
      border-radius: 2rem;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: ${({ theme, secondary }) => secondary ? 'none' : theme.glowGreen};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme, secondary }) => secondary ? theme.glowBlue : theme.glowGreen};
        background: ${({ theme, secondary }) => secondary ? theme.neonCyan : theme.neonGreen};
        border: ${({ theme, secondary }) => secondary ? `2px solid ${theme.neonCyan}` : 'none'};
        color: ${({ theme }) => theme.background};
      }
    `;

		export const ButtonDarkBg = styled(ButtonBase)`
 		background-color: transparent;
 		color: ${({ theme }) => theme.textwhite};
		`;

    export const Button = styled(ButtonBase).attrs(props => ({
      as: props.href ? 'a' : 'button',
    }))``;

    // Card Components
    export const Card = styled(motion.div)`
      padding: 2rem;
      background: ${({ theme }) => theme.isDark ? theme.cardBg : theme.background + ' !important'}; /* Updated to use theme.background in light mode with !important */
      border-radius: 1rem;
      text-align: ${({ center }) => center ? 'center' : 'left'};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
      border: 1px solid ${({ theme }) => theme.borderColor};
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: ${({ theme }) => theme.glowBlue};
      }
    `;

    // Icon Components
    export const IconWrapper = styled.div`
      width: 64px;
      height: 64px;
      background: ${({ theme }) => theme.background};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${({ center }) => center ? '0 auto 1.5rem' : '0 0 1.5rem'};
      font-size: 1.75rem;
      color: ${({ theme }) => theme.primary};
      box-shadow: ${({ theme }) => theme.glowBlue};
      border: 2px solid ${({ theme }) => theme.primary};
    `;

    export const Avatar = styled.div`
      width: 48px;
      height: 48px;
      min-width: 48px;
      border-radius: 50%;
      background: ${({ theme }) => theme.background};
      border: 2px solid ${({ theme }) => theme.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.primary};
      font-weight: 600;
      box-shadow: ${({ theme }) => theme.glowBlue};
    `;

    // Additional styles for Testimonials and Services
    export const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    `;

    export const ServiceTitle = styled.h3`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.text};
      margin-bottom: 1rem;
    `;

    export const Description = styled.p`
      color: ${({ theme }) => theme.text};
      opacity: 0.8;
      line-height: 1.6;
    `;

    export const Quote = styled.p`
      font-size: 1.1rem;
      color: ${({ theme }) => theme.text};
      opacity: 0.9;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    `;

    export const Author = styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;
    `;

    export const AuthorInfo = styled.div`
      h4 {
        font-weight: 700;
        color: ${({ theme }) => theme.text};
        margin-bottom: 0.25rem;
      }

      p {
        color: ${({ theme }) => theme.text};
        opacity: 0.7;
        font-size: 0.9rem;
      }
    `;

    // Contact Components
    export const ContactInfo = styled.div`
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(0, 231, 255, 0.1);
      flex-wrap: wrap;
    `;

    export const ContactItem = styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${({ theme }) => theme.text};
    `;

    export const ContactIconWrapper = styled(IconWrapper)`
      width: auto;
      height: auto;
      background: none;
      border: none;
      box-shadow: none;
      margin: 0;
      color: ${({ theme }) => theme.primary};
    `;

    export const ContactText = styled.div`
      h3 {
        font-weight: 700;
        color: ${({ theme }) => theme.text};
        margin-bottom: 0.25rem;
      }
      p {
        font-size: 0.95rem;
        opacity: 0.8;
      }
    `;

    // Form Components
    export const Form = styled.form`
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    `;

    export const FormRow = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    `;

    export const FormGroup = styled.div`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: left;
    `;

    export const Label = styled.label`
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      text-align: left;
      display: block;
    `;

    export const Input = styled.input`
      padding: 0.75rem;
      background: ${({ theme }) => theme.inputbg};
      border: 1px solid #CCCCCC; /* Subtle border */
      border-radius: 0.5rem;
      font-size: 1rem;
      outline: none;
      color: ${({ theme }) => theme.text};
      transition: all 0.2s ease;

      &:focus {
        border-color: #00FF99; /* Accent color on focus */
        box-shadow: 0 0 5px rgba(0, 255, 153, 0.5); /* Subtle glow on focus */
      }

      &::placeholder {
        color: ${({ theme }) => theme.textSecondary};
        opacity: 0.5;
      }
    `;

    export const TextArea = styled.textarea`
      padding: 0.75rem;
      background: ${({ theme }) => theme.inputbg};
      border: 1px solid #CCCCCC; /* Subtle border */
      border-radius: 0.5rem;
      font-size: 1rem;
      min-height: 150px;
      outline: none;
      color: ${({ theme }) => theme.text};
      transition: all 0.2s ease;

      &:focus {
        border-color: #00FF99; /* Accent color on focus */
        box-shadow: 0 0 5px rgba(0, 255, 153, 0.5); /* Subtle glow on focus */
      }

      &::placeholder {
        color: ${({ theme }) => theme.textSecondary};
        opacity: 0.5;
      }
    `;

    // BottomBar Component
    export const BottomBar = styled.div`
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    `;

    // Column Component
    export const Column = styled.div`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    `;

    // Copyright Component
    export const Copyright = styled.p`
      color: ${({ theme }) => theme.textwhite};
      opacity: 0.8;
      font-size: 0.875rem;
    `;

    // FooterLink Component
    export const FooterLink = styled(motion.a)`
      color: ${({ theme }) => theme.primary};
      opacity: 0.8;
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;

      &:hover {
        color: ${({ theme }) => theme.neonCyan};
        opacity: 1;
      }
    `;

    // FooterSection Component
    export const FooterSection = styled(Section)`
      background: ${({ theme }) => theme.darkGray};
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
    `;

    // FooterTitle Component
    export const FooterTitle = styled.h3`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.textwhite};
      margin-bottom: 0.5rem;
    `;

    // LegalLink Component
    export const LegalLink = styled(motion.a)`
      color: ${({ theme }) => theme.textwhite};
      opacity: 0.8;
      font-size: 0.875rem;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.neonCyan};
        opacity: 1;
      }
    `;

    // LegalLinks Component
    export const LegalLinks = styled.div`
      display: flex;
      gap: 1.5rem;
    `;

    // LinkList Component
    export const LinkList = styled.ul`
      list-style: none;
      padding: 0;
      margin: 0;
    `;

    // NewsletterForm Component
    export const NewsletterForm = styled.form`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `;

    // SocialLink Component
    export const SocialLink = styled(motion.a)`
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.neonCyan};
        text-shadow: ${({ theme }) => theme.glowCyan};
      }
    `;

    // SocialLinks Component
    export const SocialLinks = styled.div`
      display: flex;
      gap: 1rem;
    `;