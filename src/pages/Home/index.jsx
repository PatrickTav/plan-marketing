import { Navbar } from '../../components'
import { About } from '../../pages'

import { Container, Section } from './style'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Section>
        <About />
      </Section>
    </Container>
  )
}

export default Home
