import React from 'react';
import './styles/Socials.css';
import slack from './imgs/slack.avif';
import github from './imgs/github.png';
import twitter from './imgs/twitter.png';

const Socials = () => {
  return (
      <div className='Socials'>
          <a href='https://slack.com/nkirukka' id='slack'> <img className='Icons' src={slack} /> </a>
          <a href='https://github.com/nkirukka'> <img className='Icons' src={github} /> </a>
          <a href='https://twitter.com/nkirukka' id='twitter'> <img className='Icons' src={twitter} /> </a>
    </div>
  )
}

export default Socials;