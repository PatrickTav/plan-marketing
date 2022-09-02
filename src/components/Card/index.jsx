import { Cards } from './style'
import { Link } from 'react-router-dom'
import Arrow from "../../assets/Arrow.png"

const Card = ({ img, span, h2, p }) => {
  return (
    <Cards>
      <div className="image">
        <img src={img} alt="image-card.png" />
      </div>
      <div className='text_content'>
        <span>{span}</span>
        <h2>{h2}</h2>
        <p>{p}</p>
        <Link to="/">SAIBA MAIS <img src={Arrow} alt="Arrow.png" /></Link>
      </div>
    </Cards>
  )
}

export default Card
