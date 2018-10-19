import * as React from 'react';
import NavBar from './navBar';
import { ReactDefaultProps } from '../types'

const App = (props: ReactDefaultProps) => (
  <div className='appComp' >
    <NavBar />
    <div>
      <h1>This is our app component</h1>
      {props.children}
    </div>
  </div>
)

export default App;