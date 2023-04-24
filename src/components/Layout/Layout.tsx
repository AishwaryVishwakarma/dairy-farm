import React from 'react'
import Footer from '../Footer/Footer'
interface EssentialProps {
  children: React.ReactNode
  footer?: boolean
}

const Layout: React.FC<EssentialProps> = ({ children, footer=true }) => {
  return (
    <>
      {children}
      {footer && <Footer />}
    </>
  )
}

export default Layout
