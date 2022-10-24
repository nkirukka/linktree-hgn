import React from 'react';
import Button from './Button';
import "./styles/Linktree.css";
import Profile from './Profile';
import profilePic from './imgs/profile__img.png';
import openIcon from './imgs/open-icon.png';
import backIcon from './imgs/back-icon.png';
import Socials from './Socials';
import Footer from './Footer';

const Section = (props) => {
    return (
        <section className='Linktree'>
            <div className='Toggle'>
                <img src={ openIcon} alt='open' id='Open'/>
                <img src={ backIcon} alt='back' id='Back' />
            </div>
            <Profile src={profilePic} />

            <div className='Btn-wrapper'>
                <Button href="https://training.zuri.team/" id="btn__zuri">Zuri Team</Button>
                <Button href="https://books.zuri.team/" id="books">Zuri Books</Button>
                <Button href="https://books.zuri.team/python-for-beginners?ref_id=nkirukka," id="book__python">Python Books</Button>
                <Button href="https://background.zuri.team/" id="pitch">Background Check for Coders</Button>
                <Button href="https://books.zuri.team/design-rules" id="book__design">Design Books</Button>
            </div>

            <Socials />
            <Footer/>
        </section>
    );
};

export default Section;