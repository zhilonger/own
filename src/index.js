import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Antd from './Antd/Antd';
import Project from './project1/Project';
import AdminWebLogin from './project3-admin/AdminWeb_login';
import Pro4_home from './project4/Home';
import Login from './后台管理系统/Login';

//redux引入三个中间件，把App包起来
import {Provider} from 'react-redux';
import createStoreFn from './redux购物车/redux/store/myStore';
// var store = new createStoreFn();

ReactDOM.render(
        <App />,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
