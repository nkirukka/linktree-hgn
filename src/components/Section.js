import React from 'react';
import Button from './Button';
import "./styles/Section.css";

const Section = (props) => {
    return (
        <div className='Wrapper'>
            <Button href="https://training.zuri.team/" id="btn__zuri">Zuri Team</Button>
            <Button href="https://books.zuri.team/" id="books">Zuri Books</Button>
            <Button href="https://books.zuri.team/python-for-beginners?ref_id=nkirukka," id="book__python">Python Books</Button>
            <Button href="https://background.zuri.team/" id="pitch">Background Check for Coders</Button>
            <Button href="https://books.zuri.team/design-rules" id="book__design">Design Books</Button>
        </div>
    );
}

export default Section;