import React from 'react';
import Axios from 'axios';
import './pro4_home.css';
import Sizes from './Sizes';
import OrderBy from './OrderBy';
import List from './List';

export default class Pro_home extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[],
            ListCopy:[]
        }
    }

    componentDidMount() {
        Axios.get('./cart.json').then((res)=>{
            // console.log(res.data.products);
            this.setState({
                list:res.data.products,                 //此条数组的数据不发生变化
                ListCopy:res.data.products.slice(0)     //所有的渲染和数据变化都用此条Copy数组
            })
            // console.log(this.state.list);
            // console.log(this.state.ListCopy);
        })
    }

    //接收Sizes子组件传递过来的数据     选中某条size的元素
    chooseSize(sizeData){
        // console.log(sizeData.check);
        //如果这条数据check属性为true，即选中状态
            //让Copy数组把包含指定尺码属性的数据显示并return
        //如果变为false，即不选中，则渲染原数组
        if(sizeData.check){
            var arr = this.state.list.filter((item)=>{
                return item.availableSizes.indexOf(sizeData.size) != -1
            });
            this.setState({
                ListCopy:arr
            })
        }else{
            this.setState({
                ListCopy:this.state.list
            })
        }

    }
    fnOrder(item){
        console.log(item);
        if(item == 'Lowest to highest'){
            this.state.ListCopy.sort((a,b)=>{
                return a.price - b.price;
            });
            this.setState({
                ListCopy:this.state.ListCopy
            })
        }else if(item == 'Highest to lowest'){
            this.state.ListCopy.sort((a,b)=>{
                return b.price - a.price;
            });
            this.setState({
                ListCopy:this.state.ListCopy
            })
        }else{
            this.setState({
                ListCopy:this.state.list
            })
        }
    }
    render() {
        return(
            <div className='pro_home'>
                <Sizes chooseSize={(sizeData)=>{this.chooseSize(sizeData)}}></Sizes>
                <p>
                    <span>{this.state.ListCopy.length} </span>
                    <span> Product(s) found</span>
                </p>
                <OrderBy order={(item)=>{this.fnOrder(item)}}></OrderBy>
                <List ListData={this.state.ListCopy}></List>
            </div>
        )
    }
}
