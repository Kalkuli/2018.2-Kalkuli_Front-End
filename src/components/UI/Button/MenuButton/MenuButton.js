import React from 'react'
import './MenuButton.scss'

const MenuButton = () => (
  <div>

  <div className='receiptplus scalehover' onClick={this.changeRotate} >
      <div className='receipt__plus' />
  </div>
  <div className='receipt__options'>
      <div style={{display: this.state.display ? 'none' : 'block'}}>
          <div className='receipt__options--newReceipt scalehover'>
              <div className='receipt__img__container'>
                  <div className='receipt__options__imgReceipt'/>
              </div>
          </div>
      </div>
      <div style={{display: this.state.display ? 'none' : 'block'}}>
          <div className='receipt__options--newReport scalehover'>
              <div className='receipt__img__container'>
                  <div className='receipt__options__imgReport'/>  
              </div>
          </div>
      </div>
      <div className='receipt__report__names'>
          <div style={{display: this.state.display ? 'none' : 'block'}}>
              <p>Nova Nota</p>
          </div>
          <div style={{display: this.state.display ? 'none' : 'block'}}>
              <p className='receipt__report__name--text'>Novo relatório</p>
          </div>
      </div>
    </div>
  </div>
)

export default MenuButton