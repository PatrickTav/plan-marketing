

import { Cards } from './style'

const Card = ({img,span, h2, p}) => {
  return (
    <Cards>
     <div className="image">
            <img src={img} alt="" />
          </div>
          <span>{span}</span>
          <h2>{h2}</h2>
          <p>
            {p}
          </p>
          <Link to="/">SAIBA MAIS</Link>
    </Cards>
  )
}

export default Card