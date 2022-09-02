import React from 'react'
import { Link } from 'react-router-dom'
import { SideBar } from '../Navbar/style'
import Logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <> 
      <SideBar>
        <div className="container_nav">
          <Link className='logo' to="/">
            <img src={Logo} alt="/" />
          </Link>

          <div className="list_links">
            <Link to="/">
              <span className="back">01.</span>
              <span >/QUEM SOMOS</span>
            </Link>
            <Link to="/">
              <span className="back">02.</span>
              <span>/O QUE FAZEMOS</span>
            </Link>
            <Link to="/#news">
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
                <span>Que tal inovar com a gente?</span>
              </Link>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  )
}

export default Navbar
