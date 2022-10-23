import React from 'react';

const Button = (props) => {
  return (
      <>
          <a href={props.href}>{ props.children}</a>
      </>
  )
}

export default Button;