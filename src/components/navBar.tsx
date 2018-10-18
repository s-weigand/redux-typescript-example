import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props: any) => (
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