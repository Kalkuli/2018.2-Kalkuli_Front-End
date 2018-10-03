import React,{Fragment} from 'react'
import './header.scss'
import './about.scss'
import './call.scss'
import './features.scss'
import './footer.scss'

const HomePage = () => {
  return (
    <Fragment>

      <section className="header">
        <div className="header__container">
          <h1 className="header__container__h1">De Notas para Dados</h1>
          <div className="header__container__bar"></div>
          <p className="header__container__p">Automatize seu controle financeiro a partir de imagens de suas Notas Fiscais</p>
        </div>
      </section>
      <section className="about">
        <div className='about__img'></div>
        <div className='about__text'>
          <h1>Quem somos</h1>
          <p>O Kalkuli é uma aplicação que tem o intuito de facilitar o gerenciamento de notas fiscais. 
            Nossa meta é ajudar micro e pequenas empresas a fazer o controle de tributos fiscais de maneira rápida e prática.</p>
        </div>
      </section>
      <section className='call'>
        <p className='call__p--first'>Rápido entendimento fiscal</p>
        <div className='call__bar'></div>
        <p>Melhores relatórios geram melhores gestões</p>
        <div className='call__button'>Cadastre sua empresa</div>
      </section>
      <section className="feature">
        <h1 className="feature__h1">Como o Kalkuli pode te ajudar?</h1>
        <div className="feature__container">
          <div className="feature__container__element">
            <img className=""/>
            <p></p>
          </div>
          <div className="feature__container__element">
            <img className=""/>
            <p></p>
          </div>
          <div className="feature__container__element">
            <img className=""/>
            <p></p>
          </div>
          <div className="feature__container__element">
            <img className=""/>
            <p></p>
          </div>
        </div>
      </section>
      <div className='footer__img'></div>
      <footer>
        <p>Copyright © 2018 | Kalkuli</p> 
      </footer>
    </Fragment>
  )
}

export default HomePage