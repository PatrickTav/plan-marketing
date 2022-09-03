import { Navbar } from '../../components'
import { About, News, Contact } from '../../pages'

import { Container, Section } from './style'

const Home = () => {
    return (
        <Container>
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
