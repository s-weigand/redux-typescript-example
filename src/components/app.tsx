import * as React from 'react';
import NavBar from './navBar';
const App = (props: any) => (
  <div className='appComp' >
    <NavBar />
    <div>
      <h1>This is our app component</h1>
      {props.children}
    </div>
  </div>
)

export default App;