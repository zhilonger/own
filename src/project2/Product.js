import React from 'react';
// import './Pro.css';

export default class Rroduct extends React.Component{
    constructor(){
        super();
        this.state = {
            stateIndex:0,
            bSys:false
        }
    }

    fnOver(){
        this.setState({
            bSys:true
        })
    }
    fnLeave(){
        this.setState({
            bSys:false
        })
    }
    fnCheck(index){
        this.setState({
            stateIndex:index
        })
    }
    addCar(obj){
        var newObj = {};
        newObj.id = obj.sku_info[this.state.stateIndex].sku_id;
        newObj.src = obj.sku_info[this.state.stateIndex].ali_image;
        newObj.name = obj.name;
        newObj.price = obj.price;
        newObj.color = obj.sku_info[this.state.stateIndex].spec_json.show_name;
        newObj.num = 1;
        // console.log(newObj);

        this.props.send(newObj);
    }
    render() {
        return (
            <div className='box_Product' onMouseOver={()=>{this.fnOver()}} onMouseLeave={()=>{this.fnLeave()}}>
                <img width='100px' src={this.props.cont.sku_info[this.state.stateIndex].ali_image} />
                <p className='p1'>{this.props.cont.name}</p>
                <p className='p2'>{this.props.cont.name_title}</p>
                <p className='p5'>
                    {
                        this.props.cont.sku_info.map((item,index)=>{
                            return(
                                <button key={index} onClick={()=>{this.fnCheck(index)}}
                                        className={index==this.state.stateIndex?'ac':''}>
                                    {item.spec_json.show_name}
                                </button>
                                )
                        })
                    }
                </p>
                {
                    this.state.bSys == false?(
                        <p className='p3' >
                            <span>￥</span>
                            {this.props.cont.price}
                        </p>
                    ):(
                        <p className='p4' >
                            <button className='check'>查看详情</button>
                            {/*点击加入购物车按钮，把当前这组数据传递给父组件*/}
                            <button className='join' onClick={()=>{this.addCar(this.props.cont)}}>加入购物车</button>
                        </p>
                    )
                }
            </div>
        )
    }
}