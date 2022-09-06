import { ContainerSidebar } from './style'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ContainerSidebar >
      <nav>
        <div className="list_links">
          <Link to="/">
            <span className="back">01.</span>
            <span>/QUEM SOMOS</span>
          </Link>
          <Link to="/">
            <span className="back">02.</span>
            <span>/O QUE FAZEMOS</span>
          </Link>
          <Link to="/">
            <span className="back">03.</span>
            <span>/PLAN NEWS</span>
          </Link>
          <Link to="/">
            <span className="back">04.</span>
            <span>/NOSSOS CLIENTES</span>
          </Link>
          <Link to="/">
            <span className="back">05.</span>
            <span>/CONTATO</span>
          </Link>
          <div className="container_nav-plus">
            <Link to="/">
              <span className="back">;)</span>
              <span>Que tal inovar com a gente? </span>
            </Link>
          </div>
        </div>
      </nav>
    </ContainerSidebar>
  )
}

export default Sidebar
