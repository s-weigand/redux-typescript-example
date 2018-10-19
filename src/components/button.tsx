import * as React from 'react'
import { ReactDefaultProps } from '../types'

const Button = (props: ReactDefaultProps) => (
  <button
    onClick={props.onClick}
    className={props.className}
  >
    {props.text}
  </button>
);

export default Button;