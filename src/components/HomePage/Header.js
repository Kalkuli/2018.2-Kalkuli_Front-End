import React from 'react'
import Particles from 'react-particles-js'
const mediumDevice = window.matchMedia('(min-width: 1000px) and (max-width: 1300px)').matches
const smallDevice = window.matchMedia('(max-width: 999px)').matches

let valueParticles = smallDevice ? 10 : (mediumDevice ? 55 : 140)
const particlesObj = {
  particles: {
    number: {
      value: valueParticles
    },
  }
}

const Header = () => (
  <section className="header">
    <Particles params={particlesObj} />
    <div className="header__container">
      <h1 className="header__container__h1">De Notas para Dados</h1>
      <div className="header__container__bar"></div>
      <p className="header__container__p">Automatize seu controle financeiro a partir de imagens de suas Notas Fiscais</p>
    </div>
  </section>
)

export default Header