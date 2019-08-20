import React from 'react';
import Axios from 'axios';
import './Pro.css';
import Product from './Product2';

export default class Pro2 extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[],
            bSys:false,
            list2:[]
        }
    }

    componentDidMount() {
        //获取接口数据
        Axios.get('https://www.easy-mock.com/mock/5c9374ecb8b6271a46e8fae6/goods-list/goods-list').then((res)=>{
            console.log(res.data);
            if(res.data.length>0){
                this.setState({
                    list:res.data
                })
            }
        });
        //组价挂载完成后，获取本地存储数据，渲染到购物车里
        var shopCar = localStorage.shopCar;
        if(shopCar){
            shopCar = JSON.parse(shopCar);
            this.setState({
                list2:shopCar
            })
        }
    }

    //购物车移入显示
    buyCarOver(){
        this.setState({
            bSys:true
        })
    }
    //购物车移出隐藏
    buyCarLeave(){
        setTimeout(()=>{
            this.setState({
                bSys:false,
            })
        },1000)
    }

    //父组件接收子组件传递过来的方法，把这组数据加入到购物车，并存储到本地
    addCar(newObj){

        var bool = false;   //自定义一个bool值
        for(var i=0;i<this.state.list2.length;i++){
            //如果id和颜色重复，改变bool值，不重复添加进去，只让数量+1
            if(this.state.list2[i].id == newObj.id && this.state.list2[i].color == newObj.color){
                bool = true;
                this.state.list2[i].num+=1;
                this.setState({
                    list2:this.state.list2
                })
            }
        }
        //如果bool值不变，说明数据没有重复，可以添加到购物车
        if(bool == false){
            newObj.num = 1;
            this.state.list2.push(newObj);
        }
        this.setState({
            list2:this.state.list2,
            bSys:true       //添加到购物车时，显示
        });

        // 1000ms后隐藏
        setTimeout(()=>{
            this.setState({
                bSys:false,
            })
        },1000)

        //把此条数据添加到本地存储
        localStorage.setItem('shopCar',JSON.stringify(this.state.list2));
    }

    //价格排序，低==》高
    fnSortA(){
        this.state.list.sort((a,b)=>{
            // console.log(b.price)
            return a.price - b.price
        })
        this.setState({
            list:this.state.list
        })
    }
    //价格排序，高==》低
    fnSortB(){
        this.state.list.sort((a,b)=>{
            // console.log(b.price)
            return b.price - a.price
        })
        this.setState({
            list:this.state.list
        })
    }
    //选项卡点击变色
    fnColor(e){
        for(var i=0;i<e.target.parentNode.childNodes.length;i++){
            e.target.parentNode.childNodes[i].className = '';
        }
        e.target.className = 'active';
        // console.log(e.target.parentNode.childNodes)
    }

    render() {
        return (
            <div className='box_Pro'>
                <header>
                    <div className='head' onMouseLeave={()=>{this.buyCarLeave()}}>
                        <div className='buyCar' onMouseOver={()=>{this.buyCarOver()}}>
                            <span>购物车</span>
                            <div>{this.state.list2.length}</div>
                        </div>
                        <div className='buyCarHover' style={{display:this.state.bSys?'block':'none'}}>
                            {
                                this.state.list2.map((item,index)=>{
                                    return(
                                        <div key={index} className='by_box'>
                                            <img src={item.img} alt=""/>
                                            <ul>
                                                <li>
                                                </li>
                                                <li>商品：{item.name}</li>
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
                <ul className="nav" onClick={(e)=>{this.fnColor(e)}}>
                    <li className='active'>综合排序</li>
                    <li>销量排序</li>
                    <li onClick={()=>{this.fnSortA()}}>价格低到高</li>
                    <li onClick={()=>{this.fnSortB()}}>价格高到低</li>
                </ul>
                <div className="cont">
                    {
                        this.state.list.map((item,index)=>{
                            // send接收子组件传递过来的数据，
                            // product把数据传递给子组件
                            return <Product send={(newObj)=>{this.addCar(newObj)}} product={item} key={index}></Product>
                        })
                    }
                </div>
            </div>
        );
    }
}