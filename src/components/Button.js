import React from 'react';
import "../components/styles/Button.css";

const Button = (props) => {
  return (
      <>
          <a className='Btn' id={props.id} href={props.href}>{ props.children}</a>
      </>
  )
}

export default Button;