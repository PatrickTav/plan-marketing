import {ContainerHeader} from './style'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <ContainerHeader>
      <div className='logo'>
        <img src={Logo} alt="logo.png" />
      </div>

      <div className='menu'>
        X
      </div>
    </ContainerHeader>
  )
}

export default Header