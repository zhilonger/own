import React from 'react';
import './AdminWeb_login.css';
import './AdminWeb_home.css';
import AdminWeb_login from './AdminWeb_login';
import AdminWeb_home from './AdminWeb_home';

import { BrowserRouter ,HashRouter,Redirect, Route, Link,Switch } from 'react-router-dom';

export default class AdminWebLogin extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route path='/login' component={AdminWeb_login}></Route>
                            <Route path='/home' component={AdminWeb_home}></Route>
                            {/*<Redirect to='/login'></Redirect>*/}
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}
