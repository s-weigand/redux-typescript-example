import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactDefaultProps } from '../types'

const NavBar = (props: ReactDefaultProps) => (
  <nav>
    <Link to='/'>
      Home
    </Link>
    <Link to='users'>
     Users
    </Link>
  </nav>
)

export default NavBar;