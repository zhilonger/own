import React from 'react';
import './add.css';

import { BrowserRouter,HashRouter, Route, Link,Switch } from 'react-router-dom';
import {fetchSimpleList} from "./api/produt";

export default class home_cont extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidMount() {
        fetchSimpleList().then((res)=>{
            console.log(res.data);
        })
    }

    render() {
        return(
                <div className='commodity_add'>
                    <div className="add_head">
                        1
                    </div>
                    <div className="add_list">
                        2
                    </div>
                </div>
        )
    }
}
