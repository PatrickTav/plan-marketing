import { Container_section } from './style'

// icons
import Arrow from '../../assets/Arrow.png'
import Adress from '../../assets/adress.png'
import Ytube from '../../assets/youtube.png'
import Face from '../../assets/face.png'
import Insta from '../../assets/insta.png'

// logos

import Gplan from '../../assets/gplanM.png'
import PlanXp from '../../assets/planXp.png'
import Full from '../../assets/full.png'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container_section>
      <div className="form-container">
        <span className="back">05.</span>
        <h2>/Contanto</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Nome: <br />
            <input type="text" />
          </label>
          <div>
            <label>
              E-mail
              <input type="email" />
            </label>
            <label>
              Telefone:
              <input type="tel" />
            </label>
          </div>
          <label>
            Mensagem:
            <br />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button>
            Enviar <img src={Arrow} alt="arrow.png" />
          </button>
        </form>
      </div>
      <div className="partnership_adress">
        <div className="card">
          <h3>
            <span></span>Siga-nos
          </h3>
          <p>
            Fique sempre por dentro de todas as novidades da Plan XP e de todas
            empresas do Grupo Plan Marketing.
          </p>
          <div className="icons">
            <img src={Face} alt="facebook.png" />
            <img src={Insta} alt="instagram.png" />
            <img src={Ytube} alt="youtube.png" />
          </div>
        </div>
        <div className="card">
          <h3>
            <span>
              <img src={Adress} alt="adress.png" />
            </span>
            /RS
          </h3>
          <p>
            Rua Onze de Junho, 243 <br /> Novo Hamburgo / RS <br /> Brasil{' '}
            <br /> +55 51 98229.0400
          </p>
          <button>
            VER NO GOOGLE MAPS
            <img src={Arrow} alt="arrow.png" />
          </button>
        </div>
        <div className="card">
          <h3>
            <span>
              <img src={Adress} alt="adress.png" />
            </span>
            /SP
          </h3>
          <p>
            Rua Ibijaú, 355/Sala 1309 <br /> São Paulo / SP <br /> Brasil <br />
            +55 11 98871.8556
          </p>
          <button>
            VER NO GOOGLE MAPS
            <img src={Arrow} alt="arrow.png" />
          </button>
        </div>
        <div className="card">
          <img src={Gplan} alt="grupoPlanLogo.png" />
          <p>
            A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação
            completo.
          </p>
          <button>
            CONHEÇA
            <img src={Arrow} alt="arrow.png" />
          </button>
        </div>
        <div className="card">
          <img src={PlanXp} alt="planXpLogo.png" />
          <p>
            A Plan XP é especializada em realidade virtual, realidade aumentada
            e jogos.
          </p>
          <button>
            CONHEÇA
            <img src={Arrow} alt="arrow.png" />
          </button>
        </div>
        <div className="card">
          <img src={Full} alt="fullUpLogo.png" />
          <p>
            A FullUp é uma agência especializada em branding, design e
            campanhas.
          </p>
          <button>
            CONHEÇA
            <img src={Arrow} alt="arrow.png" />
          </button>
        </div>
      </div>
    </Container_section>
  )
}

export default Contact
