import { useState } from 'react'

import { ContainerHeader } from './style'
import Logo from '../../assets/logo.png'


const Header = ({onclick}) => {

 

  return (
    <ContainerHeader>
      <div className="logo">
        <img src={Logo} alt="logo.png" />
      </div>

      <div onClick={onclick} className="menu">
        X
      </div>
    </ContainerHeader>
  )
}

export default Header
