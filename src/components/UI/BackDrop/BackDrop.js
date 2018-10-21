import React from 'react';
import './BackDrop.scss'

const Backdrop = (props) => (
  props.show ? <div className = "Backdrop" onClick={props.click}></div> : null 
);

export default Backdrop;
