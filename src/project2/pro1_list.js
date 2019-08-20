import React from 'react';
import Axios from 'axios';

export default class Pro1_list extends React.Component{
    constructor(){
        super();
        this.state = {
            stateIndex:0,
            bSys:false,
            bgColor:'deepskyblue'
        }
    }

    fnColor(index,e){
        console.log(index,e.target);
        this.setState({
            stateIndex:index
        })
    }

    fnAddCar(obj){
        var newObj = {};
        newObj.id = obj.sku_info[this.state.stateIndex].sku_id;
        newObj.img = obj.sku_info[this.state.stateIndex].ali_image;
        newObj.name = obj.name;
        newObj.color = obj.sku_info[this.state.stateIndex].spec_json.show_name;
        newObj.price = obj.price;
        newObj.num = 0;
        // console.log(newObj);

        this.props.send(newObj);
    }

    render() {
        return(
            <div>
                <div style={{border:'1px solid blue',textAlign:'center',width:'500px'}}>
                    <img src={this.props.cont.sku_info[this.state.stateIndex].ali_image} width={100}/>
                    <p>{this.props.cont.name}</p>
                    <p>{this.props.cont.name_title}</p>
                    <p>
                        {
                            this.props.cont.sku_info.map((item,index)=>{
                                return(
                                    <button key={index} onClick={(e)=>{this.fnColor(index,e)}}
                                            style={{background:index==this.state.stateIndex?'deepskyblue':'none',border:'1px solid #aaa'}}>
                                        {item.spec_json.show_name}
                                    </button>
                                )
                            })
                        }
                    </p>
                    <p>￥ {this.props.cont.price}</p>
                    <button onClick={()=>{this.fnAddCar(this.props.cont)}}>加入购物车</button>
                </div>
            </div>
        )
    }
}