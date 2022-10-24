import React from 'react';
import zuri from './imgs/zuri.png';
import i4g from './imgs/I4G.png';
import './styles/Footer.css';

const Footer = () => {
  return (
      <footer className='Footer'>
          <img src={zuri} alt='zuri internship logo' /> 
          <p>HNG Internship 9 Frontend Task</p>
          <img src={ i4g} alt='ingressive for good' id='i4g' />
    </footer>
  )
}

export default Footer;