import React, { Component } from 'react';
import { Button,Carousel  } from 'antd';
import './antd.css';
export default class Antd extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Antd</h2>
                <Carousel effect="fade">
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}

