import React from 'react';

//引入redux的三个文件
import * as Action from './redux/action/index';
import {connect} from 'react-redux';    //给当前组件注入两个方法
import {bindActionCreators} from 'redux';
import store from './redux/store/myStore';

export default class ShopCar extends React.Component{
    constructor(){
        super();
        this.state = {
            shopCarArr:[]
        }
    }

    componentDidMount() {
        this.setState({
        })
    }

    render() {
        return(
            <div>
                <h1>ShopCar</h1>
                <ul>
                    {
                        this.state.shopCarArr.map((item,index)=>{
                            return(
                                <li>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}