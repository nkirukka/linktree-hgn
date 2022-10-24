import React from 'react';
import './styles/Socials.css';
import slack from './imgs/slack.avif';
import github from './imgs/github.png';
import twitter from './imgs/twitter.png';

const Socials = () => {
  return (
    <div className='Socials'>
      <a href='https://slack.com/nkirukka' id='slack'>
        <img className='Icons'
          src={slack}
          alt='slack icon'
        /> </a>
      <a href='https://github.com/nkirukka'>
        <img className='Icons'
          src={github}
          alt='github icon'
        /> </a>
      <a href='https://twitter.com/nkirukka' id='twitter'>
        <img className='Icons'
          src={twitter}
          alt='twitter icon'
        /> </a>
      
    </div>
  );
}

export default Socials;