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
                <a href='#'><img src={ openIcon} alt='open' id='Open'/></a>
                <a href='#'><img src={ backIcon} alt='back' id='Back' /></a>
            </div>
            <Profile src={profilePic} />

            <div className='Btn-wrapper'>
                <Button
                    href="https://twitter.com/nkirukka"
                    id="twitter" > Twitter Link
                </Button>
                <Button
                    href="https://training.zuri.team/"
                    id="btn__zuri">Zuri Training
                </Button>
                <Button
                    href="https://books.zuri.team/"
                    id="books">Zuri Books: Find design and coding books here
                   
                </Button>
                <Button
                    href="https://books.zuri.team/python-for-beginners?ref_id=nkirukka,"
                    id="book__python">Python Books: Feature Python for Beginners and get royalties of any sale
                </Button>
                <Button
                    href="https://background.zuri.team/"
                    id="pitch">Check for Coders: Hire credible talent by running a background check
                </Button>
                <Button
                    href="https://books.zuri.team/design-rules"
                    id="book__design">Design Books: Get free design books
                </Button>
            </div>

            <Socials />
            <Footer/>
        </section>
    );
};

export default Section;