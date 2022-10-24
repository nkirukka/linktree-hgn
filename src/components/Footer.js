import React from 'react';
import zuri from './imgs/zuri.png';
import i4g from './imgs/I4G.png';

const Footer = () => {
  return (
      <footer>
          <img src={zuri} alt='zuri internship logo' /> 
          <p>HNG Internship 9 Frontend Task</p>
          <img src={ i4g} alt='ingressive for good' />
    </footer>
  )
}

export default Footer;