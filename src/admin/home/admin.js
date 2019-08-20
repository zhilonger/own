import React from 'react';
import Login from './login';
import Home from './home';
import {BrowserRouter,HashRouter,Route,Switch,Redirect} from '_react-router-dom@4.3.1@react-router-dom'

export default class Admin extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/home' component={Home} />
                        <Redirect to='/login'></Redirect>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}