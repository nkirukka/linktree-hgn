import React from 'react';
import Button from './Button';
import "./styles/Linktree.css";
import Profile from './Profile';
import profilePic from './imgs/profile-img.jpg';
import openIcon from './imgs/open-icon.png';
import backIcon from './imgs/back-icon.png';
import Socials from './Socials';

const Section = (props) => {
    return (
        <section className='Linktree'>
            <div className='Toggle'>
                <a href='#open'><img src={ openIcon} alt='open' id='Open'/></a>
                <a href='#back'><img src={ backIcon} alt='back' id='Back' /></a>
            </div>
            <Profile src={profilePic} />

            <div className='Btn-wrapper'>
                <Button
                    href="https://twitter.com/nkirukka"
                    id="twitter"
                    title="Twitter Link"
                />
                <Button
                    href="https://training.zuri.team/"
                    id="btn__zuri"
                    title="Zuri Training"
                />
                <Button
                    href="https://books.zuri.team/"
                    id="books"
                    title='Zuri Books'
                    sub="Find design and coding books here"
                />
                <Button
                    href="https://books.zuri.team/python-for-beginners?ref_id=nkirukka,"
                    id="book__python"
                    title="Python Books"
                    sub="Feature Python for Beginners and get royalties of any sale"
                />
                <Button
                    href="https://background.zuri.team/"
                    id="pitch"
                    title="Check for Coders"
                    sub="Hire credible talent by running a background check"
                /> 
                <Button
                    href="https://books.zuri.team/design-rules"
                    id="book__design"
                    title="Design Books"
                    sub="Get free design books"
                />
            </div>

            <Socials />
        </section>
    );
};

export default Section;