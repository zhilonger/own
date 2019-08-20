import React from 'react';
import Axios from 'axios';

export default class Product2 extends React.Component{
    constructor(){
        super();
        this.state = {
            stateIndex:0,
            bSys:false
        }
    }

    // 点击颜色按钮
    fnCheck(index){
        this.setState({
            stateIndex:index
        })
    }
    //添加到购物车
    addCar(obj){
        //定义一个新对象，存放一些必要数据，用来做购物车数据
        const newObj = {};
        newObj.id = obj.sku_info[this.state.stateIndex].sku_id;
        newObj.name = obj.name;
        newObj.price = obj.price;
        newObj.color = obj.sku_info[this.state.stateIndex].spec_json.show_name;
        newObj.img = obj.sku_info[this.state.stateIndex].ali_image;
        newObj.num = 0;
        console.log(newObj);

        //子传父，把新对象传递到父组件
        this.props.send(newObj);
    }

    //移入显示
    fnOver(){
        this.setState({
            bSys:true
        })
    }
    //移出隐藏
    fnLeave(){
        this.setState({
            bSys:false
        })
    }

    render() {
        return (
            <div className='box_Product' onMouseOver={()=>this.fnOver()} onMouseLeave={()=>{this.fnLeave()}}>
                <img width='100px' src={this.props.product.sku_info[this.state.stateIndex].ali_image} alt=""/>
                <p className='p1'>{this.props.product.name}</p>
                <p className='p2'>{this.props.product.name_title}</p>
                <p className='p5'>
                    {
                        // 接收父组件通过product属性传递过来的数据，渲染到页面
                        this.props.product.sku_info.map((item,index)=>{
                            return(
                                // 点击按钮，根据下标获得对应sku_info数组中的对应颜色图片对象
                                <button key={index} onClick={()=>{this.fnCheck(index)}}
                                        className={index==this.state.stateIndex?'ac':''}>
                                    {item.spec_json.show_name}
                                </button>
                            )
                        })
                    }
                </p>
                <p className='p3' style={{display:this.state.bSys==false?'block':'none'}}>
                    <span>￥</span>
                    {this.props.product.price}
                </p>
                <p className='p4' style={{display:this.state.bSys==true?'block':'none'}}>
                    <button className='check'>查看详情</button>
                    {/*点击加入购物车按钮，把当前这组数据传递给父组件*/}
                    <button className='join' onClick={()=>{this.addCar(this.props.product)}}>加入购物车</button>
                </p>
            </div>
        );
    }
}