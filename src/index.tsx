import { render } from 'react-dom';
import * as React from 'react';
import Users from './containers/users';
import { Provider } from 'react-redux';
import configureStore  from './store';
import App from './components/app';
import Home from './components/home';
import UserProfileContainer from './containers/userProfile';
import { Router, Route, BrowserRouter, Switch} from 'react-router-dom';

const UsersStore = configureStore();

render(
  <Provider store={UsersStore}>
    <BrowserRouter >
      <App >
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/user-:userName' component={UserProfileContainer} />
      </ App>
    </ BrowserRouter>
  </Provider>,
  document.getElementById('app') as Element
);
