
import { Link } from 'react-router-dom'
import { Container_section } from './style'

import L11 from '../../assets/Layer 11.png'
import L12 from '../../assets/Layer14.png'
import L13 from '../../assets/Layer 19.png'
import L14 from '../../assets/Layer 10.png'
import L15 from '../../assets/Layer 13.png'
import { Cards } from '../../components/Card/style'



const News = () => {
  return (
    <Container_section>
      <div className="section_content">
        <span>03.</span>
        <p>/Plan news</p>
        <h2>/Cases Games</h2>
        <Link to="">
          <p>
            CLIQUE AQUI PARA VER TODO O BLOG <span>/</span>{' '}
          </p>
        </Link>
      </div>

      <div className="container_cards">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/> 
      </div>
    </Container_section>
  )
}

export default News
