import React from 'react';
import { BrowserRouter, Route, Link,Redirect } from 'react-router-dom';
import A from './A';
import B from './B';
export default class Index extends React.Component{
    constructor(){
        super()
    }
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Link to='/index/a'>去A</Link>
                        <Link to='/index/b'>去B</Link>

                        <Redirect path='/index' to='/index/a'></Redirect>
                        <Route path='/index/a' component={A}></Route>
                        <Route path='/index/b' component={B}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}