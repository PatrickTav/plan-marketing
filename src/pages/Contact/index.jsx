import React from 'react'
import Arrow from "../../assets/Arrow.png"
import { Container_section } from './style'

const Contact = () => {

  const handleSubmit =(e) =>{
    e.preventDefault()
  }




  return (
    <Container_section>
      <div className="form-container">
        <span className="back">05.</span>
        <h2>/Contanto</h2>
        
        <form onSubmit={handleSubmit} >
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
            Mensagem:<br />
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

