import { Link } from 'react-router-dom'
import { Container_section } from './style'

import L11 from '../../assets/Layer 11.png'
import L12 from '../../assets/Layer14.png'
import L13 from '../../assets/Layer 19.png'
import L14 from '../../assets/Layer 10.png'
import L15 from '../../assets/Layer 13.png'
import Arrow from '../../assets/Arrow.png'

import { Card } from '../../components/'

const News = () => {
  return (
    <Container_section>
      <div className="section_content">
        <span className='back'>03.</span>
        <p>/Plan news</p>
        <div className='title'>
          <h2>/Cases Games</h2>
          <Link to="">
            <p>
              CLIQUE AQUI PARA VER TODO O BLOG <img src={Arrow} alt="arrow.png" />{' '}
            </p>
          </Link>
        </div> 
      </div>

      <div className="container_cards">
        <Card
          img={L11}
          span="SKA"
          h2="Plan cria o novo site da SKA"
          p="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
        <Card
          img={L12}
          span="TINTAS KILLING"
          h2="Plan cria o novo site para a Tintas Killing"
          p="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
        <Card
          img={L13}
          span="CARGO BR"
          h2="Estamos desenvolvendo o novo site da CargoBR"
          p="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
        <Card
          img={L14}
          span="XALINGO"
          h2="Clubinho Xalingo com novidades"
          p="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
        <Card
          img={L15}
          span="AROMATIC"
          h2="Novo site da Aromatic no ar"
          p="Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum..."
        />
      </div>
    </Container_section>
  )
}

export default News
