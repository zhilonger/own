import React from 'react';
import Axios from 'axios';
import './Pro.css';
import Product from "./Product";

export default class Rro extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[],
            list2:[],
            bSys:false
        }
    }

    componentDidMount() {
        Axios.get('https://www.easy-mock.com/mock/5c9374ecb8b6271a46e8fae6/goods-list/goods-list').then((res)=>{
            // console.log(res.data);
            if(res.data.length > 0){
                this.setState({
                    list:res.data
                })
            }
            // console.log(this.state.list)
        });

        var BuyCar = localStorage.getItem('BuyCar');
        if(BuyCar){
            BuyCar = JSON.parse(BuyCar);
            this.setState({
                list2:BuyCar
            })
        }

    }
    addCar(newObj){
        var bool = false;

        for(var i=0;i<this.state.list2.length;i++){
            if(this.state.list2[i].id == newObj.id && this.state.list2[i].color == newObj.color){
                bool = true;
                this.state.list2[i].num += 1;
                this.setState({
                    list2:this.state.list2
                });
            }
        }
        if(bool == false){
            this.state.list2.push(newObj);
        }

        this.setState({
            bSys:true,
            list2:this.state.list2
        });
        // console.log(this.state.list2);

        setTimeout(()=>{
            this.setState({
                bSys:false
            })
        },1500);

        localStorage.setItem('BuyCar',JSON.stringify(this.state.list2));
        // localStorage.setItem('shopCar',JSON.stringify(this.state.list2));

    }

    fnOver(){
        this.setState({
            bSys:true,
        });
    }
    fnLeave(){
        this.setState({
            bSys:false,
        });
    }
    render() {
        return (
            <div className='box_Pro'>
                <header>
                    <div className='head'>
                        <div className='buyCar' onMouseOver={()=>{this.fnOver()}}>
                            <span>购物车</span>
                            <div>{this.state.list2.length}</div>
                        </div>
                        <div className='buyCarHover' onMouseLeave={()=>{this.fnLeave()}}
                             style={{display:this.state.bSys==true?'block':'none'}}>
                                {
                                    this.state.list2.map((item,index)=>{
                                        return(
                                            <div className='by_box' key={index}>
                                                <img src={item.src} alt=""/>
                                                <ul>
                                                    <li>{item.name}</li>
                                                    <li>颜色：{item.color}</li>
                                                    <li>单价：{item.price}</li>
                                                    <li>数量：{item.num}</li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </header>
                <ul className="nav" >
                    <li className='active'>综合排序</li>
                    <li>销量排序</li>
                    <li>价格低到高</li>
                    <li>价格高到低</li>
                </ul>
                <div className="cont">
                    {
                        this.state.list.map((item,index)=>{
                            return <Product key={index} cont={item} send={(newObj)=>{this.addCar(newObj)}}></Product>
                        })
                    }
                </div>
            </div>
        );
    }
}