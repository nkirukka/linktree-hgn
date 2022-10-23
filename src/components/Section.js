import React from 'react';
import Button from './Button';


const Section = (props) => {
    return (
        <div>
            <h1>Link Tree</h1>
            <Button href="https://training.zuri.team/" id="btn__zuri">Zuri Training</Button>
            <Button href={props.href}>{ props.title}</Button>
            <Button>{ props.title}</Button>
            <Button>{ props.title}</Button>
            <Button>{ props.title}</Button>
        </div>
    );
}

Section.defaultProps = {
    href: "https://zuri.team.com",
    title: "Zuri x HGN"
}
export default Section;