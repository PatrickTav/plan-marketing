import React from 'react'
import { Container_section } from './style'
import Photo1 from '../../assets/layer 20.png'
import Photo2 from '../../assets/layer 21.png'
import Photo3 from '../../assets/layer 22.png'
import Joystick from '../../assets/joystick.png'

const About = () => {
  return (
    <Container_section>
      <div className="text-content">
        <span className="back">02.</span>
        <p>/O que fazemos</p>
        <h2>/Games</h2>
        <p>Desenvolvimento de games digitais.</p>
        <p className="sinopse">
          Empresa especialista em deselvolvimento de games digitais e
          gamificação.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          ultricies sollicitudin. Cras vehicula congue odio, quis lobortis leo
          gravida non. In ornare erat tortor, mattis sodales leo efficitur at.
          In hac habitasse platea dictumst. Quisque ante tortor, egestas a lorem
          a, tempor lacinia nisi.
        </p>
      </div>
      <div className="card_container">
        <div className="card_content">
          <div>
            <div className='photo'>
              <img src={Photo1} alt="" />
            </div>
          </div>
          <p>
            A <span>PlanXP</span> tem uma equipe qualificada para o{' '}
            <span>desenvolvimento de jogos digitais</span> para{' '}
            <span>dispositivos móveis</span> (smartphones, tablets e afins).{' '}
          </p>
        </div>
        <div className="card_content">
          <img src={Photo2} alt="" />
          <p>
            Desenvolvemos games para anunciar seus produtos e serviços, através
            da <span>gamificação</span> (aplicações que utilizam dinâmicas de
            jogos para engajamento de usuários, resolução de problemas e
            melhoria no aprendizado).
          </p>
        </div>
        <div className="card_content">
          <img src={Photo3} alt="" />
          <p>
            Utilizando as últimas tecnologias para a
            <span> criação de games</span>, trabalhamos de acordo com as
            necessidades dos clientes, sempre buscando oferecer o resultado que
            ele busca.
          </p>
        </div>
        <div className="plus">
          <img src={Joystick} alt="" />
          <p>
            Experimente inovar com a <span>PlanXP</span> para{' '}
            <span>desenvolver os seus jogos digitais!</span>
          </p>
        </div>
      </div>
    </Container_section>
  )
}

export default About
