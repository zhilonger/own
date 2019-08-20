import React, { Component } from 'react';
import '../flexible';

import Home from "./Home";
import Find from "./Find";
import Order from "./Order";
import User from "./User";
import Search from './Search';
import Footer from './Footer';
// import Antd from './Antd';
// import 'antd/dist/antd.css';

import './Project.css';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';

export default class Project extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="Project">
                <BrowserRouter>
                    <div className='box'>
                        {/*<Link to='/antd'>to Antd</Link>*/}
                        <Route path='/home' component={Home}/>
                        <Route path='/find' component={Find}/>
                        <Route path='/order' component={Order}/>
                        <Route path='/user' component={User}/>
                        {/*<Route path='/antd' component={Antd}/>*/}
                        <Switch>
                            <Route path='/search' component={Search}/>
                            <Footer></Footer>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

