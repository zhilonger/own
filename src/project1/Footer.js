import React, { Component } from 'react';
import './Footer.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

const demoImgArr2 = ["foot1","foot2","foot3","foot4"];
const tick2 = demoImgArr2.map(item => require("./img/img-Home/" + item + ".png"));

export default class Footer extends Component {
    constructor(){
        super();
        this.state = {
            list:[
                {img:tick2[0],tit:'外卖',to:'/home'},
                {img:tick2[1],tit:'发现',to:'/find'},
                {img:tick2[2],tit:'订单',to:'/order'},
                {img:tick2[3],tit:'我的',to:'/user'},
            ]
        }
    }
    fnClick(index) {
        // console.log(index)
        //     window.location.href=this.state.list[index].to
    }

    render() {
        return (
            <div className="Footer">
                {
                    this.state.list.map((item,index)=>{
                        return(
                                        <div key={index} onClick={()=>{this.fnClick(index)}}>
                                            <Link to={item.to}>

                                            <img src={item.img} alt=""/>
                                            <p>{item.tit}</p>
                                            </Link>
                                        </div>
                        )
                    })
                }
            </div>
        );
    }
}

