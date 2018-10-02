"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var React = require("react");
var users_1 = require("./containers/users");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var app_1 = require("./components/app");
var home_1 = require("./components/home");
var userProfile_1 = require("./containers/userProfile");
var react_router_1 = require("react-router");
react_dom_1.render(<react_redux_1.Provider store={store_1["default"]}>
    <react_router_1.Router history={react_router_1.hashHistory}>
      <react_router_1.Route path='/' component={app_1["default"]}>
        <react_router_1.IndexRoute component={home_1["default"]}/>
        <react_router_1.Route path='users' component={users_1["default"]}/>
        <react_router_1.Route path='user(:userName)' component={userProfile_1["default"]}/>
      </react_router_1.Route>
    </react_router_1.Router>
  </react_redux_1.Provider>, document.getElementById('app'));
