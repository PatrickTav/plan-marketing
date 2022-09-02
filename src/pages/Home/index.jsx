import { Navbar } from '../../components'
import { About, News } from '../../pages'

import { Container, Section } from './style'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Section>
        <About />
      </Section>
      <Section>
        <News/>
      </Section>
      
    </Container>
  )
}

export default Home
