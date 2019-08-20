import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdminWeb from './project3-admin/AdminWeb';
import AdminWeb_login from './project3-admin/AdminWeb_login';
import AdminWeb_home from './project3-admin/AdminWeb_home';
import Login from './后台管理系统/Login2';

import Home from './redux购物车/Home';
import Pro from './project2/Pro';
import Pro1 from './project2/pro1';


import Admin from './admin/home/admin';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const Admin_login = Form.create({ name: 'normal_login' })(AdminWeb);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Admin></Admin>*/}
        {/*<Home></Home>*/}
        {/*<Pro></Pro>*/}
        <Pro1></Pro1>

        {/*<AdminWeb_home></AdminWeb_home>*/}
        {/*<Admin_login></Admin_login>*/}
        {/*<AdminWeb_login></AdminWeb_login>*/}
        {/*<AdminWeb></AdminWeb>*/}

        {/*<Login></Login>*/}
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
      </div>
    );
  }
}

export default App;
