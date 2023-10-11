import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className={`button ${!props.isValid?'invalid':''}`} onClick={props.onClick}>
      {console.log("hello",props.isValid)}
      {props.children}
    </button>
  );
};

export default Button;
