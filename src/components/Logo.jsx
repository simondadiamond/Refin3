import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LogoWrapper = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neonGreen};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
  
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
`

const Logo = () => {
  return (
    <LogoWrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Techn<span>9</span>
    </LogoWrapper>
  )
}

export default Logo
