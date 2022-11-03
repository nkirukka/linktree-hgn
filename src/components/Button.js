import React from 'react';
import "../components/styles/Button.css";

const Button = (props) => {
    return (
        <>
            <a className='Btn'
                id={props.id}
                href={props.href}>
                <div className='Title'>
                    <h2>{ props.title}</h2>
                    <sub>{ props.sub}</sub>
                </div>
            </a>
        </>
    );
}

export default Button;