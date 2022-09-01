import React from 'react'
import { Continer_section } from './style'
import Photo1 from '../../assets/layer 20.png'
import Photo2 from '../../assets/layer 21.png'
import Photo3 from '../../assets/layer 22.png'
import Joystick from '../../assets/joystick.png'

const About = () => {
  return (
    <Continer_section>
      <div>
        <span>02.</span>
        <p>/O que fazemos</p>
        <h2>/Games</h2>
        <p>Desenvolvimento de games digitais.</p>
        <p>
          Empresa especialista em deselvolvimento de games digitais e
          gamificação.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          ultricies sollicitudin. Cras vehicula congue odio, quis lobortis leo
          gravida non. In ornare erat tortor, mattis sodales leo efficitur at.
          In hac habitasse platea dictumst. Quisque ante tortor, egestas a lorem
          a, tempor lacinia nisi.
        </p>
      </div>
      <div className="card_content">
        <div>
          <div className='container_photo'>
            <img src={Photo1} alt="" />
          </div>
          <p>
            A PlanXP tem uma equipe qualificada para o desenvolvimento de jogos
            digitais para dispositivos móveis (smartphones, tablets e afins).{' '}
          </p>
        </div>
        <div>
          <img src={Photo2} alt="" />
          <p>
            Desenvolvemos games para anunciar seus produtos e serviços, através
            da gamificação (aplicações que utilizam dinâmicas de jogos para
            engajamento de usuários, resolução de problemas e melhoria no
            aprendizado).
          </p>
        </div>
        <div>
          <img src={Photo3} alt="" />
          <p>
            Utilizando as últimas tecnologias para a criação de games,
            trabalhamos de acordo com as necessidades dos clientes, sempre
            buscando oferecer o resultado que ele busca.
          </p>
        </div>
        <div>
          <img src={Joystick} alt="" />
          <p>
            Experimente inovar com a PlanXP para desenvolver os seus jogos
            digitais!
          </p>
        </div>
      </div>
    </Continer_section>
  )
}

export default About
