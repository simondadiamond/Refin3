import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LogoWrapper = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  
  span {
    color: white;
  }
`

const Logo = () => {
  return (
    <LogoWrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Refin<span>3</span>
    </LogoWrapper>
  )
}

export default Logo
