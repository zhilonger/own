import React, { Component } from 'react';
import Header from './Header';
import Cont from './Cont';
import List from './List';
import Axios from 'axios';

import Footer from './Footer';
import { BrowserRouter, Route, Link } from '_react-router-dom@4.3.1@react-router-dom';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }



    render() {
        return (
            <div className="Home">
                {/*<h2>外卖页面</h2>*/}
                <Header></Header>
                <Cont></Cont>
                {/*<Footer></Footer>*/}
            </div>
        );
    }
}

