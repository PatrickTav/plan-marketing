import React from 'react'
import Arrow from "../../assets/Arrow.png"
import { Container_section } from './style'

const Contact = () => {
  return (
    <Container_section>
      <div className="form-container">
        <span className="back">05.</span>
        <h2>/Contanto</h2>
        <p>
          Gostou de saber mais sobre as inovações tecnológicas e também quer
          oferecer novas experiências aos seus clientes? Então entre em contato
          e marque um encontro real conosco para conversamos sobre as infinitas
          possibilidades do mundo virtual.
          
        </p>
        <form >
          <label>
            Nome:
            <input type="text" />
          </label>
          <label>
            E-mail:
            <input type="email" />
          </label>
          <label>
            Telefone:
            <input type="tel" />
          </label>
          <label>
            Mensagem:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button>Enviar <img src={Arrow} alt="" /></button>
        </form>
      </div>
      <div className="partnership_adress">000</div>
    </Container_section>
  )
}

export default Contact

