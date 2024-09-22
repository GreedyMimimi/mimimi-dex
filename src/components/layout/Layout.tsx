import type { ReactNode } from 'react'
import { Box, Container } from '@mui/material'
import Navbar from '@/components/layout/Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box>{children}</Box>
      </Container>
    </>
  )
}

export default Layout
