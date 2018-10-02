import React,{Fragment} from 'react'
import './about.scss'
import './call.scss'
import './footer.scss'

const HomePage = () => {
  return (
      <div>
      <Fragment>
        <h1>Homepage</h1>
      </Fragment>
      <section>
        Header
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
      <section>
        Features 
      </section>
      <div className='footer__img'></div>
      <footer>
        <p>Copyright © 2018 | Kalkuli</p> 
      </footer>

    </div>
  )
}

export default HomePage