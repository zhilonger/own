import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './home/Login'
import Home from './home/Home'
import {BrowserRouter,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
         <div>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/home' component={Home}></Route>
        </div>
      </BrowserRouter>
      </div>
    );
  }
  blur(){
    
  }
}

export default App;
