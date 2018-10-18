import * as React from 'react'

const Button = (props: any) => (
  <button
    onClick={props.onClick}
    className={props.className}
  >
    {props.text}
  </button>
);

export default Button;