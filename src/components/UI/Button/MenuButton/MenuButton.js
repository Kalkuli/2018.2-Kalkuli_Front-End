import React from 'react'
import './MenuButton.scss'

const MenuButton = (props) => (
  <div>
    <div className='receiptplus scalehover' onClick={props.onClickRotate} >
        <div className='receipt__plus'
        style={{transform: props.rotate ? 'rotate(45deg)' : 'rotate(0)'}}/>
    </div>
    <div className='receipt__options'>
      <div style={{display: props.display ? 'none' : 'block'}} onClick={props.onNewReceiptHandler}>
          <div className='receipt__options--newReceipt scalehover'>
              <div className='receipt__img__container'>
                  <div className='receipt__options__imgReceipt'/>
              </div>
          </div>
      </div>
      <div style={{display: props.display ? 'none' : 'block'}} onClick={props.onNewReportHandler}>
          <div className='receipt__options--newReport scalehover'>
              <div className='receipt__img__container'>
                  <div className='receipt__options__imgReport'/>  
              </div>
          </div>
      </div>
      <div className='receipt__report__names'>
          <div style={{display: props.display ? 'none' : 'block'}} >
              <p>Nova Nota</p>
          </div>
          <div style={{display: props.display ? 'none' : 'block'}}>
              <p className='receipt__report__name--text'>Novo relatório</p>
          </div>
      </div>
    </div>
  </div>
)

export default MenuButton