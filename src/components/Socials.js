import React from 'react';
import './styles/Socials.css';
import slack from './imgs/slack.png';
import github from './imgs/Icongithub.png';

const Socials = () => {
  return (
      <div className='Socials'>
          <img src={slack} />
          <img src={github} />
    </div>
  )
}

export default Socials;