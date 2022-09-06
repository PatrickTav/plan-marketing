import { Navbar, Header, Sidebar } from '../../components'
import { About, News, Contact } from '../../pages'
import { useState } from 'react'
import { Container, Section } from './style'

const Home = () => {
  const [toogleSidebar, settoogleSidebar] = useState(false)

  const handleCloseNavbar = () => {
    !toogleSidebar ? settoogleSidebar(true): settoogleSidebar(false)
  }

  
  
  
  return (
    <Container>
      <Header onclick={handleCloseNavbar} />
      {toogleSidebar && <Sidebar />}
      <Navbar />
      <Section>
        <About />
      </Section>
      <Section>
        <News />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Container>
  )
}

export default Home
