import React, { Component } from 'react';
import Index from './08.01-嵌套路由/Index';

export default class User extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="User">
                <h2>我的页面</h2>
                <Index></Index>
            </div>
        );
    }
}

