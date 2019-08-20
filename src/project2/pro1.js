import React from 'react';
import Axios from 'axios';
import Pro1_list from './pro1_list';
import Pro1_car from './pro1_car';


export default class Pro1 extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[],
            list2:[]
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/list.json').then((res)=>{
            console.log(res.data);

            this.setState({
                list:res.data
            })
            console.log(this.state.list2)
        })

        var shopCar = localStorage.shopCar;
        if(shopCar){
            shopCar = JSON.parse(shopCar);
            console.log(shopCar);

            this.setState({
                list2:shopCar
            })
        }
    }

    fnAddCar(newObj){
        // console.log(newObj);
        var bool = false;
        for(var i=0;i<this.state.list2.length;i++){
            if(newObj.id == this.state.list2[i].id && newObj.name == this.state.list2[i].name){
                bool = true;
                this.state.list2[i].num += 1;
                this.setState({
                    list2:this.state.list2
                })

            }
        }
        if(bool == false){
            newObj.num = 1;
            this.state.list2.push(newObj);
        }
        console.log(this.state.list2);

        this.setState({
            list2:this.state.list2
        })

        localStorage.setItem('shopCar',JSON.stringify(this.state.list2))
    }

    render() {
        return(
            <div>
                <div>
                    <span>排序</span>
                </div>
                <div>
                    {
                        this.state.list.map((item,index)=>{
                            return <Pro1_list send={(newObj)=>{this.fnAddCar(newObj)}} key={index} cont={item}></Pro1_list>
                        })
                    }
                </div>
                <div>
                    <span>购物车：{this.state.list2.length}</span>
                    <div>
                        {
                            this.state.list2.map((item,index)=>{
                                return(
                                    <ul key={index} style={{width:'400px',border:'1px solid pink'}}>
                                        <img src={item.img} width='50' alt=""/>
                                        <li>{item.name}</li>
                                        <li>{item.num}</li>
                                        <li>{item.price}</li>
                                    </ul>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}