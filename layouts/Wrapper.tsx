import React from 'react'
import HeaderOne from './headers/HeaderOne'
import FooterOne from './footers/FooterOne'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <HeaderOne />
      <main>{children}</main>
      <FooterOne />
    </>
  )
}

export default Wrapper

